# Site Institutionel

Ce projet correspond à la landing page de Sheaft (https://www.sheaft.com) développé en Svelte à l'aide du framework Sapper.

## Pré-requis

- npm installé

## Lancement

Executez simplement: "npm run dev" pour démarrer une instance (avec livereload) sur http://localhost:3000

## Publication

Pour publier le site, il faut d'abord le builder pour vérifier que tout est fonctionnel (le build supprime beaucoup de contenu non utilisé, Tree shaking, mais le css des plugins tiers est mal supporté et peux donc conduire à des anomalies entre local et prod si ce n'est pas vérifié au préalable).

Il faut donc executer: "npm run export" puis "npm run start" et vérifier vos modifications.