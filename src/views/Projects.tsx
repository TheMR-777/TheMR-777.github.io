import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ChevronRight,
  AlertCircle,
  Lightbulb,
  Target,
  Github,
  Wrench,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData, type Project, type PersonalProject } from "../lib/portfolioDAL";
import DetailSheet from "../components/DetailSheet";
import { DetailSection } from "../components/DetailSection";
import { Surface } from "../components/Surface";
import { TagList } from "../components/TagList";
import { SCROLL_ANIMATION_VP } from "../constants/animations";
import { hasArchitecturalPhilosophy } from "../lib/portfolioGuards";
import { StyledText } from "../lib/styledText";
import { PageFooter } from "../components/PageFooter";
import type { NavigateFn } from "../types/navigation";

export function Projects({ onNavigate }: { onNavigate: NavigateFn }) {
  const { projects, personalProjects, computedStats } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPersonal, setSelectedPersonal] = useState<PersonalProject | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-12 pb-24 sm:pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h1 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
          Projects
        </h1>
        <p className="text-sm text-text-secondary">
          From enterprise platforms to personal tools — engineering solutions that create real value
        </p>
      </motion.div>

      {/* ─── Flagship Projects ─── */}
      <motion.section
        id="flagship-projects"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-6 rounded-md bg-accent-subtle flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
          </div>
          <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider">
            Flagship Projects<span className="text-text-disabled ml-1.5 font-normal">· {computedStats.flagshipProjects}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
              transition={{ duration: 0.4, delay: 0.08 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <Surface
                onClick={() => setSelectedProject(project)}
                interactive
                className="group h-full cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-[15px] font-medium text-text-primary mt-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-text-disabled group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                </div>

                <StyledText 
                  text={project.summary} 
                  className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3" 
                  as="p" 
                />

                <TagList
                  items={project.tech.slice(0, 4)}
                  tone="muted"
                  className="gap-1.5"
                  itemClassName="px-2 py-0.5 text-[10px] rounded-md"
                >
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] rounded-md text-text-disabled">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </TagList>
              </Surface>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── Personal Craft ─── */}
      <motion.section
        id="personal-craft"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 rounded-md bg-accent-subtle flex items-center justify-center">
            <Wrench className="w-3.5 h-3.5 text-accent" />
          </div>
          <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider">
            Personal Craft<span className="text-text-disabled ml-1.5 font-normal">· {computedStats.personalCraftProjects}</span>
          </h2>
        </div>
        <p className="text-xs text-text-tertiary mb-6 ml-9">
          Tools that transform — each one takes something in and produces something of real value
        </p>

        <div className="space-y-3">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
              transition={{ duration: 0.35, delay: 0.25 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <Surface
                onClick={() => setSelectedPersonal(project)}
                interactive
                padding="md"
                className="group flex items-start gap-4 cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors truncate">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-text-disabled font-medium whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <StyledText 
                    text={project.description} 
                    className="text-xs text-text-secondary leading-relaxed line-clamp-2" 
                    as="p" 
                  />
                  <TagList
                    items={project.tech.slice(0, 3)}
                    tone="muted"
                    className="gap-1.5 mt-2.5"
                    itemClassName="px-1.5 py-0.5 text-[10px] rounded"
                  >
                    {project.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] rounded text-text-disabled">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </TagList>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-text-tertiary hover:text-accent transition-colors rounded-md hover:bg-layer-active"
                      title="Live Demo"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-text-tertiary hover:text-accent transition-colors rounded-md hover:bg-layer-active"
                      title="Source Code"
                    >
                      <Github className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </a>
                  )}
                  <ChevronRight
                    className="w-3.5 h-3.5 text-text-disabled group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all"
                    strokeWidth={1.5}
                  />
                </div>
              </Surface>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── Flagship Detail Sheet ─── */}
      <DetailSheet
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        subtitle={selectedProject?.category}
      >
        {selectedProject && (
          <>
            <StyledText 
              text={selectedProject.description} 
              className="text-sm text-text-secondary leading-relaxed" 
              as="p" 
            />

            {selectedProject.challenge && (
              <DetailSection title="The Challenge" icon={AlertCircle}>
                <Surface padding="md" className="rounded-lg">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </Surface>
              </DetailSection>
            )}

            {hasArchitecturalPhilosophy(selectedProject) && (
              <DetailSection title="Architectural Philosophy">
                <div className="p-4 rounded-lg bg-accent-subtle border border-accent/20">
                  <StyledText 
                    text={selectedProject.architecturalPhilosophy!} 
                    className="text-sm text-text-primary leading-relaxed italic" 
                    as="p" 
                  />
                </div>
              </DetailSection>
            )}

            {selectedProject.approach && (
              <DetailSection title="The Approach" icon={Lightbulb}>
                <Surface padding="md" className="rounded-lg">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </Surface>
              </DetailSection>
            )}

            <DetailSection title="Measurable Impact" icon={Target}>
              <ul className="space-y-2 pl-5">
                {selectedProject.impact?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Technologies">
              <TagList items={selectedProject.tech} tone="accent" />
            </DetailSection>

            {selectedProject.link && selectedProject.link !== "#" && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            )}
          </>
        )}
      </DetailSheet>

      {/* ─── Personal Project Detail Sheet ─── */}
      <DetailSheet
        isOpen={!!selectedPersonal}
        onClose={() => setSelectedPersonal(null)}
        title={selectedPersonal?.title || ""}
        subtitle={selectedPersonal?.category}
      >
        {selectedPersonal && (
          <>
            <DetailSection title="The Story" icon={Lightbulb}>
              <StyledText 
                text={selectedPersonal.description} 
                className="text-sm text-text-secondary leading-relaxed" 
                as="p" 
              />
            </DetailSection>

            <Surface padding="md" className="rounded-lg">
              <span className="text-[10px] uppercase tracking-wider text-text-tertiary font-medium">
                Origin
              </span>
              <p className="text-sm text-text-secondary mt-1">
                {selectedPersonal.origin}
              </p>
            </Surface>

            <DetailSection title="Built With">
              <TagList items={selectedPersonal.tech} tone="accent" />
            </DetailSection>

            <div className="flex gap-3">
              {selectedPersonal.link && (
                <a
                  href={selectedPersonal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {selectedPersonal.repo && (
                <a
                  href={selectedPersonal.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-layer border border-stroke text-text-primary text-sm font-medium hover:bg-layer-hover transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </>
        )}
      </DetailSheet>

      {/* Footer Nudge */}
      <PageFooter 
        {...portfolioData.footers.projects}
        onNavigate={onNavigate}
      />
    </div>
  );
}
