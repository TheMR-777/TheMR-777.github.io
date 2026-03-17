import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight, AlertCircle, Lightbulb, Target, Github, Wrench, Sparkles, ArrowUpRight } from "lucide-react";
import { portfolioData, type Project, type PersonalProject } from "../data/portfolio";
import DetailSheet from "../components/DetailSheet";
import { SCROLL_ANIMATION_VP } from "../constants/animations";

export function Projects() {
  const { projects, personalProjects } = portfolioData;
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
            Flagship Projects
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
              <div
                onClick={() => setSelectedProject(project)}
                className="group h-full p-5 rounded-xl bg-layer border border-stroke cursor-pointer hover:bg-layer-hover hover:border-stroke-hover transition-colors"
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

                <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] rounded-md bg-layer-active border border-stroke text-text-tertiary"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] text-text-disabled">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
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
            Personal Craft
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
              <div
                onClick={() => setSelectedPersonal(project)}
                className="group flex items-start gap-4 p-4 rounded-xl bg-layer border border-stroke cursor-pointer hover:bg-layer-hover hover:border-stroke-hover transition-colors"
              >
                {/* Left: Title & Category */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors truncate">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-text-disabled font-medium whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech inline */}
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 text-[10px] rounded bg-layer-active border border-stroke text-text-tertiary"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] text-text-disabled px-1">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Links */}
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
              </div>
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
            <p className="text-sm text-text-secondary leading-relaxed">
              {selectedProject.description}
            </p>

            {selectedProject.challenge && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  The Challenge
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed p-4 rounded-lg bg-layer border border-stroke">
                  {selectedProject.challenge}
                </p>
              </div>
            )}

            {/* Architectural Philosophy - if exists */}
            {'architecturalPhilosophy' in selectedProject && selectedProject.architecturalPhilosophy && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                  Architectural Philosophy
                </h4>
                <div className="p-4 rounded-lg bg-accent-subtle border border-accent/20">
                  <p className="text-sm text-text-primary leading-relaxed italic">
                    {String(selectedProject.architecturalPhilosophy)}
                  </p>
                </div>
              </div>
            )}

            {selectedProject.approach && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Lightbulb className="w-3.5 h-3.5" />
                  The Approach
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed p-4 rounded-lg bg-layer border border-stroke">
                  {selectedProject.approach}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Target className="w-3.5 h-3.5" />
                Measurable Impact
              </h4>
              <ul className="space-y-2 pl-5">
                {selectedProject.impact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs rounded-lg bg-accent-subtle text-accent font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

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
            {/* The Story */}
            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5" />
                The Story
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {selectedPersonal.description}
              </p>
            </div>

            {/* Origin */}
            <div className="p-4 rounded-lg bg-layer border border-stroke">
              <span className="text-[10px] uppercase tracking-wider text-text-tertiary font-medium">
                Origin
              </span>
              <p className="text-sm text-text-secondary mt-1">
                {selectedPersonal.origin}
              </p>
            </div>

            {/* Tech */}
            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">
                Built With
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedPersonal.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs rounded-lg bg-accent-subtle text-accent font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
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
    </div>
  );
}
