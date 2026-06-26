# Allset — Cahier des charges MVP

---

## Contexte produit

**Problème résolu :** le parent orchestrateur repart de zéro à chaque voyage, porte toute l'organisation dans sa tête, et ne peut pas déléguer sans tout réexpliquer.

**Solution :** une structure de voyage réutilisable qui génère automatiquement les checklists intelligentes par type d'étape — avec un écran de contrôle unique et un lien de partage pour le partenaire, sans téléchargement requis de son côté.

---

## (1) Persona

**Marie — le parent orchestrateur**

- 35–45 ans / CSP+ / cadre en activité / charge pro importante
- 2 enfants / en couple / 3–4 voyages par an sur vacances scolaires
- Chief Travel Officer du foyer par défaut — rôle non choisi, non partagé
- Organisation actuelle : Notes iPhone + Google Sheets + screenshots + emails perdus
- Irritants principaux : créer l'ossature de l'organisation à chaque voyage ; être la seule à savoir où en est l'orga

**Jobs To Be Done (JTBD)**

| Type | Job |
|------|-----|
| Fonctionnel | Organiser un voyage sans repartir de zéro, rien oublier |
| Émotionnel | Partir sereine — pas épuisée avant de décoller |
| Social | Rendre l'organisation visible et délégable sans friction |

---

## (2) Positionnement produit

**Différenciateur core :** un moule de voyage mémorisé qui se réactive à chaque nouveau séjour. Pas un to-do list, pas un agrégateur de réservations.

**Modèle d'usage :** app solo (Marie) + partage par lien (partenaire, sans téléchargement requis).

**Ce qu'Allset n'est pas :**
- Pas un TripIt — Allset ne récupère pas les confirmations automatiquement
- Pas un Google Sheets amélioré — la structure est intelligente, pas vide
- Pas une app de réservation — Allset organise, ne réserve pas

---

## (3) Proposition de valeur

> "Allset structure votre voyage en étapes et génère automatiquement ce qu'il faut vérifier pour chacune. Un seul écran dit ce qui est calé, ce qui manque. Partagez en un lien — votre partenaire voit et coche, sans télécharger d'app."

**Aha moment :** Marie ajoute "Vol Paris → Barcelone" → Allset génère instantanément une checklist de 8 items, dont 2 qu'elle aurait oubliés. Valeur perçue dès la première étape créée — sans template, sans configuration préalable.

---

## (4) MVP — Feature set

### Must Have — V1

| # | Feature | Détail |
|---|---------|--------|
| 1 | Création de voyage | Titre / dates / destination / type |
| 2 | Ajout d'étapes par type | Vol / Hôtel / Location voiture / Logement / Transfert |
| 3 | Génération auto de checklist par type d'étape | Contenu prédéfini, déclenché au choix du type |
| 4 | Checklist éditable | Ajout / suppression / renommage d'items librement |
| 5 | Dashboard statut global | ✅ Calé / ⚡ En cours / ❌ Manquant |
| 6 | Partage par lien | Vue web partenaire / check off / sync temps réel |

### Should Have — V2

| # | Feature | Valeur |
|---|---------|--------|
| 7 | Templates réutilisables | Sauvegarder et réactiver un voyage type — le vrai "moule" |
| 8 | Assignation de tâches | @Marie / @Partenaire — délégation explicite |
| 9 | Profil famille (âges enfants) | Checklists adaptées — checklist bébé ≠ checklist ados |
| 10 | Rappels / notifications | J-30, J-14, J-7, J-1 — étale la charge mentale dans le temps |

### Nice to Have / Delighters — V3

| # | Feature |
|---|---------|
| 11 | Import confirmation email/PDF → auto-remplissage des champs |
| 12 | Mode veille départ J-1 — push recap des items manquants |
| 13 | Réactiver un voyage passé — préremplissage depuis un séjour similaire |
| 14 | Checklist contextuelle par destination (montagne / plage / city trip) |

---

