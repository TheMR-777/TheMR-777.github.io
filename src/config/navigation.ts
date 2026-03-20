import { Briefcase, FolderKanban, Home, Sparkles, User, Wrench, type LucideIcon } from "lucide-react";
import type { TabId } from "../types/navigation";

export interface NavItem {
  id: TabId;
  label: string;
  icon: LucideIcon;
}

export const sidebarNavItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "philosophy", label: "Philosophy", icon: Sparkles },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Wrench },
];

export const mobilePrimaryNavItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
];

export const mobileExtraNavItems: NavItem[] = [
  { id: "philosophy", label: "Philosophy", icon: Sparkles },
  { id: "skills", label: "Skills & Credentials", icon: Wrench },
];