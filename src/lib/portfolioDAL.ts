/**
 * Portfolio Data Access Layer (DAL)
 *
 * This module provides abstracted data access methods for portfolio data.
 * It uses a layered architecture to reduce redundancy:
 *
 * 1. MAPPER FUNCTIONS: Pure functions that transform entities to display types
 * 2. FILTER FUNCTIONS: Generic functions that filter and map collections
 * 3. SELECTORS: Public API methods that use the above abstractions
 *
 * This design allows for easy composition and reduces code duplication.
 */

import { ProjectEntity, ExperienceEntity } from "../types/portfolio";
import * as RawData from "../data/portfolio";

export interface FlagshipProject {
  title: string;
  category: string;
  tech: string[];
  summary: string;
  description: string;
  impact?: string[];
  link?: string;
  challenge?: string;
  approach?: string;
  architecturalPhilosophy?: string;
}

export interface PersonalProjectDisplay {
  title: string;
  category: string;
  description: string;
  origin: string;
  tech: string[];
  link?: string;
  repo?: string;
}

export interface OpenSourceProject {
  project: string;
  role: string;
  description: string;
  link: string;
}

export interface ExperienceDisplay {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  description: string;
  tech: string[];
  highlights?: string[];
  impact?: string[];
  modules?: { name: string; description: string; impact: string }[];
  aceProjects?: AceProjectDisplay[];
}

export interface AceProjectDisplay {
  name: string;
  type: string;
  period: string;
  summary: string;
  description: string;
  tech: string[];
  impact: string[];
  architecturalPhilosophy?: string;
  architecturalOutcomes?: string[];
  architecturalHighlights?: string[];
  approach?: string;
  modules?: { name: string; description: string; impact: string }[];
  partners?: string[];
}

// --- MAPPER FUNCTIONS ---
// Pure functions that transform raw entities to display-ready objects
// Each mapper handles the specific mapping logic for a display type
const mapToFlagshipProject = (p: ProjectEntity): FlagshipProject => {
  const res: FlagshipProject = {
    title: p.title,
    category: p.category || '',
    tech: p.tech,
    summary: p.summary,
    description: p.description,
    impact: p.impact,
    link: p.link
  };
  if (p.challenge) res.challenge = p.challenge;
  if (p.approach) res.approach = p.approach;
  if (p.architecturalPhilosophy) res.architecturalPhilosophy = p.architecturalPhilosophy;
  return res;
};

const mapToPersonalProject = (p: ProjectEntity): PersonalProjectDisplay => ({
  title: p.title,
  category: p.category || '',
  description: p.description,
  origin: p.origin || '',
  tech: p.tech,
  link: p.link,
  repo: p.repo
});

const mapToOpenSourceProject = (p: ProjectEntity): OpenSourceProject => ({
  project: p.title,
  role: p.roleOpenSource || '',
  description: p.description,
  link: p.link || ''
});

const mapToExperience = (exp: ExperienceEntity, projectsDb: Record<string, ProjectEntity>): ExperienceDisplay => {
  const result: ExperienceDisplay = {
    company: exp.company,
    role: exp.role,
    period: exp.period,
    location: exp.location,
    summary: exp.summary,
    description: exp.description,
    tech: exp.tech,
  };

  if (exp.highlights) result.highlights = exp.highlights;
  if (exp.impact) result.impact = exp.impact;
  if (exp.modules) result.modules = exp.modules;

  if (exp.associatedProjectIds && exp.associatedProjectIds.length > 0) {
    result.aceProjects = exp.associatedProjectIds.map(pid => {
      const p = projectsDb[pid];
      const aceProj: AceProjectDisplay = {
        name: p.title,
        type: p.typeAce || '',
        period: p.periodAce || '',
        summary: p.summary,
        description: p.descriptionAce || p.description,
        tech: p.techAce || p.tech,
        impact: p.impactAce || p.impact || [],
      };

      if (p.architecturalPhilosophyAce || p.architecturalPhilosophy)
        aceProj.architecturalPhilosophy = p.architecturalPhilosophyAce || p.architecturalPhilosophy;
      if (p.architecturalOutcomes) aceProj.architecturalOutcomes = p.architecturalOutcomes;
      if (p.architecturalHighlights) aceProj.architecturalHighlights = p.architecturalHighlights;
      if (p.approachAce || p.approach) aceProj.approach = p.approachAce || p.approach;
      if (p.modules) aceProj.modules = p.modules;
      if (p.partners) aceProj.partners = p.partners;

      return aceProj;
    });
  }
  return result;
};

