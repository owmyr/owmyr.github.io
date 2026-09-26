'use client';

import React from 'react';
import { WorkExperience } from '../types/portfolio';

const EXPERIENCES: WorkExperience[] = [
  {
    company: 'Revelo',
    role: 'AI Engineer',
    period: 'Oct 2025 – Present · Freelance / Project-Based · Remote',
    bullets: [
      'Applied advanced prompt engineering to diagnose and document failure modes in generative AI models for code generation tasks.',
      'Acted as a Human-in-the-Loop (HITL) reviewer, evaluating 100+ code snippets to guarantee production quality and resolve critical model degradation issues.',
      'Authored 50+ unit tests with pytest to validate deterministic correctness and execution safety of AI-generated solutions.',
      'Managed and replicated complex multi-dependency runtime environments from GitHub commits using AWS SageMaker and Docker.',
      'Delivered 200+ approved tasks across multiple AI engineering workflows, completing 50+ peer reviews to improve model alignment.',
    ],
    tags: ['AWS SageMaker', 'Docker', 'pytest', 'Python', 'Prompt Engineering'],
  },
  {
    company: 'Turing',
    role: 'AI Agent Evaluation Engineer',
    period: 'May 2026 – Sep 2026 · Contract · Remote',
    bullets: [
      'Engineered and evaluated multi-step Chain-of-Thought (CoT) reasoning trajectories for frontier LLMs, formalizing step-by-step mathematical reasoning and optimal algorithmic trade-offs.',
      'Authored complex algorithmic reasoning benchmarks with LaTeX mathematical formulations, enforcing deterministic output constraints and eliminating model hallucinations.',
      'Containerized automated evaluation harnesses within Docker sandboxes, executing 30+ edge-case test suites per task to stress-test model reasoning and verify time/memory complexity boundaries (O(N log N) vs O(N²)).',
    ],
    tags: ['Frontier LLMs', 'Chain-of-Thought', 'Docker Sandboxes', 'LaTeX', 'pytest'],
  },
  {
    company: 'Accenture',
    role: 'Software Engineer',
    period: 'Jan 2026 – May 2026 · Hybrid · Enterprise Client',
    bullets: [
      'Deployed an enterprise AI Knowledge Assistant utilizing Microsoft Copilot and RAG architecture, designing specialized domain sub-agents that reduced developer onboarding time by 40% and saved 100+ senior engineering hours across enterprise configuration workflows.',
      'Engineered high-volume ETL pipelines and complex SQL extraction queries integrated directly with SAP IBP to process nationwide datasets and support operational planning.',
      'Contributed to the modernization of legacy supply chain architecture into a scalable, high-throughput distributed ecosystem.',
      'Collaborated in an Agile Scrum framework to map API contracts, author technical specifications, and ensure cross-team alignment.',
    ],
    tags: ['Microsoft Copilot', 'RAG', 'Python', 'SAP IBP', 'SQL'],
  },
];

/**
 * Work Experience Timeline.
 * Formatted with hairline borders, disciplined contrast, verified accomplishments,
 * and clean technology tags under each employer.
 *
 * @returns {React.ReactElement} The rendered experience timeline.
 */
export const ExperienceTimeline: React.FC = () => {
  const romanNumerals = ['I.', 'II.', 'III.'];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 border-b border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            Career
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display mt-1">
            Work Experience
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-400">
          Reverse Chronological Engineering History
        </div>
      </div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, idx) => (
          <div 
            key={exp.company} 
            className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0c0c0f]/70 backdrop-blur-sm relative overflow-hidden hover:border-white/[0.16] transition-colors"
          >
            {/* Header: Roman Numeral, Company & Period */}
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-zinc-500 font-medium">
                  {romanNumerals[idx]}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white font-display">
                  {exp.company}
                </span>
                <span className="text-zinc-600">/</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-200 font-sans">
                  {exp.role}
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-400">
                {exp.period}
              </div>
            </div>

            {/* Accomplishments */}
            <ul className="mt-4 space-y-2 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-zinc-500 select-none flex-shrink-0">—</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Technology Tags */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mr-1">
                Tags:
              </span>
              {exp.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-zinc-300 text-[11px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
