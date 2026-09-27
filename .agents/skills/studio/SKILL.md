---
name: studio
description: High-craft dark design system inspired by Skills UI Studio. Features near-black palette (#000), subtle WebGL aurora gradients, hairline 1px rules, disciplined contrast, Urbanist and Supreme typography, monospace telemetry, and corner brackets.
---

# Studio Design System

The **Studio** design system is engineered for high-craft developer portfolios, technical agency one-pagers, and flagship system interfaces. It delivers an intentional aesthetic that commands authority through visual restraint: near-black canvas, hairline rules, disciplined contrast, and an animated background mesh aurora as the sole source of color.

---

## 1. Core Visual Principles

1. **Aurora is the Sole Source of Color**:
   - The canvas (`#000000`), cards, and text stay strictly monochrome and near-black.
   - All ambient color radiates from a slow, subtle background mesh shader aurora.
   - Accents outside the aurora are restricted to status indicators (e.g., emerald green `#10b981` for active/verified status).
2. **Hairline Rules & Geometric Restraint**:
   - Dividers and borders are 1px hairlines: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.12)`.
   - Never use thick borders, heavy shadows, or saturated SaaS gradients.
3. **Corner Brackets**:
   - Cards and spec sheets feature minimal corner brackets (12×12px 1px borders) at the four corners (`bracket-corner-tl`, `tr`, `bl`, `br`).
4. **Disciplined Functional Density**:
   - Pair crisp display sans headlines with dense monospace telemetry strips and ASCII architecture diagrams.
   - Every element must communicate engineering value—zero decorative fluff.

---

## 2. Design Tokens & CSS Variables

```css
:root {
  /* Surfaces & Canvas */
  --bg: #000000;
  --card: rgba(14, 14, 16, 0.65);
  --card-strong: rgba(10, 10, 12, 0.80);
  --line: rgba(255, 255, 255, 0.10);

  /* Typography Colors (WCAG 2.1 AA Compliant) */
  --ink: #f4f4f5;
  --silver: #e4e4e7;
  --muted: rgba(244, 244, 245, 0.74);
  --faint: rgba(244, 244, 245, 0.68);

  /* Typography Families */
  --display: 'Urbanist', system-ui, -apple-system, sans-serif;
  --sans: 'Supreme', system-ui, -apple-system, sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Layout */
  --maxw: 1200px;
}
```

### Font Imports
```html
<!-- Display Sans (Headings) & Monospace (Architecture & Telemetry) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<!-- UI Sans (Supreme) -->
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=supreme@400,500&display=swap" rel="stylesheet">
```

---

## 3. Component Architecture

### A. WebGL Mesh Shader Aurora
Rendered fixed in the background using `@paper-design/shaders`:
```html
<div class="aurora-stage" aria-hidden="true">
  <div id="aurora-field"></div>
  <div id="aurora-sheen" class="aurora-sheen"></div>
</div>
<div class="aurora-vignette" aria-hidden="true"></div>
<noscript><div class="noscript-bg"></div></noscript>

<script type="module">
  import { ShaderMount, meshGradientFragmentShader, getShaderColorFromString } from 'https://esm.sh/@paper-design/shaders@latest';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const field = ['#050507', '#6b6b76', '#26262c', '#4c4c55', '#121216'];
  const sheen = ['#000000', '#8a8a94', '#3a3a43'];
  const sizing = { u_fit: 2, u_scale: 1, u_rotation: 0, u_offsetX: 0, u_offsetY: 0, u_originX: 0.5, u_originY: 0.5, u_worldWidth: 0, u_worldHeight: 0 };

  new ShaderMount(document.getElementById('aurora-field'), meshGradientFragmentShader, {
    u_colors: field.map(getShaderColorFromString), u_colorsCount: field.length,
    u_distortion: 0.85, u_swirl: 0.18, u_grainMixer: 0, u_grainOverlay: 0, ...sizing
  }, undefined, reduce ? 0 : 0.25, 0);

  new ShaderMount(document.getElementById('aurora-sheen'), meshGradientFragmentShader, {
    u_colors: sheen.map(getShaderColorFromString), u_colorsCount: sheen.length,
    u_distortion: 1.0, u_swirl: 0.6, u_grainMixer: 0, u_grainOverlay: 0, ...sizing
  }, undefined, reduce ? 0 : 0.18, 0);