// --- FILTER FUNCTIONS ---
// Generic, reusable functions that combine filtering and mapping
// Enable different query patterns while reusing mapping logic
const filterProjects = <T>(
  projectsDb: Record<string, ProjectEntity>,
  predicate: (p: ProjectEntity) => boolean,
  mapper: (p: ProjectEntity) => T
): T[] => {
  return Object.values(projectsDb)
    .filter(predicate)
    .map(mapper);
};

const filterExperiences = (
  experiencesDb: Record<string, ExperienceEntity>,
  projectsDb: Record<string, ProjectEntity>,
  predicate?: (exp: ExperienceEntity) => boolean
): ExperienceDisplay[] => {
  const experiences = predicate
    ? Object.values(experiencesDb).filter(predicate)
    : Object.values(experiencesDb);

  return experiences.map(exp => mapToExperience(exp, projectsDb));
};

// --- PUBLIC SELECTOR API ---
// Public methods that provide specific data access patterns
// Use the abstracted mapper and filter functions internally
export const Selectors = {
  getFlagshipProjects(projectsDb: Record<string, ProjectEntity>): FlagshipProject[] {
    return filterProjects(projectsDb, p => p.isFlagship, mapToFlagshipProject);
  },

  getFeaturedProjects(projectsDb: Record<string, ProjectEntity>): FlagshipProject[] {
    return filterProjects(projectsDb, p => p.isFlagship && p.featured, mapToFlagshipProject);
  },
  
  getPersonalProjects(projectsDb: Record<string, ProjectEntity>): PersonalProjectDisplay[] {
    return filterProjects(projectsDb, p => p.isPersonalCraft, mapToPersonalProject);
  },

  getFeaturedPersonalProjects(projectsDb: Record<string, ProjectEntity>): PersonalProjectDisplay[] {
    return filterProjects(projectsDb, p => p.isPersonalCraft && p.featured, mapToPersonalProject);
  },

  getOpenSourceProjects(projectsDb: Record<string, ProjectEntity>): OpenSourceProject[] {
    return filterProjects(projectsDb, p => p.isOpenSource, mapToOpenSourceProject);
  },

  getExperiences(experiencesDb: Record<string, ExperienceEntity>, projectsDb: Record<string, ProjectEntity>): ExperienceDisplay[] {
    return filterExperiences(experiencesDb, projectsDb);
  },

  getFeaturedExperiences(experiencesDb: Record<string, ExperienceEntity>, projectsDb: Record<string, ProjectEntity>): ExperienceDisplay[] {
    return filterExperiences(experiencesDb, projectsDb, exp => exp.featured);
  }
};

/**
 * The unified Portfolio Data access layer.
 * Composes raw data from portfolio.ts with the transformation logic.
 */
export const portfolioData = {
  ...RawData,

  // Transformed properties
  get experience() {
    return Selectors.getExperiences(RawData.experiencesDb, RawData.projectsDb);
  },

  get projects() {
    return Selectors.getFlagshipProjects(RawData.projectsDb);
  },

  get personalProjects() {
    return Selectors.getPersonalProjects(RawData.projectsDb);
  },

  get featuredProjects() {
    return Selectors.getFeaturedProjects(RawData.projectsDb);
  },

  get featuredPersonalProjects() {
    return Selectors.getFeaturedPersonalProjects(RawData.projectsDb);
  },

  get featuredExperiences() {
    return Selectors.getFeaturedExperiences(RawData.experiencesDb, RawData.projectsDb);
  },

  community: {
    ...RawData.community,
    get openSource() {
      return Selectors.getOpenSourceProjects(RawData.projectsDb);
    }
  },

  get footers() {
    return RawData.footers;
  },

  /** Dynamically computed stats derived from the normalized data collections */
  get computedStats() {
    const allProjects = Object.values(RawData.projectsDb);
    return {
      totalProjects: allProjects.length,
      flagshipProjects: allProjects.filter(p => p.isFlagship).length,
      personalCraftProjects: allProjects.filter(p => p.isPersonalCraft).length,
      openSourceProjects: allProjects.filter(p => p.isOpenSource).length,
      aceProjects: allProjects.filter(p => p.isAceProject).length,
      uniqueTechnologies: new Set(allProjects.flatMap(p => p.tech)).size,
      totalPublications: RawData.publications.length,
      totalNullbyteArticles: RawData.nullbyteArticles.length,
      totalVulnerabilities: RawData.vulnerabilityDiscoveries.length,
    };
  }
};

export type PortfolioData = typeof portfolioData;

// Re-export derived types for convenience
export type Project = FlagshipProject;
export type PersonalProject = PersonalProjectDisplay;
export type Experience = ExperienceDisplay;
export type AceProject = AceProjectDisplay;
