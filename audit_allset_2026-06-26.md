# Audit Allset — Rapport Phase 1 + Phase 2
Date : 2026-06-26

---

## Phase 1 / HTML Map

### Fichiers et finalités

| Fichier | Écran | Slug Softr | Auth |
|---------|-------|-----------|------|
| `softr_mes_voyages.html` | Liste des voyages | `/mes-voyages` | Oui |
| `softr_nouveau_voyage.html` | Formulaire création voyage | `/nouveau-voyage` | Oui |
| `softr_mon_dashboard.html` | Dashboard voyage (étapes + progress) | `/mon-dashboard-voyages` | Oui |
| `softr_ajouter_etape.html` | Formulaire ajout étape + checklist auto | `/ajouter-etape` | Oui |
| `softr_detail_etape.html` | Détail étape + toggle checklist | `/detail-etape` | Oui |
| `softr_modifier_etape.html` | Formulaire édition/suppression étape | `/modifier-etape` | Oui |
| `softr_partager.html` | Modal partage 2 écrans | `/partager` | Oui |
| `softr_checklists.html` | Vue transverse checklists | `/mes-checklists` | Oui |
| `softr_mon_profil.html` | Profil utilisateur + préférences | `/mon-profil` | Oui |
| `vue-partenaire/index.html` | Vue publique par token | `/vue-partenaire` | **Non** |
| `allset_prototype_v2.html` | Prototype statique 8 écrans | — | Non |

### Écrans couverts vs. manquants

Flow complet : onboarding → création → étapes → checklist → dashboard → partenaire

| Étape | Statut | Fichier |
|-------|--------|---------|
| Onboarding / auth | ❌ Absent | Géré par Softr natif — hors scope |
| **Home hub** (3 tuiles nav) | ❌ **Absent** | Non implémenté |
| Création voyage | ✅ | `softr_nouveau_voyage.html` |
| Dashboard voyage | ✅ | `softr_mon_dashboard.html` |
| Ajout étape | ✅ | `softr_ajouter_etape.html` |
| Détail étape + checklist | ✅ | `softr_detail_etape.html` |
| Modification/suppression étape | ✅ | `softr_modifier_etape.html` |
| Partage partenaire | ✅ | `softr_partager.html` |
| Vue partenaire (publique) | ✅ | `vue-partenaire/index.html` |
| Checklists transverse | ✅ | `softr_checklists.html` |
| Profil utilisateur | ✅ | `softr_mon_profil.html` |

### Dépendances JS/CSS

**Toutes les pages partagent :**
- Google Fonts Playfair Display (via `<link>` tag — réseau requis)
- `window.logged_in_user` (objet Softr injecté)
- `window.SOFTR_PAGE.waitFor()` + fallback `setTimeout(init, 800)` (400ms sur `softr_partager.html`)
- Airtable REST API — PAT unique hardcodé dans tous les fichiers : `patbM2QbcF7qIFBo3.…`
- CSS entièrement inline (`<style>`), JS entièrement inline (`<script type="module">`)
- Zéro framework, zéro librairie externe

**Conventions CSS :**
- Préfixes BEM par écran : `.mv-*`, `.ad-*`, `.ae-*`, `.de-*`, `.me-*`, `.pt-*`, `.cl-*`, `.vp-*`, `.mp-*`, `.nv-*`
- `softr_mes_voyages.html`, `softr_checklists.html`, `softr_mon_profil.html` → CSS variables `:root`
- 6 autres fichiers → hex hardcodés (pas de variables)
- `!important` systématique dans `softr_checklists.html` et `softr_mon_profil.html` (pattern documenté : override CSS Softr)

### Surprises & anomalies au premier regard

1. **PAT identique exposé dans tous les fichiers**, y compris la page publique
2. `softr_mon_dashboard.html` et `softr_detail_etape.html` : `background:#fff` au lieu de `#F3EFE6`
3. `softr_mon_profil.html:362` : `nom_afffiche` (3 f) — typo volontaire, documentée en commentaire
4. `softr_partager.html:171` : `CLAUDE_KEY:'YOUR_ANTHROPIC_API_KEY'` — placeholder non rempli
5. `softr_partager.html:327` : URL de partage construite avec `window.location.origin` + une URL absolue GitHub Pages → URL cassée
6. `softr_ajouter_etape.html:215-220` : emojis ✈ 🏨 🚌 🚗 🏠 comme icônes de type — violation du design system

