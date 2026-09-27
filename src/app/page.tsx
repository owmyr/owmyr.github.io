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
    title: 'Multi-Agent Swarm AI Orchestration Layer',
    subtitle: 'care-agent-swarm',
    domain:
      'Fault-tolerant multi-agent orchestration layer for residential care workflows, automating resident intake, compliance checks, and incident triage.',
    verificationBadge:
      'Deterministic mock client harness with dependency injection for zero-cost, hermetic CI verification',
    tags: ['TypeScript', 'Node.js', 'Claude', 'Zod', 'Vitest'],
    repoUrl: 'https://github.com/owmyr/care-agent-swarm',
    liveUrl: null,
    pipelineNodes: [
      {
        id: 'intake',
        label: 'Resident Intake',
        status: 'active',
        inspector: {
          protocol: 'REST / Webhook payload',
          failureMode:
            'Validates raw intake forms, medical history flags, and initial triage urgency scores. Catches malformed inputs via schema pre-validation.',
          latencySla: 'Sub-50ms ingestion & parsing',
        },
      },
      {
        id: 'workers',
        label: 'Concurrent Sub-Agents',
        status: 'active',
        inspector: {
          protocol: 'Promise.allSettled parallel worker pool',
          failureMode:
            'Runs domain compliance, dietary analysis, and incident triage in isolated sandboxes to prevent cascading worker crashes.',
          latencySla: 'Isolated worker timeout caps',
        },
      },
      {
        id: 'contracts',
        label: 'Zod Runtime Contracts',
        status: 'active',
        inspector: {
          protocol: 'Runtime schema enforcement',
          failureMode:
            'Intercepts model generation; automatically re-prompts on schema violation to guarantee 100% deterministic JSON output.',
          latencySla: 'Real-time validation (max 3 retries)',
        },
      },
      {
        id: 'output',
        label: 'Deterministic Output',
        status: 'active',
        inspector: {
          protocol: 'Clean EHR / FHIR structured record',
          failureMode:
            'Persists validated care plan and triggers clinical human escalation when uncertainty threshold > 0.35.',
          latencySla: 'Sub-second clinical dispatch',
        },
      },
    ],
    failoverBranch: {
      label: 'Circuit Breaker (HTTP 429) & Backoff',
      targetStage: 'Concurrent Sub-Agents',
      inspector: {
        protocol: '3-state circuit breaker (Closed/Open/Half-Open)',
        failureMode:
          'Traps HTTP 429 rate limits and invokes exponential backoff with randomized jitter. Halts execution when error threshold exceeds tolerance.',
        latencySla: 'Auto-routing in <10ms on upstream 429',
      },
    },
    deepDiveBullets: [
      {
        title: 'Fault-Isolated Execution',
        detail:
          'Implemented concurrent sub-agents with fault-isolated execution using Promise.allSettled, allowing partial intake completion even if an individual agent experiences transient degradation.',
      },
      {
        title: 'Provider Resilience',
        detail:
          'Engineered a resilient LLM harness featuring a 3-state circuit breaker state machine, exponential backoff with jitter, and automatic handling of provider rate limits (HTTP 429).',
      },
      {
        title: 'Runtime Schema Enforcement',
        detail:
          'Enforced strict runtime data contracts using Zod schemas to validate and re-prompt malformed model outputs, guaranteeing deterministic JSON payloads.',
      },
      {
        title: 'Compliance & Escalation',
        detail:
          'Integrated 4-layer HIPAA-compliant PHI redaction across application logs and built an automated clinical escalation safeguard for unresolved incident loops.',
      },
    ],
  },
  {
    id: 'trendscout',
    title: 'TrendScout — Autonomous Trend Intelligence Pipeline',
    subtitle: 'TrendScout',
    domain:
      'End-to-end intelligence platform tracking e-commerce sales velocity, eliminating commodity noise, and semantically clustering apparel design trends.',
    verificationBadge:
      'Automated CI pipeline validating multi-agent crawlers, LLM failovers, and sanitized exports',
    tags: ['Python', 'Gemini', 'Ollama', 'Playwright', 'Next.js', 'SQLite', 'pytest'],
    repoUrl: 'https://github.com/owmyr/TrendScout',
    liveUrl: 'https://trendscout-shopee.vercel.app',
    pipelineNodes: [
      {
        id: 'crawler',
        label: 'Stealth Crawler',
        status: 'active',
        inspector: {
          protocol: 'Playwright headless cluster',
          failureMode:
            'Browser fingerprint rotation and rate-limited catalog scraping across dynamic e-commerce portals. Resilient to anti-bot challenges and session resets.',
          latencySla: 'Rate-limited non-blocking crawl',
        },
      },
      {
        id: 'filter',
        label: 'Regex Heuristic Pre-Filter',
        status: 'active',
        inspector: {
          protocol: 'In-memory token filter',
          failureMode:
            'Deterministically strips basic commodity garments prior to LLM processing, slashing downstream inference token volume by >60%.',
          latencySla: 'Sub-millisecond in-memory regex',
        },
      },
      {
        id: 'llm-pool',
        label: 'Gemini Batch Pool',
        status: 'active',
        inspector: {
          protocol: '25-item micro-batch parallel inference',
          failureMode:
            'High-throughput semantic clustering of style attributes, silhouette shifts, and color palettes with multi-key pool rotation.',
          latencySla: '<1.2s per 25-item batch',
        },
      },
      {
        id: 'export',
        label: 'Air-Gapped Export',
        status: 'active',
        inspector: {
          protocol: 'Automated JSON artifact deployment',
          failureMode:
            'Air-gapped CDN distribution feeding public Next.js frontend with 0 open database ports exposed to clients.',
          latencySla: 'Instant static edge delivery',
        },
      },
    ],
    failoverBranch: {
      label: 'Local Ollama Fallback (Offline Routing)',
      targetStage: 'Gemini Batch Pool',
      inspector: {
        protocol: 'Local Qwen / Ollama inference engine',
        failureMode:
          'Auto-routes clustering workloads to a local Qwen model whenever cloud API rate limits or network degradation are detected.',
        latencySla: 'Local GPU/CPU inference without web dependency',
      },
    },
    deepDiveBullets: [
      {
        title: 'Dual-Tier Model Routing',
        detail:
          'Built a dual-tier LLM engine utilizing a cloud Gemini pool for high-throughput 25-item micro-batch clustering with seamless offline fallback to a local Ollama model.',
      },
      {
        title: 'Adaptive Trend Discovery',
        detail:
          'Designed an adaptive discovery algorithm combining historical baseline keywords with velocity-driven search terms to catch emerging micro-trends early.',
      },
      {
        title: 'Token Efficiency & Pre-Filtering',
        detail:
          'Implemented deterministic regex pre-filtering to remove plain and basic garments prior to LLM inference, reducing token consumption while preserving audit baselines.',
      },
      {
        title: 'Air-Gapped Data Distribution',
        detail:
          'Built an air-gapped data export pipeline feeding a public Next.js subscriber portal on Vercel with zero database connections from the client.',
      },
    ],
  },
  {
    id: 'thedailybot',
    title: 'The Daily Bot — News AI Summarizer & Subscription Service',
    subtitle: 'thedailybot',
    domain:
      'Automated news aggregation and subscription platform delivering daily personalized digests to active email subscribers.',
    verificationBadge:
      'Automated daily scheduled runs with Firestore dead-man\'s-switch health monitoring',
    tags: ['Python', 'Gemini', 'asyncio', 'Firebase', 'GitHub Actions', 'pytest'],
    repoUrl: 'https://github.com/owmyr/thedailybot',
    liveUrl: 'https://thedailybot.web.app',
    pipelineNodes: [
      {
        id: 'scraper',
        label: 'Multi-Source Ingestion',
        status: 'active',
        inspector: {
          protocol: 'httpx async workers + semaphores',
          failureMode:
            'Concurrent scraping across international feeds (BBC, G1) with automatic circuit breaker recovery and immediate Firestore persistence per article.',
          latencySla: '5-worker parallel limit',
        },
      },
      {
        id: 'summarizer',
        label: 'Gemini Multilingual Engine',
        status: 'active',
        inspector: {
          protocol: 'Native-language model synthesis',
          failureMode:
            'Generates concise, unbiased daily briefings in source language (English & Portuguese) with fallback summarization prompts.',
          latencySla: '<2s per news cluster',
        },
      },
      {
        id: 'router',
        label: 'Subscriber Routing Engine',
        status: 'active',
        inspector: {
          protocol: 'Dynamic Jinja2 template compiler',
          failureMode:
            'Compiles personalized newsletters based on subscriber topic tags and delivery window preferences. Handles missing fields safely.',
          latencySla: '<100ms per digest compile',
        },
      },
      {
        id: 'smtp',
        label: 'Rate-Limited SMTP Dispatch',
        status: 'active',
        inspector: {
          protocol: 'Secure TLS email delivery (DKIM/SPF)',
          failureMode:
            'Batched SMTP queuing with automatic delivery retry queues, backoff pacing, and bounce logging.',
          latencySla: 'Throttled dispatch per ISP envelope',
        },
      },
    ],
    failoverBranch: {
      label: 'Firestore Dead-Man\'s Switch',
      targetStage: 'Rate-Limited SMTP Dispatch',
      inspector: {
        protocol: 'Health heartbeat & alerting webhook',
        failureMode:
          'Monitors daily 13:00 UTC execution heartbeat; fires instant alerting webhook if an execution cycle fails to report within the SLA window.',
        latencySla: 'Sub-minute alerting on missing pulse',
      },
    },
    deepDiveBullets: [
      {
        title: 'High-Concurrency Scraping',
        detail:
          'Built an asynchronous multi-source scraper in Python (httpx, asyncio) featuring semaphore concurrency limits, circuit breaker recovery, and immediate Firestore persistence per article.',
      },
      {
        title: 'Native-Language Summarization',
        detail:
          'Leveraged Gemini AI to generate neutral summaries in the native language of each source (BBC in English, G1 in Portuguese).',
      },
      {
        title: 'Personalized Template Delivery',
        detail:
          'Implemented an intelligent subscriber preference engine to generate customized Jinja2 email templates and manage rate-limited SMTP delivery.',
      },
      {
        title: 'Scheduled Autonomous Execution',
        detail:
          'Fully automated daily execution at 13:00 UTC orchestrated via GitHub Actions CI/CD with dead-man\'s-switch health checks.',
      },
    ],
  },
  {
    id: 'd-d-rag-chatbot',
    title: 'Hybrid RAG Chatbot with Cross-Encoder Re-Ranking',
    subtitle: 'D-D-RAG-Chatbot',
    domain:
      'Modular Hybrid RAG pipeline using LangChain and Gemini to query complex documentation with sub-second retrieval latency.',
    verificationBadge:
      'Automated CI pipeline testing chunking boundaries, FAISS index loading, and LCEL chain generation',
    tags: ['Python', 'LangChain', 'FAISS', 'Cross-Encoder', 'Gemini', 'pytest'],
    repoUrl: 'https://github.com/owmyr/D-D-RAG-Chatbot',
    liveUrl: null,
    pipelineNodes: [
      {
        id: 'chunking',
        label: 'Header-Aware Chunking',
        status: 'active',
        inspector: {
          protocol: 'Markdown AST hierarchical parser',
          failureMode:
            'Preserves section hierarchy, breadcrumbs, and cross-references in chunk metadata for rich contextual embedding without orphaned text fragments.',
          latencySla: 'Hierarchical AST traversal',
        },
      },
      {
        id: 'faiss',
        label: 'FAISS Dense Vector Index',
        status: 'active',
        inspector: {
          protocol: 'Top-K approximate nearest neighbors',
          failureMode:
            'Performs initial high-recall candidate retrieval across high-dimensional vector space with distance threshold gating.',
          latencySla: 'Sub-20ms vector lookup',
        },
      },
      {
        id: 'reranker',
        label: 'Cross-Encoder Re-Ranker',
        status: 'active',
        inspector: {
          protocol: 'TinyBERT cross-attention re-scoring',
          failureMode:
            'Computes full query-passage cross-attention to re-rank candidates and filter out semantic false positives that vector cosine similarity misses.',
          latencySla: '~120ms local inference',
        },
      },
      {
        id: 'synthesis',
        label: 'Gemini Grounded Synthesis',
        status: 'active',
        inspector: {
          protocol: 'Grounded LLM generation',
          failureMode:
            'Synthesizes verified answers with explicit document citations in under 800ms end-to-end, aborting on ungrounded hallucination checks.',
          latencySla: '<800ms end-to-end response',
        },
      },
    ],
    failoverBranch: {
      label: 'Atomic Staging Pointer Swap',
      targetStage: 'FAISS Dense Vector Index',
      inspector: {
        protocol: 'Staging directory filesystem pointer swap',
        failureMode:
          'Writes new vector embeddings to isolated staging directory and performs atomic pointer swap, reducing re-indexing downtime by 50% with zero index corruption risk.',
        latencySla: '<5ms atomic pointer rename',
      },
    },
    deepDiveBullets: [
      {
        title: 'Header-Aware Ingestion',
        detail:
          'Built an ingestion pipeline with markdown header-aware chunking to preserve document hierarchy, breadcrumbs, and cross-references within chunk metadata.',
      },
      {
        title: 'Two-Stage Re-Ranking',
        detail:
          'Implemented a two-stage retrieval pipeline combining FAISS dense vector search with a local TinyBERT Cross-Encoder reranker for high contextual precision.',
      },
      {
        title: 'Atomic Index Swapping',
        detail:
          'Engineered atomic index swapping using staging directories to prevent vector store corruption during updates, cutting indexing time by 50%.',
      },
    ],
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
