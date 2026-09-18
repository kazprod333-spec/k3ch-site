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
  heroTitle: "Une maison de création à Alger.",
  heroLine: "Studio, musique, médias — des récits qui restent.",
  heroCta: "Entrer",
  maisonTitle: "Maison",
  maisonLede: "Un même regard, de l’intention à la réalisation.",
  maisonBody: [
    "K3CH réunit le studio, la musique et les médias à Alger. Image nette, son juste, récit qui reste.",
  ],
  worksNote: "",
  worksTitle: "Réalisations",
  worksIntro: "Media — image, récit, présence.",
  works: [
    {
      id: "lost-era",
      kicker: "Media",
      title: "LOST ERA",
      caption: "Visuel.",
      image: `${import.meta.env.BASE_URL}works/lost-era-duo.jpg`,
      imageAlt:
        "LOST ERA — deux silhouettes dos à dos, les yeux bandés, titre bleu électrique.",
      width: 2048,
      height: 1152,
    },
    {
      id: "lost-era-psyconce",
      kicker: "PSYCONCE",
      title: "LOST ERA",
      caption: "Affiche.",
      image: `${import.meta.env.BASE_URL}works/lost-era-psyconce.jpg`,
      imageAlt: "Affiche LOST ERA, PSYCONCE — un visage levé vers le noir.",
      width: 1006,
      height: 1440,
    },
  ],
  equipeTitle: "Équipe",
  equipeLede: "La maison, réunie.",
  equipeCaption: "Maison K3CH Production — Alger.",
  equipeImage: `${import.meta.env.BASE_URL}equipe-k3ch.jpg`,
  equipeImageAlt: "L’équipe Maison K3CH Production, réunie, vue en plongée.",
  equipeWidth: 1800,
  equipeHeight: 1350,
  atelierAtmosphere: {
    kicker: "Création",
    caption: "Lumière, plateau, matière.",
    image: `${import.meta.env.BASE_URL}works/spotlight-papers.jpg`,
    imageAlt: "Figure seule sous un projecteur, feuilles blanches au sol.",
    width: 2048,
    height: 1407,
  },
  mediaLockup: {
    src: `${import.meta.env.BASE_URL}k3ch-media-lockup.jpg`,
    alt: "K3CH Media — Maison K3CH Production, Alger.",
    width: 1792,
    height: 1008,
  },
  atelierTitle: "Atelier",
  atelierIntro:
    "Le plateau, la salle, l’écran. Votre regard prime, de l’intention à la diffusion.",
  pillars: [
    {
      id: "studio",
      number: "1",
      title: "Studio",
      headline: "L’image, nette.",
      text: "Captation, plateau, lumière. On cadre ce qui doit rester.",
      aside: "Le silence, juste avant le clap.",
    },
    {
      id: "music",
      number: "2",
      title: "Music",
      headline: "Le son, juste.",
      text: "Direction, enregistrement, mix. La musique porte le récit — elle n’est pas un décor.",
      aside: "Quand ça sonne, on le sent.",
    },
    {
      id: "media",
      number: "3",
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
      number: "1",
      title: "Intention",
      text: "On écoute. On clarifie le geste.",
    },
    {
      id: "creation",
      number: "2",
      title: "Création",
      text: "L’idée prend forme — cadre, rythme, matière.",
    },
    {
      id: "realisation",
      number: "3",
      title: "Réalisation",
      text: "On tourne, on assemble, on livre.",
    },
  ],
  dondolieKicker: "Merch",
  dondolieTitle: "Dondolie",
  dondolieText: "L’or sur le noir. Une ligne à venir.",
  dondolieEmblem: {
    src: `${import.meta.env.BASE_URL}dondolie-emblem.jpg`,
    alt: "Emblème Dondolie — fourmi d’or au thorax en cœur, cercle ornementé, fond noir.",
    width: 1254,
    height: 1254,
  },
  contactTitle: "Contactez-nous",
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
