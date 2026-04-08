import { motion } from 'framer-motion';
import { Lightbulb, Compass, Target, Layers, Sparkles, Infinity, BookOpen, ExternalLink, Play, Brain, type LucideIcon } from 'lucide-react';
import { SCROLL_ANIMATION_VP } from '../constants/animations';
import { portfolioData } from '../data/portfolio';
import { StyledText } from '../lib/styledText';

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

const journeySteps = philosophy.sections.map((section) => {
  const step: {
    title: string;
    content: string;
    highlight: string;
    discovery?: { title: string; story: string };
    phasedDiscovery?: { title: string; period: string; phases: { label: string; content: string }[]; link: string };
    metaSkill?: { title: string; story: string };
  } = {
    title: section.title,
    content: (section as any).content,
    highlight: (section as any).highlight,
  };
  if ((section as any).discovery) {
    step.discovery = (section as any).discovery;
  }
  if ((section as any).phasedDiscovery) {
    step.phasedDiscovery = (section as any).phasedDiscovery;
  }
  if ((section as any).metaSkill) {
    step.metaSkill = (section as any).metaSkill;
  }
  return step;
});

const { toolsPhilosophy } = philosophy;

const Philosophy = () => {
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

        {/* ─── Journey Steps ─── */}
        <section className="py-10 sm:py-12 pl-0 lg:pl-12 border-l-0 lg:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
               <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden lg:block lg:-ml-[25px]" />
               <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wide">
                The Driving Force
              </h2>
            </div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-accent/60 text-sm font-mono">0{index + 1}</span>
                      <h3 className="text-lg font-semibold text-text-primary">
                         {step.title}
                      </h3>
                    </div>
                    <StyledText text={step.content} className="text-text-secondary leading-relaxed pl-10" as="p" />
                    <div className="ml-10 mt-4 pl-4 border-l-2 border-accent/30 py-1">
                      <StyledText text={`"${step.highlight}"`} className="text-accent text-sm font-medium leading-relaxed italic" as="p" />
                    </div>

                    {/* Discovery Story — simple format (Horner's Method) */}
                    {step.discovery && (
                      <motion.div 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                        transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="ml-10 mt-6 p-5 rounded-xl discovery-artifact bg-mica border border-stroke"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-3.5 h-3.5 text-accent" />
                          </div>
                          <h4 className="text-sm font-semibold text-text-primary pt-1">
                            {step.discovery.title}
                          </h4>
                        </div>
                        <StyledText
                          text={step.discovery.story}
                          className="text-sm text-text-secondary leading-relaxed pl-10"
                          as="p"
                        />
                      </motion.div>
                    )}

                    {/* Granite story — concise, premium narrative card */}
                    {step.phasedDiscovery && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="ml-10 mt-6 rounded-xl discovery-artifact bg-mica border border-stroke overflow-hidden"
                      >
                        {/* ── Card Header: clear ownership of the narrative ── */}
                        <div className="px-5 pt-5 pb-4">
                          <div className="flex items-start gap-3.5">
                            <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Lightbulb className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-text-primary tracking-tight leading-snug">
                                {step.phasedDiscovery.title}
                              </h4>
                              <span className="text-[11px] text-text-tertiary mt-1 block">
                                {step.phasedDiscovery.period}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* ── Subtle separator between header and phases ── */}
                        <div className="mx-5 h-px bg-gradient-to-r from-stroke/60 via-stroke/30 to-transparent" />

                        {/* ── Phases: understated waypoints, not competing headlines ── */}
                        <div className="px-5 pt-4 pb-2">
                          {step.phasedDiscovery.phases.map((phase, phaseIndex) => (
                            <motion.div
                              key={phase.label}
                              initial={{ opacity: 0, x: -6 }}
                              whileInView={{ opacity: 1, x: 0 }} viewport={SCROLL_ANIMATION_VP}
                              transition={{ duration: 0.35, delay: 0.5 + phaseIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                              className="relative pl-6 pb-5 last:pb-3"
                            >
                              {/* Timeline connector line */}
                              {phaseIndex < step.phasedDiscovery!.phases.length - 1 && (
                                <div className="absolute left-[4.5px] top-[12px] bottom-0 w-px bg-gradient-to-b from-accent/25 to-accent/5" />
                              )}
                              {/* Timeline dot — small, refined */}
                              <div className="absolute left-0 top-[5px] w-[10px] h-[10px] rounded-full border-[1.5px] border-accent/40 bg-mica" />

                              {/* Phase label: quiet, elegant — acts as a whispered signpost */}
                              <span className="text-[11px] font-medium text-accent/70 tracking-wide">
                                {phase.label}
                              </span>
                              <StyledText
                                text={phase.content}
                                className="text-[13px] text-text-secondary leading-relaxed mt-1"
                                as="p"
                              />
                            </motion.div>
                          ))}
                        </div>

                        {/* ── Footer CTA ── */}
                        <div className="border-t border-stroke/40 px-5 py-3 bg-layer-active/30">
                          <a
                            href={step.phasedDiscovery.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-xs font-medium text-accent hover:text-accent-light transition-colors group/link"
                          >
                            <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center group-hover/link:bg-accent/20 transition-colors">
                              <Play className="w-2.5 h-2.5 text-accent ml-[1px]" fill="currentColor" />
                            </span>
                            <span>Watch the 40-second fix</span>
                            <ExternalLink className="w-3 h-3 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      </motion.div>
                    )}

                    {/* Meta-Skill story — The Ultimate Mindset */}
                    {step.metaSkill && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="ml-10 mt-6 p-6 rounded-xl discovery-artifact bg-mica border border-stroke"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                            <Brain className="w-4 h-4 text-accent" />
                          </div>
                          <h4 className="text-base font-semibold text-text-primary pt-1">
                            {step.metaSkill.title}
                          </h4>
                        </div>
                        <StyledText
                          text={step.metaSkill.story}
                          className="text-sm text-text-secondary leading-relaxed pl-11"
                          as="p"
                        />
                        <div className="mt-4 ml-11 flex items-center gap-2">
                          <div className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
                          <span className="text-[10px] text-accent/60 tracking-widest uppercase font-medium">
                            Explore. Connect. Transcend.
                          </span>
                          <div className="h-px flex-1 bg-gradient-to-l from-accent/20 to-transparent" />
                        </div>
                      </motion.div>
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
              "<span className="italic">Creating what hasn't been built before,</span>
              <br />
              <em className="text-accent font-normal italic">one innovation at a time.</em>"
            </blockquote>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full opacity-50" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;