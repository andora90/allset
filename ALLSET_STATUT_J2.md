# ALLSET — Statut global · 17 juin 2026
*Point de départ pour la session Softr du 18 juin*

---

## Statut général : ✅ prêt pour Softr

Les 3 premiers blocs du pipeline sont fermés. Prochaine étape : brancher Softr sur la base Airtable et construire les vues MVP.

---

## (1) Product Design — ✅ Fermé

**Concept validé :** app mobile-first pour le "parent orchestrateur" — celui qui porte seul la charge cognitive de l'organisation des voyages familiaux.

**Mécanique core :** ajout d'une étape de voyage (Vol / Hôtel / Location voiture / Hébergement / Transfert / Autres) => génération automatique d'une checklist contextuelle => dashboard unique de suivi confirmation/manquant => lien de partage partenaire sans téléchargement.

**Promesse produit :** *partir l'esprit libéré* — sans rien oublier, sans tout porter dans sa tête.

**Positionnement MVP :** outil solo orchestrateur + accès partenaire léger via lien. Pas une app collaborative.

**Persona :** Marie, 35–45 ans, professionnelle, 2 enfants, 3–4 voyages/an, actuellement sur iPhone Notes + Google Sheets.

**6 écrans MVP définis :**
- Screen 1 — Home / Liste des voyages
- Screen 2 — Création d'un voyage
- Screen 3 — Dashboard voyage *(écran pivot — valeur core)*
- Screen 4 — Détail étape + checklist auto-générée
- Screen 5 — Share Modal
- Screen 6 — Vue partenaire (web, sans app)

**Livrables produits :** cahier des charges complet (Notion-ready), prompt Figma Make (< 5000 mots, en anglais), récap formation en .docx.

**Identité visuelle :**
- Navy `#001F60` dominant · Fuchsia `#E01289` accent · Blanc secondaire
- Typo : Barlow · Grid : 8px
- Règle chromatique : 60–70% marine · 25–30% blanc · ≤5% fuchsia

---

## (2) Maquette cliquable — ✅ Fermé

Prototype généré via Figma Make sur la base du prompt produit.

Les 6 écrans MVP ont été couverts. Screen 3 (Dashboard) identifié comme écran pivot à valider en priorité lors de la relecture parcours.

**Prochaine action sur ce bloc (phase 6 formation) :** relecture HTML, parcours maquette, critique — à faire après la construction Softr.

---

## (3) Modèle de données Airtable — ✅ Fermé

**Base :** `appb4Q5kblB5WXar7`

**5 tables :**

| Table | Rôle | Clé |
|---|---|---|
| UTILISATEUR | Compte orchestrateur | `user_id` (autonumber) |
| VOYAGE | Voyage = conteneur principal | `voyage_id` · `share_token` (UUID) |
| ETAPE | Étapes du voyage (Vol, Hôtel…) | `etape_id` · FK `voyage_id` |
| CHECKLIST_ITEM | Items de checklist par étape | `item_id` · FK `etape_id` · FK `voyage_id` (dénormalisé) |
| TEMPLATE_ITEM | Items seed par type d'étape | `template_id` · `type_etape` |

**Décisions d'architecture retenues :**
- `ordre` dans ETAPE => auto-incrémenté (pas de saisie manuelle)
- Type "Autres" ajouté au Single select `type_etape` => permet des to-do personnalisées libres
- `share_token` => UUID généré côté Softr au moment de la création du voyage (automation Airtable payante => écarté)
- `checked_by` => string libre V1, pas de FK utilisateur (simplifie l'accès partenaire sans compte)
- 27 items seed TEMPLATE_ITEM couvrant les 5 types d'étape principaux

**Jeu de données fictives :** importé dans Airtable (3–4 voyages, plusieurs étapes par voyage, checklists complètes).

**Dette technique V1 documentée :**
- `voyage_id` dénormalisé dans CHECKLIST_ITEM => à nettoyer en V2 via lookup Airtable
- `checked_by` string libre => à lier à UTILISATEUR en V2 si multi-compte

---

## (4) Softr — 🔜 À démarrer demain

**Objectif de la session :** brancher Softr sur la base Airtable et construire les vues MVP correspondant aux 6 écrans.

**Ordre de construction recommandé :**

1. Connexion Softr <> Airtable (`appb4Q5kblB5WXar7`)
2. **Liste des voyages** (Screen 1) — List block sur table VOYAGE, filtré par utilisateur connecté
3. **Dashboard voyage** (Screen 3) — vue détail VOYAGE + liste des ETAPES avec statut confirmation *(écran pivot à valider en priorité)*
4. **Détail étape + checklist** (Screen 4) — vue détail ETAPE + liste CHECKLIST_ITEM avec toggle statut
5. **Création voyage** (Screen 2) — formulaire de création VOYAGE + injection `share_token` en JS
6. **Share Modal** (Screen 5) — génération URL partenaire depuis `share_token`
7. **Vue partenaire** (Screen 6) — page publique filtrée par `share_token`, sans login

**Point de vigilance :** la génération du `share_token` (UUID) doit être injectée par Softr dans un champ caché au moment de la soumission du formulaire de création — prévoir un snippet JS côté Softr.

---

## (5) Périmètre exclu MVP — à ne pas réouvrir

- Notifications / rappels => V2
- Templates réutilisables => V2
- Import email/PDF => V3
- Checklists contextuelles par destination => V3
- Budget tracking => V3
- Multi-utilisateur / compte partagé => hors scope

---

## (6) Pipeline formation — statut global

| Étape | Statut |
|---|---|
| (1) Idée + pitch | ✅ |
| (2) Product strategy · persona · features · CdC | ✅ |
| (3) MVP : must haves · perf features · delighters | ✅ |
| (4) UX : architecture écrans + prompt | ✅ |
| (5) Figma Make / maquette cliquable | ✅ |
| (6) Relecture HTML · parcours · critique | 🔜 après Softr |
| **Softr — construction no-code** | **🔜 J+1** |
