La checklist du DD :
Un MVP Softr (ou autre au choix)
Un workflow (de préférence n8n avec intégration IA)
Un PPT avec :
- 2 / 3 une intro avec le contexte métier
- la description du processus de conception & la stack par étape
    Idéation & Design : claude projets
    Création d'un prototype cliquable : claude code
    Création de la database : airtable
    Création des pages de l'app : softr + custom code créé dans claude (html, css, js)
    Lien modifiable pour le partenaire (limitation & risques acceptés dans le MVP) : passage par github


Notes sur le workflow IA : 

Le workflow IA le plus simple pour le demo day

Oublie l'interview profil — trop subtil à montrer. Le truc qui "fait le trick" visuellement c'est la génération de checklist par IA :

Utilisateur crée une ETAPE (type + destination)
        ↓
Make webhook (form submit Softr)
        ↓
Make appelle Claude API
"Génère 8 items de checklist pour une étape
 [transport/hébergement/activité] à [destination]
 pour un voyageur [profil]"
        ↓
Make crée les CHECKLIST_ITEM dans Airtable
        ↓
L'utilisateur voit les items apparaître dans son app

Pourquoi c'est le bon choix pour la démo :
- Visible en temps réel (on voit les items arriver)
- Directement dans le cœur produit (pas un écran annexe)
- Remplace avantageusement les TEMPLATE_ITEM statiques
- Faisable en Make sans code Claude custom

Stack concrète : Make (gratuit) + module HTTP vers api.anthropic.com + module Airtable Create Records.

Tu veux qu'on spec ce workflow Make maintenant, ou d'abord finir la page profil en version simple puis revenir sur ça ?1