---

## Phase 2 / Audit UX & parcours

---

### CRITIQUE — 3 constats

---

**C1 — PAT Airtable exposé publiquement, y compris sur une page sans auth**

- (a) Le Personal Access Token Airtable est hardcodé en clair dans les 9 fichiers Custom Code + dans la page publique vue-partenaire.
- (b) Tous les fichiers, ex. `softr_mes_voyages.html:308`, `vue-partenaire/index.html:109`
- (c) N'importe qui consultant le code source peut lire toutes les données Airtable (emails, itinéraires), créer/supprimer des records pour tous les utilisateurs. La page vue-partenaire, publique et sans login, donne un accès en écriture (`patchChecklistItem`) via ce token.
- (d) **Critique**

---

**C2 — URL de partage cassée : `window.location.origin` + URL absolue GitHub Pages**

- (a) `softr_partager.html:327` construit `shareUrl = ${window.location.origin}${CFG.PAGES.VUE_PARTENAIRE}?token=...` où `CFG.PAGES.VUE_PARTENAIRE = 'https://andora90.github.io/allset/vue-partenaire/'` (ligne 179) — une URL absolue.
- (b) `softr_partager.html:327` + `179`
- (c) URL générée : `https://ton-app.softr.applehttps://andora90.github.io/allset/vue-partenaire/?token=xxx` — invalide. Le lien copié, le WhatsApp, l'email, le SMS envoient tous un lien mort. Le feature de partage est entièrement inopérant.
- (d) **Critique**
- Fix : remplacer `${window.location.origin}${CFG.PAGES.VUE_PARTENAIRE}` par `CFG.PAGES.VUE_PARTENAIRE` seul.

---

**C3 — Aucun indicateur visuel que le type d'étape est requis avant soumission**

- (a) Le bouton `ae-btn` (`softr_ajouter_etape.html:418`) est toujours visible et actif visuellement. L'erreur n'apparaît qu'au submit : "Merci de choisir un type d'étape." Le type est le seul champ obligatoire sans label "requis" et sans état disabled initial.
- (b) `softr_ajouter_etape.html:494-498` + `418`
- (c) Marie soumet le formulaire rempli, attend la requête API, et reçoit une erreur plutôt qu'une validation immédiate. Perte de temps et confusion sur ce qui manque.
- (d) **Critique** — Sur le chemin critique de toute création d'étape.

---

### ÉLEVÉE — 5 constats

---

**E1 — Nouveau profil utilisateur : sauvegarde bloquée sans création automatique**

- (a) `softr_mon_profil.html:570-573` : si `state.recordId === null` (utilisateur sans record dans `01_UTILISATEUR`), handleSave() affiche "Impossible de sauvegarder : profil introuvable dans Airtable." Aucune logique de création (POST) n'existe.
- (b) `softr_mon_profil.html:570`
- (c) Tout nouvel utilisateur Softr ne peut pas renseigner ni sauvegarder son profil. La page est inutilisable pour les premières connexions.
- (d) **Élevée**

---

**E2 — XSS : noms Airtable injectés via innerHTML sans échappement**

- (a) Les champs `nom_voyage`, `label`, `destination` sont injectés dans des template literals passés à `.innerHTML`. La seule fonction `escHtml()` présente dans le projet n'est utilisée que dans `softr_modifier_etape.html` et `softr_mon_profil.html`. Toutes les autres pages injectent directement.
- (b) `softr_mes_voyages.html:468-475`, `softr_checklists.html:441-452`, `softr_mon_dashboard.html:344`, `softr_detail_etape.html:346`, `vue-partenaire/index.html:290-306`
- (c) Un voyage nommé `"><img src=x onerror=alert(document.cookie)>` s'exécute chez tous les utilisateurs qui le voient, notamment le partenaire sur la page publique.
- (d) **Élevée**

---

**E3 — Badge de statut d'étape : classes couleur jamais appliquées**

