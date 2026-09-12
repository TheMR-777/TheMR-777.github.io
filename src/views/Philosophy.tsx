import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb, Compass, Target, Layers, Sparkles, Infinity,
  BookOpen, Play, Brain, ChevronDown,
  type LucideIcon
} from 'lucide-react';
import { SCROLL_ANIMATION_VP } from '../constants/animations';
import { portfolioData } from '../lib/portfolioDAL';
import { StyledText } from '../lib/styledText';

/** Resolves a dot-path reference against portfolioData. e.g. "personal.interests" → portfolioData.personal.interests */
const resolveRef = (path: string): any =>
  path.split('.').reduce((obj: any, key) => obj?.[key], portfolioData);

const { philosophy } = portfolioData;

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  layers: Layers,
  target: Target,
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  bookOpen: BookOpen,
  brain: Brain,
};

const principles = philosophy.principles.map((p) => ({
  ...p,
  icon: iconMap[p.icon] || Lightbulb,
}));

const journeySteps = philosophy.sections;

const { toolsPhilosophy } = philosophy;

const Philosophy = () => {
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  return (
    <div className="philosophy-hero min-h-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-16 pb-24 sm:pb-24 relative">
        {/* Continuous Vertical Anchor Line - only on larger screens */}
        <div className="absolute left-8 lg:left-12 top-0 bottom-0 w-px bg-stroke/50 hidden lg:block" />

        {/* ─── Hero Section ─── */}
        <section className="relative pb-12 sm:pb-16 pl-0 lg:pl-12">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-pulse-subtle pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-px bg-accent hidden lg:block" />
              <span className="text-accent text-sm font-medium tracking-wide uppercase">
                Philosophy
              </span>
            </div>

            <h1 className="philosophy-quote text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6 sm:mb-8 font-light tracking-tight">
              The Joy of{' '}
              <span className="discovery-text font-normal relative inline-block">
                Discovery
              </span>
            </h1>

            <div className="relative">
              <div className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-accent/50" />
              <StyledText 
                text={philosophy.mainQuote}
                className="pl-5 text-lg lg:text-xl text-text-secondary font-light leading-relaxed"
                as="p"
              />
            </div>
          </motion.div>
        </section>

        {/* ─── The Driving Force Card ─── */}
        <section className="py-8 sm:py-10 pl-0 lg:pl-12 border-l-0 lg:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-6 lg:p-8 rounded-xl bg-layer border border-stroke">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <div className="flex gap-5">
                <div className="hidden sm:flex flex-col items-center pt-1">
                  <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent" />
              </div>
                  <div className="flex-1 w-px bg-gradient-to-b from-accent/20 to-transparent mt-3" />
            </div>
                <div className="flex-1 min-w-0">
                  <StyledText 
                    text={philosophy.cardText}
                    className="text-base lg:text-lg text-text-secondary leading-relaxed"
                    as="p"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── The Driving Force — Immersive Sequence ─── */}
        <section className="py-16 sm:py-20 pl-0 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-16 sm:mb-20">
               <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden lg:block lg:-ml-[25px]" />
               <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-widest">
                The Driving Force
              </h2>
            </div>

            <div className="space-y-24 sm:space-y-32 max-w-3xl">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Elegant Number Watermark */}
                  <div className="absolute -top-10 -left-4 sm:-left-12 text-[80px] sm:text-[100px] font-light text-text-primary/[0.03] select-none pointer-events-none leading-none tracking-tighter transition-colors duration-500 group-hover:text-accent/[0.05]">
                    0{index + 1}
                  </div>

                  <div className="relative z-10 pl-2 sm:pl-4">
                    <h3 className="text-xl sm:text-2xl font-light text-text-primary mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    
                    <StyledText
                      text={`"${step.highlight}"`}
                      className="text-lg sm:text-xl text-text-secondary font-light italic leading-relaxed mb-6"
                      as="p"
                    />
                    
                    <StyledText text={step.content} className="text-base text-text-tertiary leading-relaxed mb-8" as="p" />
                    
                    {/* Story Trigger & Inline Expansion */}
                    {(step as any).expansion && (
                      <div className="mt-6">
                        <button
                          onClick={() => setExpandedStory(expandedStory === step.title ? null : step.title)}
                          className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all group/btn ${
                            expandedStory === step.title 
                              ? 'bg-layer-active border-accent/50 text-text-primary' 
                              : 'bg-layer border-stroke hover:border-accent/40 hover:bg-layer-hover text-text-primary'
                          } text-sm font-medium`}
                        >
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            expandedStory === step.title ? 'bg-accent/20' : 'bg-accent-subtle group-hover/btn:bg-accent/20 group-hover/btn:scale-110'
                          }`}>
                            {(step as any).expansion.icon === 'lightbulb' && <Lightbulb className="w-3.5 h-3.5 text-accent" />}
                            {(step as any).expansion.icon === 'play' && <Play className="w-3.5 h-3.5 text-accent" fill="currentColor" />}
                            {(step as any).expansion.icon === 'brain' && <Brain className="w-3.5 h-3.5 text-accent" />}
                            {(step as any).expansion.icon === 'sparkles' && <Sparkles className="w-3.5 h-3.5 text-accent" />}
                          </span>
                          <span>{(step as any).expansion.label}</span>
                          <ChevronDown 
                            className={`w-4 h-4 text-text-tertiary transition-transform duration-300 ${
                              expandedStory === step.title ? 'rotate-180 text-accent' : 'group-hover/btn:text-text-secondary'
                            }`} 
                          />
                        </button>

                        <AnimatePresence>
                          {expandedStory === step.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 sm:p-8 rounded-2xl bg-layer/50 border border-stroke/50 backdrop-blur-sm relative">
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                                
                                {(() => {
                                  const exp = (step as any).expansion;
                                  const refData = exp.reference ? resolveRef(exp.reference) : exp.data;
                                  if (!refData) return null;

                                  // 1. Phased Incident (has phases)
                                  if (refData.phases) {
                                    return (
                                      <div className="space-y-8">
                                        <div>
                                          <h4 className="text-sm font-semibold text-text-primary">
                                            {refData.title}
                                          </h4>
                                          {refData.subtitle && (
                                            <span className="text-[11px] text-text-tertiary block mt-1">
                                              {refData.subtitle}
                                            </span>
                                          )}
                                        </div>
                                        <div className="relative space-y-8 ml-2">
                                          {/* Persistent, glowing timeline track */}
                                          <div className="absolute left-[3.4px] top-2 bottom-2 w-[1px] bg-accent/20 shadow-[0_0_5px_rgba(var(--color-accent),0.2)]" />
                                          
                                          {refData.phases.map((phase: any) => (
                                            <div key={phase.label} className="relative pl-8">
                                              {/* Premium glowing dot with cutout effect */}
                                              <div className="absolute left-0 top-1.5 w-[8px] h-[8px] rounded-full bg-accent ring-4 ring-content shadow-[0_0_12px_rgba(var(--color-accent),0.5)]" />
                                              <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
                                                {phase.label}
                                              </span>
                                              <StyledText text={phase.content} className="text-[15px] text-text-secondary leading-relaxed" as="p" />
                                            </div>
                                          ))}
                                        </div>
                                        {refData.link && (
                                          <a
                                            href={refData.link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full sm:w-auto gap-2.5 px-6 py-3 rounded-xl bg-accent/10 hover:bg-accent/20 text-accent font-medium transition-colors border border-accent/20"
                                          >
                                            <Play className="w-4 h-4" fill="currentColor" />
                                            {refData.link.label}
                                          </a>
                                        )}
                                      </div>
                                    );
                                  }

                                  // 2. Standard Object with title + content/points
                                  if (!Array.isArray(refData) && typeof refData === 'object' && (refData.content || refData.description || refData.points)) {
                                    return (
                                      <div className="relative">
                                        {refData.title && (
                                          <h4 className="text-sm font-semibold text-text-primary mb-4">
                                            {refData.title}
                                          </h4>
                                        )}
                                        {(refData.content || refData.description) && (
                                          <StyledText 
                                            text={refData.content || refData.description} 
                                            className="text-[15px] text-text-secondary leading-relaxed mb-6" 
                                            as="p" 
                                          />
                                        )}
                                        {refData.points && (
                                          <div className="p-5 rounded-2xl border border-accent/10 bg-accent/[0.03] backdrop-blur-sm">
                                            <ul className="space-y-4">
                                              {refData.points.map((point: string, i: number) => (
                                                <li key={i} className="text-[14.5px] text-text-secondary leading-relaxed flex items-start gap-3.5">
                                                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0 mt-2 shadow-[0_0_8px_rgba(var(--color-accent),0.5)]" />
                                                  <StyledText text={point} as="div" className="flex-1" />
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  }

                                  // 3. Array of { name, description/points } → flowing definition list
                                  if (Array.isArray(refData) && refData[0]?.name) {
                                    const hasPoints = refData.some((item: any) => !!item.points);
                                    
                                    return (
                                      <div className={`relative space-y-8 ${hasPoints ? '' : 'ml-2'}`}>
                                        {/* Persistent, glowing timeline track - ONLY if no points */}
                                        {!hasPoints && <div className="absolute left-[3.3px] top-2 bottom-2 w-[1px] bg-accent/20 shadow-[0_0_5px_rgba(var(--color-accent),0.2)]" />}
                                        
                                        {refData.map((item: any) => (
                                          <div key={item.name} className={`relative ${hasPoints ? '' : 'pl-8'}`}>
                                            {/* Premium glowing dot with cutout effect - ONLY if no points */}
                                            {!hasPoints && <div className="absolute left-0 top-1.5 w-[8px] h-[8px] rounded-full bg-accent ring-4 ring-content shadow-[0_0_12px_rgba(var(--color-accent),0.5)]" />}
                                            <h5 className="text-[15px] font-semibold text-text-primary mb-3 tracking-tight">{item.name}</h5>
                                            
                                            {item.description && (
                                              <StyledText 
                                                text={item.description} 
                                                className="text-[15px] text-text-secondary leading-relaxed" 
                                                as="p" 
                                              />
                                            )}
                                            
                                            {item.points && (
                                              <div className="mt-5 p-5 rounded-2xl border border-stroke/50 bg-layer-active/30">
                                                <ul className="space-y-2.5">
                                                  {item.points.map((point: string, i: number) => (
                                                    <li key={i} className="text-[14px] text-text-secondary leading-relaxed flex items-start gap-3.5">
                                                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0 mt-2.5" />
                                                      <StyledText text={point} as="div" className="flex-1" />
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    );
                                  }

                                  // 4. Array of strings → simple list
                                  if (Array.isArray(refData) && typeof refData[0] === 'string') {
                                    return (
                                      <ul className="space-y-2">
                                        {refData.map((item: string, i: number) => (
                                          <li key={i} className="text-[15px] text-text-secondary leading-relaxed flex items-start gap-3">
                                            <span className="text-accent mt-2 text-[5px] shrink-0">●</span>
                                            <StyledText text={item} as="div" className="flex-1" />
                                          </li>
                                        ))}
                                      </ul>
                                    );
                                  }

                                  return null;
                                })()}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* ─── Tools That Transform ─── */}
        <section className="py-10 sm:py-12 pl-0 lg:pl-12 border-l-0 lg:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden lg:block lg:-ml-[25px]" />
              <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wide">
                {toolsPhilosophy.title}
              </h2>
            </div>

            {/* Core Statement - Expanded for clarity */}
            <div className="mb-8 space-y-4">
              <StyledText text={toolsPhilosophy.content} className="text-base lg:text-lg text-text-secondary leading-relaxed" as="p" />
              <StyledText text={toolsPhilosophy.essence} className="text-base lg:text-lg text-text-primary leading-relaxed" as="p" />
            </div>

            {/* Visual Transformation Grid — "Rack Focus" hover cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {toolsPhilosophy.grid.map((item, index) => (
                <motion.div
                  key={item.verb}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }} viewport={SCROLL_ANIMATION_VP}
                  transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                  className="transform-card relative rounded-xl bg-layer border border-stroke hover:border-accent/30 overflow-hidden min-h-[100px] sm:min-h-[110px]"
                >
                  {/* Resting state — icon + verb, scales down & blurs on hover */}
                  <div className="card-resting absolute inset-0 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
                    <span className="card-icon block text-2xl sm:text-3xl text-accent/40 mb-2">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-text-primary">
                      {item.verb}
                    </span>
                  </div>
                  {/* Revealed state — verb + description, sharpens into focus */}
                  <div className="card-revealed absolute inset-0 p-4 sm:p-5 flex flex-col justify-center items-center text-center">
                    <span className="text-accent font-semibold text-sm mb-2">
                      {item.verb}
                    </span>
                    <StyledText
                      text={item.description}
                      className="text-xs text-text-secondary leading-relaxed"
                      as="p"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* The Mantra - Mobile responsive */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 py-6">
              <div className="h-px flex-1 max-w-8 sm:max-w-12 bg-gradient-to-r from-transparent to-stroke" />
              <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-text-tertiary tracking-[0.15em] sm:tracking-[0.25em] uppercase font-medium">
                <span>{toolsPhilosophy.mantra.input}</span>
                <span className="text-accent/50">→</span>
                <span className="text-accent">{toolsPhilosophy.mantra.transformation}</span>
                <span className="text-accent/50">→</span>
                <span>{toolsPhilosophy.mantra.output}</span>
              </div>
              <div className="h-px flex-1 max-w-8 sm:max-w-12 bg-gradient-to-l from-transparent to-stroke" />
            </div>

            {/* Closing Thought */}
            <StyledText text={toolsPhilosophy.closingThought} className="text-center text-sm text-text-tertiary italic" as="p" />
          </motion.div>
        </section>

        {/* ─── Guiding Principles ─── */}
        <section className="py-10 sm:py-12 pl-0 lg:pl-12 border-l-0 lg:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
               <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden lg:block lg:-ml-[25px]" />
               <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wide">
                Guiding Principles
              </h2>
            </div>

            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="principle-card group p-6 rounded-xl bg-layer border border-stroke hover:border-accent/30 hover:bg-layer-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <principle.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="space-y-2 min-w-0">
                      <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {principle.title}
                      </h3>
                      <StyledText
                        text={principle.description}
                        className="text-sm text-text-secondary leading-relaxed"
                        as="p"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── Architectural Philosophy ─── */}
        <section className="py-10 sm:py-12 pl-0 lg:pl-12 border-l-0 lg:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
               <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden lg:block lg:-ml-[25px]" />
               <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wide">
                Architectural Philosophy
              </h2>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-layer to-layer/50 border border-stroke overflow-hidden relative group/arch">
              {/* Resting state — blurs on hover */}
              <div className="arch-rest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <StyledText 
                  text={philosophy.architecturalPhilosophy.content}
                  className="text-lg text-text-secondary leading-relaxed mb-8"
                  as="p"
                />
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { label: 'Minimal', desc: 'Every component earns its place' },
                    { label: 'Efficient', desc: 'Performance as first-class citizen' },
                    { label: 'Extendable', desc: 'New features integrate seamlessly' },
                    { label: 'Maintainable', desc: 'Clear separation of concerns' },
                    { label: 'Consistent', desc: 'Deterministic, no surprises' },
                    { label: 'Elegant', desc: 'Thoughtful in every detail' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 py-2 border-b border-stroke/50 last:border-0"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <div>
                        <span className="text-sm font-medium text-text-primary">{item.label}</span>
                        <span className="text-sm text-text-tertiary"> — {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revealed state — fades in on hover */}
              <div className="arch-reveal absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
                <div className="relative z-10 px-6">
                  <StyledText text={philosophy.architecturalPhilosophy.revealText1} className="text-sm text-text-tertiary mb-3" as="p" />
                  <StyledText text={philosophy.architecturalPhilosophy.revealText2} className="text-base text-text-primary font-light leading-relaxed mb-4" as="p" />
                  <div className="w-8 h-px bg-accent/40 mx-auto mb-4" />
                  <StyledText text={philosophy.architecturalPhilosophy.revealText3} className="text-xs text-text-tertiary" as="p" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── Closing Quote ─── */}
        <section className="py-16 sm:py-20 pl-0 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="inline-block p-4 rounded-full bg-layer mb-6">
               <Infinity className="w-6 h-6 text-accent" />
            </div>
            <blockquote className="text-xl lg:text-2xl text-text-primary mb-6 font-light">
              <span className="italic">Creating what hasn't been built before,</span>
              <br />
              <em className="text-accent font-normal italic">one innovation at a time.</em>
            </blockquote>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full opacity-50" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;