import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { StyledText } from "../lib/styledText";
import { SCROLL_ANIMATION_VP } from "../constants/animations";
import type { NavigateFn, NavigationOptions, TabId } from "../types/navigation";

interface PageFooterProps {
  quote: string;
  nudge: string;
  target: TabId | NavigationOptions;
  onNavigate: NavigateFn;
}

export function PageFooter({ quote, nudge, target, onNavigate }: PageFooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={SCROLL_ANIMATION_VP}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-20 mb-8 flex flex-col items-center text-center"
    >
      <div className="w-8 h-px bg-stroke mb-6" />
      <StyledText
        text={`"${quote}"`}
        className="text-sm text-text-tertiary leading-relaxed"
        as="p"
      />
      <button
        onClick={() => onNavigate(target)}
        className="group flex items-center gap-1.5 mt-4 text-xs text-text-disabled hover:text-accent transition-colors"
      >
        <span>{nudge}</span>
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </motion.div>
  );
}
