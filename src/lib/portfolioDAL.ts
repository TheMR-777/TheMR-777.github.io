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

export const Selectors = {
  getFlagshipProjects(projectsDb: Record<string, ProjectEntity>): FlagshipProject[] {
    return Object.values(projectsDb)
      .filter(p => p.isFlagship)
      .map(p => {
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
      });
  },
  
  getPersonalProjects(projectsDb: Record<string, ProjectEntity>): PersonalProjectDisplay[] {
    return Object.values(projectsDb)
      .filter(p => p.isPersonalCraft)
      .map(p => ({
        title: p.title,
        category: p.category || '',
        description: p.description,
        origin: p.origin || '',
        tech: p.tech,
        link: p.link,
        repo: p.repo
      }));
  },

  getOpenSourceProjects(projectsDb: Record<string, ProjectEntity>): OpenSourceProject[] {
    return Object.values(projectsDb)
      .filter(p => p.isOpenSource)
      .map(p => ({
        project: p.title,
        role: p.roleOpenSource || '',
        description: p.description,
        link: p.link || ''
      }));
  },

  getExperiences(experiencesDb: Record<string, ExperienceEntity>, projectsDb: Record<string, ProjectEntity>): ExperienceDisplay[] {
    return Object.values(experiencesDb).map(exp => {
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
    });
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

  community: {
    ...RawData.community,
    get openSource() { 
      return Selectors.getOpenSourceProjects(RawData.projectsDb); 
    }
  }
};

export type PortfolioData = typeof portfolioData;

// Re-export derived types for convenience
export type Project = FlagshipProject;
export type PersonalProject = PersonalProjectDisplay;
export type Experience = ExperienceDisplay;
export type AceProject = AceProjectDisplay;
