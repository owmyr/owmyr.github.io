'use client';

import React from 'react';
import { PortfolioShell } from '../components/PortfolioShell';
import { HeroSection } from '../components/HeroSection';
import { ProjectSpecCard } from '../components/ProjectSpecCard';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { EducationCredentials } from '../components/TechStackMatrix';
import { FoundationalSystems } from '../components/FoundationalSystems';
import { AiProject } from '../types/portfolio';

const AI_PROJECTS: AiProject[] = [
  {
    id: 'care-agent-swarm',
    title: 'Multi-Agent Swarm AI Orchestration Layer (care-agent-swarm)',
    domain:
      'Fault-tolerant multi-agent orchestration layer for residential care workflows, automating resident intake, compliance checks, and incident triage.',
    flow: '[Resident Intake] -> [Concurrent Sub-Agents] -> [Zod Runtime Contracts] -> [Deterministic Output]\n[Circuit Breaker (429)] -> [Exponential Backoff]\n[Escalation Safeguard] -> [Clinical Human Loop]',
    bullets: [
      'Implemented concurrent sub-agents with fault-isolated execution using Promise.allSettled, allowing partial intake completion even if an individual agent experiences transient degradation.',
      'Engineered a resilient LLM harness featuring a 3-state circuit breaker state machine, exponential backoff with jitter, and automatic handling of provider rate limits (HTTP 429).',
      'Enforced strict runtime data contracts using Zod schemas to validate and re-prompt malformed model outputs, guaranteeing deterministic JSON payloads.',
      'Integrated 4-layer HIPAA-compliant PHI redaction across application logs and built an automated clinical escalation safeguard for unresolved incident loops.',
    ],
    verification: '42 automated unit and integration tests passing in Vitest using mock client dependency injection with zero API cost.',
    tags: ['TypeScript', 'Node.js', 'Claude', 'Zod', 'Vitest'],
    repoUrl: 'https://github.com/owmyr/care-agent-swarm',
    liveUrl: null,
  },
  {
    id: 'trendscout',
    title: 'TrendScout — Autonomous Trend Intelligence & Multi-Agent Pipeline (TrendScout)',
    domain:
      'End-to-end intelligence platform tracking e-commerce sales velocity, eliminating commodity noise, and semantically clustering apparel design trends.',
    flow: '[Stealth Playwright Crawler] -> [Regex Token Filter] -> [Gemini Pool (Local Ollama Fallback)] -> [Air-Gapped Pipeline] -> [Next.js Live UI]',
    bullets: [
      'Built a dual-tier LLM engine utilizing a cloud Gemini pool for high-throughput 25-item micro-batch clustering with seamless offline fallback to a local Ollama model.',
      'Designed an adaptive discovery algorithm combining historical baseline keywords with velocity-driven search terms to catch emerging micro-trends early.',
      'Implemented deterministic regex pre-filtering to remove plain and basic garments prior to LLM inference, reducing token consumption while preserving audit baselines.',
      'Built an air-gapped data export pipeline feeding a public Next.js subscriber portal on Vercel with zero database connections from the client.',
    ],
    verification: '222 automated pytest tests covering crawlers, database models, LLM fallbacks, and export sanitizers.',
    tags: ['Python', 'Gemini', 'Ollama', 'Playwright', 'Next.js', 'SQLite', 'pytest'],
    repoUrl: 'https://github.com/owmyr/TrendScout',
    liveUrl: 'https://trendscout-shopee.vercel.app',
  },
  {
    id: 'thedailybot',
    title: 'The Daily Bot — News AI Summarizer & Subscription Service (thedailybot)',
    domain:
      'Automated news aggregation and subscription platform delivering daily personalized digests to active email subscribers.',
    flow: '[News Sources (BBC, G1)] -> [Async Scraper (httpx)] -> [Gemini Multilingual Summarizer] -> [Subscriber Preference Routing] -> [Scheduled SMTP Dispatch]',
    bullets: [
      'Built an asynchronous multi-source scraper in Python (httpx, asyncio) featuring semaphore concurrency limits, circuit breaker recovery, and immediate Firestore persistence per article.',
      'Leveraged Gemini AI to generate neutral summaries in the native language of each source (BBC in English, G1 in Portuguese).',
      'Implemented an intelligent subscriber preference engine to generate customized Jinja2 email templates and manage rate-limited SMTP delivery.',
      'Authored a comprehensive test suite of 275 automated tests (82% coverage) with pytest and pytest-asyncio, with scheduled daily runs orchestrated via GitHub Actions CI/CD.',
    ],
    verification: '275 automated tests (82% coverage) with pytest and pytest-asyncio.',
    tags: ['Python', 'Gemini', 'asyncio', 'Firebase', 'GitHub Actions', 'pytest'],
    repoUrl: 'https://github.com/owmyr/thedailybot',
    liveUrl: 'https://thedailybot.web.app',
  },
  {
    id: 'd-d-rag-chatbot',
    title: 'Hybrid RAG Chatbot with Cross-Encoder Re-Ranking (D-D-RAG-Chatbot)',
    domain:
      'Modular Hybrid RAG pipeline using LangChain and Gemini to query complex documentation with sub-second retrieval latency.',
    flow: '[Header-Aware Markdown Chunking] -> [FAISS Dense Index] -> [Cross-Encoder Reranker] -> [Sub-Second Context] -> [Gemini Generation]\n[Atomic Staging Pointer Swap (-50% Index Time)]',
    bullets: [
      'Built an ingestion pipeline with markdown header-aware chunking to preserve document hierarchy, breadcrumbs, and cross-references within chunk metadata.',
      'Implemented a two-stage retrieval pipeline combining FAISS dense vector search with a local TinyBERT Cross-Encoder reranker for high contextual precision.',
      'Engineered atomic index swapping using staging directories to prevent vector store corruption during updates, cutting indexing time by 50%.',
    ],
    verification: 'Automated pytest suite covering chunking boundaries, FAISS index loading, and LCEL chain generation.',
    tags: ['Python', 'LangChain', 'FAISS', 'Cross-Encoder', 'Gemini', 'pytest'],
    repoUrl: 'https://github.com/owmyr/D-D-RAG-Chatbot',
    liveUrl: null,
  },
];

