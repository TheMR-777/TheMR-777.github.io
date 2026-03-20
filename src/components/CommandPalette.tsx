import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  Briefcase,
  FolderKanban,
  Wrench,
  Sparkles,
  Sun,
  Moon,
  Monitor,
  Palette,
  Github,
  Linkedin,
  Mail,
  FileText,
  Command,
  ArrowRight,
} from "lucide-react";
import { cn } from "../utils/cn";
import { useTheme, accentColors, type AccentColor } from "../contexts/ThemeContext";
import type { TabId } from "../App";
import { portfolioData } from "../data/portfolio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabId) => void;
}

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: typeof Home;
  category: "navigation" | "theme" | "accent" | "links";
  action: () => void;
  keywords?: string[];
  accent?: AccentColor;
}

export function CommandPalette({ isOpen, onClose, onNavigate }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { mode, setMode, accent, setAccent } = useTheme();

  // Define all commands
  const commands = useMemo<CommandItem[]>(() => {
    const navCommands: CommandItem[] = [
      {
        id: "nav-home",
        label: "Home",
        description: "Go to overview",
        icon: Home,
        category: "navigation",
        action: () => { onNavigate("home"); onClose(); },
        keywords: ["home", "overview", "main", "dashboard"],
      },
      {
        id: "nav-about",
        label: "About",
        description: "Personal information",
        icon: User,
        category: "navigation",
        action: () => { onNavigate("about"); onClose(); },
        keywords: ["about", "me", "info", "personal", "bio"],
      },
      {
        id: "nav-philosophy",
        label: "Philosophy",
        description: "Engineering mindset & principles",
        icon: Sparkles,
        category: "navigation",
        action: () => { onNavigate("philosophy"); onClose(); },
        keywords: ["philosophy", "mindset", "principles", "values", "driving force"],
      },
      {
        id: "nav-experience",
        label: "Experience",
        description: "Work history",
        icon: Briefcase,
        category: "navigation",
        action: () => { onNavigate("experience"); onClose(); },
        keywords: ["experience", "work", "job", "career", "history"],
      },
      {
        id: "nav-projects",
        label: "Projects",
        description: "Portfolio projects",
        icon: FolderKanban,
        category: "navigation",
        action: () => { onNavigate("projects"); onClose(); },
        keywords: ["projects", "portfolio", "work", "showcase"],
      },
      {
        id: "nav-skills",
        label: "Skills",
        description: "Technical expertise",
        icon: Wrench,
        category: "navigation",
        action: () => { onNavigate("skills"); onClose(); },
        keywords: ["skills", "tech", "stack", "expertise", "abilities"],
      },
    ];

    const themeCommands: CommandItem[] = [
      {
        id: "theme-light",
        label: "Light Mode",
        description: mode === "light" ? "Currently active" : "Switch to light theme",
        icon: Sun,
        category: "theme",
        action: () => { setMode("light"); onClose(); },
        keywords: ["light", "bright", "day", "theme"],
      },
      {
        id: "theme-dark",
        label: "Dark Mode",
        description: mode === "dark" ? "Currently active" : "Switch to dark theme",
        icon: Moon,
        category: "theme",
        action: () => { setMode("dark"); onClose(); },
        keywords: ["dark", "night", "theme"],
      },
      {
        id: "theme-system",
        label: "System Theme",
        description: mode === "system" ? "Currently active" : "Follow system preference",
        icon: Monitor,
        category: "theme",
        action: () => { setMode("system"); onClose(); },
        keywords: ["system", "auto", "preference", "theme"],
      },
    ];

    const accentCommands: CommandItem[] = accentColors.map((color) => ({
      id: `accent-${color.name.toLowerCase()}`,
      label: color.name,
      description: accent.name === color.name ? "Currently active" : `Set ${color.name} as accent`,
      icon: Palette,
      category: "accent" as const,
      action: () => { setAccent(color); onClose(); },
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
        action: () => { window.open(portfolioData.personal.social.github, "_blank"); onClose(); },
        keywords: ["github", "code", "repository", "source"],
      },
      {
        id: "link-linkedin",
        label: "LinkedIn",
        description: "Connect on LinkedIn",
        icon: Linkedin,
        category: "links",
        action: () => { window.open(portfolioData.personal.social.linkedin, "_blank"); onClose(); },
        keywords: ["linkedin", "professional", "network", "connect"],
      },
      {
        id: "link-email",
        label: "Send Email",
        description: portfolioData.personal.email,
        icon: Mail,
        category: "links",
        action: () => { window.open(`mailto:${portfolioData.personal.email}`, "_blank"); onClose(); },
        keywords: ["email", "mail", "contact", "message"],
      },
      {
        id: "link-cv",
        label: "View CV Dataset",
        description: "Complete professional profile",
        icon: FileText,
        category: "links",
        action: () => { window.open("https://github.com/TheMR-777/TheMR-777/blob/main/cv-dataset.md", "_blank"); onClose(); },
        keywords: ["cv", "resume", "dataset", "profile"],
      },
    ];

    return [...navCommands, ...themeCommands, ...accentCommands, ...linkCommands];
  }, [mode, accent, setMode, setAccent, onNavigate, onClose]);

  // Filter commands based on query
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const lowerQuery = query.toLowerCase();
    return commands.filter((cmd) => {
      const matchLabel = cmd.label.toLowerCase().includes(lowerQuery);
      const matchDesc = cmd.description?.toLowerCase().includes(lowerQuery);
      const matchKeywords = cmd.keywords?.some((k) => k.includes(lowerQuery));
      return matchLabel || matchDesc || matchKeywords;
    });
  }, [commands, query]);

  // Group filtered commands by category
  const groupedCommands = useMemo(() => {
    const groups: { category: string; items: CommandItem[] }[] = [];
    const categoryOrder = ["navigation", "theme", "accent", "links"];
    const categoryLabels: Record<string, string> = {
      navigation: "Navigation",
      theme: "Appearance",
      accent: "Accent Colors",
      links: "Quick Links",
    };

    categoryOrder.forEach((cat) => {
      const items = filteredCommands.filter((cmd) => cmd.category === cat);
      if (items.length > 0) {
        groups.push({ category: categoryLabels[cat], items });
      }
    });

    return groups;
  }, [filteredCommands]);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filteredCommands.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
        break;
      case "Escape":
        e.preventDefault();
        onClose();
        break;
    }
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Scroll selected item into view
  useEffect(() => {
    const selectedEl = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    selectedEl?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  let globalIndex = -1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-overlay backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Desktop Dialog - Center top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[10%] sm:top-[15%] left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 sm:px-0"
          >
            <div className="overflow-hidden rounded-xl bg-solid border border-stroke shadow-dialog">
              {/* Search Input - Fluent style with bottom border animation */}
              <div className="fluent-input-wrapper border-b border-divider">
                <div className="flex items-center gap-3 px-4 py-3.5">
                  <Search className="w-5 h-5 text-text-tertiary shrink-0" strokeWidth={1.5} />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type to search..."
                    className="flex-1 bg-transparent text-text-primary text-base placeholder:text-text-tertiary border-none outline-none ring-0 focus:ring-0 focus:border-none focus:outline-none"
                    style={{ boxShadow: 'none', outline: 'none' }}
                  />
                  <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-layer border border-stroke text-[11px] text-text-tertiary font-medium">
                    ESC
                  </kbd>
                </div>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[360px] overflow-y-auto p-2">
                {groupedCommands.length === 0 ? (
                  <div className="py-12 text-center text-text-tertiary text-sm">
                    No results found for "{query}"
                  </div>
                ) : (
                  groupedCommands.map((group) => (
                    <div key={group.category} className="mb-2 last:mb-0">
                      <div className="px-2 py-1.5 text-[11px] font-medium text-text-tertiary uppercase tracking-wider">
                        {group.category}
                      </div>
                      {group.items.map((item) => {
                        globalIndex++;
                        const isSelected = globalIndex === selectedIndex;
                        const currentIndex = globalIndex;

                        return (
                          <button
                            key={item.id}
                            data-index={currentIndex}
                            onClick={item.action}
                            onMouseEnter={() => setSelectedIndex(currentIndex)}
                            className={cn(
                              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors focus:outline-none focus:ring-0",
                              isSelected
                                ? "bg-accent-subtle text-text-primary"
                                : "text-text-secondary hover:bg-layer-hover"
                            )}
                          >
                            {/* Icon or Color Swatch */}
                            {item.accent ? (
                              <div
                                className="w-5 h-5 rounded-full shrink-0 transition-shadow duration-150"
                                style={{ 
                                  backgroundColor: item.accent.value,
                                  boxShadow: accent.name === item.accent.name
                                    ? `0 0 0 2px var(--bg-solid), 0 0 0 4px ${item.accent.value}`
                                    : 'none'
                                }}
                              />
                            ) : (
                              <item.icon
                                className={cn(
                                  "w-5 h-5 shrink-0",
                                  isSelected ? "text-accent" : "text-text-tertiary"
                                )}
                                strokeWidth={1.5}
                              />
                            )}

                            {/* Label & Description */}
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium truncate">
                                {item.label}
                              </div>
                              {item.description && (
                                <div className="text-xs text-text-tertiary truncate">
                                  {item.description}
                                </div>
                              )}
                            </div>

                            {/* Arrow indicator */}
                            {isSelected && (
                              <ArrowRight className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer - Hidden on very small screens */}
              <div className="hidden sm:flex items-center justify-between px-4 py-2.5 border-t border-divider bg-layer/50">
                <div className="flex items-center gap-4 text-[11px] text-text-tertiary">
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded-md bg-layer border border-stroke font-medium">↑</kbd>
                    <kbd className="px-1.5 py-0.5 rounded-md bg-layer border border-stroke font-medium">↓</kbd>
                    <span className="text-text-disabled">navigate</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded-md bg-layer border border-stroke font-medium">↵</kbd>
                    <span className="text-text-disabled">select</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-text-disabled">
                  <Command className="w-3 h-3" strokeWidth={1.5} />
                  <span>K to toggle</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
