# Mission: Portfolio Reset, Test Hygiene Refactoring & Interactive Architecture Pipeline

> **Instructions for the Frontend Agent:**  
> Execute the three core architectural goals described below sequentially. Ensure both `index.html` and the Next.js components in `src/` are synchronized and build cleanly without type or lint errors.

---

## Goal 1: Reset Working State to the Repository Baseline

Cleanly restore the repository's tracked files to the baseline commit to clear any uncommitted or partially applied edits:

1. Run:
   ```bash
   git restore .
   ```
   *(Note: Do not delete newly created reference documents such as `project_cards_plan.md` and `frontend_agent_prompt.md`).*
2. Confirm the starting state with `git status` before beginning modifications.

---

## Goal 2: Reapply Test Hygiene Refactoring & Hero Skills Promotion

Purge all raw test count metrics across the site and elevate the candidate's positioning from "junior counting assertions" to "senior systems architect":

1. **Delete Raw Test Counters in the Hero / Stats Zone:**
   - Remove the stat cards displaying arbitrary numbers: `222 Automated Tests`, `275 Automated Tests`, `42 Automated Tests`, and `530+ Automated Tests`.
   - **Promote Technical Skills into this hero space:** Place a compact, clean 4-column Technical Skills card directly beneath the hero action buttons (`Languages`, `Models & AI`, `Retrieval & Databases`, `Testing & Infrastructure`). This saves ~100px of vertical space and pulls the first project card above the fold on $1440 \times 900$ displays.
2. **Purge Test Counts from Project Badges & Headers:**
   - Remove badges reading `42 Tests · Vitest`, `222 Tests · pytest`, `275 Passing Tests`, etc.
3. **Implement Qualitative Verification Badges:**
   Replace the badges in each project card with the exact qualitative verification methodology:
   - **`care-agent-swarm`:** `Deterministic mock client harness with dependency injection for zero-cost, hermetic CI verification`
   - **`TrendScout`:** `Automated CI pipeline validating multi-agent crawlers, LLM failovers, and sanitized exports`
   - **`thedailybot`:** `Automated daily scheduled runs with Firestore dead-man's-switch health monitoring`
   - **`D-D-RAG-Chatbot`:** `Automated CI pipeline testing chunking boundaries, FAISS index loading, and LCEL chain generation`
4. **Standardize Tech Taxonomy:**
   - Use clean, unversioned names: `Python`, `TypeScript`, `Claude`, `Gemini`, `Ollama`, `Zod`, `Vitest`, `pytest`.
   - Drop all patch/minor tags (no `Python 3.12`, `Claude 3.5 Sonnet`, `Next.js 14 App Router`) and drop all theatrical jargon (`SYS · 01`, `CRITICAL FLAGSHIP`, `Lead AI Systems Architect`).

---

## Goal 3: Replace Monospace ASCII Blocks with Interactive Architecture Pipelines

Replace all plain-text monospace ASCII boxes (`<pre class="flow-text">...</pre>`) with modern, visually rich, and **interactable** architecture pipeline components (`InteractivePipelineFlow`).

### Why ASCII is Being Replaced
- Plain-text ASCII diagrams look like raw terminal debug dumps.
- They lack visual hierarchy, brand craft, and micro-interactions.
- They break or wrap awkwardly on mobile screens.

### Design & Behavior Specifications for the Interactive Pipeline

1. **Visual Pipeline Layout (Default State):**
   - Render each pipeline stage as a styled glassmorphic node card (`border border-white/10 bg-zinc-900/60 rounded-xl p-3`).
   - Connect stages using visual directional arrows or SVG connectors with subtle animated glowing pulse lines (`stroke-dasharray` animation).
   - Display a status dot on each node (emerald for active/healthy, cyan for routing, amber for fallback/safeguard).
2. **Interactive Micro-Interactions (Clickable / Hoverable Nodes):**
   - Each node in the pipeline must be interactable (hover or click).
   - Selecting a node opens/updates an inline **Node Inspector Box** directly underneath the pipeline displaying:
     - **Input / Protocol:** Data shape or event triggering the stage.
     - **Failure Mode & Recovery:** What can go wrong and how the system prevents crashes (circuit breaker, retry with jitter, Zod re-prompt).
     - **Latency SLA / Guarantees:** Target execution profile or concurrency guarantees.
3. **Interactive Failover Branch Toggle (Circuit Breaker / Local Fallback):**
   - For systems with alternative routing paths (`care-agent-swarm` rate limit failover and `TrendScout` local Ollama fallback), provide an interactive toggle button:
     - `[Simulate Failover / View Fallback Path]`
     - Clicking this highlights the secondary circuit in amber/cyan and shows the fallback data route dynamically.
4. **Responsive Mobile Fallback:**
   - On screens `< 768px`, transform the horizontal pipeline into a vertical connected timeline/stepper with a continuous glowing connector line down the left side.

---

### Exact Pipeline Node Definitions & Inspector Data

