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
  documentDescription: "Maison de création à Alger. Studio, Music, Media.",
  maisonTitle: "Maison",
  maisonBody: ["Une maison de création à Alger — studio, musique, médias."],
  pillarsTitle: "Piliers",
  pillars: [
    {
      id: "studio",
      title: "Studio",
      text: "Image, captation.",
    },
    {
      id: "music",
      title: "Music",
      text: "Direction, enregistrement.",
    },
    {
      id: "media",
      title: "Media",
      text: "Récits, contenus.",
    },
  ],
  dondolieTitle: "Dondolie",
  dondolieText: "Bientôt.",
  contactTitle: "Contact",
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
  /** Teaser artistique optionnel. Passer à false pour le retirer. */
  dondolieTeaser: true,
};
