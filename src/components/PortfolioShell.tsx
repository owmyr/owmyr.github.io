'use client';

import React, { useState, useEffect } from 'react';

interface PortfolioShellProps {
  children: React.ReactNode;
}

/**
 * Top-level application shell establishing the Skills UI Studio aesthetic.
 * Employs a disciplined near-black canvas, hairline 1px borders,
 * WCAG 2.1 AA compliant contrast, exact nav order, and direct Resume (PDF) download CTA.
 *
 * @param {PortfolioShellProps} props - Component props containing page children.
 * @returns {React.ReactElement} The rendered full-page shell.
 */
export const PortfolioShell: React.FC<PortfolioShellProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#f4f4f5] font-sans antialiased selection:bg-zinc-200 selection:text-zinc-950 relative overflow-x-hidden">
      {/* Background Ambient Monochromatic Aura */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <div 
          className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] opacity-25"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(255, 255, 255, 0.12) 0%, rgba(100, 100, 110, 0.05) 50%, rgba(0, 0, 0, 0) 80%)'
          }}
        />
        <div 
          className="absolute top-[60%] -left-[10%] w-[800px] h-[600px] opacity-15"
          style={{
            background: 'radial-gradient(circle 400px at center, rgba(160, 160, 175, 0.08) 0%, rgba(0, 0, 0, 0) 70%)'
          }}
        />
      </div>

      {/* Persistent Navigation Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#000000]/80 backdrop-blur-md border-b border-white/[0.1]' 
            : 'bg-transparent border-b border-white/[0.05]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Identity & Role Badge */}
          <div className="flex items-center gap-3">
            <a 
              href="#top" 
              className="text-sm sm:text-base font-semibold tracking-tight text-white hover:text-zinc-300 transition-colors flex items-center gap-2 font-display"
            >
              <span className="w-2 h-2 rounded-full bg-zinc-200 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              <span>Olmir Stocker Neto</span>
            </a>
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-white/[0.12] bg-white/[0.03] text-zinc-300">
              Applied AI Engineer
            </span>
          </div>

          {/* Quick Action Navigation Links in Strict Order: Skills, Projects, Systems, Experience, Contact */}
          <nav className="flex items-center gap-1 sm:gap-2 text-xs font-mono">
            <a 
              href="#skills" 
              className="px-2.5 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="px-2.5 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Projects
            </a>
            <a 
              href="#systems" 
              className="px-2.5 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Systems
            </a>
            <a 
              href="#experience" 
              className="hidden md:inline-block px-2.5 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="hidden sm:inline-block px-2.5 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Contact
            </a>

            {/* Divider */}
            <div className="h-3.5 w-px bg-white/[0.15] mx-1" aria-hidden="true" />

            {/* Single Direct Resume (PDF) CTA */}
            <a
              href="olmir-stocker-neto-resume-ai.pdf"
              download="Olmir_Stocker_Neto_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/[0.2] bg-white text-zinc-950 font-sans font-medium text-xs hover:bg-zinc-200 transition-all shadow-sm"
              title="Download Applied AI Resume (PDF)"
            >
              <span>Resume (PDF)</span>
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 pt-16">
        {children}
      </main>

      {/* Engineering Footer */}
      <footer className="relative z-10 border-t border-white/[0.1] bg-[#050506] py-14 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/[0.08]">
            <div>
              <div className="text-base font-semibold tracking-tight text-white mb-2 font-display">Olmir Stocker Neto</div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed max-w-sm">
                Applied AI &amp; LLM Systems Engineer specializing in applied Generative AI, multi-agent systems, and production LLM integrations.
              </p>
            </div>
            
            <div className="text-xs font-mono space-y-2 text-zinc-300">
              <div className="text-zinc-400 uppercase tracking-widest text-[10px]">Coordinates</div>
              <div>Location: São Paulo, Brazil · Open to Remote</div>
              <div>Timezone: US &amp; European Overlap (UTC-3 / EST +1)</div>
              <div>Languages: English (C2 Full Professional) · Portuguese (Native)</div>
            </div>

            <div className="flex flex-col md:items-end justify-between space-y-3">
              <div className="text-xs font-mono text-zinc-400">
                Direct Channels
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <a 
                  href="mailto:owmyrstocker@gmail.com" 
                  className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors"
                >
                  Email
                </a>
                <span className="text-zinc-600">/</span>
                <a 
                  href="https://github.com/owmyr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors"
                >
                  GitHub
                </a>
                <span className="text-zinc-600">/</span>
                <a 
                  href="https://linkedin.com/in/olmir-stocker-neto" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-400">
            <div>Deterministic Architecture Spec · WCAG 2.1 AA Compliant</div>
            <div className="mt-2 sm:mt-0">© 2026 Olmir Stocker Neto.</div>
          </div>
        </div>

        {/* Wordmark */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 text-center select-none pointer-events-none">
          <div className="font-display font-semibold text-4xl sm:text-7xl md:text-8xl tracking-tight text-white/[0.08]">
            OLMIR STOCKER NETO
          </div>
        </div>
      </footer>
    </div>
  );
};
