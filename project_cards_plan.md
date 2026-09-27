# Engineering Plan: Featured AI Project Cards & Verification Architecture

> **Target Audience:** Frontend Agent / Developer  
> **Target Scope:** Featured AI Projects Section (`index.html` & `src/` components)  
> **Status:** Approved for Implementation

---

## 1. Executive Summary & Purpose

This plan defines the precise architectural redesign for the **Featured AI Projects** section of the portfolio. It addresses two core requirements:

1. **Elimination of Raw Test Counts (Anti-Amateurism Directive):** Completely purge all raw integer test counts (`42 Tests`, `222 Tests`, `275 Tests`, `530+ tests`) from badges, titles, and headers. Replace them with **qualitative engineering verification methodologies**.
2. **Progressive Disclosure Card Architecture:** Replace static walls of text with a glanceable, high-impact card layout that displays critical architectural signals by default, while tucking deep failure-mode engineering details into an expandable drawer.

---

## 2. Policy: Eliminating Raw Test Counts

### The Problem with Raw Test Metrics
Displaying metrics such as `"42 Tests"`, `"222 Tests"`, or `"530+ Automated Tests"` in project headers and badges is an anti-pattern in senior engineering portfolios:
- **Hygiene vs. Accomplishment:** Automated testing is baseline developer hygiene (table stakes), not an exceptional achievement. Bragging about test counts signals junior-level insecurity.
- **Metric Gaming & Lack of Context:** Raw numbers provide no signal regarding rigor. A suite of 222 trivial assertion tests can be written in an afternoon, whereas a deterministic mock client harness simulating network timeouts and token exhaustion represents genuine systems engineering.
- **Recruiter Perception:** Senior engineering leaders and staff-level evaluators look for how you handle non-deterministic failure modes, provider rate limits, and data contract violations—not whether you ran `pytest` 42 times.

### The Replacement: Qualitative Verification Methodology
Every project card must feature a dedicated **Verification Methodology** badge or note. This describes the *mechanism* used to ensure reliability and deterministic behavior without citing arbitrary numbers.

#### Mapping Table: Before vs. After

| Project | Anti-Pattern (Remove) | Qualitative Verification (Implement) |
| :--- | :--- | :--- |
| **`care-agent-swarm`** | `42 Tests · Vitest` / `42 Passing Tests` | **Deterministic mock client harness** with dependency injection for zero-cost, hermetic CI verification. |
| **`TrendScout`** | `222 Tests · pytest` / `222 Passing Tests` | **Automated CI pipeline** validating multi-agent crawlers, LLM failovers, and sanitized exports. |
| **`thedailybot`** | `Automated Tests` | **Automated scheduled runs** with Firestore dead-man's-switch health monitoring. |
| **`D-D-RAG-Chatbot`** | `275 Tests · pytest` / `275 Passing Tests` | **Automated CI pipeline** testing chunking boundaries, FAISS index loading, and LCEL chain generation. |
| **Overall Site** | `530+ Automated Tests` stat card | **Remove card completely**; promote Technical Skills into the hero zone. |

---

## 3. UI/UX Architecture: Progressive Disclosure Pattern

### Why Full Accordions (Complete Collapse) Fail
Collapsing entire project cards into closed accordion headers hides 80% of candidate value. Studies and heatmaps show that fewer than 20% of recruiters or engineering managers click closed accordions while skimming a portfolio. Total collapse obscures:
- Project domain and impact.
- Architectural flow and systems thinking.
- Core technology stack.

### The Solution: Progressive Disclosure
Progressive Disclosure balances **rapid recruiter skimming** (30-second scan) with **deep technical evaluation** (staff engineer review):

```
┌────────────────────────────────────────────────────────────────────────┐
│  PROJECT CARD (Glanceable Core — 100% Always Visible)                  │
│                                                                        │
│  [Title]                                          [Verification Badge] │
│  Domain summary (1–2 sentences explaining problem & production value)  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ ASCII Architecture Flow (Monospace Pipeline Box)                 │  │
│  │ [Input] ──> [Processing] ──> [Safeguard] ──> [Output]            │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  [Tech Tags: Clean, unversioned names]                                 │
│  [Live Demo ↗]  [GitHub Repo ↗]                                        │
│                                                                        │
│  ────────────────────────────────────────────────────────────────────  │
│  [▼ View Technical Deep Dive & Failure Modes] (Toggle Button)          │
└────────────────────────────────────────────────────────────────────────┘
          │ (User clicks toggle)
          ▼
┌────────────────────────────────────────────────────────────────────────┐
│  EXPANDED DRAWER (Failure Modes & Architecture Details)                │
│                                                                        │
│  • Concurrency & Fault Isolation (e.g., Promise.allSettled)            │
│  • Rate Limiting & Resilience (e.g., 3-state circuit breaker, backoff) │
│  • Schema Enforcement & Prompt Recovery (e.g., Zod runtime contracts)  │
│  • Security, Privacy, or Compliance (e.g., PHI redaction, air-gapping) │
│                                                                        │
│  [▲ Hide Technical Deep Dive]                                          │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Complete Project Specifications

The frontend agent must implement the following 4 featured AI projects using this exact structure.

---

### Project 1: Multi-Agent Swarm AI Orchestration Layer (`care-agent-swarm`)

#### A. Glanceable Core (Always Visible)
- **Title:** Multi-Agent Swarm AI Orchestration Layer
- **Subtitle / Identifier:** `care-agent-swarm`
- **Domain Summary:** Fault-tolerant multi-agent orchestration layer for residential care workflows, automating resident intake, compliance checks, and incident triage.
- **Architecture Pipeline (Monospace / ASCII):**
  ```text
  [Resident Intake] -> [Concurrent Sub-Agents] -> [Zod Runtime Contracts] -> [Deterministic Output]
  [Circuit Breaker (429)] -> [Exponential Backoff]
  [Escalation Safeguard] -> [Clinical Human Loop]
  ```
- **Verification Badge:** `Deterministic mock client harness with dependency injection for zero-cost, hermetic CI verification`
- **Technology Tags:** `TypeScript`, `Node.js`, `Claude`, `Zod`, `Vitest`
- **Action Buttons:**
  - `GitHub Repo ↗` (`https://github.com/owmyr/care-agent-swarm`)

