'use client';

import React from 'react';
import { EducationCredential } from '../types/portfolio';

const EDUCATION_ITEMS: EducationCredential[] = [
  {
    institution: 'Educaminas',
    degree: 'Postgraduate Specializations (3 Tracks)',
    timeline: '2025 – 2027 (Expected)',
    tracks: [
      'Software Architecture: Microservices, SOA, Distributed Systems, Cloud Architecture, DevOps',
      'Data Science & Machine Learning: Big Data (Hadoop, Spark), Deep Learning, Predictive Analytics',
      'Applied Statistics: Demand Forecasting, ANOVA, Experimental Design, Financial Mathematics',
    ],
  },
  {
    institution: 'Universidade Paulista (UNIP)',
    degree: 'Bachelor in Systems Analysis and Development',
    timeline: '2021 – 2024 · São Paulo, Brazil',
    description:
      'Foundational computer science, data structures, algorithms, relational database modeling, and software engineering.',
  },
  {
    institution: 'Hashtag Treinamentos',
    degree: 'AI & Machine Learning Professional Training',
    timeline: '2024 – 2025',
    description:
      'Practical, project-based engineering covering scalable Python architectures, data modeling, and machine learning pipelines.',
  },
];

/**
 * Education & Credentials component.
 * Displays postgraduate specializations, undergraduate degree, and AI certifications
 * with hairline borders and Studio corner brackets.
 *
 * @returns {React.ReactElement} The rendered education and credentials section.
 */
export const EducationCredentials: React.FC = () => {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 border-b border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display mt-1">
            Education &amp; Credentials
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-400">
          Continuous Specialization &amp; Applied CS
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {EDUCATION_ITEMS.map((item) => (
          <div 
            key={item.institution} 
            className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c0f]/70 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between hover:border-white/[0.16] transition-colors"
          >
            <span className="bracket-corner bracket-corner-tl" />
            <span className="bracket-corner bracket-corner-br" />
            
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                {item.degree}
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                {item.institution}
              </h3>
              <div className="text-xs font-mono text-zinc-300 mb-3">
                {item.timeline}
              </div>

              {item.tracks && (
                <ul className="space-y-2 text-xs text-zinc-400 font-sans border-t border-white/[0.06] pt-3">
                  {item.tracks.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-zinc-600 select-none flex-shrink-0">—</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.description && (
                <p className="text-xs text-zinc-400 font-sans leading-relaxed border-t border-white/[0.06] pt-3">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Also export as TechStackMatrix for backwards compatibility with any existing imports
export const TechStackMatrix = EducationCredentials;