/**
 * Main Portfolio Page component.
 * Synchronized with the Explanatory Frontend Handoff Specification.
 *
 * @returns {React.ReactElement} The rendered portfolio page.
 */
export default function PortfolioPage(): React.ReactElement {
  return (
    <PortfolioShell>
      {/* 1. Hero Section + Promoted Technical Skills Strip (id="skills") */}
      <HeroSection />

      {/* 2. Featured AI Projects Section (#projects) */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 border-b border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              AI Systems
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display mt-1">
              Featured Projects
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-400">
            Four Verified Core Architectures
          </div>
        </div>

        <div className="space-y-8">
          {AI_PROJECTS.map((project) => (
            <ProjectSpecCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 3. Fullstack & Systems Projects Section (#systems) */}
      <FoundationalSystems />

      {/* 4. Work Experience Timeline (#experience) */}
      <ExperienceTimeline />

      {/* 5. Education & Academic Credentials */}
      <EducationCredentials />

      {/* 6. Direct Contact Section (#contact) */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              Direct Channel
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display mt-1">
              Contact
            </h2>
          </div>
          <p className="text-xs font-sans text-zinc-400 max-w-sm">
            Available for applied AI &amp; LLM systems roles, multi-agent architecture consulting, and evaluation harness engineering.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a 
            href="mailto:owmyrstocker@gmail.com"
            className="px-4 py-2 rounded-full bg-white text-zinc-950 font-sans font-medium text-xs hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>owmyrstocker@gmail.com</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a 
            href="https://github.com/owmyr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-white/[0.15] bg-white/[0.03] text-zinc-200 font-mono text-xs hover:text-white hover:border-white/[0.3] transition-all flex items-center gap-1.5"
          >
            <span>GitHub Profile</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a 
            href="https://linkedin.com/in/olmir-stocker-neto"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-white/[0.15] bg-white/[0.03] text-zinc-200 font-mono text-xs hover:text-white hover:border-white/[0.3] transition-all flex items-center gap-1.5"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </PortfolioShell>
  );
}
