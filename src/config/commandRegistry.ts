import {
  FileText,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Moon,
  Palette,
  Sun,
} from "lucide-react";
import { accentColors, type AccentColor, type ThemeMode } from "../contexts/ThemeContext";
import { portfolioData } from "../data/portfolio";
import { sidebarNavItems } from "./navigation";
import type { CommandCategory, CommandItem } from "../types/command";
import type { TabId } from "../types/navigation";

type NavMeta = { description: string; keywords: string[] };

const navigationMeta: Record<TabId, NavMeta> = {
  home: { description: "Go to overview", keywords: ["home", "overview", "main", "dashboard"] },
  about: { description: "Personal information", keywords: ["about", "me", "info", "personal", "bio"] },
  philosophy: {
    description: "Engineering mindset & principles",
    keywords: ["philosophy", "mindset", "principles", "values", "driving force"],
  },
  experience: { description: "Work history", keywords: ["experience", "work", "job", "career", "history"] },
  projects: { description: "Portfolio projects", keywords: ["projects", "portfolio", "work", "showcase"] },
  skills: { description: "Technical expertise", keywords: ["skills", "tech", "stack", "expertise", "abilities"] },
};

export const commandCategoryOrder: CommandCategory[] = ["navigation", "theme", "accent", "links"];

export const commandCategoryLabels: Record<CommandCategory, string> = {
  navigation: "Navigation",
  theme: "Appearance",
  accent: "Accent Colors",
  links: "Quick Links",
};

interface BuildCommandsParams {
  mode: ThemeMode;
  accent: AccentColor;
  onNavigate: (tab: TabId) => void;
  onClose: () => void;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: AccentColor) => void;
  openExternal: (url: string) => void;
}

export function buildCommands({
  mode,
  accent,
  onNavigate,
  onClose,
  setMode,
  setAccent,
  openExternal,
}: BuildCommandsParams): CommandItem[] {
  const navCommands: CommandItem[] = sidebarNavItems.map((item) => ({
    id: `nav-${item.id}`,
    label: item.label,
    description: navigationMeta[item.id].description,
    icon: item.icon,
    category: "navigation",
    action: () => {
      onNavigate(item.id);
      onClose();
    },
    keywords: navigationMeta[item.id].keywords,
  }));

  const themeCommands: CommandItem[] = [
    {
      id: "theme-light",
      label: "Light Mode",
      description: mode === "light" ? "Currently active" : "Switch to light theme",
      icon: Sun,
      category: "theme",
      action: () => {
        setMode("light");
        onClose();
      },
      keywords: ["light", "bright", "day", "theme"],
    },
    {
      id: "theme-dark",
      label: "Dark Mode",
      description: mode === "dark" ? "Currently active" : "Switch to dark theme",
      icon: Moon,
      category: "theme",
      action: () => {
        setMode("dark");
        onClose();
      },
      keywords: ["dark", "night", "theme"],
    },
    {
      id: "theme-system",
      label: "System Theme",
      description: mode === "system" ? "Currently active" : "Follow system preference",
      icon: Monitor,
      category: "theme",
      action: () => {
        setMode("system");
        onClose();
      },
      keywords: ["system", "auto", "preference", "theme"],
    },
  ];

  const accentCommands: CommandItem[] = accentColors.map((color) => ({
    id: `accent-${color.name.toLowerCase()}`,
    label: color.name,
    description: accent.name === color.name ? "Currently active" : `Set ${color.name} as accent`,
    icon: Palette,
    category: "accent",
    action: () => {
      setAccent(color);
      onClose();
    },
    keywords: [color.name.toLowerCase(), "color", "accent", "theme"],
    accent: color,
  }));

  const linkCommands: CommandItem[] = [
    {
      id: "link-github",
      label: "GitHub",
      description: "View GitHub profile",
      icon: Github,
      category: "links",
      action: () => {
        openExternal(portfolioData.personal.social.github);
        onClose();
      },
      keywords: ["github", "code", "repository", "source"],
    },
    {
      id: "link-linkedin",
      label: "LinkedIn",
      description: "Connect on LinkedIn",
      icon: Linkedin,
      category: "links",
      action: () => {
        openExternal(portfolioData.personal.social.linkedin);
        onClose();
      },
      keywords: ["linkedin", "professional", "network", "connect"],
    },
    {
      id: "link-email",
      label: "Send Email",
      description: portfolioData.personal.email,
      icon: Mail,
      category: "links",
      action: () => {
        openExternal(`mailto:${portfolioData.personal.email}`);
        onClose();
      },
      keywords: ["email", "mail", "contact", "message"],
    },
    {
      id: "link-cv",
      label: "View CV Dataset",
      description: "Complete professional profile",
      icon: FileText,
      category: "links",
      action: () => {
        openExternal("https://github.com/TheMR-777/TheMR-777/blob/main/cv-dataset.md");
        onClose();
      },
      keywords: ["cv", "resume", "dataset", "profile"],
    },
  ];

  return [...navCommands, ...themeCommands, ...accentCommands, ...linkCommands];
}

export function filterCommandItems(commands: CommandItem[], query: string): CommandItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return commands;
  }

  return commands.filter((command) => {
    const matchLabel = command.label.toLowerCase().includes(normalized);
    const matchDescription = command.description?.toLowerCase().includes(normalized);
    const matchKeywords = command.keywords?.some((keyword) => keyword.includes(normalized));
    return matchLabel || matchDescription || matchKeywords;
  });
}

export function filterCommands(commands: CommandItem[], query: string): CommandItem[] {
  return filterCommandItems(commands, query);
}

export function groupCommandItems(commands: CommandItem[]) {
  return commandCategoryOrder
    .map((category) => {
      const items = commands.filter((command) => command.category === category);
      if (!items.length) {
        return null;
      }
      return {
        category,
        label: commandCategoryLabels[category],
        items,
      };
    })
    .filter((group): group is { category: CommandCategory; label: string; items: CommandItem[] } => Boolean(group));
}

export function groupCommands(commands: CommandItem[]) {
  return groupCommandItems(commands);
}

// Backward-compatible aliases while internals migrate to concise names.
export const buildCommandItems = buildCommands;