#### B. Expandable Deep-Dive Drawer (`[▼ View Technical Deep Dive & Failure Modes]`)
- **Fault-Isolated Execution:** Implemented concurrent sub-agents with fault-isolated execution using `Promise.allSettled`, allowing partial intake completion even if an individual agent experiences transient degradation.
- **Provider Resilience:** Engineered a resilient LLM harness featuring a 3-state circuit breaker state machine, exponential backoff with jitter, and automatic handling of provider rate limits (HTTP 429).
- **Runtime Schema Enforcement:** Enforced strict runtime data contracts using Zod schemas to validate and re-prompt malformed model outputs, guaranteeing deterministic JSON payloads.
- **Compliance & Escalation:** Integrated 4-layer HIPAA-compliant PHI redaction across application logs and built an automated clinical escalation safeguard for unresolved incident loops.

---

### Project 2: TrendScout — Autonomous Trend Intelligence & Multi-Agent Pipeline (`TrendScout`)

#### A. Glanceable Core (Always Visible)
- **Title:** TrendScout — Autonomous Trend Intelligence Pipeline
- **Subtitle / Identifier:** `TrendScout`
- **Domain Summary:** End-to-end intelligence platform tracking e-commerce sales velocity, eliminating commodity noise, and semantically clustering apparel design trends.
- **Architecture Pipeline (Monospace / ASCII):**
  ```text
  [Stealth Playwright Crawler] -> [Regex Token Filter] -> [Gemini Pool (Local Ollama Fallback)] -> [Air-Gapped Pipeline] -> [Next.js Live UI]
  ```
- **Verification Badge:** `Automated CI pipeline validating multi-agent crawlers, LLM failovers, and sanitized exports`
- **Technology Tags:** `Python`, `Gemini`, `Ollama`, `Playwright`, `Next.js`, `SQLite`, `pytest`
- **Action Buttons:**
  - `Live Application ↗` (`https://trendscout-shopee.vercel.app`)
  - `GitHub Repo ↗` (`https://github.com/owmyr/TrendScout`)

#### B. Expandable Deep-Dive Drawer (`[▼ View Technical Deep Dive & Failure Modes]`)
- **Dual-Tier Model Routing:** Built a dual-tier LLM engine utilizing a cloud Gemini pool for high-throughput 25-item micro-batch clustering with seamless offline fallback to a local Ollama model.
- **Adaptive Trend Discovery:** Designed an adaptive discovery algorithm combining historical baseline keywords with velocity-driven search terms to catch emerging micro-trends early.
- **Token Efficiency & Pre-Filtering:** Implemented deterministic regex pre-filtering to remove plain and basic garments prior to LLM inference, reducing token consumption while preserving audit baselines.
- **Air-Gapped Data Distribution:** Built an air-gapped data export pipeline feeding a public Next.js subscriber portal on Vercel with zero database connections from the client.

---

### Project 3: The Daily Bot — News AI Summarizer & Subscription Service (`thedailybot`)

#### A. Glanceable Core (Always Visible)
- **Title:** The Daily Bot — News AI Summarizer & Subscription Service
- **Subtitle / Identifier:** `thedailybot`
- **Domain Summary:** Automated news aggregation and subscription platform delivering daily personalized digests to active email subscribers.
- **Architecture Pipeline (Monospace / ASCII):**
  ```text
  [News Sources (BBC, G1)] -> [Async Scraper (httpx)] -> [Gemini Multilingual Summarizer] -> [Subscriber Preference Routing] -> [Scheduled SMTP Dispatch]
  ```
- **Verification Badge:** `Automated daily scheduled runs with Firestore dead-man's-switch health monitoring`
- **Technology Tags:** `Python`, `Gemini`, `asyncio`, `Firebase`, `GitHub Actions`, `pytest`
- **Action Buttons:**
  - `Live Application ↗` (`https://thedailybot.web.app`)
  - `GitHub Repo ↗` (`https://github.com/owmyr/thedailybot`)

