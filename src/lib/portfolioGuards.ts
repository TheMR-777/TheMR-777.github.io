import type { AceProject, Project } from "./portfolioDAL";

interface WithArchitecturalHighlights {
  architecturalHighlights: string[];
}

interface WithArchitecturalPhilosophy {
  architecturalPhilosophy: string;
}

export function hasArchitecturalHighlights(
  item: AceProject,
): item is AceProject & WithArchitecturalHighlights {
  return "architecturalHighlights" in item && Array.isArray(item.architecturalHighlights);
}

export function getArchitecturalHighlights(item: AceProject): string[] {
  if (hasArchitecturalHighlights(item)) {
    return item.architecturalHighlights;
  }
  return [];
}

export function hasArchitecturalPhilosophy(
  item: Project,
): item is Project & WithArchitecturalPhilosophy {
  return "architecturalPhilosophy" in item && typeof item.architecturalPhilosophy === "string";
}
