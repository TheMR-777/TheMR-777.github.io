import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Calendar, MapPin, ChevronRight, ChevronDown,
  Sparkles, Target, Layers, Shield, Zap, Globe, Radio, Cog, FileText, BarChart3,
  TrendingUp, Award, Users, Rocket
} from "lucide-react";
import { portfolioData, type Experience, type AceProject } from "../lib/portfolioDAL";
import DetailSheet from "../components/DetailSheet";
import { DetailSection } from "../components/DetailSection";
import { Surface } from "../components/Surface";
import { TagList } from "../components/TagList";
import { Tooltip } from "../components/Tooltip";
import type { NavigateFn } from "../types/navigation";
import { SCROLL_ANIMATION_VP } from "../constants/animations";
import { getArchitecturalHighlights } from "../lib/portfolioGuards";
import { StyledText } from "../lib/styledText";
import { PageFooter } from "../components/PageFooter";


interface ExperienceProps {
  onNavigate?: NavigateFn;
}

const projectIcons: Record<string, typeof Layers> = {
  "Employee Monitoring Suite": Sparkles,
  "Evolver — Auto-Update Engine": Zap,
  "ERP Platform Core": Layers,
  "ERP Business Modules": Zap,
  "ACE Password Vault": Shield,
  "External Partner Integrations": Globe,
  "Real-time Infrastructure": Radio,
  "Background Jobs Framework": Cog,
  "Logging Framework": FileText,
  "Unified Reporting Engine": BarChart3
};

