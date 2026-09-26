# Frontend Engineering Handoff: Applied AI & LLM Systems Portfolio

This document contains the complete, detailed specification to be implemented across the portfolio (`index.html` and the Next.js `src/` codebase).

---

## 1. Global Directives & Cleanup Rules

1. **Terminology Simplification:**
   - Drop all patch versions and model variant tags across the entire site. Use clean, standard industry names:
     - Use **Python** (not *Python 3.12* or *Python 3.11+*).
     - Use **TypeScript** (not *TypeScript 5.x Strict*).
     - Use **Claude** (not *Claude 3.5 Sonnet*).
     - Use **Gemini** (not *Google Gemini Flash pool*).
     - Use **Ollama** (not *Local Ollama qwen2.5:14b-instruct*).
2. **Complete Removal of AI Slop & Theatrical Lingo:**
   - Remove all military or sci-fi prefixes, such as `SYS · 01`, `SYS · 02`, `CRITICAL FLAGSHIP`, and `HIGH-VALUE SYSTEM`.
   - Remove manufactured executive titles like `Lead AI Systems Architect`, `Fullstack & Pipeline Architect`, and `Retrieval Systems Engineer`.
   - Remove all simulated interactive widgets, such as the fake `Circuit State: CLOSED [HEALTHY]` button and simulated `P99: 780ms` text.
   - Remove awkward self-quotes (e.g., *“Engineering fault-tolerant...” — Olmir Stocker Neto*).
3. **Single Resume Action:**
   - Remove all language toggles (`RESUME: EN/PT`).
   - Standardize all resume download buttons to a single target: `olmir-stocker-neto-resume-ai.pdf` (with download filename `Olmir_Stocker_Neto_Resume.pdf`).

---

## 2. Header & Navigation

- **Brand Display:**
  - Candidate Name: **Olmir Stocker Neto**.
  - Role Tag: **Applied AI Engineer**.
- **Navigation Links:**
  - Standard smooth-scroll anchor links: **Skills** (`#skills`), **Projects** (`#projects`), **Systems** (`#systems`), **Experience** (`#experience`), and **Contact** (`#contact`).
- **Call-to-Action Button:**
  - A single button labeled **Resume (PDF)** linking directly to `olmir-stocker-neto-resume-ai.pdf` with `target="_blank"` and `download="Olmir_Stocker_Neto_Resume.pdf"`.

---

## 3. Hero Section (Above the Fold)

- **Job Title:**
  - Primary `<h1>` must state: **Applied AI & LLM Systems Engineer**.
  - Eyebrow tag above the title: **Applied Generative AI · Multi-Agent Architectures · Production Pipelines**.
- **Executive Summary:**
  - A single paragraph describing the candidate's core profile:
    > Software Engineer specializing in applied Generative AI, autonomous multi-agent architectures, and production LLM integrations (Python, TypeScript). Proven track record of shipping resilient AI systems—including enterprise knowledge assistants at Accenture that reduced developer onboarding time by 40% and saved 100+ senior engineering hours, fault-tolerant agent swarms, and hybrid RAG pipelines with vector reranking. Experienced in turning non-deterministic foundation models into secure, reliable, and observable software.
- **Location & Timezone Clearance:**
  - Tag: **São Paulo, Brazil · Open to Remote (UTC-3 / US & European Timezone Overlap)**.
- **Action Buttons:**
  - Button 1 (Primary): **View Projects ↓** (scrolls to `#projects`).
  - Button 2 (Secondary): **Download Resume (PDF) ↗** (downloads `olmir-stocker-neto-resume-ai.pdf`).
  - Button 3 (Utility): **Copy Email** (copies `owmyrstocker@gmail.com` to the clipboard with a temporary toast notification).
- **Stat Cards Removal & Technical Skills Promotion:**
  - **Delete the four stat cards entirely** (the cards displaying 40%, 222, 275, and 42).
  - **Move and adapt the Technical Skills section into this hero zone**, directly beneath the action buttons.
  - Structure this promoted skills block as a compact, clean 4-column card or strip:
    - **Languages:** Python, TypeScript, SQL
    - **Models & AI:** Claude, Gemini, Ollama, LangChain
    - **Retrieval & Databases:** Hybrid RAG, FAISS, Cross-Encoder, PostgreSQL, SQLite
    - **Testing & Infrastructure:** Docker, pytest, Vitest, AWS SageMaker, GitHub Actions
  - This layout replacement saves approximately 100px of vertical space and pulls the top of the first flagship project card cleanly above the fold on standard laptop screens.

---

## 4. Featured AI Projects (Primary Showcase)

Display four first-class project cards. Each card must have:
- Standard project name (no sci-fi codes or fake titles).
- A 1-to-2 sentence domain summary explaining what the project does.
- A clean monospace/ASCII architecture pipeline flow.
- Core engineering bullet points detailing real mechanisms.
- Verification and test suite count.
- Technology tags using clean names.
- Direct links to GitHub and the live web application (where available).

