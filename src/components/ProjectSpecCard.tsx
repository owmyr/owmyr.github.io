'use client';

import React, { useState } from 'react';
import { AiProject } from '../types/portfolio';
import { InteractivePipelineFlow } from './InteractivePipelineFlow';

interface ProjectSpecCardProps {
  project: AiProject;
}

/**
 * Technical specification card for featured AI projects implementing progressive disclosure.
 * Integrates the Interactive Architecture Pipeline (interactive nodes, connectors, inspector box,
 * and failover simulator) and an expandable failure mode engineering drawer.
 *
 * @param {ProjectSpecCardProps} props - The project specification data.
 * @returns {React.ReactElement} The rendered architecture project card.
 */
export const ProjectSpecCard: React.FC<ProjectSpecCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <article 
      id={project.id} 
      className="rounded-2xl border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 relative overflow-hidden bg-[#0c0c0f]/80 backdrop-blur-sm p-6 sm:p-8"
    >
      {/* Studio Corner Brackets */}
      <span className="bracket-corner bracket-corner-tl" />
      <span className="bracket-corner bracket-corner-tr" />
      <span className="bracket-corner bracket-corner-bl" />
      <span className="bracket-corner bracket-corner-br" />

      {/* Card Header: Identifier, Title, Verification Badge, and Action Links */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono text-zinc-400 tracking-wider">
              {project.subtitle}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 font-display">
            {project.title}
          </h3>
          {/* Qualitative Verification Methodology Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 font-mono text-[11px] leading-relaxed mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
            <span>{project.verificationBadge}</span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed font-sans">
            {project.domain}
          </p>
        </div>

        {/* Outbound Links */}
        <div className="flex items-center gap-2 font-mono text-xs flex-shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-zinc-950 font-sans font-medium text-xs hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>Live App</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/[0.15] bg-white/[0.03] text-zinc-200 hover:text-white hover:border-white/[0.3] transition-colors"
          >
            <span>GitHub Repo</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Interactive Architecture Pipeline Flow (replaces static ASCII) */}
      <InteractivePipelineFlow project={project} />

      {/* Technology Tags & Progressive Disclosure Trigger */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-mono text-zinc-400 mr-1">Technologies:</span>
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-zinc-300 text-[11px] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Progressive Disclosure Toggle Button */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`card-details-${project.id}`}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.18] bg-white/[0.04] text-zinc-200 hover:text-white hover:border-white/[0.35] hover:bg-white/[0.08] font-mono text-xs transition-all duration-200"
        >
          <span>
            {isExpanded ? '▲ Hide Technical Deep Dive' : '▼ View Technical Deep Dive & Failure Modes'}
          </span>
        </button>
      </div>

      {/* Expandable Deep-Dive Drawer (Zero-Jank CSS Grid Transition) */}
      <div
        id={`card-details-${project.id}`}
        aria-hidden={!isExpanded}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-4 pt-4 border-t border-white/[0.08]">
            <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-2">
              Failure Modes &amp; Resilience Engineering
            </div>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.deepDiveBullets.map((b) => (
                <li key={b.title} className="flex items-start gap-2">
                  <span className="text-zinc-500 select-none flex-shrink-0">—</span>
                  <span>
                    <strong className="text-white font-medium">{b.title}:</strong> {b.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};
