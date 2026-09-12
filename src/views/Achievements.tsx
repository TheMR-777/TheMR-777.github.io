import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Globe, BookOpen, Shield, Bug, MapPin, Users,
  Trophy, TrendingUp, GraduationCap, GitBranch, Microscope,
  ArrowRight, ChevronDown, Gamepad2, Brain, Sparkles,
  type LucideIcon
} from 'lucide-react';
import { portfolioData } from '../lib/portfolioDAL';
import { StyledText } from '../lib/styledText';
import { PageFooter } from '../components/PageFooter';
import { SCROLL_ANIMATION_VP } from '../constants/animations';
import type { NavigateFn, NavigationOptions } from '../types/navigation';

const { achievements } = portfolioData;

// --- Icon map ---
const iconMap: Record<string, LucideIcon> = {
  globe: Globe, bookOpen: BookOpen, shield: Shield, bug: Bug,
  mapPin: MapPin, users: Users, trophy: Trophy, trendingUp: TrendingUp,
  graduationCap: GraduationCap, gitBranch: GitBranch, microscope: Microscope,
  gamepad: Gamepad2, brain: Brain, sparkles: Sparkles,
};

// --- Animated Counter ---
function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setCount(Math.round((current / steps) * value));
      if (current >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix || ''}
    </span>
  );
}