### Project 1: Multi-Agent Swarm AI Orchestration Layer (`care-agent-swarm`)
- **Domain:** Fault-tolerant multi-agent orchestration layer for residential care workflows, automating resident intake, compliance checks, and incident triage.
- **Architecture Flow:**
  - `[Resident Intake] -> [Concurrent Sub-Agents] -> [Zod Runtime Contracts] -> [Deterministic Output]`
  - `[Circuit Breaker (429)] -> [Exponential Backoff]`
  - `[Escalation Safeguard] -> [Clinical Human Loop]`
- **Core Engineering Details:**
  - Implemented concurrent sub-agents with fault-isolated execution using `Promise.allSettled`, allowing partial intake completion even if an individual agent experiences transient degradation.
  - Engineered a resilient LLM harness featuring a 3-state circuit breaker state machine, exponential backoff with jitter, and automatic handling of provider rate limits (HTTP 429).
  - Enforced strict runtime data contracts using Zod schemas to validate and re-prompt malformed model outputs, guaranteeing deterministic JSON payloads.
  - Integrated 4-layer HIPAA-compliant PHI redaction across application logs and built an automated clinical escalation safeguard for unresolved incident loops.
- **Verification:** 42 automated unit and integration tests passing in Vitest using mock client dependency injection with zero API cost.
- **Technology Tags:** TypeScript, Node.js, Claude, Zod, Vitest.
- **Link:** GitHub Repository (`https://github.com/owmyr/care-agent-swarm`).

### Project 2: TrendScout — Autonomous Trend Intelligence & Multi-Agent Pipeline (`TrendScout`)
- **Domain:** End-to-end intelligence platform tracking e-commerce sales velocity, eliminating commodity noise, and semantically clustering apparel design trends.
- **Architecture Flow:**
  - `[Stealth Playwright Crawler] -> [Regex Token Filter] -> [Gemini Pool (Local Ollama Fallback)] -> [Air-Gapped Pipeline] -> [Next.js Live UI]`
- **Core Engineering Details:**
  - Built a dual-tier LLM engine utilizing a cloud Gemini pool for high-throughput 25-item micro-batch clustering with seamless offline fallback to a local Ollama model.
  - Designed an adaptive discovery algorithm combining historical baseline keywords with velocity-driven search terms to catch emerging micro-trends early.
  - Implemented deterministic regex pre-filtering to remove plain and basic garments prior to LLM inference, reducing token consumption while preserving audit baselines.
  - Built an air-gapped data export pipeline feeding a public Next.js subscriber portal on Vercel with zero database connections from the client.
- **Verification:** 222 automated pytest tests covering crawlers, database models, LLM fallbacks, and export sanitizers.
- **Technology Tags:** Python, Gemini, Ollama, Playwright, Next.js, SQLite, pytest.
- **Links:** Live Application (`https://trendscout-shopee.vercel.app`) and GitHub Repository (`https://github.com/owmyr/TrendScout`).

### Project 3: The Daily Bot — News AI Summarizer & Subscription Service (`thedailybot`)
- **Domain:** Automated news aggregation and subscription platform delivering daily personalized digests to active email subscribers.
- **Architecture Flow:**
  - `[News Sources (BBC, G1)] -> [Async Scraper (httpx)] -> [Gemini Multilingual Summarizer] -> [Subscriber Preference Routing] -> [Scheduled SMTP Dispatch]`
- **Core Engineering Details:**
  - Built an asynchronous multi-source scraper in Python (httpx, asyncio) featuring semaphore concurrency limits, circuit breaker recovery, and immediate Firestore persistence per article.
  - Leveraged Gemini AI to generate neutral summaries in the native language of each source (BBC in English, G1 in Portuguese).
  - Implemented an intelligent subscriber preference engine to generate customized Jinja2 email templates and manage rate-limited SMTP delivery.
  - Authored a comprehensive test suite of 275 automated tests (82% coverage) with pytest and pytest-asyncio, with scheduled daily runs orchestrated via GitHub Actions CI/CD.
- **Verification:** 275 automated tests (82% coverage) with pytest and pytest-asyncio.
- **Technology Tags:** Python, Gemini, asyncio, Firebase, GitHub Actions, pytest.
- **Links:** Live Application (`https://thedailybot.web.app`) and GitHub Repository (`https://github.com/owmyr/thedailybot`).

### Project 4: Hybrid RAG Chatbot with Cross-Encoder Re-Ranking (`D-D-RAG-Chatbot`)
- **Domain:** Modular Hybrid RAG pipeline using LangChain and Gemini to query complex documentation with sub-second retrieval latency.
- **Architecture Flow:**
  - `[Header-Aware Markdown Chunking] -> [FAISS Dense Index] -> [Cross-Encoder Reranker] -> [Sub-Second Context] -> [Gemini Generation]`
  - `[Atomic Staging Pointer Swap (-50% Index Time)]`
