/**
 * Source unique de la marque et des contacts publics.
 * Remplir uniquement des informations destinées à être publiées.
 * Ne jamais y placer de finances, WhatsApp, accès internes ou détails opérationnels.
 */

export const brand = {
  lockup: "K3CH",
  name: "Maison K3CH Production",
  city: "Alger",
  tagline: "Studio · Music · Media",
  /** Chemin public. Laisser vide pour le lockup typographique K3CH. */
  logoSrc: `${import.meta.env.BASE_URL}logo.png`,
  logoAlt: "Maison K3CH Production",
};

export const copy = {
  documentTitle: "Maison K3CH Production — Alger",
  documentDescription:
    "Maison de création à Alger. Studio, Music, Media — de l’intention à la réalisation.",
  heroTitle: "Une maison de création.",
  maisonTitle: "Maison",
  maisonBody: [
    "K3CH réunit le studio, la musique et les médias à Alger. Une même exigence : image nette, son juste, récit qui reste.",
  ],
  atelierTitle: "Atelier",
  atelierIntro: "Trois matières. Un même geste.",
  worksNote: "Réalisations — à venir.",
  pillars: [
    {
      id: "studio",
      number: "01",
      title: "Studio",
      headline: "L’image, nette.",
      text: "Captation, plateau, lumière. On cadre ce qui doit rester.",
      aside: "Le silence, juste avant le clap.",
    },
    {
      id: "music",
      number: "02",
      title: "Music",
      headline: "Le son, juste.",
      text: "Direction, enregistrement, mix. La musique porte le récit — elle n’est pas un décor.",
      aside: "Quand ça sonne, on le sent.",
    },
    {
      id: "media",
      number: "03",
      title: "Media",
      headline: "Le récit, clair.",
      text: "Formats, plateformes, contenus. Être vu, pas seulement publié.",
      aside: "Moins de bruit. Plus de présence.",
    },
  ],
  parcoursTitle: "Parcours",
  parcoursIntro: "De l’intention à la réalisation.",
  parcours: [
    {
      id: "intention",
      number: "01",
      title: "Intention",
      text: "On écoute. On clarifie le geste.",
    },
    {
      id: "creation",
      number: "02",
      title: "Création",
      text: "L’idée prend forme — cadre, rythme, matière.",
    },
    {
      id: "realisation",
      number: "03",
      title: "Réalisation",
      text: "On tourne, on assemble, on livre.",
    },
  ],
  dondolieKicker: "Merch",
  dondolieTitle: "Dondolie",
  dondolieText: "Une ligne à venir.",
  contactTitle: "Parlons-en",
  contactFallback: "Les coordonnées seront publiées ici.",
  footerRights: "Tous droits réservés.",
};

/**
 * Contacts publics uniquement. Chaînes vides = non affichées.
 * Exemples :
 *   email: "contact@exemple.com"
 *   instagram: "https://instagram.com/exemple"
 */
export const contact = {
  email: "",
  phone: "",
  instagram: "",
  youtube: "",
  site: "",
};

export const features = {
  /** Teaser merch optionnel. Passer à false pour le retirer. */
  dondolieTeaser: true,
};
