---
name: allset-design
description: Use this skill to generate well-branded interfaces and assets for Allset — a family travel organizer app for CSP+ parents. Contains colors, typography, logo assets, spacing tokens, and React UI components for the warm editorial Allset brand (Cormorant Garamond italic + DM Sans, Obsidian/Cream/Bark palette). Calibrated for pitch decks, landing pages, and marketing collateral.
user-invocable: true
---

Read the README.md file within this skill and explore the other available files.

If creating slides or pitch decks: load `styles.css` for tokens, use `deck-stage.js` for the slide shell, and compose with `components/slides/` (SlideEyebrow, StatDisplay) and `components/core/` (LogoWordmark, Button, Badge, Card).

If creating landing pages or marketing: link `styles.css` and use the semantic type classes (`.allset-display`, `.allset-h1`, `.allset-label`) + color tokens (`var(--allset-obsidian)`, `var(--allset-cream)`, `var(--allset-bark)`).

If the user invokes this skill without other guidance, ask what they want to build (slide deck, landing page, flyer, email), ask a few focused questions about content and audience, and act as an expert designer who outputs HTML artifacts in the Allset visual identity.
