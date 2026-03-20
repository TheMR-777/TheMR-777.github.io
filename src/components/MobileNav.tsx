import { motion } from "framer-motion";
import { 
  Menu,
} from "lucide-react";
import { cn } from "../utils/cn";
import type { TabId } from "../types/navigation";
import { mobilePrimaryNavItems } from "../config/navigation";

interface MobileNavProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  onOpenMenu: () => void;
}

export function MobileNav({ activeTab, setActiveTab, onOpenMenu }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      {/* Frosted glass background with subtle top shadow */}
      <div className="absolute inset-0 bg-mica/95 backdrop-blur-2xl border-t border-stroke shadow-[0_-4px_16px_rgba(0,0,0,0.08)]" />
      {/* Safe area spacer for notched devices */}
      <div className="relative flex items-stretch justify-around px-2 h-16 pb-safe">
        {mobilePrimaryNavItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative flex flex-col items-center justify-center flex-1 py-2 transition-all duration-200",
                isActive ? "text-accent" : "text-text-tertiary"
              )}
            >
              {/* Active indicator - pill behind icon */}
              {isActive && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute top-1.5 w-12 h-7 rounded-full bg-accent-subtle"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <item.icon 
                className={cn(
                  "relative w-5 h-5 transition-transform duration-200",
                  isActive && "scale-105"
                )} 
                strokeWidth={isActive ? 2 : 1.5} 
              />
              <span className={cn(
                "relative text-[10px] mt-1 font-medium transition-colors",
                isActive ? "text-accent" : "text-text-tertiary"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
        {/* Menu button */}
        <button
          onClick={onOpenMenu}
          className="relative flex flex-col items-center justify-center flex-1 py-2 text-text-tertiary transition-all duration-200 active:scale-95"
        >
          <Menu className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-[10px] mt-1 font-medium">More</span>
        </button>
      </div>
    </nav>
  );
}
