import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X,
  Sparkles,
  Wrench,
  Github,
  Linkedin,
  Mail,
  Command,
  Sun,
  Moon,
  Palette,
  ChevronRight,
} from "lucide-react";
import { cn } from "../utils/cn";
import { useTheme, accentColors } from "../contexts/ThemeContext";
import type { TabId } from "../App";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  onOpenCommandPalette: () => void;
}

const extraNavItems: { id: TabId; label: string; icon: typeof Sparkles }[] = [
  { id: "philosophy", label: "Philosophy", icon: Sparkles },
  { id: "skills", label: "Skills & Credentials", icon: Wrench },
];

import { portfolioData } from "../data/portfolio";

const socialLinks = [
  { href: portfolioData.personal.social.github, icon: Github, label: "GitHub" },
  { href: portfolioData.personal.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${portfolioData.personal.email}`, icon: Mail, label: "Email" },
];

export function MobileMenu({ 
  isOpen, 
  onClose, 
  activeTab,
  setActiveTab,
  onOpenCommandPalette,
}: MobileMenuProps) {
  const { accent, setAccent, resolvedMode, setMode } = useTheme();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavigation = (tab: TabId) => {
    setActiveTab(tab);
    onClose();
  };

  const handleCommandPalette = () => {
    onClose();
    setTimeout(() => onOpenCommandPalette(), 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-overlay z-50 lg:hidden"
          />
          {/* Slide-up panel */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 40,
              mass: 0.8
            }}
            className="fixed inset-x-0 bottom-0 z-50 lg:hidden max-h-[85vh] flex flex-col bg-mica rounded-t-2xl border-t border-stroke shadow-dialog overflow-hidden"
          >
            {/* Handle bar */}
            <div className="flex justify-center py-3">
              <div className="w-10 h-1 rounded-full bg-text-disabled/40" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 pb-4 border-b border-divider">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-semibold text-base shadow-sm"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  >
                    M
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-mica" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-text-primary">
                    Muhammad Ammar
                  </h2>
                  <p className="text-xs text-text-tertiary">
                    Software Architect
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-text-tertiary hover:text-text-primary hover:bg-layer-hover transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {/* Extra Navigation */}
              <div className="p-4 space-y-1">
                <p className="text-[10px] font-medium text-text-tertiary uppercase tracking-wider px-3 mb-2">
                  More Pages
                </p>
                {extraNavItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-150",
                        isActive
                          ? "bg-accent-subtle text-text-primary"
                          : "text-text-secondary hover:bg-layer-hover"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon 
                          className={cn(
                            "w-5 h-5",
                            isActive ? "text-accent" : "text-text-tertiary"
                          )} 
                          strokeWidth={1.5} 
                        />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronRight 
                        className={cn(
                          "w-4 h-4",
                          isActive ? "text-accent" : "text-text-disabled"
                        )}
                        strokeWidth={1.5}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-divider" />

              {/* Command Palette */}
              <div className="p-4">
                <button
                  onClick={handleCommandPalette}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-layer border border-stroke hover:bg-layer-hover transition-all duration-150"
                >
                  <div className="flex items-center gap-3">
                    <Command className="w-5 h-5 text-text-tertiary" strokeWidth={1.5} />
                    <span className="font-medium text-text-secondary">Command Palette</span>
                  </div>
                  <kbd className="text-[10px] text-text-disabled px-2 py-1 rounded-lg bg-layer-hover border border-stroke">
                    ⌘K
                  </kbd>
                </button>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-divider" />

              {/* Theme Settings */}
              <div className="p-4 space-y-4">
                <p className="text-[10px] font-medium text-text-tertiary uppercase tracking-wider px-3">
                  Appearance
                </p>
                {/* Light/Dark Toggle */}
                <div className="px-3">
                  <p className="text-xs text-text-secondary mb-3 font-medium flex items-center gap-2">
                    {resolvedMode === "dark" ? (
                      <Moon size={14} strokeWidth={1.5} />
                    ) : (
                      <Sun size={14} strokeWidth={1.5} />
                    )}
                    Theme Mode
                  </p>
                  <div className="flex gap-2">
                    {(["light", "dark", "system"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setMode(mode)}
                        className={cn(
                          "flex-1 py-2.5 px-3 rounded-xl text-sm font-medium capitalize transition-all duration-150",
                          (mode === "system" ? resolvedMode : mode) === resolvedMode && 
                          (mode === "system" || mode === resolvedMode)
                            ? "bg-accent-subtle text-accent border border-accent/20"
                            : "bg-layer border border-stroke text-text-secondary hover:bg-layer-hover"
                        )}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accent Colors */}
                <div className="px-3">
                  <p className="text-xs text-text-secondary mb-3 font-medium flex items-center gap-2">
                    <Palette size={14} strokeWidth={1.5} />
                    Accent Color
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {accentColors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setAccent(color)}
                        className="aspect-square rounded-xl flex items-center justify-center transition-all duration-150 hover:scale-105 active:scale-95"
                        style={{ 
                          backgroundColor: color.value,
                          boxShadow: accent.name === color.name 
                            ? `0 0 0 2px var(--bg-mica), 0 0 0 4px ${color.value}` 
                            : 'none'
                        }}
                        title={color.name}
                      >
                        {accent.name === color.name && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-divider" />

              {/* Social Links */}
              <div className="p-4">
                <p className="text-[10px] font-medium text-text-tertiary uppercase tracking-wider px-3 mb-3">
                  Connect
                </p>
                <div className="flex justify-center gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl bg-layer border border-stroke hover:bg-layer-hover transition-colors"
                    >
                      <link.icon className="w-5 h-5 text-text-secondary" strokeWidth={1.5} />
                      <span className="text-xs text-text-tertiary">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 pt-2">
                <p className="text-[10px] text-text-disabled text-center">
                  © 2025 Muhammad Ammar Khan
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
