import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sidebar } from "./components/Sidebar";
import { MobileNav } from "./components/MobileNav";
import { MobileMenu } from "./components/MobileMenu";
import { CommandPalette } from "./components/CommandPalette";
import { Overview } from "./views/Overview";
import { Experience } from "./views/Experience";
import { Projects } from "./views/Projects";
import { Skills } from "./views/Skills";
import { About } from "./views/About";
import Philosophy from "./views/Philosophy";
import type { NavigateFn, TabId } from "./types/navigation";
import { resolveNavigationTarget } from "./lib/navigation";
import { useCommandHotkey } from "./hooks/useCommandHotkey";
import { useSectionTargetScroll } from "./hooks/useSectionTargetScroll";

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Smart navigation handler
  const handleNavigate = useCallback<NavigateFn>((tabOrOptions) => {
    const next = resolveNavigationTarget(tabOrOptions);
    setActiveTab(next.tab);
    setTargetSection(next.section);
  }, []);

  // Scroll to top when tab changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [activeTab]);

  useSectionTargetScroll({
    containerRef: mainRef,
    activeTabKey: activeTab,
    targetSection,
    clearTarget: () => setTargetSection(null),
  });

  useCommandHotkey({
    onToggle: () => setCommandPaletteOpen((prev) => !prev),
  });

  const renderView = () => {
    switch (activeTab) {
      case "home":
        return <Overview onNavigate={handleNavigate} />;
      case "about":
        return <About onNavigate={handleNavigate} />;
      case "philosophy":
        return <Philosophy />;
      case "experience":
        return <Experience onNavigate={handleNavigate} />;
      case "projects":
        return <Projects onNavigate={handleNavigate} />;
      case "skills":
        return <Skills onNavigate={handleNavigate} />;
      default:
        return <Overview onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex h-screen bg-mica text-text-primary overflow-hidden transition-colors duration-200">
      {/* Desktop Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content */}
      <main ref={mainRef} className="flex-1 overflow-y-auto overflow-x-hidden bg-content pb-20 lg:pb-0">
        <div className="min-h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ 
                duration: 0.2, 
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenMenu={() => setMobileMenuOpen(true)}
      />

      {/* Mobile Menu (More options) */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={setActiveTab}
      />
    </div>
  );
}
