# Maison K3CH Production

Site vitrine one-page de **Maison K3CH Production** (Alger — Studio · Music · Media).

Implémentation simple : **Vite + HTML / CSS / JS** vanilla. Les textes de marque, les contacts publics et l’affichage du teaser Dondolie sont centralisés dans `src/config.js`.

## Prérequis

- Node.js 20 ou plus récent
- npm

## Commandes

```bash
npm install
npm run dev
npm run build
```

- `npm run dev` — serveur local de développement
- `npm run build` — génération du dossier `dist/`
- `npm run preview` — prévisualisation de la version construite

## Remplacer les contacts

Ouvrir `src/config.js` et renseigner **uniquement** les informations destinées à être publiées, dans l’objet `contact` :

- `email`
- `phone`
- `instagram`
- `youtube`
- `site`

Laisser une chaîne vide (`""`) pour ne rien afficher. Le site n’invente aucun contact : s’il n’y a rien de renseigné, un message d’attente s’affiche.

Ne jamais y placer de finances internes, de WhatsApp, d’accès opérationnels ou d’informations non publiques.

## Remplacer le logo et les visuels

1. Déposer le fichier dans `public/` (exemple : `public/logo.svg` ou `public/assets/logo.png`).
2. Dans `src/config.js`, renseigner `brand.logoSrc` avec le chemin public, par exemple `"/logo.svg"`.
3. Ajuster `brand.logoAlt` si besoin.

Si `logoSrc` reste vide, le site utilise le lockup typographique **K3CH**.

Pour un visuel d’ambiance, ajouter les fichiers dans `public/assets/` puis les référencer depuis le CSS (`src/styles.css`) ou le HTML. Ne pas y verser de documents internes.

## Teaser Dondolie

Le teaser est optionnel. Dans `src/config.js` :

```js
export const features = {
  dondolieTeaser: true,
};
```

Passer `dondolieTeaser` à `false` pour retirer la section et le lien de navigation.

Les textes du teaser se trouvent dans `copy.dondolieKicker`, `copy.dondolieTitle` et `copy.dondolieText`.

## Accessibilité et mouvement

Le site est conçu mobile-first, avec navigation clavier, liens d’évitement et respect de `prefers-reduced-motion` (défilement instantané, pas d’animations d’apparition).

## Structure

```
index.html
src/config.js    # marque, copy, contacts, options
src/main.js      # hydratation, navigation, défilement
src/styles.css
public/favicon.svg
```
