/**
 * @file portfolio.ts
 * @description Strict TypeScript contracts for the Applied AI & LLM Systems Portfolio.
 * Models navigation, interactive system architecture pipelines, experience,
 * technical skills matrix, and academic credentials based on frontend_agent_prompt.md.
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
 * Detailed inspector data for a pipeline node stage.
 */
export interface NodeInspectorData {
  protocol: string;
  failureMode: string;
  latencySla: string;
}

/**
 * Stage node in the Interactive Architecture Pipeline.
 */
export interface PipelineNode {
  id: string;
  label: string;
  status: 'active' | 'routing' | 'fallback';
  inspector: NodeInspectorData;
}

/**
 * Failover or safeguard branch specification for alternative routing.
 */
export interface FailoverBranch {
  label: string;
  targetStage: string;
  inspector: NodeInspectorData;
}

/**
 * Technical deep-dive bullet point for failure modes and resilience engineering.
 */
export interface DeepDiveBullet {
  title: string;
  detail: string;
}

/**
 * Specification for clean, technical AI project cards with interactive architecture pipelines.
 */
export interface AiProject {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  verificationBadge: string;
  pipelineNodes: PipelineNode[];
  failoverBranch?: FailoverBranch;
  deepDiveBullets: DeepDiveBullet[];
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
