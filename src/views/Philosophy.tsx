import { motion } from 'framer-motion';
import { Lightbulb, Compass, Target, Layers, Sparkles, Infinity, BookOpen } from 'lucide-react';
import { SCROLL_ANIMATION_VP } from '../constants/animations';

const Philosophy = () => {
  const principles = [
    {
      icon: Compass,
      title: 'Question the Status Quo',
      description: 'I don\'t accept "because that\'s how it\'s done." I question existing implementations and seek deeper understanding.',
    },
    {
      icon: Layers,
      title: 'Simplicity as Sophistication',
      description: 'True mastery shows in making complex things simple. I eliminate unnecessary complexity and find elegant paths.',
    },
    {
      icon: Target,
      title: 'Optimization Instinct',
      description: 'I naturally spot inefficiencies—where small changes yield disproportionate gains.',
    },
    {
      icon: Lightbulb,
      title: 'Domain-Specific Solutions',
      description: 'Each problem deserves a solution tailored to its unique constraints, not forced generic templates.',
    },
    {
      icon: Sparkles,
      title: 'Continuous Betterment',
      description: 'Making things genuinely better, not just different. Seeking meaningful improvements that create lasting value.',
    },
    {
      icon: BookOpen,
      title: 'Philosophical Depth',
      description: 'I think deeply about the "why" behind decisions. Understanding systems holistically, building intuition over recipes.',
    },
  ];

  const journeySteps = [
    {
      title: 'The Journey Over the Goal',
      content: 'Whether architecting a comprehensive system or spending hours refining a Fibonacci sequence, the experience is the same: an insatiable curiosity that drives me to discover one more micro-optimization, one more elegant simplification.',
      highlight: 'The destination is just a waypoint—the real reward is the infinite richness of the journey itself.',
    },
    {
      title: 'The Beauty in Fundamentals',
      content: 'I vividly remember iterating on fundamental algorithms for far longer than anyone would consider "reasonable"—not because I had to, but because each iteration revealed something new. A zero-branch Fibonacci by seeding with −1 and 1. A sieve optimization that shaved microseconds.',
      highlight: 'These aren\'t just technical wins; they\'re discoveries.',
      discovery: {
        title: "Rediscovering Horner's Method",
        story: "During university, frustrated with the heavy calculations of binary-to-decimal conversion (even with shortcuts), I experimented and found my own technique: start from the leftmost 1, move right — multiply the result by 2, add the next digit. Repeat until the end. Years later, I learned I had independently discovered Horner's Method of base conversion — a moment that validated my trust in mathematical intuition."
      }
    },
    {
      title: 'Succeeding Within the Failures',
      content: 'Sometimes the original goal remains out of reach—but along the way, I stumble upon something profound. A technique. An insight. A connection I hadn\'t anticipated.',
      highlight: 'Failure isn\'t an endpoint—it\'s a checkpoint where unexpected treasures reveal themselves.',
    },
  ];

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
              
              <p className="pl-5 text-lg lg:text-xl text-text-secondary font-light leading-relaxed">
                The scale of the goal has{' '}
                <span className="text-text-primary">never</span>{' '}
                mattered to me—what matters is the{' '}
                <span className="font-medium text-accent">journey</span>{' '}
                of getting there.
              </p>
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
                  <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                    Whether I'm architecting a comprehensive system like the{' '}
                    <span className="text-text-primary font-medium">Employee Monitoring Suite</span>, or spending 
                    hours refining something as "simple" as a prime number generation algorithm, the 
                    experience is the same: an{' '}
                    <span className="text-accent font-medium">insatiable curiosity</span>{' '}
                    that drives me to discover one more micro-optimization, one more elegant 
                    simplification, one more insight I hadn't seen before.
                  </p>
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
                    
                    <p className="text-text-secondary leading-relaxed pl-10">
                      {step.content}
                    </p>
                    
                    <div className="ml-10 mt-4 pl-4 border-l-2 border-accent/30 py-1">
                      <p className="text-accent text-sm font-medium leading-relaxed italic">
                        "{step.highlight}"
                      </p>
                    </div>

                    {/* Discovery Story — appears for "The Beauty in Fundamentals" */}
                    {step.discovery && (
                      <motion.div 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                        transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="ml-10 mt-6 p-5 rounded-xl bg-mica border border-stroke"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-3.5 h-3.5 text-accent" />
                          </div>
                          <h4 className="text-sm font-semibold text-text-primary pt-1">
                            {step.discovery.title}
                          </h4>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed pl-10">
                          {step.discovery.story}
                        </p>
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
                Tools That Transform
              </h2>
            </div>

            {/* Core Statement - Expanded for clarity */}
            <div className="mb-8 space-y-4">
              <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                Most software exists to <span className="text-text-primary font-medium">remember</span> — 
                to store records, log transactions, and keep notes organized. Important work, 
                but not what ignites my passion.
              </p>
              <p className="text-base lg:text-lg text-text-primary leading-relaxed">
                What excites me is building software that takes something <span className="text-text-secondary">in</span>, 
                and gives something <span className="text-accent font-medium">genuinely new</span> back. 
                Software that <span className="text-accent font-medium">transforms</span>.
              </p>
            </div>

            {/* Visual Transformation Grid - Cards with inline hover description */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { verb: 'Reveal', icon: '◐', description: 'Making the invisible visible — uncovering hidden patterns' },
                { verb: 'Simplify', icon: '◇', description: 'Reducing complexity to clarity — distilling essence' },
                { verb: 'Automate', icon: '↻', description: 'Freeing humans from repetitive, mundane work' },
                { verb: 'Connect', icon: '⬡', description: 'Bridging isolated systems — creating synergy' },
                { verb: 'Simulate', icon: '◈', description: 'Replacing costly trials with digital insight' },
                { verb: 'Empower', icon: '△', description: 'Enabling capabilities that didn\'t exist before' },
              ].map((item, index) => (
                <motion.div
                  key={item.verb}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }} viewport={SCROLL_ANIMATION_VP}
                  transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                  className="group relative p-4 sm:p-5 rounded-xl bg-layer border border-stroke hover:border-accent/40 hover:bg-layer-hover transition-all duration-500 ease-out overflow-hidden min-h-[100px] sm:min-h-[110px]"
                >
                  {/* Default state - icon and verb centered */}
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-3">
                    <span className="block text-2xl sm:text-3xl text-accent/50 mb-2 transition-colors duration-500 group-hover:text-accent">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-text-primary">
                      {item.verb}
                    </span>
                  </div>
                  
                  {/* Hover state - description revealed */}
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-center items-center text-center opacity-0 translate-y-3 transition-all duration-500 ease-out delay-75 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-accent font-semibold text-sm mb-2">
                      {item.verb}
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* The Mantra - Mobile responsive */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 py-6">
              <div className="h-px flex-1 max-w-8 sm:max-w-12 bg-gradient-to-r from-transparent to-stroke" />
              <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-text-tertiary tracking-[0.15em] sm:tracking-[0.25em] uppercase font-medium">
                <span>Input</span>
                <span className="text-accent/50">→</span>
                <span className="text-accent">Transformation</span>
                <span className="text-accent/50">→</span>
                <span>Value</span>
              </div>
              <div className="h-px flex-1 max-w-8 sm:max-w-12 bg-gradient-to-l from-transparent to-stroke" />
            </div>

            {/* Closing Thought */}
            <p className="text-center text-sm text-text-tertiary italic">
              Software worth building leaves the world different than it found it.
            </p>
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
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {principle.description}
                      </p>
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

            <div className="p-8 rounded-2xl bg-gradient-to-br from-layer to-layer/50 border border-stroke">
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                I don't just <span className="text-text-primary">memorize</span> patterns—I 
                understand them at their core: <span className="text-accent">what problem</span> each 
                pattern solves, <span className="text-accent">how</span> it solves it, and <span className="text-accent">where it falls short</span>.
              </p>
              
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