- **Core Engineering Details:**
  - Built an ingestion pipeline with markdown header-aware chunking to preserve document hierarchy, breadcrumbs, and cross-references within chunk metadata.
  - Implemented a two-stage retrieval pipeline combining FAISS dense vector search with a local TinyBERT Cross-Encoder reranker for high contextual precision.
  - Engineered atomic index swapping using staging directories to prevent vector store corruption during updates, cutting indexing time by 50%.
- **Verification:** Automated pytest suite covering chunking boundaries, FAISS index loading, and LCEL chain generation.
- **Technology Tags:** Python, LangChain, FAISS, Cross-Encoder, Gemini, pytest.
- **Link:** GitHub Repository (`https://github.com/owmyr/D-D-RAG-Chatbot`).

---

## 5. Fullstack & Offline-First Systems (Secondary Showcase)

Provide an always-visible section (do not hide inside an HTML `<details>` accordion) containing:

### Colégio Santa Marcelina — Real-Time Collaborative Pedagogical Platform (`SantaMarcelina`)
- **Domain:** Collaborative Single Page Application replacing decentralized spreadsheets with an instant evaluation portal for faculty and coordinators.
- **Core Engineering Details:**
  - Engineered an offline-first storage engine combining in-memory caching for instant UI updates, quota-safe local storage persistence, and cross-tab synchronization via BroadcastChannel.
  - Implemented a debounced synchronization queue (400ms) with batch upsert queries and compound keys, eliminating write race conditions and data loss.
  - Integrated Supabase Realtime WebSockets with PostgreSQL Row Level Security (RLS) to synchronize evaluation updates across admin dashboards instantaneously.
  - Optimized web performance via dynamic lazy loading for heavy spreadsheet generation modules (SheetJS), keeping the core production bundle under 56 kB with zero Oxlint warnings.
- **Verification:** Core production bundle under 56 kB with zero Oxlint warnings.
- **Technology Tags:** React, Vite, Supabase, PostgreSQL, Tailwind CSS, SheetJS.
- **Link:** GitHub Repository (`https://github.com/owmyr/SantaMarcelina`).

---

## 6. Work Experience Timeline

Present the three verified engineering roles in reverse chronological order:

1. **Revelo** (`AI Engineer · Oct 2025 – Present · Freelance / Project-Based · Remote`):
   - Applied advanced prompt engineering to diagnose and document failure modes in generative AI models for code generation tasks.
   - Acted as a Human-in-the-Loop (HITL) reviewer, evaluating 100+ code snippets to guarantee production quality and resolve critical model degradation issues.
   - Authored 50+ unit tests with pytest to validate deterministic correctness and execution safety of AI-generated solutions.
   - Managed and replicated complex multi-dependency runtime environments from GitHub commits using AWS SageMaker and Docker.
   - Delivered 200+ approved tasks across multiple AI engineering workflows, completing 50+ peer reviews to improve model alignment.
   - *Tags:* AWS SageMaker, Docker, pytest, Python, Prompt Engineering.

2. **Turing** (`AI Agent Evaluation Engineer · May 2026 – Sep 2026 · Contract · Remote`):
   - Engineered and evaluated multi-step Chain-of-Thought (CoT) reasoning trajectories for frontier LLMs, formalizing step-by-step mathematical reasoning and optimal algorithmic trade-offs.
   - Authored complex algorithmic reasoning benchmarks with LaTeX mathematical formulations, enforcing deterministic output constraints and eliminating model hallucinations.
   - Containerized automated evaluation harnesses within Docker sandboxes, executing 30+ edge-case test suites per task to stress-test model reasoning and verify time/memory complexity boundaries (O(N log N) vs O(N²)).
   - *Tags:* Frontier LLMs, Chain-of-Thought, Docker Sandboxes, LaTeX, pytest.

3. **Accenture** (`Software Engineer · Jan 2026 – May 2026 · Hybrid · Enterprise Client`):
   - Deployed an enterprise AI Knowledge Assistant utilizing Microsoft Copilot and RAG architecture, designing specialized domain sub-agents that reduced developer onboarding time by 40% and saved 100+ senior engineering hours across enterprise configuration workflows.
   - Engineered high-volume ETL pipelines and complex SQL extraction queries integrated directly with SAP IBP to process nationwide datasets and support operational planning.
   - Contributed to the modernization of legacy supply chain architecture into a scalable, high-throughput distributed ecosystem.
   - Collaborated in an Agile Scrum framework to map API contracts, author technical specifications, and ensure cross-team alignment.
   - *Tags:* Microsoft Copilot, RAG, Python, SAP IBP, SQL.

---

## 7. Education, Certifications & Social Hygiene

- **Education:**
  - **Postgraduate Specializations:** Educaminas (2025–2027 Expected) in Software Architecture, Data Science & Machine Learning, and Applied Statistics.
  - **Bachelor's Degree:** Systems Analysis and Development, UNIP (2021–2024).
  - **Professional Training:** AI Professional Training, Hashtag Treinamentos.
- **Social Tags & Page Metadata:**
  - Ensure standard Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`), Twitter cards, and favicon links are properly configured so that link unfurls in Slack, LinkedIn, and Teams display cleanly with the candidate's professional title and preview.
