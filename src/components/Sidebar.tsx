import { motion } from "framer-motion";
import { 
  Home, 
  User, 
  Briefcase, 
  FolderKanban, 
  Wrench,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Command,
  Sun,
  Moon,
} from "lucide-react";
import { cn } from "../utils/cn";
import { useTheme } from "../contexts/ThemeContext";
import type { TabId } from "../App";

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  onOpenCommandPalette: () => void;
}

const navItems: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "philosophy", label: "Philosophy", icon: Sparkles },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Wrench },
];

import { portfolioData } from "../data/portfolio";

const socialLinks = [
  { href: portfolioData.personal.social.github, icon: Github, label: "GitHub" },
  { href: portfolioData.personal.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${portfolioData.personal.email}`, icon: Mail, label: "Email" },
];

export function Sidebar({ activeTab, setActiveTab, onOpenCommandPalette }: SidebarProps) {
  const { resolvedMode, setMode } = useTheme();

  const toggleTheme = () => {
    setMode(resolvedMode === "dark" ? "light" : "dark");
  };

  return (
    <aside className="hidden lg:flex w-64 h-screen flex-col bg-mica border-r border-stroke shrink-0 transition-colors duration-200">
      {/* Header */}
      <div className="p-5 border-b border-divider">
        <div className="flex items-center gap-3">
          {/* Avatar with accent ring */}
          <div className="relative">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold text-base shadow-sm"
              style={{ backgroundColor: "var(--accent-color)" }}
            >
              M
            </div>
            {/* Status dot */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-mica" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-semibold text-text-primary truncate">
              Muhammad Ammar
            </h1>
            <p className="text-xs text-text-tertiary truncate">
              Software Architect
            </p>
          </div>
        </div>
      </div>

      {/* Command Palette Trigger */}
      <div className="px-3 pt-4 pb-2">
        <button
          onClick={onOpenCommandPalette}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-layer border border-stroke hover:bg-layer-hover hover:border-stroke-hover transition-all duration-150 group focus:outline-none"
        >
          <Command className="w-4 h-4 text-text-tertiary group-hover:text-text-secondary" strokeWidth={1.5} />
          <span className="flex-1 text-left text-sm text-text-tertiary group-hover:text-text-secondary">
            Command Palette
          </span>
          <kbd className="text-[10px] text-text-disabled px-1.5 py-0.5 rounded bg-layer-hover border border-stroke">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-0.5">
        <div className="text-[10px] font-medium text-text-tertiary uppercase tracking-wider px-3 py-2">
          Navigate
        </div>
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 focus:outline-none",
                isActive
                  ? "bg-accent-subtle text-text-primary"
                  : "text-text-secondary hover:bg-layer-hover hover:text-text-primary"
              )}
            >
              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-r-full"
                  style={{ backgroundColor: "var(--accent-color)" }}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <item.icon 
                className={cn(
                  "w-[18px] h-[18px] shrink-0 transition-colors",
                  isActive ? "text-accent" : "text-text-tertiary"
                )} 
                strokeWidth={1.5} 
              />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Theme Toggle & Socials */}
      <div className="p-3 border-t border-divider space-y-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-secondary hover:bg-layer-hover hover:text-text-primary transition-all duration-150 focus:outline-none"
        >
          {resolvedMode === "dark" ? (
            <Sun className="w-[18px] h-[18px] text-text-tertiary" strokeWidth={1.5} />
          ) : (
            <Moon className="w-[18px] h-[18px] text-text-tertiary" strokeWidth={1.5} />
          )}
          <span className="font-medium">
            {resolvedMode === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-1">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-layer transition-colors duration-150"
            >
              <link.icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-text-disabled text-center">
          © 2025 Muhammad Ammar Khan
        </p>
      </div>
    </aside>
  );
}
