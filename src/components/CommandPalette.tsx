import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  ArrowRight,
} from "lucide-react";
import { cn } from "../utils/cn";
import { useTheme } from "../contexts/ThemeContext";
import type { TabId } from "../types/navigation";
import type { CommandItem } from "../types/command";
import {
  buildCommands,
  filterCommands,
  groupCommands,
} from "../config/commandRegistry";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabId) => void;
}

export function CommandPalette({ isOpen, onClose, onNavigate }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { mode, setMode, accent, setAccent } = useTheme();

  // Define all commands from central registry
  const commands = useMemo<CommandItem[]>(() => {
    return buildCommands({
      mode,
      accent,
      onNavigate,
      onClose,
      setMode,
      setAccent,
      openExternal: (url: string) => window.open(url, "_blank"),
    });
  }, [mode, accent, setMode, setAccent, onNavigate, onClose]);

  // Filter commands based on query
  const filteredCommands = useMemo(() => {
    return filterCommands(commands, query);
  }, [commands, query]);

  // Group filtered commands by category
  const groupedCommands = useMemo(() => {
    return groupCommands(filteredCommands);
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
                        {group.label}
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
