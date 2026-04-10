import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { portfolioData } from "../lib/portfolioDAL";
import { Tooltip } from "../components/Tooltip";
import { SectionHeader } from "../components/SectionHeader";
import { Surface } from "../components/Surface";
import type { NavigateFn } from "../types/navigation";
import { SCROLL_ANIMATION_VP } from "../constants/animations";
import { overviewSocialLinks } from "../config/social";
import { StyledText } from "../lib/styledText";

interface OverviewProps {
  onNavigate: NavigateFn;
}

export function Overview({ onNavigate }: OverviewProps) {
  const { personal, experience, projects, skills } = portfolioData;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-12 pb-24 sm:pb-12">
      {/* Hero Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-subtle text-accent text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-3">
            {personal.name}
          </h1>
          <p className="text-xl text-text-secondary mb-4">
            {personal.role}
          </p>

          <div className="flex items-center gap-2 text-sm text-text-tertiary mb-6">
            <MapPin className="w-4 h-4" strokeWidth={1.5} />
            <span>{personal.location}</span>
          </div>

          {/* Tagline */}
          <StyledText 
            text={personal.about}
            className="text-base text-text-secondary leading-relaxed max-w-2xl mb-8"
            as="p"
          />

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {overviewSocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-lg bg-layer border border-stroke text-text-secondary hover:text-accent hover:border-stroke-hover transition-colors"
              >
                <link.icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Philosophy Teaser Removed */}

      {/* Stats with Tooltips */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Tooltip
            content={{
              title: "6+ Years Experience",
              description: "From teenage cybersecurity research and community leadership to professional software architecture, spanning mobile, web, and enterprise systems.",
              meta: "Since 2018"
            }}
            action={{
              label: "View experience",
              onClick: () => onNavigate({ tab: "experience", section: "experience-root" })
            }}
          >
            <div className="p-4 rounded-xl bg-layer border border-stroke hover:border-stroke-hover transition-colors cursor-default">
              <div className="text-2xl font-semibold text-text-primary mb-1">
                {personal.stats.experience}
              </div>
              <div className="text-xs text-text-tertiary">
                Experience
              </div>
            </div>
          </Tooltip>

          <Tooltip
            content={{
              title: "20+ Projects Delivered",
              description: "Enterprise systems, open source libraries, research simulations, and mobile applications across diverse domains.",
              meta: "Portfolio"
            }}
            action={{
              label: "Explore projects",
              onClick: () => onNavigate({ tab: "projects", section: "projects-root" })
            }}
          >
            <div className="p-4 rounded-xl bg-layer border border-stroke hover:border-stroke-hover transition-colors cursor-default">
              <div className="text-2xl font-semibold text-text-primary mb-1">
                {personal.stats.projects}
              </div>
              <div className="text-xs text-text-tertiary">
                Projects
              </div>
            </div>
          </Tooltip>

          <Tooltip
            content={{
              title: "200% Productivity Boost",
              description: "Achieved through the Employee Monitoring Suite — a flagship system engineered solo with zero defects at launch.",
              meta: "Impact"
            }}
            action={{
              label: "See how",
              onClick: () => onNavigate({ tab: "projects", section: "projects-root" })
            }}
          >
            <div className="p-4 rounded-xl bg-layer border border-stroke hover:border-stroke-hover transition-colors cursor-default">
              <div className="text-2xl font-semibold text-accent mb-1">
                {personal.stats.productivity}
              </div>
              <div className="text-xs text-text-tertiary">
                Productivity
              </div>
            </div>
          </Tooltip>

          <Tooltip
            content={{
              title: "3.73 / 4.0 CGPA",
              description: "BS Computer Science from University of the Punjab. Unofficial C++ TA from 2nd semester, first team to complete FYP and research simultaneously.",
              meta: "Academic"
            }}
            action={{
              label: "View credentials",
              onClick: () => onNavigate({ tab: "skills", section: "skills-education" })
            }}
          >
            <div className="p-4 rounded-xl bg-layer border border-stroke hover:border-stroke-hover transition-colors cursor-default">
              <div className="text-2xl font-semibold text-text-primary mb-1">
                {personal.stats.cgpa}
              </div>
              <div className="text-xs text-text-tertiary">
                CGPA
              </div>
            </div>
          </Tooltip>
        </div>
      </motion.section>

      {/* Core Skills Preview */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeader
          title="Core Expertise"
          action={{
            label: "View all",
            onClick: () => onNavigate({ tab: "skills", section: "skills-core" }),
            icon: ArrowRight,
          }}
        />

        <div className="flex flex-wrap" style={{ gap: '12px 8px' }}>
          {skills.core.map((skill) => (
            <Tooltip
              key={skill.name}
              content={{
                title: skill.name,
                description: skill.description
              }}
            >
              <span className="inline-block px-3 py-2 rounded-lg bg-layer border border-stroke text-sm text-text-secondary hover:border-stroke-hover transition-colors cursor-default">
                {skill.name}
              </span>
            </Tooltip>
          ))}
        </div>
      </motion.section>

      {/* Recent Experience */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeader
          title="Recent Experience"
          action={{
            label: "View all",
            onClick: () => onNavigate("experience"),
            icon: ArrowRight,
          }}
        />

        <div className="space-y-3">
          {experience.slice(0, 2).map((job) => (
            <div
              key={job.company}
              onClick={() => onNavigate("experience")}
              className="group p-5 rounded-xl bg-layer border border-stroke cursor-pointer hover:bg-layer-hover hover:border-stroke-hover transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-sm text-accent">{job.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-tertiary whitespace-nowrap">
                    {job.period}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-disabled group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
              <p className="text-xs text-text-secondary line-clamp-2">
                {job.summary}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeader
          title="Featured Projects"
          action={{
            label: "View all",
            onClick: () => onNavigate("projects"),
            icon: ArrowRight,
          }}
        />

        <div className="grid md:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.title}
              onClick={() => onNavigate("projects")}
              className="group p-5 rounded-xl bg-layer border border-stroke cursor-pointer hover:bg-layer-hover hover:border-stroke-hover transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-sm font-medium text-text-primary mt-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-text-disabled group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <p className="text-xs text-text-secondary line-clamp-2 mb-3">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span 
                    key={t}
                    className="px-2 py-0.5 text-[10px] rounded-md bg-layer-active border border-stroke text-text-tertiary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Personal Craft Teaser */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeader
          title="Personal Craft"
          subtitle="tools that transform"
          action={{
            label: "View all",
            onClick: () => onNavigate({ tab: "projects", section: "personal-craft" }),
            icon: ArrowRight,
          }}
        />

        <div className="space-y-2">
          {portfolioData.personalProjects.slice(0, 3).map((project) => (
            <Surface
              key={project.title}
              onClick={() => onNavigate("projects")}
              interactive
              padding="md"
              className="group flex items-center gap-4 cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors truncate">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-text-disabled uppercase tracking-wider whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
                <p className="text-xs text-text-secondary line-clamp-1">
                  {project.description}
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-text-disabled group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </Surface>
          ))}
        </div>
      </motion.section>

      {/* Signature */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-20 mb-8 flex flex-col items-center text-center"
      >
        <div className="w-8 h-px bg-stroke mb-6" />
        <p className="text-sm text-text-tertiary leading-relaxed">
          "Creating what hasn't been built before,{" "}
          <span className="discovery-text italic font-medium">one innovation at a time.</span>"
        </p>
        <button 
          onClick={() => onNavigate("philosophy")}
          className="group flex items-center gap-1.5 mt-4 text-xs text-text-disabled hover:text-accent transition-colors"
        >
          <span>Read my philosophy</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
