# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Allset is a family travel planning app built as a **no-code formation exercise**. The deliverable is a clickable HTML prototype for presentation purposes, backed by an Airtable data model intended to be wired to Softr. This is not a traditional software project — there is no build system, no package manager, no test suite.

## Files

| File | Role |
|------|------|
| `allset_prototype_v2.html` | Main deliverable — single-file clickable prototype, 8 screens |
| `Allset_CahierDesCharges_MVP.md` | Full product spec: persona, feature set, checklist content, user flows |
| `allset_db_hypotheses.md` | Airtable schema decisions and architecture rationale |
| `ALLSET_STATUT_J2.md` | Project status log — tracks what's done and what's next |
| `templates import de data airtable/` | CSV seed files for the 5 Airtable tables |
| `inspi2.png` | Visual reference — the validated design direction |

## Prototype architecture

`allset_prototype_v2.html` is a self-contained file: all CSS, JS, and screen content live inside it. Screens are shown/hidden via CSS (`display: none` / `.active`) with a `navigateTo(screenId)` JS function handling transitions. No framework, no external dependencies except Google Fonts (Playfair Display).

To preview: open the file directly in a browser. No server needed.

The 8 screens in order:
1. Home / liste des voyages
2. Création d'un voyage
3. Dashboard voyage (écran pivot)
4. Détail étape + checklist auto-générée
5. Share Modal
6. Vue partenaire (publique, filtrée par `share_token`)
7. (+ 2 additional screens)

## Airtable data model

**Base ID:** `appFVKKftkjTeYrO7`

5 tables with this dependency order: `UTILISATEUR` → `VOYAGE` → `ETAPE` → `CHECKLIST_ITEM` (+ `TEMPLATE_ITEM` as static reference).

Key design decisions to respect:
- `CHECKLIST_ITEM` is the analytical fact table (all V1 metrics derived from it)
- `voyage_id` is deliberately **denormalized** into `CHECKLIST_ITEM` (avoids 2-hop joins in Softr)
- `share_token` is a UUID text field — generated client-side in Softr JS, not via Airtable automation
- `checked_by` is a free-text string (`"marie"` / `"partenaire"`), not a FK — intentional V1 simplicity
- `TEMPLATE_ITEM` is static seed data (27 items across 5 step types) — never modified by users

## Design system

Visual reference: `inspi2.png`. The V2 editorial style is validated; do not revert to colorful/emoji-heavy designs.

- **Background:** `#F3EFE6` (cream warm) / cards `#EBE6DC`
- **Text:** `#1A1816` (warm black) / secondary `#7A756D`
- **Dividers:** `#DDD6C8` — use thin dividers, not card shadows
- **Typography:** Playfair Display (serif, italic for destination names) + system sans-serif for body
- **Status indicators:** dots (filled / outlined / empty) + minimal text — no colored badges
- **Labels:** uppercase, 10px, wide letter-spacing
- Zero colorful emojis as functional icons

## MVP scope boundaries

Do not reopen these — they are explicitly deferred:

- **V2:** templates réutilisables, assignation @Marie/@Partenaire, profil famille, notifications
- **V3:** import email/PDF, checklists contextuelles par destination, budget tracking
- **Out of scope entirely:** multi-user / compte partagé collaboratif

## Softr build order (next phase)

Build principle: the Home hub is configured first as a shell (layout + 3 tiles, no links yet). Links are wired progressively as each destination screen is completed.

1. Connect Softr to Airtable base `appb4Q5kblB5WXar7`
2. **Home hub (shell)** — reconfigure the Softr default home: hero with `{LOGGED_IN_USER:NAME}`, 3 navigation tiles (Voyages / Checklists / Mon compte), no raw table listings. Links left empty until destination screens exist.
3. **Screen 1 — Voyages** — List block on `VOYAGE`, filtered by authenticated `user_id`. Wire the Voyages tile on Home → this page.
4. **Screen 3 — Dashboard voyage** — Detail view `VOYAGE` + `ETAPE` list with confirmation status.
5. **Screen 4 — Détail étape** — Detail view `ETAPE` + `CHECKLIST_ITEM` list with checkbox toggle.
6. **Screen 2 — Création voyage** — Creation form for `VOYAGE` + JS snippet to inject `share_token`.
7. **Screen 5 — Share modal** — Share modal generating URL from `share_token`.
8. **Screen 6 — Vue partenaire** — Public page filtered by `?token=` URL param (no login required).
9. **Checklists transverse view** — List block on `CHECKLIST_ITEM`, filtered by `user_id` (via `voyage_id` lookup) + `is_done = false`. Sorted by `etape_id`. Wire the Checklists tile on Home → this page.
10. **Mon compte (minimal)** — Static profile page showing `{LOGGED_IN_USER:NAME}` and `{LOGGED_IN_USER:EMAIL}`. Wire the Mon compte tile on Home → this page. Full preferences deferred to V2.