// --- Main Component ---
export function Achievements({ onNavigate }: { onNavigate: NavigateFn }) {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);

  return (
    <div className="achievements-hero min-h-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-16 pb-24 sm:pb-24 relative">
        {/* Continuous Vertical Anchor Line — desktop only */}
        <div className="absolute left-8 lg:left-12 top-0 bottom-0 w-px bg-stroke/50 hidden lg:block" />

        {/* ─── Hero Section ─── */}
        <section className="relative pb-12 sm:pb-16 pl-0 lg:pl-12">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-pulse-subtle pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-px bg-accent hidden lg:block" />
              <span className="text-accent text-sm font-medium tracking-wide uppercase">
                {achievements.headline}
              </span>
            </div>

            <h1 className="achievements-title text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6 sm:mb-8 font-light tracking-tight">
              A Constellation of{' '}
              <span className="discovery-text font-normal relative inline-block">
                Milestones
              </span>
            </h1>

            <div className="relative">
              <div className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-accent/50" />
              <StyledText
                text={achievements.subtitle}
                className="pl-5 text-lg lg:text-xl text-text-secondary font-light leading-relaxed"
                as="p"
              />
            </div>
          </motion.div>
        </section>

        {/* ─── Hero Stats — Animated Counters ─── */}
        <section className="py-8 sm:py-10 pl-0 lg:pl-12 border-l-0 lg:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
              {achievements.heroStats.map((stat, index) => {
                const Icon = iconMap[stat.icon] || Trophy;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                    transition={{ duration: 0.4, delay: 0.12 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="stat-counter-card relative p-4 rounded-xl bg-layer border border-stroke text-center overflow-hidden group hover:border-accent/30 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <Icon className="w-4 h-4 text-accent mx-auto mb-2 opacity-60" strokeWidth={1.5} />
                    <div className="text-2xl sm:text-3xl font-light text-text-primary mb-1 tracking-tight">
                      <AnimatedCounter value={stat.value} suffix={(stat as any).suffix} />
                    </div>
                    <div className="text-[10px] text-text-tertiary uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ─── Constellation Sections ─── */}
        {achievements.constellations.map((constellation, cIdx) => {
          const Icon = iconMap[constellation.icon] || Trophy;
          return (
            <section
              key={constellation.id}
              id={`achievement-${constellation.id}`}
              className="py-10 sm:py-12 pl-0 lg:pl-12 border-l-0 lg:border-l border-stroke/50"
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden lg:block lg:-ml-[25px]" />
                  <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-widest">
                    {constellation.title}
                  </h2>
                </div>
                <p className="text-sm text-text-secondary mb-8 lg:ml-0 italic font-light">
                  {constellation.subtitle}
                </p>

                {/* Achievement Cards Grid */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {constellation.items.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                      transition={{ duration: 0.4, delay: 0.05 * idx, ease: [0.16, 1, 0.3, 1] }}
                      className="spotlight-card group relative p-5 rounded-xl bg-layer border border-stroke hover:border-accent/30 transition-all overflow-hidden"
                    >
                      {/* Spotlight glow */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>

                      {/* Top accent line */}
                      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Header: Title + Badge */}
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors leading-tight">
                            {item.title}
                          </h3>
                        </div>

                        {/* Badge */}
                        <span className={`inline-block text-[10px] px-2.5 py-1 rounded-md font-medium mb-3 ${
                          item.badgeVariant === 'accent'
                            ? 'bg-accent-subtle text-accent'
                            : 'bg-layer-active text-text-secondary border border-stroke'
                        }`}>
                          {item.badge}
                        </span>

                        {/* Meta */}
                        {(item as any).meta && (
                          <p className="text-[10px] text-text-tertiary mb-2">
                            {(item as any).meta}
                          </p>
                        )}

                        {/* Description */}
                        <StyledText
                          text={item.description}
                          className="text-xs text-text-secondary leading-relaxed mb-3"
                          as="p"
                        />

                        {/* Cross-link */}
                        {(item as any).linkTarget && (
                          <button
                            onClick={() => onNavigate((item as any).linkTarget as NavigationOptions)}
                            className="inline-flex items-center gap-1.5 text-[11px] text-accent hover:text-accent-light font-medium transition-colors group/link"
                          >
                            <span>{(item as any).linkLabel || 'View details'}</span>
                            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          );
        })}

        {/* ─── Hidden Gems — Milestones ─── */}
        <section className="py-10 sm:py-12 pl-0 lg:pl-12 border-l-0 lg:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden lg:block lg:-ml-[25px]" />
              <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-widest">
                Hidden Gems
              </h2>
            </div>
            <p className="text-sm text-text-secondary mb-8 italic font-light">
              Stories that shaped the trajectory, but never found a category
            </p>

            <div className="space-y-3">
              {achievements.milestones.map((milestone) => {
                const Icon = iconMap[milestone.icon] || Sparkles;
                const isExpanded = expandedMilestone === milestone.title;

                return (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={() => setExpandedMilestone(isExpanded ? null : milestone.title)}
                      className={`w-full text-left p-5 rounded-xl border transition-all group ${
                        isExpanded
                          ? 'bg-layer border-accent/30'
                          : 'bg-layer border-stroke hover:border-accent/20 hover:bg-layer-hover'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                          isExpanded ? 'bg-accent/20' : 'bg-accent-subtle group-hover:scale-110'
                        }`}>
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className={`text-sm font-medium transition-colors ${
                                isExpanded ? 'text-accent' : 'text-text-primary group-hover:text-accent'
                              }`}>
                                {milestone.title}
                              </h3>
                              <span className="text-[10px] text-text-tertiary">
                                {milestone.period}
                              </span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-text-tertiary flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180 text-accent' : ''
                            }`} />
                          </div>
                        </div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-3 ml-14 space-y-3">
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {milestone.description}
                            </p>
                            <div className="p-4 rounded-lg bg-accent/[0.04] border border-accent/10">
                              <span className="text-[10px] text-accent uppercase tracking-wider font-medium block mb-1">
                                Significance
                              </span>
                              <p className="text-xs text-text-secondary leading-relaxed">
                                {milestone.significance}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ─── The Trajectory — Vision ─── */}
        <section className="py-10 sm:py-12 pl-0 lg:pl-12 border-l-0 lg:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden lg:block lg:-ml-[25px]" />
              <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-widest">
                {achievements.trajectory.title}
              </h2>
            </div>

            {/* Vision Statement */}
            <div className="relative p-6 lg:p-8 rounded-xl bg-layer border border-stroke mb-6">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <StyledText
                text={achievements.trajectory.core}
                className="text-base lg:text-lg text-text-secondary leading-relaxed"
                as="p"
              />
            </div>

            {/* Pillars Grid */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {achievements.trajectory.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 rounded-xl bg-layer border border-stroke hover:border-accent/30 transition-all group"
                >
                  <h3 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Entrepreneur Vision */}
            <div className="p-5 rounded-xl bg-layer border border-stroke">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-text-primary">
                  {achievements.trajectory.entrepreneurVision.title}
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {achievements.trajectory.entrepreneurVision.description}
              </p>
            </div>
          </motion.div>
        </section>

        {/* ─── Footer ─── */}
        <section className="pl-0 lg:pl-12">
          <PageFooter
            {...portfolioData.footers.achievements}
            onNavigate={onNavigate}
          />
        </section>
      </div>
    </div>
  );
}
