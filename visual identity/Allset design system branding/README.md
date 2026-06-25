# Allset Design System

Visual identity and component library for **Allset** — a family travel organizer app for CSP+ parents.

**Sources:** `uploads/Allset_CahierDesCharges_MVP.md`, `uploads/allset_prototype_v2.html`, `uploads/color_palette.md`, and the Allset Brand Book (`Allset Brand Book.dc.html`).

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Entry point — `@import` this one file to get all tokens |
| `tokens/colors.css` | All color custom properties |
| `tokens/typography.css` | Font imports + type scale tokens + semantic classes |
| `tokens/spacing.css` | Spacing scale + layout tokens |
| `components/core/` | Button · Badge · Card · LogoWordmark |
| `components/slides/` | SlideEyebrow · StatDisplay |
| `guidelines/` | Specimen cards for the Design System tab |
| `assets/` | `logo-dark.svg` · `logo-light.svg` |
| `Allset Pitch Deck.dc.html` | Full 11-slide investor pitch deck |
| `Allset Brand Book.dc.html` | Complete visual identity reference |

---

## (1) Brand Identity

- **Product:** Allset — family travel organizer mobile app
- **Target:** Marie, 35–45, CSP+, cadre active, 2 enfants. Chief Travel Officer du foyer par défaut.
- **Problem solved:** Elle repart de zéro à chaque voyage — structure oubliée, tout dans sa tête, impossible à déléguer.
- **Positioning:** Un moule de voyage réutilisable, des checklists générées automatiquement, un lien pour partager sans friction.
- **Register:** Warm & aspirational — chaleureux mais précis. Le ton d'une amie organisée.

---

## (2) Content Fundamentals

**Tone:** Warm but precise. Never generic, always anchored in a real situation. The voice of an organized friend who says "I've thought of everything."

**French register:** Vouvoiement in product copy, tutoiement only in very informal email subject lines.

**Headlines:** Emotional, concrete, benefit-first.
- ✅ "Partez sereine. L'organisation, c'est nous."
- ✅ "Elle recommence à zéro. À chaque voyage."
- ❌ "Application d'organisation de voyage" (topic, not benefit)

**Numbers:** French format — comma decimal (`3,5M`), en-dash ranges (`3–4`), no spaces around en-dash.

**No emoji** in brand documents — only functional status markers in app UI (✓ for done, ⚡ for warning).

---

## (3) Visual Foundations

### Colors
Two-tone world (Obsidian dark / Cream light) with a single warm accent (Bark).

| Token | Hex | Role |
|---|---|---|
| `--allset-obsidian` | `#1C1714` | Dominant — dark backgrounds, primary text |
| `--allset-cream` | `#F5F0E8` | Light background, text on dark |
| `--allset-bark` | `#8D5B4C` | **Single accent** — CTA, lines, highlights. Max 10% surface |
| `--allset-espresso` | `#5A2A27` | Dark accent — active borders |
| `--allset-dark-bark` | `#5C4742` | Body text on cream |
| `--allset-pebble` | `#A5978B` | Secondary text |
| `--allset-stone` | `#C4BBAF` | Tertiary text, dividers |
| `--allset-white` | `#FFFFFF` | Cards on cream background |

**Rule:** Slide/document backgrounds alternate Obsidian and Cream for rhythm. Bark is used sparingly — one accent per section.

### Typography
Two families only. Never mix with other serifs.

| Family | Role | Weights |
|---|---|---|
| **Cormorant Garamond** (italic) | Display titles, emotional copy, logo | 300–600 |
| **DM Sans** | Body, labels, UI, buttons, badges | 300–500 |

**Scale (1920×1080):** Display 120px · H1 80px · H2 56px · H3 40px · Body 17px · Label 11px

Use semantic CSS classes: `.allset-display`, `.allset-h1`, `.allset-h2`, `.allset-h3`, `.allset-body`, `.allset-label`

### Logo
Option A — Wordmark Italique (recommended): "allset" in Cormorant Garamond italic 400, lowercase, with a 2px Bark underline.

Assets: `assets/logo-dark.svg` (Obsidian text) · `assets/logo-light.svg` (Cream text on dark bg)
Use `<LogoWordmark dark={true}>` on Obsidian slides.
Minimum size: 32px height. Clear space: height of the "a" on all sides.

### Layout
- **Slides:** 1920×1080, padding 120px H / 80px V
- **Cards:** 1px Stone border, 28px V / 32px H padding, 0–2px radius
- **No drop shadows.** No gradients. No strong rounded corners.
- **Column rules:** 1px `var(--divider)` between columns.
- **Alternating rhythm:** Obsidian sections for emotional impact, Cream for data/content.

### Animation
None. Decks export to PPTX/PDF — keep to quiet fades at most. Never bounces or slides-in.

---

## (4) Iconography

No decorative icon system. The only functional markers used in the app UI are Unicode glyphs placed bare (no border, no fill):

| Glyph | Meaning |
|---|---|
| ✓ | Étape validée / checked |
| ⚡ | Manquant / warning |
| → | Navigation / next step |

Never add an icon font or SVG icon set — the no-decoration rule is a deliberate brand choice.

---

## Caveats

- **Logo SVGs** use web font reference — they render correctly in HTML pages that load `styles.css` (which imports Google Fonts), but will fall back to Georgia in standalone SVG viewers.
- **Font files** are loaded from Google Fonts CDN. For offline builds, download TTF files into `assets/fonts/` and replace the `@import url(...)` in `tokens/typography.css` with local `@font-face` rules.
- No photography or illustration assets yet — the visual language is text-and-structure-led. Add brand imagery to `assets/` when available.
