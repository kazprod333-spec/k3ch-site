import { brand, contact, copy, features } from "./config.js";
import "./styles.css";

document.documentElement.classList.add("js");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function text(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = value;
  });
}

function bindWithin(root, key, value) {
  if (!root || value == null) return;
  root.querySelectorAll(`[data-bind='${key}']`).forEach((el) => {
    el.textContent = value;
  });
}

function applyBrand() {
  document.title = copy.documentTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", copy.documentDescription);

  text("[data-bind='lockup']", brand.lockup);
  text("[data-bind='name']", brand.name);
  text("[data-bind='city']", brand.city);
  text("[data-bind='tagline']", brand.tagline);
  text("[data-bind='hero-title']", copy.heroTitle);
  text("[data-bind='hero-line']", copy.heroLine);
  text("[data-bind='hero-cta']", copy.heroCta);
  text("[data-bind='maison-title']", copy.maisonTitle);
  text("[data-bind='maison-lede']", copy.maisonLede);
  text("[data-bind='atelier-title']", copy.atelierTitle);
  text("[data-bind='atelier-intro']", copy.atelierIntro);
  text("[data-bind='works-title']", copy.worksTitle);
  text("[data-bind='works-intro']", copy.worksIntro);
  text("[data-bind='equipe-title']", copy.equipeTitle);
  text("[data-bind='equipe-lede']", copy.equipeLede);
  text("[data-bind='equipe-caption']", copy.equipeCaption);
  text("[data-bind='parcours-title']", copy.parcoursTitle);

  const worksNote = document.querySelector("[data-bind='works-note']");
  if (worksNote) {
    if (copy.worksNote) {
      worksNote.hidden = false;
      worksNote.textContent = copy.worksNote;
    } else {
      worksNote.hidden = true;
    }
  }
  text("[data-bind='parcours-intro']", copy.parcoursIntro);
  text("[data-bind='dondolie-kicker']", copy.dondolieKicker);
  text("[data-bind='dondolie-title']", copy.dondolieTitle);
  text("[data-bind='dondolie-text']", copy.dondolieText);
  text("[data-bind='contact-title']", copy.contactTitle);
  text("[data-bind='footer-rights']", copy.footerRights);
  text("[data-bind='year']", String(new Date().getFullYear()));

  const maisonBody = document.querySelector("[data-bind='maison-body']");
  if (maisonBody) {
    maisonBody.replaceChildren(
      ...copy.maisonBody.map((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        return p;
      }),
    );
  }

  copy.pillars.forEach((pillar) => {
    document
      .querySelectorAll(`[data-pillar='${pillar.id}'], [data-work='${pillar.id}']`)
      .forEach((root) => {
        bindWithin(root, "pillar-number", pillar.number);
        bindWithin(root, "pillar-title", pillar.title);
        bindWithin(root, "pillar-headline", pillar.headline);
        bindWithin(root, "pillar-text", pillar.text);
        bindWithin(root, "pillar-aside", pillar.aside);
      });
  });

  copy.parcours.forEach((step) => {
    const root = document.querySelector(`[data-step='${step.id}']`);
    if (!root) return;
    bindWithin(root, "step-number", step.number);
    bindWithin(root, "step-title", step.title);
    bindWithin(root, "step-text", step.text);
  });

  applyVisuals();

  const lockups = document.querySelectorAll("[data-lockup]");
  const logos = document.querySelectorAll("[data-bind='logo']");
  if (brand.logoSrc) {
    logos.forEach((logoImg) => {
      logoImg.src = brand.logoSrc;
      if (logoImg.getAttribute("alt") !== "") {
        logoImg.alt = brand.logoAlt || brand.name;
      }
      logoImg.hidden = false;
    });
    lockups.forEach((wrap) => {
      wrap.hidden = true;
    });
  } else {
    logos.forEach((logoImg) => {
      logoImg.removeAttribute("src");
      logoImg.hidden = true;
    });
    lockups.forEach((wrap) => {
      wrap.hidden = false;
    });
  }
}

function applyImage(el, src, alt, width, height) {
  if (!el || !src) return;
  el.src = src;
  if (alt) el.alt = alt;
  if (width) el.setAttribute("width", String(width));
  if (height) el.setAttribute("height", String(height));
}

