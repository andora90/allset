# Allset — Hypothèses de conception BDD
*Formation Product no code — exercice Allset*
*Version 1.0 — Session du 17/06/2026*

---

## (1) Architecture générale

- Base de données **relationnelle** implémentée dans **Airtable**
- Front consommateur : **Softr**
- Méthode de modélisation : **MERISE** (CDM → LDM → PDM)
- 5 tables : `UTILISATEUR` · `VOYAGE` · `ETAPE` · `CHECKLIST_ITEM` · `TEMPLATE_ITEM`

---

## (2) Choix structurant : la fact table

**`CHECKLIST_ITEM` est la table centrale (fact table).**

Rationale :
- Unité atomique mesurable : coché / pas coché · par qui · quand
- Toutes les métriques V1 se calculent à partir de cette table (taux de complétion, usage du partage)
- `VOYAGE` est une **dimension** qui enrichit chaque item en contexte — pas le centre analytique

=> `VOYAGE` reste l'objet principal dans l'**UX** (ce que Marie voit en premier), mais le centre **analytique** est `CHECKLIST_ITEM`.

---

## (3) Hypothèses sur les entités

### UTILISATEUR
- En V1 : authentification minimale (email). Peut être simplifié à 1 user unique si pas d'auth Softr.
- Prévu pour supporter N utilisateurs en V2 (modèle multi-compte).

### VOYAGE
- Champ `share_token` : UUID texte généré à la création du voyage.
- Ce token est le seul mécanisme d'accès partenaire en V1 — pas de compte requis côté partenaire.

### ETAPE
- `type_etape` = Single select Airtable : `Vol` · `Hôtel` · `Location voiture` · `Logement` · `Transfert`
- Le type déclenche le seed automatique des items depuis `TEMPLATE_ITEM`.
- Activités exclues du périmètre V1 (trop variables pour une checklist standardisée).

### CHECKLIST_ITEM
- FK vers `ETAPE` (relation directe).
- FK vers `VOYAGE` **dénormalisée** — choix délibéré pour simplifier les requêtes Softr sans jointure en 2 sauts.
- `checked_by` = champ texte libre (`"marie"` ou `"partenaire"`) — pas de référence à `user_id`.

### TEMPLATE_ITEM
- Table de référence statique — jamais modifiée par l'utilisateur.
- Seedée une fois avec le référentiel V1 (8 items Vol · 5 Hôtel · 5 Location voiture · 5 Logement · 4 Transfert).
- Permet d'enrichir le référentiel sans toucher au code (utile en V3 pour les checklists contextuelles par destination).

---

## (4) Hypothèse clé : `checked_by` — Option A retenue

**Option A — string libre** : `checked_by` = `"marie"` ou `"partenaire"`.

Rationale :
- Cohérent avec la philosophie MVP : vue partenaire sans compte, sans téléchargement.
- Zéro complexité Airtable — un champ texte suffit.

**Dette technique acceptée** : en V2, si on veut l'assignation @Marie / @Partenaire avec traçabilité fine, il faudra migrer `checked_by` vers une FK `user_id` et introduire une table `PARTENAIRE` ou étendre `UTILISATEUR`.

---

## (5) Hypothèse clé : vue partenaire — Option B retenue

**Option B — page publique Softr filtrée par paramètre URL.**

Mécanisme :
- Lien généré : `https://[app].softr.app/voyage?token=XXXXX`
- Page Softr publique (non authentifiée) filtre `VOYAGE[share_token] = URL_param("token")`
- Affiche les `CHECKLIST_ITEM` liés à ce voyage uniquement

Rationale :
- Friction zéro côté partenaire — condition de l'adoption définie dans le cahier des charges.
- Option A (Magic Link Softr natif) écartée : nécessite un compte partenaire, en tension avec le MVP.

---

## (6) Dénormalisation assumée

`CHECKLIST_ITEM` porte à la fois `etape_id` et `voyage_id`.

- `voyage_id` est techniquement dérivable via `etape_id → ETAPE[voyage_id]`.
- Choix de dénormaliser pour éviter une jointure en 2 sauts dans Softr (limitation connue des outils no-code sur les relations imbriquées).
- À documenter comme dette technique si migration vers une vraie base SQL en V2+.

---

## (7) Périmètre exclu du MVP — hypothèses de dépriorisation

| Élément | Décision | Horizon |
|---|---|---|
| Table `PARTENAIRE` | Pas d'entité partenaire — accès par token uniquement | V2 si assignation @Marie/@Partenaire |
| Notifications / rappels | Hors scope | V2 |
| Templates réutilisables (sauvegarde de voyage type) | Hors scope — la génération auto par type suffit en V1 | V2 |
| Import email/PDF | Hors scope | V3 |
| Checklists contextuelles par destination | `TEMPLATE_ITEM` prévu pour le supporter — pas activé | V3 |

---

## (8) Vues Softr MVP identifiées

| Vue | Accès | Source Airtable |
|---|---|---|
| Dashboard voyages | Marie — authentifiée | `VOYAGE` filtré sur `user_id` |
| Détail voyage (étapes + checklists) | Marie — authentifiée | `ETAPE` + `CHECKLIST_ITEM` liés au `voyage_id` |
| Vue partenaire | Publique — filtrée par `share_token` | `CHECKLIST_ITEM` via `VOYAGE[share_token] = token` |

---

*Document de référence — à mettre à jour à chaque décision d'architecture structurante.*