#### 1. Multi-Agent Swarm AI Orchestration Layer (`care-agent-swarm`)
- **Primary Pipeline Stages:**
  - **Node 1: Resident Intake**
    - *Protocol:* REST / Webhook payload
    - *Inspector:* Validates raw intake forms, medical history flags, and initial triage urgency scores.
  - **Node 2: Concurrent Sub-Agents**
    - *Protocol:* `Promise.allSettled` parallel worker pool
    - *Inspector:* Runs domain compliance, dietary analysis, and incident triage in isolated sandboxes to prevent cascading worker crashes.
  - **Node 3: Zod Runtime Contracts**
    - *Protocol:* Runtime schema enforcement
    - *Inspector:* Intercepts model generation; automatically re-prompts on schema violation to guarantee 100% deterministic JSON output.
  - **Node 4: Deterministic Output**
    - *Protocol:* Clean EHR / FHIR structured record
    - *Inspector:* Persists validated care plan and triggers clinical human escalation when uncertainty threshold > 0.35.
- **Failover / Safeguard Branch:**
  - **Branch: Circuit Breaker & Exponential Backoff**
    - *Inspector:* 3-state state machine (Closed/Open/Half-Open). Traps HTTP 429 rate limits and invokes exponential backoff with randomized jitter.

#### 2. TrendScout — Autonomous Trend Intelligence Pipeline (`TrendScout`)
- **Primary Pipeline Stages:**
  - **Node 1: Stealth Crawler**
    - *Protocol:* Playwright headless cluster
    - *Inspector:* Browser fingerprint rotation and rate-limited catalog scraping across dynamic e-commerce portals.
  - **Node 2: Regex Heuristic Pre-Filter**
    - *Protocol:* In-memory token filter
    - *Inspector:* Deterministically strips basic commodity garments prior to LLM processing, slashing downstream inference token volume.
  - **Node 3: Gemini Batch Pool**
    - *Protocol:* 25-item micro-batch parallel inference
    - *Inspector:* High-throughput semantic clustering of style attributes, silhouette shifts, and color palettes.
  - **Node 4: Air-Gapped Export**
    - *Protocol:* Automated JSON artifact deployment
    - *Inspector:* Air-gapped CDN distribution feeding public Next.js frontend with 0 open database ports exposed to clients.
- **Failover / Safeguard Branch:**
  - **Branch: Local Ollama Fallback**
    - *Inspector:* Auto-routes clustering workloads to a local Qwen model whenever cloud API rate limits or network degradation are detected.

#### 3. The Daily Bot — News AI Summarizer & Subscription Service (`thedailybot`)
- **Primary Pipeline Stages:**
  - **Node 1: Multi-Source Ingestion**
    - *Protocol:* `httpx` async workers with semaphore locks
    - *Inspector:* Concurrent scraping across international feeds (BBC, G1) with automatic circuit breaker recovery.
  - **Node 2: Gemini Multilingual Engine**
    - *Protocol:* Native-language model synthesis
    - *Inspector:* Generates concise, unbiased daily briefings in source language (English & Portuguese).
  - **Node 3: Subscriber Routing Engine**
    - *Protocol:* Dynamic Jinja2 template compiler
    - *Inspector:* Compiles personalized newsletters based on subscriber topic tags and delivery window preferences.
  - **Node 4: Rate-Limited SMTP Dispatch**
    - *Protocol:* Secure TLS email delivery with DKIM/SPF
    - *Inspector:* Batched SMTP queuing with automatic delivery retry queues and bounce logging.
- **Failover / Safeguard Branch:**
  - **Branch: Firestore Dead-Man's Switch**
    - *Inspector:* Monitors daily 13:00 UTC execution heartbeat; fires instant alerting webhook if an execution cycle fails to report.

#### 4. Hybrid RAG Chatbot with Cross-Encoder Re-Ranking (`D-D-RAG-Chatbot`)
- **Primary Pipeline Stages:**
  - **Node 1: Header-Aware Chunking**
    - *Protocol:* Markdown AST hierarchical parser
    - *Inspector:* Preserves section hierarchy, breadcrumbs, and cross-references in chunk metadata for rich contextual embedding.
  - **Node 2: FAISS Dense Vector Index**
    - *Protocol:* Top-K approximate nearest neighbors
    - *Inspector:* Performs initial high-recall candidate retrieval across high-dimensional vector space.
  - **Node 3: Cross-Encoder Re-Ranker**
    - *Protocol:* TinyBERT cross-attention re-scoring
    - *Inspector:* Computes full query-passage cross-attention to re-rank candidates and filter out semantic false positives.
  - **Node 4: Gemini Grounded Synthesis**
    - *Protocol:* Grounded LLM generation
    - *Inspector:* Synthesizes verified answers with explicit document citations in under 800ms end-to-end.
- **Failover / Safeguard Branch:**
  - **Branch: Atomic Staging Pointer Swap**
    - *Inspector:* Writes new vector embeddings to isolated staging directory and performs atomic pointer swap, reducing re-indexing downtime by 50%.

---

## Verification & Build Checklist
- [ ] Working tree cleanly restored (`git restore .` executed before edits).
- [ ] Zero instances of `42 Tests`, `222 Tests`, `275 Tests`, or `530+ tests` in badges, cards, or hero stats.
- [ ] Technical Skills cleanly integrated into the Hero section directly beneath the CTA buttons.
- [ ] All four project cards feature the interactive visual pipeline with clickable node inspectors (no raw ASCII text).
- [ ] Progressive Disclosure deep-dive toggle functions smoothly with proper `aria-expanded` attributes.
- [ ] `npm run build` passes with zero type errors and zero broken imports.
