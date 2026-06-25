# GGE Design System — Direction des Opérations

A presentation design system for **Galileo Global Education France**, owned by the **Direction des Opérations**. It encodes a sober, institutional, information-dense slide language for steering-committee audiences (Codir France, Copil transverse, central teams, school directors).

This is a **slide / deck design system**, not a product-UI system. There is no app, website, codebase, or Figma file behind it — the deliverable is a reusable visual + editorial language for generating decks, plus a library of 10 named layouts.

---

## Sources

This system was built **entirely from a written specification** supplied by the GGE Direction des Opérations:

- `uploads/gge_design_system.md` — the canonical spec (brand identity, palette, type scale, 10 editorial golden rules, 10 named layouts, layout-selection logic, reusable components, anti-patterns, brief format, export rules).
- `uploads/gge_design_system.docx` — same content in Word form.

No logos, photography, icon sets, codebase, or Figma links were provided. See **Caveats** at the bottom for substitutions made.

---

## What's in this folder (index)

| File / folder | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography, index |
| `colors_and_type.css` | All color + type tokens (raw brand vars, semantic roles, type classes) |
| `SKILL.md` | Agent-Skill manifest so this system works as a downloadable Claude skill |
| `slides/` | Sample slide per named layout (`index.html` gallery + one `.html`/`.jsx` per layout) + shared `components.jsx` chrome |
| `preview/` | Small specimen cards that populate the Design System tab |
| `assets/` | Official logos (`gge-logo-color.png`, `gge-logo-white.png`) + decorative patterns |
| `fonts/` | Font note — Barlow + Barlow Condensed are loaded from Google Fonts |

**Start here:** open `slides/index.html` to see every layout rendered at 1920×1080.

---

## (1) Brand identity at a glance

- **Organisation:** Galileo Global Education France
- **Emitting direction:** Direction des Opérations
- **Audience:** Codir France, Copil transverse, central teams, school directors
- **Register:** institutional, dense, factual, conclusion-first

**Visual personality**
- Sober and institutional — never decorative.
- Information density is a feature, not a bug. No three-word slides.
- Strong **typographic** hierarchy, flat **chromatic** hierarchy.
- Exactly **one** visual accent per slide (fuchsia), reserved for the single critical element.

---

## (2) CONTENT FUNDAMENTALS — how copy is written

The editorial voice is the heart of this system. It is governed by 10 golden rules (R1–R10 in the spec). The essentials:

**Language & register.** French, institutional, formal. No "I", no "you" — the deck speaks in impersonal, factual third person ("3 irritants bloquent…", "Le déploiement avance…"). No marketing warmth, no storytelling flourish. The audience is senior and time-poor; copy is telegraphic and load-bearing.