export function Experience({ onNavigate }: ExperienceProps) {
  const { experience } = portfolioData;
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [selectedAceProject, setSelectedAceProject] = useState<AceProject | null>(null);
  const [expandedCompany, setExpandedCompany] = useState<string | null>("ACE Money Transfer");
  const architecturalHighlights = selectedAceProject ? getArchitecturalHighlights(selectedAceProject) : [];

  // Key impact stats across all experiences
  const impactStats = [
    { 
      icon: TrendingUp, 
      value: "200%", 
      label: "Productivity Boost", 
      detail: "via Employee Monitoring Suite",
      tooltip: {
        title: "200% Productivity Increase",
        description: "The Employee Monitoring Suite — engineered solo over one year — enabled a measurable 200% productivity boost across the entire organization.",
        action: { label: "View project", section: "flagship-projects" }
      }
    },
    { 
      icon: Award, 
      value: "Zero", 
      label: "Defects at Launch", 
      detail: "flagship monitoring system",
      tooltip: {
        title: "Zero-Defect Launch",
        description: "Deployed the Employee Monitoring Suite to production with no bugs reported — a testament to rigorous testing and disciplined engineering.",
        action: { label: "See approach", section: "flagship-projects" }
      }
    },
    { 
      icon: Users, 
      value: "6", 
      label: "Countries Reached", 
      detail: "via cybersecurity community",
      tooltip: {
        title: "Global Cybersecurity Community",
        description: "Founded and led an international community spanning Pakistan, Iran, India, Australia, Finland, and Bangladesh — mentoring aspiring security researchers.",
        action: { label: "View community", section: "about-community" }
      }
    },
    { 
      icon: Rocket, 
      value: "10+", 
      label: "Enterprise Systems", 
      detail: "engineered at ACE",
      tooltip: {
        title: "10+ Enterprise Systems",
        description: "From the Employee Monitoring Suite and ERP platform to Background Jobs, Logging, and Reporting Engine — a comprehensive engineering footprint.",
        action: { label: "Explore all", section: "experience-timeline" }
      }
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-12 pb-24 sm:pb-12" id="experience-timeline">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h1 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
          Experience
        </h1>
        <p className="text-sm text-text-secondary">
          From internship to architecture consultant — building systems that transform enterprises and establish new standards
        </p>

        {/* Impact Stats - with refined cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          {impactStats.map((stat, idx) => (
            <Tooltip
              key={stat.label}
              content={{
                title: stat.tooltip.title,
                description: stat.tooltip.description
              }}
              action={onNavigate ? {
                label: stat.tooltip.action.label,
                onClick: () => {
                  const section = stat.tooltip.action.section;
                  if (section === "flagship-projects") {
                    onNavigate({ tab: "projects", section: "flagship-projects" });
                  } else if (section === "about-community") {
                    onNavigate({ tab: "about", section: "about-community" });
                  } else {
                    onNavigate("experience");
                  }
                }
              } : undefined}
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                transition={{ delay: 0.1 + idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-4 rounded-xl bg-layer border border-stroke hover:border-accent/40 hover:bg-layer-hover transition-all duration-300 group cursor-default overflow-hidden"
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-500" />
                <stat.icon className="w-4 h-4 text-accent mb-2.5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <div className="text-2xl font-semibold text-text-primary tracking-tight">{stat.value}</div>
                <div className="text-xs font-medium text-text-secondary mt-0.5">{stat.label}</div>
                <div className="text-[10px] text-text-tertiary mt-1">{stat.detail}</div>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line - hidden on mobile */}
        <div className="absolute left-[19px] top-6 bottom-6 w-px bg-stroke hidden sm:block" />

        <div className="space-y-4 sm:space-y-6">
          {experience.map((job, index) => {
            const isACE = job.company === "ACE Money Transfer";
            const isExpanded = expandedCompany === job.company;

            return (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-0 sm:pl-12"
              >
                {/* Timeline dot - hidden on mobile, simple design matching About's Journey */}
                <div className="absolute left-[15px] top-6 w-2.5 h-2.5 rounded-full bg-accent border-2 border-content hidden sm:block" />

                {/* Card - clean design matching other pages */}
                <div className="rounded-xl bg-layer border border-stroke overflow-hidden">
                  {/* Header - Always visible */}
                  <div
                    onClick={() => {
                      if (isACE) {
                        setExpandedCompany(isExpanded ? null : job.company);
                      } else {
                        setSelectedExp(job);
                      }
                    }}
                    className="group p-5 cursor-pointer hover:bg-layer-hover transition-colors"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-accent" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-[15px] font-medium text-text-primary group-hover:text-accent transition-colors">
                            {job.role}
                          </h3>
                          <p className="text-sm text-accent mt-0.5">{job.company}</p>
                        </div>
                      </div>
                      {isACE ? (
                        <ChevronDown 
                          className={`w-4 h-4 text-text-disabled group-hover:text-text-tertiary transition-all flex-shrink-0 mt-1 ${isExpanded ? 'rotate-180' : ''}`}
                          strokeWidth={1.5} 
                        />
                      ) : (
                        <ChevronRight 
                          className="w-4 h-4 text-text-disabled group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" 
                          strokeWidth={1.5} 
                        />
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-text-tertiary mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                        {job.location}
                      </span>
                    </div>

                    {/* Summary */}
                    <StyledText 
                      text={job.summary} 
                      className="text-xs text-text-secondary leading-relaxed" 
                      as="p" 
                    />

                    {/* Highlights - clean bullet list */}
                    {job.highlights && job.highlights.length > 0 && !isACE && (
                      <div className="mt-4 pt-3 border-t border-stroke/50">
                        <ul className="space-y-1.5">
                          {job.highlights.slice(0, 3).map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-text-secondary"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                              <StyledText text={highlight} className="leading-relaxed" as="span" />
                            </li>
                          ))}
                          {job.highlights.length > 3 && (
                            <li className="text-[10px] text-text-disabled pl-3">
                              +{job.highlights.length - 3} more highlights
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* ACE Projects Expandable Section */}
                  {isACE && (
                    <AnimatePresence>
                      {isExpanded && job.aceProjects && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-4 border-t border-stroke bg-gradient-to-b from-layer-active/50 to-transparent">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-6 h-6 rounded-md bg-accent-subtle flex items-center justify-center">
                                <Layers className="w-3 h-3 text-accent" />
                              </div>
                              <p className="text-[11px] uppercase tracking-wider text-text-secondary font-medium">
                                Projects & Systems Engineered
                              </p>
                            </div>
                            <div className="grid gap-3">
                              {job.aceProjects.map((project, pIdx) => {
                                const Icon = projectIcons[project.name] || Layers;
                                return (
                                  <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }} viewport={SCROLL_ANIMATION_VP}
                                    transition={{ delay: pIdx * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedAceProject(project);
                                    }}
                                    className="group/project relative p-4 rounded-lg bg-layer border border-stroke hover:bg-layer-hover hover:border-stroke-hover cursor-pointer transition-all duration-300"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center group-hover/project:bg-accent/20 transition-colors">
                                        <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                                                            <div className="flex items-start justify-between gap-2">
                                      <div>
                                        <h4 className="text-sm font-medium text-text-primary group-hover/project:text-accent transition-colors">
                                          {project.name}
                                        </h4>
                                        <p className="text-[10px] text-text-tertiary mt-0.5">
                                          {project.type} • {project.period}
                                        </p>
                                      </div>
                                      <ChevronRight 
                                        className="w-3.5 h-3.5 text-text-disabled group-hover/project:text-accent group-hover/project:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" 
                                        strokeWidth={1.5} 
                                      />
                                    </div>
                                        <StyledText 
                                          text={project.summary} 
                                          className="text-xs text-text-secondary mt-2 line-clamp-2" 
                                          as="p" 
                                        />
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>

                            {/* Overall Impact */}
                            <div className="mt-6 pt-5 border-t border-stroke/50">
                              <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 rounded-md bg-accent-subtle flex items-center justify-center">
                                  <Target className="w-3 h-3 text-accent" />
                                </div>
                                <p className="text-[11px] uppercase tracking-wider text-text-secondary font-medium">
                                  Cumulative Impact
                                </p>
                              </div>
                              <div className="grid sm:grid-cols-2 gap-2.5">
                                {job.impact?.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 4 }}
                                    whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
                                    transition={{ delay: 0.2 + idx * 0.03, duration: 0.3 }}
                                    className="flex items-start gap-2.5 text-xs text-text-secondary p-3 rounded-lg bg-mica border border-stroke/30 hover:border-stroke transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                    <StyledText text={item} className="leading-relaxed" as="span" />
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Link to Projects */}
                            {onNavigate && (
                              <motion.button
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} viewport={SCROLL_ANIMATION_VP}
                                transition={{ delay: 0.3 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigate({ tab: "projects", section: "flagship-projects" });
                                }}
                                className="mt-5 w-full py-3 text-xs text-text-secondary hover:text-accent bg-mica hover:bg-layer border border-stroke hover:border-accent/40 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                              >
                                <span className="font-medium">View these projects in detail</span>
                                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                              </motion.button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Sheet for non-ACE experiences */}
      <DetailSheet
        isOpen={!!selectedExp}
        onClose={() => setSelectedExp(null)}
        title={selectedExp?.role || ""}
        subtitle={selectedExp?.company}
      >
        {selectedExp && (
          <>
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" strokeWidth={1.5} />
                {selectedExp.period}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                {selectedExp.location}
              </span>
            </div>

            <DetailSection title="Overview">
              <StyledText 
                text={selectedExp.description} 
                className="text-sm text-text-secondary leading-relaxed" 
                as="p" 
              />
            </DetailSection>

            {selectedExp.highlights && selectedExp.highlights.length > 0 && (
              <DetailSection title="Key Highlights" icon={Sparkles}>
                <div className="space-y-2">
                  {selectedExp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </DetailSection>
            )}

            {selectedExp.modules && selectedExp.modules.length > 0 && (
              <DetailSection title="Core Modules Engineered" icon={Sparkles}>
                <div className="space-y-3">
                  {selectedExp.modules.map((mod, idx) => (
                    <Surface key={idx} padding="md" className="rounded-lg">
                      <h5 className="text-sm font-medium text-text-primary mb-1">
                        {mod.name}
                      </h5>
                      <p className="text-xs text-text-secondary leading-relaxed mb-2">
                        {mod.description}
                      </p>
                      <span className="text-[10px] text-accent font-medium">
                        → {mod.impact}
                      </span>
                    </Surface>
                  ))}
                </div>
              </DetailSection>
            )}

            {selectedExp.impact && selectedExp.impact.length > 0 && (
              <DetailSection title="Measurable Impact" icon={Target}>
                <ul className="space-y-2 pl-5">
                  {selectedExp.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}

            <DetailSection title="Technologies">
              <TagList items={selectedExp.tech} tone="accent" />
            </DetailSection>
          </>
        )}
      </DetailSheet>

      {/* Detail Sheet for ACE Projects */}
      <DetailSheet
        isOpen={!!selectedAceProject}
        onClose={() => setSelectedAceProject(null)}
        title={selectedAceProject?.name || ""}
        subtitle={selectedAceProject?.type}
      >
        {selectedAceProject && (
          <>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Calendar className="w-4 h-4" strokeWidth={1.5} />
              {selectedAceProject.period}
            </div>

            <DetailSection title="Overview">
              <StyledText
                text={selectedAceProject.description}
                className="text-sm text-text-secondary leading-relaxed"
                as="p"
              />
            </DetailSection>

            {selectedAceProject.architecturalPhilosophy && (
              <DetailSection title="Architectural Philosophy">
                <div className="p-4 rounded-lg bg-accent-subtle border border-accent/20">
                  <StyledText
                    text={selectedAceProject.architecturalPhilosophy}
                    className="text-sm text-text-primary leading-relaxed italic"
                    as="p"
                  />
                </div>
                {selectedAceProject.architecturalOutcomes && (
                  <div className="mt-3 space-y-1.5">
                    {selectedAceProject.architecturalOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                )}
              </DetailSection>
            )}

            {selectedAceProject.approach && (
              <DetailSection title="The Approach">
                <Surface padding="md" className="rounded-lg">
                  <StyledText
                    text={selectedAceProject.approach}
                    className="text-sm text-text-secondary leading-relaxed"
                    as="p"
                  />
                </Surface>
              </DetailSection>
            )}

            {architecturalHighlights.length > 0 && (
              <DetailSection title="Architectural Highlights" icon={Cog}>
                <Surface padding="md" className="rounded-lg space-y-2">
                  {architecturalHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </Surface>
              </DetailSection>
            )}

            {selectedAceProject.modules && selectedAceProject.modules.length > 0 && (
              <DetailSection title="Core Modules" icon={Sparkles}>
                <div className="space-y-3">
                  {selectedAceProject.modules.map((mod, idx) => (
                    <Surface key={idx} padding="md" className="rounded-lg">
                      <h5 className="text-sm font-medium text-text-primary mb-1">
                        {mod.name}
                      </h5>
                      <StyledText
                        text={mod.description}
                        className="text-xs text-text-secondary leading-relaxed mb-2"
                        as="p"
                      />
                      <span className="text-[10px] text-accent font-medium">
                        → {mod.impact}
                      </span>
                    </Surface>
                  ))}
                </div>
              </DetailSection>
            )}

            {selectedAceProject.partners && (
              <DetailSection title="Partners Integrated">
                <TagList items={selectedAceProject.partners} tone="default" />
              </DetailSection>
            )}

            {selectedAceProject.impact && selectedAceProject.impact.length > 0 && (
              <DetailSection title="Measurable Impact" icon={Target}>
                <ul className="space-y-2 pl-5">
                  {selectedAceProject.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}

            <DetailSection title="Technologies">
              <TagList items={selectedAceProject.tech} tone="accent" />
            </DetailSection>
          </>
        )}
      </DetailSheet>

      {/* Footer Nudge */}
      {onNavigate && (
        <PageFooter 
          {...portfolioData.footers.experience}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}