## (5) Référentiel checklists par type d'étape

> Ce référentiel est le contenu seed du produit. Une checklist incomplète = Marie ne fait pas confiance à l'outil et repart sur ses Notes iPhone.

### Vol
- Billet confirmé (n° réservation + email reçu)
- Bagage soute réservé si option payante
- Check-in en ligne fait
- Carte d'embarquement téléchargée
- Visas & autorisations vérifiés (ESTA, eTA, visa selon destination)
- Documents enfants (CNI / passeport — date d'expiration vérifiée)
- Autorisation de sortie du territoire si parent seul avec enfants
- Heure de présentation aéroport calée

### Hôtel
- Réservation confirmée (n° + email)
- Heure d'arrivée communiquée à l'hôtel
- Late check-in arrangé si vol tardif
- Politique d'annulation vérifiée
- Parking réservé si arrivée en voiture

### Location voiture
- Réservation confirmée
- Permis de conduire + CB au nom du conducteur
- Assurance vérifiée (incluse ou à souscrire)
- Siège enfant réservé si enfants en bas âge
- Heure et lieu de prise en charge calés

### Logement (Airbnb / gîte)
- Réservation confirmée
- Coordonnées hôte sauvegardées
- Code d'accès / modalités clés confirmés
- Heure d'arrivée communiquée à l'hôte
- Adresse exacte enregistrée

### Transfert
- Mode de transport calé (taxi / navette / train / voiture)
- Réservation confirmée si taxi ou navette
- Heure de prise en charge vérifiée
- Numéro de chauffeur sauvegardé

---

## (6) User flows principaux — MVP

### Flow 1 — Création de voyage
Marie ouvre Allset → "Nouveau voyage" → renseigne titre / dates / destination → ajoute les étapes une à une (type sélectionné au clic) → checklists générées automatiquement → dashboard peuplé en temps réel.

### Flow 2 — Gestion des checklists
Marie ouvre une étape → checklist auto affichée → elle coche ce qui est fait / supprime les items non pertinents / ajoute ses propres items → statut global mis à jour automatiquement.

### Flow 3 — Partage partenaire
Marie ouvre le dashboard → "Partager" → lien généré → envoi WhatsApp / SMS → partenaire ouvre dans son navigateur sans téléchargement → vue statut + items cochables → sync immédiat dans l'app de Marie.

---

## (7) Contraintes & décisions d'architecture

| Décision | Rationale |
|----------|-----------|
| Sync temps réel sur lien partagé — obligatoire | Sans ça, le partage crée de la confusion plutôt qu'il n'en résout |
| Vue partenaire = web uniquement | Friction zéro côté partenaire — condition de l'adoption |
| Checklists = point de départ éditable, pas contrainte | Marie abandonnera l'outil si elle ne peut pas modifier librement |
| Activités exclues du MVP | Trop variables pour une checklist standardisée intelligente → V2 |
| Templates exclus du MVP | La génération auto par type suffit à adresser "ne plus repartir de zéro" en V1 |

---

## (8) Roadmap synthétique

| Version | Scope | Objectif |
|---------|-------|----------|
| V1 — MVP | 6 Must Have | Valider que Marie utilise Allset à la place de ses Notes iPhone |
| V2 | Templates + assignation + profil famille + rappels | Rétention long terme — Allset s'adapte à la famille |
| V3 | Import email/PDF + delighters | Automatisation poussée — réduction de friction maximale |

---

## (9) Métrique de succès V1

> Marie crée un voyage complet et partage le lien avec son partenaire avant de partir — sans avoir ouvert ses Notes iPhone en parallèle.

**Indicateurs :**
- Taux de complétion d'un premier voyage (étapes + checklists remplies)
- Taux d'utilisation du lien de partage par voyage créé
- Rétention J+30 — Marie revient pour un deuxième voyage

---

*Document généré dans le cadre de la formation Product no code — exercice Allset*
*Version 1.0 — MVP scope validé*
