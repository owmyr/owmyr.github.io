'use client';

import React from 'react';
import { AiProject } from '../types/portfolio';

interface ProjectSpecCardProps {
  project: AiProject;
}

/**
 * Clean, technical project card presenting core AI systems.
 * Implements hairline borders, monospace data flow diagrams,
 * verified engineering mechanisms, and outbound links without sci-fi labels.
 *
 * @param {ProjectSpecCardProps} props - The project specification data.
 * @returns {React.ReactElement} The rendered architecture project card.
 */
export const ProjectSpecCard: React.FC<ProjectSpecCardProps> = ({ project }) => {
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

      {/* Card Header: Title, Domain & Action Links */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div className="max-w-3xl">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1.5 font-display">
            {project.title}
          </h3>
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-zinc-950 font-sans font-medium text-xs hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>Live App</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.15] bg-white/[0.03] text-zinc-200 hover:text-white hover:border-white/[0.3] transition-colors"
          >
            <span>GitHub Repo</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Architecture Flow */}
      <div className="mb-5 p-3.5 rounded-xl border border-white/[0.08] bg-[#070709] overflow-x-auto">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          <span>Architecture Flow</span>
        </div>
        <div className="text-xs font-mono text-zinc-200 leading-relaxed whitespace-pre-wrap">
          {project.flow}
        </div>
      </div>

      {/* Core Engineering Details */}
      <ul className="mb-5 space-y-2 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-zinc-500 select-none flex-shrink-0">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Verification & Testing */}
      <div className="flex items-start gap-2 p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-xs font-sans text-zinc-300 leading-relaxed mb-4">
        <span className="text-emerald-400 font-mono text-sm leading-none mt-0.5">●</span>
        <span>
          <strong className="text-white">Verification &amp; Testing:</strong> {project.verification}
        </span>
      </div>

      {/* Technology Tags */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
        <span className="text-xs font-mono text-zinc-400">
          Technologies:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-zinc-300 text-[11px] font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