- (a) `softr_detail_etape.html:292` applique `el.className = 'de-badge'` sans jamais ajouter `badge-ok`, `badge-wip` ou `badge-gray`. Ces classes CSS sont définies (lignes 62-64) mais jamais utilisées en runtime.
- (b) `softr_detail_etape.html:292-295`
- (c) Tous les statuts (Confirmé / À confirmer / Annulé) s'affichent avec le même rendu neutre, sans distinction visuelle. Marie ne peut pas scanner rapidement l'état de ses réservations.
- (d) **Élevée**

Fix :
```js
const badgeCls = {
  'Confirmé':    'badge-ok',
  'À confirmer': 'badge-wip',
  'Annulé':      'badge-gray'
}[statut] || '';
el.className = `de-badge ${badgeCls}`;
```

---

**E4 — Vue checklists : pas de toggle inline, navigation obligatoire vers l'étape**

- (a) `softr_checklists.html:480-487` : chaque item de checklist a un `onclick` qui redirige vers `/detail-etape?recordId=etapeId`. Aucune checkbox n'est cochable directement.
- (b) `softr_checklists.html:480-487`
- (c) Pour cocher 5 items de 3 étapes différentes, Marie doit naviguer vers 3 pages + revenir 3 fois. La vue "Mes checklists" perd son utilité de hub de productivité.
- (d) **Élevée**

---

**E5 — Libellé "← Retour à l'étape" mène au dashboard voyage, pas à l'étape**

- (a) `softr_modifier_etape.html:273` affiche "← Retour à l'étape" mais le `onclick` navigue vers `CFG.PAGES.DASHBOARD?recordId=${state.voyageId}` — le dashboard du voyage, pas la page détail étape.
- (b) `softr_modifier_etape.html:263-273`
- (c) Marie clique "Retour à l'étape" pour vérifier sa modification, atterrit sur le dashboard du voyage. Faux label, double navigation inutile.
- (d) **Élevée**
- Fix : remplacer `backUrl` par `${CFG.PAGES.DETAIL_ETAPE}?recordId=${state.recordId}`.

---

### MOYENNE — 4 constats

---

**M1 — Fond blanc sur 2 écrans : rupture avec la palette crème**

- (a) `softr_mon_dashboard.html:6` et `softr_detail_etape.html:19` utilisent `background:#fff` à la racine. Les 7 autres écrans utilisent `#F3EFE6`.
- (b) `softr_mon_dashboard.html:6`, `softr_detail_etape.html:19`
- (c) En naviguant depuis "Mes voyages" (crème) vers le dashboard (blanc), le fond change visuellement. L'identité éditoriale est fragmentée.
- (d) **Moyenne**

---

**M2 — Emojis utilisés comme icônes fonctionnelles dans le sélecteur de type d'étape**

- (a) `softr_ajouter_etape.html:215-220` définit les types d'étape avec des emojis : `'✈', '🏨', '🚌', '🚗', '🏠'` affichés dans les chips de sélection.
- (b) `softr_ajouter_etape.html:215-220`, `343-349`
- (c) Violation explicite du design system (CLAUDE.md : "Zero colorful emojis as functional icons"). Rendu incohérent selon l'OS (noir sur macOS, coloré sur Android).
- (d) **Moyenne**

---

**M3 — Dashboard : compteurs affichent `—` pendant le chargement**

- (a) `softr_mon_dashboard.html:94-95` initialise `ad-done` et `ad-total` à `—`. Pendant 1-3 secondes de fetch, l'UI affiche `— / — · éléments validés`.
- (b) `softr_mon_dashboard.html:94-95`
- (c) Le composant de progression apparaît cassé à chaque chargement. Un `0 / 0` ou un état skeleton serait plus propre.
- (d) **Moyenne**

---

**M4 — Validation email absente dans la page de partage**

- (a) `softr_partager.html:393-395` : seul `.trim()` est appliqué sur l'email du partenaire. `marie` ou `test@` sont acceptés et stockés dans Airtable.
- (b) `softr_partager.html:393-395`
- (c) L'email stocké est invalide, le lien `mailto:` renvoie un destinataire incorrect, WhatsApp ignore le champ. Marie reçoit un feedback "Enregistrement…" puis "Partager →" sans savoir que le contact est mal renseigné.
- (d) **Moyenne**

---

### FAIBLE — 3 constats

---

**F1 — CSS variables vs hex hardcodés : incohérence inter-fichiers**