#### B. Expandable Deep-Dive Drawer (`[▼ View Technical Deep Dive & Failure Modes]`)
- **High-Concurrency Scraping:** Built an asynchronous multi-source scraper in Python (httpx, asyncio) featuring semaphore concurrency limits, circuit breaker recovery, and immediate Firestore persistence per article.
- **Native-Language Summarization:** Leveraged Gemini AI to generate neutral summaries in the native language of each source (BBC in English, G1 in Portuguese).
- **Personalized Template Delivery:** Implemented an intelligent subscriber preference engine to generate customized Jinja2 email templates and manage rate-limited SMTP delivery.
- **Scheduled Autonomous Execution:** Fully automated daily execution at 13:00 UTC orchestrated via GitHub Actions CI/CD with dead-man's-switch health checks.

---

### Project 4: Hybrid RAG Chatbot with Cross-Encoder Re-Ranking (`D-D-RAG-Chatbot`)

#### A. Glanceable Core (Always Visible)
- **Title:** Hybrid RAG Chatbot with Cross-Encoder Re-Ranking
- **Subtitle / Identifier:** `D-D-RAG-Chatbot`
- **Domain Summary:** Modular Hybrid RAG pipeline using LangChain and Gemini to query complex documentation with sub-second retrieval latency.
- **Architecture Pipeline (Monospace / ASCII):**
  ```text
  [Header-Aware Markdown Chunking] -> [FAISS Dense Index] -> [Cross-Encoder Reranker] -> [Sub-Second Context] -> [Gemini Generation]
  [Atomic Staging Pointer Swap (-50% Index Time)]
  ```
- **Verification Badge:** `Automated CI pipeline testing chunking boundaries, FAISS index loading, and LCEL chain generation`
- **Technology Tags:** `Python`, `LangChain`, `FAISS`, `Cross-Encoder`, `Gemini`, `pytest`
- **Action Buttons:**
  - `GitHub Repo ↗` (`https://github.com/owmyr/D-D-RAG-Chatbot`)

#### B. Expandable Deep-Dive Drawer (`[▼ View Technical Deep Dive & Failure Modes]`)
- **Header-Aware Ingestion:** Built an ingestion pipeline with markdown header-aware chunking to preserve document hierarchy, breadcrumbs, and cross-references within chunk metadata.
- **Two-Stage Re-Ranking:** Implemented a two-stage retrieval pipeline combining FAISS dense vector search with a local TinyBERT Cross-Encoder reranker for high contextual precision.
- **Atomic Index Swapping:** Engineered atomic index swapping using staging directories to prevent vector store corruption during updates, cutting indexing time by 50%.

---

## 5. Technical Stack Tag Naming Standards

The frontend agent must adhere to clean, unversioned industry names. Do not include minor versions, patch releases, or model variant identifiers:

| Category | Forbidden (Over-Descriptive) | Required Clean Standard |
| :--- | :--- | :--- |
| **Languages** | `Python 3.12`, `Python 3.11+`, `TypeScript 5.x Strict` | `Python`, `TypeScript` |
| **Frontier Models** | `Claude 3.5 Sonnet`, `Google Gemini Flash pool`, `qwen2.5:14b-instruct` | `Claude`, `Gemini`, `Ollama` |
| **Frameworks** | `Next.js 14 App Router`, `React 18` | `Next.js`, `React` |
| **Testing** | `pytest 8.x`, `Vitest (v2)` | `pytest`, `Vitest` |

---

## 6. Frontend Implementation Guidelines for the Agent

### Markup & Accessibility
- Use semantic `<article>` tags for each project card.
- Implement the toggle using a standard `<button>` with explicit accessibility attributes:
  - `aria-expanded="false"` (default) toggling to `aria-expanded="true"` when opened.
  - `aria-controls="card-details-[id]"` pointing to the expandable container.
- For vanilla HTML/JS (`index.html`), toggle a CSS class (e.g., `hidden` or height transition container).
- For React/Next.js (`src/`), control state with a boolean hook (`isExpanded`) and animate with Framer Motion (`AnimatePresence` + height animation) or CSS grid transitions (`grid-template-rows: 0fr` to `1fr`).

### Responsive Design & Monospace Pipelines
- Wrap ASCII architecture flows in a `<pre>` element styled with:
  - `font-mono text-xs leading-relaxed`
  - Subtle dark background (e.g., `bg-zinc-950/60` or `bg-slate-900/60`)
  - Border: `border border-zinc-800/80 rounded-md p-3`
  - Horizontal scroll enabled (`overflow-x-auto`) to prevent breaking layout on mobile viewports.

### Design Aesthetics ("Antigravity Premium")
- **Card Background:** Glassmorphism card container (`bg-zinc-900/40 backdrop-blur-md border border-zinc-800/60 rounded-xl hover:border-zinc-700/80 transition-colors`).
- **Verification Badge:** Subtle green/emerald or cyan tinted badge (`bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 text-xs px-2.5 py-1 rounded-full`).
- **Typography:** Clear hierarchy with crisp contrast against dark backgrounds.
