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

## Logo officiel

Le monogramme (arbre géométrique) se trouve dans `public/logo.png`. Il est branché via `brand.logoSrc` dans `src/config.js` et s’affiche dans la navigation et le hero, **sans recadrage ni retouche**.

Pour le remplacer : déposer le nouveau fichier au même chemin (ou un autre dans `public/`), puis mettre à jour `brand.logoSrc` et `brand.logoAlt`. Laisser `logoSrc` vide pour revenir au lockup typographique **K3CH**.

Ne pas redessiner la marque. Conserver le ratio (largeur automatique, hauteur contrainte en CSS).

## Teaser Dondolie

Le teaser est optionnel. Dans `src/config.js` :

```js
export const features = {
  dondolieTeaser: true,
};
```

Passer `dondolieTeaser` à `false` pour retirer la section et le lien de navigation.

Les textes du teaser se trouvent dans `copy.dondolieTitle` et `copy.dondolieText`.

## Publication (GitHub Pages)

`vite.config.js` utilise `base: "./"` : les chemins du build restent relatifs, adaptés à un site projet.

Une fois Pages activé (Settings → Pages) :

- **Deploy from a branch** : publier le contenu de `dist/` (branche `gh-pages`, ou dossier `/docs` selon le choix), **ou**
- **GitHub Actions** : déployer le résultat de `npm run build`.

Adresse prévue pour ce dépôt :

`https://kazprod333-spec.github.io/k3ch-site/`

## Accessibilité et mouvement

Le site est conçu mobile-first, avec navigation clavier, liens d’évitement et respect de `prefers-reduced-motion` (défilement instantané).

## Structure

```
index.html
src/config.js    # marque, copy, contacts, options
src/main.js      # hydratation, navigation, défilement
src/styles.css
public/favicon.svg
public/logo.png
```
