import type { LucideIcon } from "lucide-react";
import type { AccentColor } from "../contexts/ThemeContext";

export type CommandCategory = "navigation" | "theme" | "accent" | "links";

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: LucideIcon;
  category: CommandCategory;
  action: () => void;
  keywords?: string[];
  accent?: AccentColor;
}
