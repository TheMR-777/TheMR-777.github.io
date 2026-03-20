import type { NavigationOptions, TabId } from "../types/navigation";

export interface NavigationState {
  tab: TabId;
  section: string | null;
}

export function resolveNavigationTarget(target: TabId | NavigationOptions): NavigationState {
  if (typeof target === "string") {
    return { tab: target, section: null };
  }

  return {
    tab: target.tab,
    section: target.section ?? null,
  };
}
