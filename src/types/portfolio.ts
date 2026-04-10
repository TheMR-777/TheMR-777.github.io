export interface ProjectEntity {
  id: string;
  title: string;
  tech: string[];
  summary: string;
  description: string;

  // Projects View generic fields
  category?: string;
  challenge?: string;
  approach?: string;
  architecturalPhilosophy?: string;
  impact?: string[];
  link?: string;
  repo?: string;

  // Personal Craft fields
  origin?: string;

  // ACE Project specific fields
  typeAce?: string;
  periodAce?: string;
  descriptionAce?: string;
  architecturalPhilosophyAce?: string;
  architecturalHighlights?: string[];
  architecturalOutcomes?: string[];
  approachAce?: string;
  modules?: { name: string; description: string; impact: string }[];
  partners?: string[];
  impactAce?: string[];
  techAce?: string[];

  // Open Source fields
  roleOpenSource?: string;

  // Flags for selectors
  isFlagship?: boolean;
  isPersonalCraft?: boolean;
  isAceProject?: boolean;
  isOpenSource?: boolean;
}

export interface ExperienceEntity {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  description: string;
  highlights?: string[];
  impact?: string[];
  tech: string[];
  modules?: { name: string; description: string; impact: string }[];
  associatedProjectIds?: string[];
}
