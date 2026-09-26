'use client';

import React from 'react';
import { FullstackProject } from '../types/portfolio';

const SANTA_MARCELINA: FullstackProject = {
  id: 'santa-marcelina',
  title: 'Colégio Santa Marcelina — Real-Time Collaborative Pedagogical Platform (SantaMarcelina)',
  domain:
    'Collaborative Single Page Application replacing decentralized spreadsheets with an instant evaluation portal for faculty and coordinators.',
  bullets: [
    'Engineered an offline-first storage engine combining in-memory caching for instant UI updates, quota-safe local storage persistence, and cross-tab synchronization via BroadcastChannel.',
    'Implemented a debounced synchronization queue (400ms) with batch upsert queries and compound keys, eliminating write race conditions and data loss.',
    'Integrated Supabase Realtime WebSockets with PostgreSQL Row Level Security (RLS) to synchronize evaluation updates across admin dashboards instantaneously.',
    'Optimized web performance via dynamic lazy loading for heavy spreadsheet generation modules (SheetJS), keeping the core production bundle under 56 kB with zero Oxlint warnings.',
  ],
  verification: 'Core production bundle under 56 kB with zero Oxlint warnings.',
  tags: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'SheetJS'],
  repoUrl: 'https://github.com/owmyr/SantaMarcelina',
};

/**
 * Dedicated, always-visible section for Fullstack & Systems Projects.
 * Highlights offline-first architectures, realtime WebSockets, and low-latency client applications.
 *
 * @returns {React.ReactElement} The rendered fullstack systems section.
 */
export const FoundationalSystems: React.FC = () => {
  return (
    <section id="systems" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 border-b border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            Fullstack &amp; Distributed
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display mt-1">
            Fullstack &amp; Systems Projects
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-400">
          Offline-First &amp; Real-Time Systems Architecture
        </div>
      </div>

      {/* Dedicated Visible Card */}
      <article className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0f]/80 backdrop-blur-sm relative overflow-hidden hover:border-white/[0.18] transition-colors">
        <span className="bracket-corner bracket-corner-tl" />
        <span className="bracket-corner bracket-corner-tr" />
        <span className="bracket-corner bracket-corner-bl" />
        <span className="bracket-corner bracket-corner-br" />

        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1.5 font-display">
              {SANTA_MARCELINA.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              {SANTA_MARCELINA.domain}
            </p>
          </div>

          <div>
            <a
              href={SANTA_MARCELINA.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.15] bg-white/[0.03] text-zinc-200 hover:text-white hover:border-white/[0.3] transition-colors font-mono text-xs"
            >
              <span>GitHub Repo</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Core Engineering Details */}
        <ul className="mb-5 space-y-2 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {SANTA_MARCELINA.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-zinc-500 select-none flex-shrink-0">—</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Verification */}
        {SANTA_MARCELINA.verification && (
          <div className="flex items-start gap-2 p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-xs font-sans text-zinc-300 leading-relaxed mb-4">
            <span className="text-emerald-400 font-mono text-sm leading-none mt-0.5">●</span>
            <span>
              <strong className="text-white">Verification:</strong> {SANTA_MARCELINA.verification}
            </span>
          </div>
        )}

        {/* Technology Tags */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-zinc-400">
            Technologies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {SANTA_MARCELINA.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-zinc-300 text-[11px] font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};
