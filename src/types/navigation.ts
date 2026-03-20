export type TabId = "home" | "about" | "philosophy" | "experience" | "projects" | "skills";

// Navigation target with optional in-view anchor section.
export interface NavigationOptions {
  tab: TabId;
  section?: string;
}

// Shared navigation callback contract used across views/components.
export type NavigateFn = (target: TabId | NavigationOptions) => void;