**Titles are conclusions, never subjects (R1).** This is the signature editorial move. A slide is titled with its takeaway, not its topic.
- ✅ "3 irritants bloquent le passage en mode RUN"
- ✅ "Le déploiement avance, l'adoption reste à consolider"
- ✅ "ProCertif reste pertinent mais nécessite un sponsor métier renforcé"
- ❌ "Bilan ProCertif" (that's a subject, not a conclusion)

**No introductory sentences (R5).** Banned: "Cette slide présente…", "Il convient de souligner…". Enter the substance directly.

**Bullets = one idea, one line, two lines max (R6).** A bullet longer than two lines contains two ideas — split it or move it to prose inside a card.

**Numbers are typographically French (R4).**
- Decimal **comma**, never a point: `0,6` not `0.6`.
- Ranges use an **en dash, no spaces**: `0,2–0,6M` not `0.2-0.6M`.
- Academic years are written `26/27` (no spaces).
- KPIs are precise and qualified ("+18 pts", "4h synchro vs 1h cible", "26 campuses").

**Casing.** Eyebrows / labels / footers are UPPERCASE with letter-spacing. Titles are sentence-case. Body is sentence-case. Section eyebrows read "SECTION 1", "PARTIE 2".

**Emphasis discipline.** Bold is reserved for critical numbers and headers — never blanket-bolded keywords. Body text is **left-aligned** by default; only the title may be centered (on dividers/covers).

**Tone words that fit:** déploiement, irritants, acquis, jalons, recette, feuille de route, sponsor métier, mode RUN, MEP (mise en production). The vocabulary is operational program-management French.

---

## (3) VISUAL FOUNDATIONS

**Color.** A two-tone navy world with a single hot accent.
- **Bleu marine `#001F60`** is the dominant — 60–70% of visual weight. It backs dividers, sets all titles, fills numbered pastilles and card headers.
- **Bleu pétrole `#163E64`** carries secondary text and subtitles on light grounds.
- **Fuchsia `#E01289`** is the *only* accent and must stay ≤5% of the slide. **Hard rule: fuchsia is never a full background fill.** It appears only as (a) the 2–3px underline bar under a content-slide title — the GGE signature, (b) the one critical bullet/pill on a slide, (c) the XXL section number on dividers.
- White `#FFFFFF` is the content-slide background (never beige/cream). `#F2F2F4` backs secondary cards; `#E8E8E8` draws borders and column rules; `#BFBFBF` is for footers/meta; `#0E2841` is body ink.
- Chromatic hierarchy is intentionally flat — the *type* does the ranking, not color.

**Typography.** Two families only.
- **Barlow Condensed** (700) — titles, big numbers, section dividers, KPI figures, labels.
- **Barlow** (300–600) — subtitles, body, bullets, eyebrows, footers.
- Fallbacks: Aptos, Calibri, Helvetica, sans-serif (matching the GGE office stack).
- The scale is built for 1920×1080: slide titles 26–32px, body 12–14px, divider titles 60–72px, KPI numbers 60–80px, watermark numbers 240–280px, footers 9–11px.

**Layout & spacing.** Canvas is **1920×1080 (16:9)**. Inner margins: **44px** left/right, **24–32px** top/bottom. Footer is always present (R8). Density over whitespace (R7): prefer three dense columns to five spaced bullets. Columns are separated by 1px `#E8E8E8` rules, not gaps alone. Max **3 levels** of visual information per slide.

**Backgrounds & texture.** No photography, no gradients-as-decoration, no cream grounds. Content slides are flat white. Dividers are flat marine with two restrained decorative devices: a **diagonal hairline pattern at ~6% white** and **two concentric circles** (5% white border + 12% fuchsia border) centered behind the title, plus a **240–280px watermark number at 3% white**. The cover's right panel reuses the diagonal pattern and a 4px fuchsia vertical edge bar.

**Borders, cards & elevation.** Cards are flat — **no drop shadows, no rounded corners** in the default system (institutional sobriety). A card is a `#F2F2F4` fill or a white box with a `#E8E8E8` 1px border and a marine header strip. Functional emoji markers sit **bare** beside their label — no chip, no border, no fill. Numbered pastilles are the only circles in the content vocabulary (48px marine).

**Animation.** None by default. This is a printed-thinking medium — decks export to PDF/PPTX. If a screen build is animated, keep it to quiet fades; no bounces, no slides-in, no parallax.

**Imagery vibe.** There is none specified — the brand is text-and-data, not image-led. If imagery is ever added it should be cool-toned and restrained to match the navy world; but the default is **structured data visuals** (columns, KPIs, timelines, quadrants) rather than pictures. "A visual on every slide or nothing" (R10) means *structural* visuals — cards, KPI numbers, schematics — not stock photos.

**Corner radii.** 0 (squared) throughout, except the necessarily-round numbered pastilles and the divider's concentric circles.

---

## (4) ICONOGRAPHY

**The system deliberately avoids decorative icons.** Per golden rule **R9**, the only icon vocabulary is a tiny set of **functional emoji semantic markers**. They are placed **bare — no border, no background fill, no chip** — sitting directly beside their label. Never decorative, never on a filled color, one functional meaning each.

Sanctioned functional markers:

| Emoji | Meaning | Where |
|---|---|---|
| ✅ | Acquis / done | 3-COL "Acquis" column header |
| ⚡ | Irritant / risk | 3-COL "Risques/Irritants" column header |
| ➡️ | Plan d'action | 3-COL "Plan d'action" column header |
| 📌 | Décision attendue | "Décisions" slides / callouts |

That is the entire icon system. There is **no icon font, no SVG icon set, no Lucide/Heroicons** — and none should be introduced, because added iconography would violate the sober institutional register. Unicode is used sparingly and structurally: the en dash `–` for ranges, the bullet dot (drawn as a 4×4px marine square, not a glyph), and numerals as section markers.

If a future need for true icons arises, flag it to the Direction des Opérations rather than importing a set — the no-decoration rule is a deliberate brand choice, not an omission.

---

## Caveats / substitutions

- **Official logos** are in `assets/`: `gge-logo-color.png` (navy + tricolor globe, for light grounds) and `gge-logo-white.png` (for marine/dark grounds). The `Wordmark` component auto-selects the right one via its `dark` prop. The earlier CSS placeholder wordmark has been retired.
- **Fonts:** Barlow + Barlow Condensed are loaded from **Google Fonts** (the spec names them as the open-source substitute for the office Aptos/Calibri stack). No local font files were shipped; if you need an offline/standalone build, download the TTFs into `fonts/`.
- No product UI, screenshots, or brand photography exist for this system — so there are no UI kits, only the slide layout library.
