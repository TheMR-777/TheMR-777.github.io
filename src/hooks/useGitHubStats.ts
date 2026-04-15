import { useState, useEffect } from "react";

// GitHub's official language colors (curated subset)
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  "C++": "#F34B7D",
  "C#": "#178600",
  Dart: "#00B4AB",
  Python: "#3572A5",
  CSS: "#563D7C",
  HTML: "#E34C26",
  Java: "#B07219",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Shell: "#89E051",
};

export interface LanguageStat {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

export interface GitHubStats {
  publicRepos: number;
  originalRepos: number;
  publicGists: number;
  accountYears: number;
  languages: LanguageStat[];
  contributionSvg: string | null;
  isLoading: boolean;
  error: boolean;
}

interface GitHubUserResponse {
  public_repos: number;
  public_gists: number;
  created_at: string;
}

interface GitHubRepoResponse {
  language: string | null;
  fork: boolean;
}

const CACHE_KEY = "github-stats-cache-v5";
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes
const GITHUB_USERNAME = "TheMR-777";

const FALLBACK: Omit<GitHubStats, "isLoading" | "error"> = {
  publicRepos: 23,
  originalRepos: 19,
  publicGists: 7,
  accountYears: 4,
  contributionSvg: null,
  languages: [
    { name: "TypeScript", count: 7, percentage: 39, color: LANGUAGE_COLORS.TypeScript },
    { name: "Dart", count: 4, percentage: 22, color: LANGUAGE_COLORS.Dart },
    { name: "C#", count: 2, percentage: 11, color: LANGUAGE_COLORS["C#"] },
    { name: "C++", count: 2, percentage: 11, color: LANGUAGE_COLORS["C++"] },
    { name: "CSS", count: 1, percentage: 6, color: LANGUAGE_COLORS.CSS },
    { name: "HTML", count: 1, percentage: 6, color: LANGUAGE_COLORS.HTML },
    { name: "Python", count: 1, percentage: 6, color: LANGUAGE_COLORS.Python },
  ],
};

interface CachedData {
  data: Omit<GitHubStats, "isLoading" | "error">;
  timestamp: number;
}

function getCached(): CachedData | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached: CachedData = JSON.parse(raw);
    if (Date.now() - cached.timestamp > CACHE_TTL) return null;
    return cached;
  } catch {
    return null;
  }
}

function setCache(data: Omit<GitHubStats, "isLoading" | "error">) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch { /* quota exceeded — silently ignore */ }
}

export function useGitHubStats(): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>(() => {
    const cached = getCached();
    return cached
      ? { ...cached.data, isLoading: false, error: false }
      : { ...FALLBACK, isLoading: true, error: false };
  });

  useEffect(() => {
    // Skip fetch if we already have cached data
    if (!stats.isLoading) return;

    const controller = new AbortController();

    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, { signal: controller.signal }),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("API response not OK");

        const user: GitHubUserResponse = await userRes.json();
        const repos: GitHubRepoResponse[] = await reposRes.json();

        // Compute language distribution (original repos only)
        const originalRepos = repos.filter(r => !r.fork);
        const langCounts = new Map<string, number>();

        for (const repo of originalRepos) {
          if (repo.language) {
            langCounts.set(repo.language, (langCounts.get(repo.language) || 0) + 1);
          }
        }

        const totalWithLang = Array.from(langCounts.values()).reduce((a, b) => a + b, 0);
        const languages: LanguageStat[] = Array.from(langCounts.entries())
          .sort((a, b) => b[1] - a[1])
          .map(([name, count]) => ({
            name,
            count,
            percentage: Math.round((count / totalWithLang) * 100),
            color: LANGUAGE_COLORS[name] || "var(--accent-default)",
          }));

        const accountYears = Math.floor(
          (Date.now() - new Date(user.created_at).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
        );

        // Fetch and process SVG for rounded corners
        let processedSvg = null;
        try {
          // Use a public CORS proxy so the browser fetch doesn't crash from missing headers.
          // This allows us to parse the SVG text natively and inject rounded corners!
          const proxyUrl = "https://api.codetabs.com/v1/proxy/?quest=";
          const targetUrl = encodeURIComponent(`https://ghchart.rshah.org/8764B8/${GITHUB_USERNAME}`);
          const svgRes = await fetch(`${proxyUrl}${targetUrl}`, { signal: controller.signal });
          if (svgRes.ok) {
            const rawSvg = await svgRes.text();
            // 1. Remove hardcoded fills and shape-rendering
            // 2. Inject rx/ry for rounding
            // 3. Make SVG responsive
            // 4. THE MAGIC: Use data-score to set dynamic opacity with currentColor
            //    This makes it perfectly theme-reactive without filters!
            processedSvg = rawSvg
              .replace(/shape-rendering:crispedges;/g, '')
              .replace(/width="(\d+)" height="(\d+)"/, 'width="100%" height="auto" viewBox="0 0 $1 $2" preserveAspectRatio="xMidYMid meet"')
              .replace(/<rect/g, '<rect rx="2" ry="2" fill="currentColor"')
              // Map data-score to opacities (0: 0.08, 1: 0.25, 2: 0.5, 3: 0.75, 4: 1)
              .replace(/data-score="0"/g, 'data-score="0" opacity="0.08"')
              .replace(/data-score="1"/g, 'data-score="1" opacity="0.25"')
              .replace(/data-score="2"/g, 'data-score="2" opacity="0.5"')
              .replace(/data-score="3"/g, 'data-score="3" opacity="0.75"')
              .replace(/data-score="4"/g, 'data-score="4" opacity="1"')
              // Strip the original fill styles entirely so currentColor wins
              .replace(/style="fill:#[A-Za-z0-9]+;"/g, '')
              // Also handle the text labels (make them follow theme text colors)
              .replace(/style="fill:#767676;/g, 'style="fill:var(--text-tertiary);');
          }
        } catch (e) {
          console.error("Failed to fetch contribution SVG", e);
        }

        const data = {
          publicRepos: user.public_repos,
          originalRepos: originalRepos.length,
          publicGists: user.public_gists,
          accountYears,
          languages,
          contributionSvg: processedSvg,
        };

        setCache(data);
        setStats({ ...data, isLoading: false, error: false });
      } catch (err) {
        if (controller.signal.aborted) return;
        // Graceful fallback — use static data
        setStats({ ...FALLBACK, isLoading: false, error: true });
      }
    }

    fetchStats();
    return () => controller.abort();
  }, [stats.isLoading]);

  return stats;
}

/** GitHub username for external use (contribution chart URLs, etc.) */
export const GITHUB_USERNAME_EXPORT = GITHUB_USERNAME;
