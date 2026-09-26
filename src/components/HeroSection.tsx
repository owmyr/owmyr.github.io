'use client';

import React, { useState } from 'react';
import { CoreTechGroup } from '../types/portfolio';

const PROMOTED_SKILLS: CoreTechGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'SQL'],
  },
  {
    category: 'Models & AI',
    skills: ['Claude', 'Gemini', 'Ollama', 'LangChain'],
  },
  {
    category: 'Retrieval & Databases',
    skills: ['Hybrid RAG', 'FAISS', 'Cross-Encoder', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'Testing & Infrastructure',
    skills: ['Docker', 'pytest', 'Vitest', 'AWS SageMaker', 'GitHub Actions'],
  },
];

/**
 * Hero Section engineered to anchor candidate competence above the fold.
 * Replaces redundant stat cards with the promoted Technical Skills block directly
 * beneath the action buttons (id="skills") to save ~100px vertical space and pull
 * the first flagship project card above the fold on standard laptop screens.
 *
 * @returns {React.ReactElement} The rendered hero section.
 */
export const HeroSection: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    const email = 'owmyrstocker@gmail.com';
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setToastMessage(`Email copied: ${email}`);
      } else {
        setToastMessage(`Email: ${email}`);
      }
      setTimeout(() => setToastMessage(null), 3000);
    } catch {
      setToastMessage(`Email: ${email}`);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <section 
      id="top" 
      className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-10 border-b border-white/[0.08]"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div 
          role="status" 
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-lg border border-white/[0.18] bg-[#0c0c10]/95 backdrop-blur-md text-xs font-mono text-white shadow-[0_4px_24px_rgba(0,0,0,0.8)] flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Eyebrow & Location Status */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono text-zinc-400">
        <span className="inline-block text-[11px] font-mono tracking-wider uppercase text-zinc-300">
          Applied Generative AI · Multi-Agent Architectures · Production Pipelines
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          <span>São Paulo, Brazil · Open to Remote (UTC-3 / US &amp; European Timezone Overlap)</span>
        </div>
      </div>

      {/* Main Heading & Professional Summary */}
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display">
          Applied AI &amp; LLM Systems Engineer
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl font-sans">
          Software Engineer specializing in applied Generative AI, autonomous multi-agent architectures, and production LLM integrations (Python, TypeScript). Proven track record of shipping resilient AI systems—including enterprise knowledge assistants at Accenture that reduced developer onboarding time by 40% and saved 100+ senior engineering hours, fault-tolerant agent swarms, and hybrid RAG pipelines with vector reranking. Experienced in turning non-deterministic foundation models into secure, reliable, and observable software.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        <a 
          href="#projects" 
          className="px-4 py-2 rounded-full bg-white text-zinc-950 font-sans font-medium text-xs hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-sm"
        >
          <span>View Projects</span>
          <span aria-hidden="true">↓</span>
        </a>
        <a 
          href="olmir-stocker-neto-resume-ai.pdf" 
          download="Olmir_Stocker_Neto_Resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-white/[0.2] bg-white/[0.04] text-zinc-200 font-sans font-medium text-xs hover:text-white hover:border-white/[0.35] transition-all flex items-center gap-1.5"
        >
          <span>Download Resume (PDF)</span>
          <span aria-hidden="true">↗</span>
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="px-4 py-2 rounded-full border border-white/[0.18] bg-white/[0.04] text-zinc-200 font-mono text-xs hover:text-white hover:border-white/[0.3] transition-all flex items-center gap-1.5"
          title="Copy email to clipboard"
        >
          <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>Copy Email</span>
        </button>
      </div>

      {/* Promoted Technical Skills Strip (id="skills") - Compact 4-Column Strip */}
      <div 
        id="skills" 
        className="mt-6 p-4 rounded-xl border border-white/[0.1] bg-[#0c0c10]/75 backdrop-blur-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {PROMOTED_SKILLS.map((group) => (
          <div key={group.category} className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-zinc-200 text-[11px] font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