- (a) 3 fichiers utilisent `:root` CSS variables (`--cream`, `--black`, etc.), 7 fichiers utilisent des hex hardcodés.
- (b) `softr_mes_voyages.html:19-29` (variables) vs `softr_mon_dashboard.html:21-23` (hardcoded)
- (c) Un changement de couleur requiert des modifications dans chaque fichier séparément. Pas bloquant en MVP, dette pour la suite.
- (d) **Faible**

---

**F2 — État vide "Vous n'avez pas encore de voyage" : CTA hors champ de vision**

- (a) `softr_mes_voyages.html:543` : l'état vide affiche un message texte. Le bouton "Créer un voyage" est visible 32px plus haut, pas dans le champ de vision immédiat de l'état vide.
- (b) `softr_mes_voyages.html:286-288`, `542-544`
- (c) Un premier utilisateur peut ne pas voir le CTA de création. `softr_checklists.html:518-521` a le bon réflexe : un lien inline "Créer un voyage" dans le message d'état vide.
- (d) **Faible**

---

**F3 — Clé Anthropic en clair dans le code source (placeholder)**

- (a) `softr_partager.html:171` : `CLAUDE_KEY:'YOUR_ANTHROPIC_API_KEY'` est lisible par quiconque inspecte la page.
- (b) `softr_partager.html:171`
- (c) Actuellement inoffensif car placeholder. Deviendrait Critique dès qu'une vraie clé est insérée sans passer par un proxy backend.
- (d) **Faible** (→ **Critique** si clé remplie)

---

## Synthèse — Tableau récapitulatif

| # | Constat | Fichier:ligne | Sévérité |
|---|---------|--------------|----------|
| C1 | PAT Airtable exposé publiquement | Tous, `vue-partenaire/index.html:109` | **CRITIQUE** |
| C2 | URL partage cassée (origin + URL absolue) | `softr_partager.html:327` | **CRITIQUE** |
| C3 | Bouton submit visible sans type sélectionné | `softr_ajouter_etape.html:418` | **CRITIQUE** |
| E1 | Profil non sauvegardable si record absent | `softr_mon_profil.html:570` | **ÉLEVÉE** |
| E2 | XSS via innerHTML sur champs Airtable | `softr_mes_voyages.html:468`, etc. | **ÉLEVÉE** |
| E3 | Badge statut : classes couleur jamais appliquées | `softr_detail_etape.html:292` | **ÉLEVÉE** |
| E4 | Checklists : pas de toggle inline | `softr_checklists.html:480` | **ÉLEVÉE** |
| E5 | "← Retour à l'étape" mène au mauvais écran | `softr_modifier_etape.html:273` | **ÉLEVÉE** |
| M1 | Fond blanc sur 2 écrans (rupture palette) | `softr_mon_dashboard.html:6` | **MOYENNE** |
| M2 | Emojis comme icônes (violation design system) | `softr_ajouter_etape.html:215` | **MOYENNE** |
| M3 | Compteurs `—` pendant le chargement | `softr_mon_dashboard.html:94` | **MOYENNE** |
| M4 | Pas de validation format email | `softr_partager.html:393` | **MOYENNE** |
| F1 | CSS variables vs hex incohérents | Tous | **FAIBLE** |
| F2 | CTA absent dans l'état vide voyages | `softr_mes_voyages.html:542` | **FAIBLE** |
| F3 | Clé Anthropic en clair (placeholder) | `softr_partager.html:171` | **FAIBLE** (→ CRITIQUE si remplie) |

---

## Ce qui fonctionne bien

- **Pattern fetch Airtable cohérent** : `no fields[] sur single record`, batch `OR(RECORD_ID()...)`, `Promise.all` sur les fetches parallèles dans le dashboard.
- **Rollback optimiste** implémenté correctement dans `softr_detail_etape.html:354-365` et `vue-partenaire/index.html:344-358`.
- **Compatibilité SPA Softr** (`waitFor` + `setTimeout` fallback) présente sur tous les fichiers.
- **`escHtml()`** correctement utilisé dans `softr_modifier_etape.html` et `softr_mon_profil.html` — à répliquer partout.
- **Suppression avec cascade** (checklist items + étape) dans `softr_modifier_etape.html` avec confirmation `confirm()`.
- **État vide géré** sur tous les écrans (chargement / erreur / 0 item).
