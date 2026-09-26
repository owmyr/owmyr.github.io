/**
 * @file portfolio.ts
 * @description Strict TypeScript contracts for the Applied AI & LLM Systems Portfolio.
 * Models navigation, system architecture specifications, experience,
 * technical skills matrix, and academic credentials based on handoff.md.
 */

/**
 * Navigation anchor specification.
 */
export interface NavigationLink {
  label: string;
  href: string;
}

/**
 * Core technology category in the Hero skills strip.
 */
export interface CoreTechGroup {
  category: string;
  skills: string[];
}

/**
 * Specification for clean, technical AI project cards.
 */
export interface AiProject {
  id: string;
  title: string;
  domain: string;
  flow: string;
  bullets: string[];
  verification: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string | null;
}

/**
 * Specification for fullstack systems projects.
 */
export interface FullstackProject {
  id: string;
  title: string;
  domain: string;
  bullets: string[];
  verification?: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string | null;
}

/**
 * Verified work experience record.
 */
export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
}

/**
 * Technical skills category group.
 */
export interface SkillGroup {
  group: string;
  skills: string[];
}

/**
 * Academic credential or certification record.
 */
export interface EducationCredential {
  institution: string;
  degree: string;
  timeline: string;
  tracks?: string[];
  description?: string;
}
