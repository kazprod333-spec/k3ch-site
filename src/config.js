/**
 * Source unique de la marque et des contacts publics.
 * Remplir uniquement des informations destinées à être publiées.
 * Ne jamais y placer de finances, WhatsApp, accès internes ou détails opérationnels.
 */

export const brand = {
  lockup: "K3CH",
  name: "Maison K3CH Production",
  city: "Alger",
  country: "Algérie",
  tagline: "Studio · Music · Media",
  /** Chemin public optionnel, ex. "/logo.svg". Laisser vide pour le lockup typographique. */
  logoSrc: "",
  logoAlt: "Maison K3CH Production",
};

export const copy = {
  documentTitle: "Maison K3CH Production — Alger",
  documentDescription:
    "Maison de création à Alger. Studio, Music, Media — une signature artistique.",
  heroLead: "La forêt, la lumière, le geste.",
  maisonTitle: "La maison",
  maisonBody: [
    "Maison K3CH Production est une maison de création établie à Alger. Elle réunit le studio, la musique et les médias dans une même exigence : une image nette, un son juste, une présence qui dure.",
    "Nous travaillons l’ombre et le cuivre, le silence et le rythme — une signature artistique, sans bruit inutile.",
  ],
  pillarsTitle: "Trois matières",
  pillarsIntro: "Un même regard, trois disciplines.",
  pillars: [
    {
      id: "studio",
      kicker: "01",
      title: "Studio",
      text: "Un espace pour poser le regard. Image, captation, post-production : le studio accueille les formes qui demandent du temps.",
    },
    {
      id: "music",
      kicker: "02",
      title: "Music",
      text: "La musique comme matière, pas comme décor. Direction artistique, enregistrement, accompagnement — le souffle avant le volume.",
    },
    {
      id: "media",
      kicker: "03",
      title: "Media",
      text: "Récits, identités, films et contenus. Une ligne nette : le fond d’abord, la forme ensuite, jamais l’inverse.",
    },
  ],
  dondolieKicker: "En gestation",
  dondolieTitle: "Dondolie",
  dondolieText:
    "Un projet se dessine. Une présence encore retenue — bientôt, sans rien dévoiler trop tôt.",
  contactTitle: "Approcher la maison",
  contactFallback:
    "Les coordonnées officielles seront publiées ici lorsqu’elles seront rendues publiques. Aucun canal privé n’est affiché sur ce site.",
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
  /** Teaser artistique optionnel. Passer à false pour le retirer. */
  dondolieTeaser: true,
};