</script>
```

### B. Corner Brackets
```css
.bracket-corner { position: absolute; width: 12px; height: 12px; pointer-events: none; }
.bracket-corner-tl { top: 0; left: 0; border-top: 1px solid rgba(255, 255, 255, .35); border-left: 1px solid rgba(255, 255, 255, .35); }
.bracket-corner-tr { top: 0; right: 0; border-top: 1px solid rgba(255, 255, 255, .35); border-right: 1px solid rgba(255, 255, 255, .35); }
.bracket-corner-bl { bottom: 0; left: 0; border-bottom: 1px solid rgba(255, 255, 255, .35); border-left: 1px solid rgba(255, 255, 255, .35); }
.bracket-corner-br { bottom: 0; right: 0; border-bottom: 1px solid rgba(255, 255, 255, .35); border-right: 1px solid rgba(255, 255, 255, .35); }
```

### C. Studio Pill Buttons
```css
.btn {
  display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
  font-family: var(--sans); font-weight: 500; font-size: 13.5px;
  padding: 10px 20px; border-radius: 999px; border: 1px solid transparent;
  transition: transform .25s cubic-bezier(.16, 1, .3, 1), background .25s, border-color .25s, color .25s;
}
.btn-light { background: #f4f4f5; color: #0a0a0a; }
.btn-light:hover { transform: scale(1.04); background: #fff; }
.btn-ghost { border-color: rgba(255, 255, 255, .25); color: #f4f4f5; backdrop-filter: blur(6px); }
.btn-ghost:hover { transform: scale(1.04); background: rgba(255, 255, 255, .08); border-color: rgba(255, 255, 255, .45); }
```

### D. Qualitative Verification Badges
Used to communicate engineering rigor without citing arbitrary numbers or amateurish test counts:
```css
.verify-badge {
  display: inline-flex; align-items: center; gap: 8px; padding: 5px 13px;
  border-radius: 999px; background: rgba(16, 185, 129, .10); border: 1px solid rgba(16, 185, 129, .25);
  color: #34d399; font-family: var(--mono); font-size: 11.5px; line-height: 1.4;
}
.verify-badge::before { content: "●"; color: #10b981; font-size: 8px; flex-shrink: 0; }
```

### E. Monospace ASCII Architecture Pipelines
Wrap multi-step system pipelines inside preformatted boxes with horizontal scrolling:
```html
<div class="flow-box">
  <div class="flow-label">Architecture Flow</div>
  <pre class="flow-text">[Input Layer] -> [Async Worker Pool] -> [Circuit Breaker] -> [Deterministic Storage]</pre>
</div>
```
```css
.flow-box {
  margin-bottom: 20px; padding: 14px 18px; border-radius: 12px;
  border: 1px solid var(--line); background: #070709; overflow-x: auto;
}
.flow-label { font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--faint); margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
.flow-label::before { content: "●"; font-size: 8px; color: var(--silver); }
.flow-text { font-family: var(--mono); font-size: 11.5px; color: #e4e4e7; line-height: 1.6; white-space: pre; margin: 0; }
```

### F. Progressive Disclosure Drawer (Zero-Jank CSS Grid)
```css
.drawer-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .3s cubic-bezier(.16, 1, .3, 1);
}
.drawer-content.is-open {
  grid-template-rows: 1fr;
}
.drawer-inner {
  overflow: hidden;
}
```

### G. Giant Footer Wordmark
```html
<div class="wordmark-wrap">
  <div class="wordmark" id="wordmark">BRAND NAME</div>
</div>
```
```css
.wordmark {
  font-family: var(--display); font-weight: 600;
  font-size: clamp(52px, 14vw, 190px); line-height: .82; text-align: center; white-space: nowrap;
  background: linear-gradient(180deg, rgba(244, 244, 245, .92), rgba(244, 244, 245, .12));
  -webkit-background-clip: text; background-clip: text; color: transparent;
  user-select: none;
}
```

---

## 4. Anti-Patterns to Avoid

- **Do NOT use bright background gradients**: The background must remain deep `#000` with translucent glass cards (`rgba(14, 14, 16, 0.65)`).
- **Do NOT show raw test counts in badges or headers**: Replace vanity metrics (`42 Tests`, `222 Tests`) with qualitative verification methodology statements.
- **Do NOT use generic SaaS illustrations**: Rely exclusively on typography, monospace telemetry, ASCII flowcharts, and hairline framing.
- **Do NOT include patch versions in tech tags**: Use clean unversioned standards (`Python`, `TypeScript`, `Claude`, `Gemini`, `Ollama`, `Vitest`, `pytest`).