function applyVisuals() {
  (copy.works || []).forEach((work) => {
    const root = document.querySelector(`[data-work-piece='${work.id}']`);
    if (!root) return;
    bindWithin(root, "work-kicker", work.kicker);
    bindWithin(root, "work-title", work.title);
    bindWithin(root, "work-caption", work.caption);
    applyImage(
      root.querySelector("[data-work-image]"),
      work.image,
      work.imageAlt,
      work.width,
      work.height,
    );
  });

  const atmosphere = copy.atelierAtmosphere;
  const atmosphereRoot = document.querySelector("[data-atelier-atmosphere]");
  if (atmosphere && atmosphereRoot) {
    bindWithin(atmosphereRoot, "atmosphere-kicker", atmosphere.kicker);
    bindWithin(atmosphereRoot, "atmosphere-caption", atmosphere.caption);
    applyImage(
      atmosphereRoot.querySelector("[data-atmosphere-image]"),
      atmosphere.image,
      atmosphere.imageAlt,
      atmosphere.width,
      atmosphere.height,
    );
  }

  applyImage(
    document.querySelector("[data-equipe-image]"),
    copy.equipeImage,
    copy.equipeImageAlt,
    copy.equipeWidth,
    copy.equipeHeight,
  );

  const lockup = copy.mediaLockup;
  if (lockup) {
    applyImage(
      document.querySelector("[data-media-lockup]"),
      lockup.src,
      lockup.alt,
      lockup.width,
      lockup.height,
    );
  }

  const emblem = copy.dondolieEmblem;
  if (emblem) {
    applyImage(
      document.querySelector("[data-dondolie-emblem]"),
      emblem.src,
      emblem.alt,
      emblem.width,
      emblem.height,
    );
  }
}

function applyDondolie() {
  const section = document.querySelector("#dondolie");
  const navItem = document.querySelector("[data-nav='dondolie']");
  const visible = Boolean(features.dondolieTeaser);
  if (section) section.hidden = !visible;
  if (navItem) navItem.hidden = !visible;
}

function toWhatsAppUrl(value) {
  const trimmed = String(value).trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";

  let intl = digits;
  if (digits.startsWith("00")) {
    intl = digits.slice(2);
  } else if (digits.startsWith("0")) {
    intl = `213${digits.slice(1)}`;
  }

  return `https://wa.me/${intl}`;
}

function publicContacts() {
  const items = [];
  if (contact.email) {
    items.push({
      kind: "text",
      label: "Courriel",
      href: `mailto:${contact.email}`,
      value: contact.email,
    });
  }
  if (contact.phone) {
    items.push({
      kind: "text",
      label: "Téléphone",
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
      value: contact.phone,
    });
  }
  if (contact.whatsapp) {
    items.push({
      kind: "text",
      label: "Téléphone / WhatsApp",
      href: toWhatsAppUrl(contact.whatsapp),
      value: contact.whatsapp,
      external: true,
    });
  }
  if (contact.instagram) {
    items.push({
      kind: "orb",
      label: "Instagram",
      href: contact.instagram,
      value: "Instagram",
    });
  }
  if (contact.youtube) {
    items.push({
      kind: "orb",
      label: "YouTube",
      href: contact.youtube,
      value: "YouTube",
    });
  }
  if (contact.site) {
    items.push({
      kind: "orb",
      label: "Site",
      href: contact.site,
      value: "Site",
    });
  }
  return items;
}

function applyContact() {
  const list = document.querySelector("[data-bind='contact-list']");
  const orbs = document.querySelector("[data-bind='contact-orbs']");
  const fallback = document.querySelector("[data-bind='contact-fallback']");
  if (!list || !fallback) return;

  const items = publicContacts();
  const textItems = items.filter((item) => item.kind === "text");
  const orbItems = items.filter((item) => item.kind === "orb");
  list.replaceChildren();
  if (orbs) orbs.replaceChildren();

  if (!items.length) {
    fallback.hidden = false;
    fallback.textContent = copy.contactFallback;
    list.hidden = true;
    if (orbs) orbs.hidden = true;
    return;
  }

  fallback.hidden = true;

  if (textItems.length) {
    list.hidden = false;
    textItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "contact-link";
      a.href = item.href;
      a.setAttribute("aria-label", `${item.label} : ${item.value}`);
      if (item.external) {
        a.rel = "noopener noreferrer";
        a.target = "_blank";
      }

      const label = document.createElement("span");
      label.className = "contact-label";
      label.textContent = item.label;

      const value = document.createElement("span");
      value.className = "contact-value";
      value.textContent = item.value;

      a.append(label, value);
      li.append(a);
      list.append(li);
    });
  } else {
    list.hidden = true;
  }

  if (orbs) {
    if (!orbItems.length) {
      orbs.hidden = true;
    } else {
      orbs.hidden = false;
      orbItems.forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.value;
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        li.append(a);
        orbs.append(li);
      });
    }
  }
}

function setupNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.dataset.open = String(open);
    document.body.classList.toggle("nav-open", open);
    const label = toggle.querySelector(".visually-hidden");
    if (label) label.textContent = open ? "Fermer le menu" : "Ouvrir le menu";
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function setupSmoothScroll() {
  if (prefersReducedMotion) return;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof target.focus === "function") {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });
}

function setupReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );

  els.forEach((el) => io.observe(el));
}

applyBrand();
applyDondolie();
applyContact();
setupNav();
setupSmoothScroll();
setupReveal();
