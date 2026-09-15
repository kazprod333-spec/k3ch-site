import { brand, contact, copy, features } from "./config.js";
import "./styles.css";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function text(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
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
  text("[data-bind='country']", brand.country);
  text("[data-bind='tagline']", brand.tagline);
  text("[data-bind='hero-lead']", copy.heroLead);
  text("[data-bind='maison-title']", copy.maisonTitle);
  text("[data-bind='pillars-title']", copy.pillarsTitle);
  text("[data-bind='pillars-intro']", copy.pillarsIntro);
  text("[data-bind='dondolie-kicker']", copy.dondolieKicker);
  text("[data-bind='dondolie-title']", copy.dondolieTitle);
  text("[data-bind='dondolie-text']", copy.dondolieText);
  text("[data-bind='contact-title']", copy.contactTitle);
  text("[data-bind='footer-rights']", copy.footerRights);

  const year = String(new Date().getFullYear());
  text("[data-bind='year']", year);

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
    text(`[data-pillar='${pillar.id}'] [data-bind='pillar-kicker']`, pillar.kicker);
    text(`[data-pillar='${pillar.id}'] [data-bind='pillar-title']`, pillar.title);
    text(`[data-pillar='${pillar.id}'] [data-bind='pillar-text']`, pillar.text);
  });

  const logoImg = document.querySelector("[data-bind='logo']");
  const lockupWrap = document.querySelector("[data-lockup]");
  if (logoImg && brand.logoSrc) {
    logoImg.src = brand.logoSrc;
    logoImg.alt = brand.logoAlt || brand.name;
    logoImg.hidden = false;
    if (lockupWrap) lockupWrap.hidden = true;
  } else if (logoImg) {
    logoImg.removeAttribute("src");
    logoImg.hidden = true;
  }
}

function applyDondolie() {
  const section = document.querySelector("#dondolie");
  const navItem = document.querySelector("[data-nav='dondolie']");
  const visible = Boolean(features.dondolieTeaser);
  if (section) section.hidden = !visible;
  if (navItem) navItem.hidden = !visible;
}

function publicContacts() {
  const items = [];
  if (contact.email) {
    items.push({
      label: "Courriel",
      href: `mailto:${contact.email}`,
      value: contact.email,
    });
  }
  if (contact.phone) {
    items.push({
      label: "Téléphone",
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
      value: contact.phone,
    });
  }
  if (contact.instagram) {
    items.push({ label: "Instagram", href: contact.instagram, value: "Instagram" });
  }
  if (contact.youtube) {
    items.push({ label: "YouTube", href: contact.youtube, value: "YouTube" });
  }
  if (contact.site) {
    items.push({ label: "Site", href: contact.site, value: contact.site });
  }
  return items;
}

function applyContact() {
  const list = document.querySelector("[data-bind='contact-list']");
  const fallback = document.querySelector("[data-bind='contact-fallback']");
  if (!list || !fallback) return;

  const items = publicContacts();
  list.replaceChildren();

  if (!items.length) {
    fallback.hidden = false;
    fallback.textContent = copy.contactFallback;
    list.hidden = true;
    return;
  }

  fallback.hidden = true;
  list.hidden = false;
  items.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.value;
    if (item.href.startsWith("http")) {
      a.rel = "noopener noreferrer";
      a.target = "_blank";
    }
    const span = document.createElement("span");
    span.className = "contact-label";
    span.textContent = item.label;
    li.append(span, a);
    list.append(li);
  });
}

function setupNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.dataset.open = String(open);
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

function setupHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const update = () => {
    header.dataset.scrolled = String(window.scrollY > 24);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupReveals() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    nodes.forEach((node) => {
      node.dataset.revealed = "true";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
  );

  nodes.forEach((node) => observer.observe(node));
}

applyBrand();
applyDondolie();
applyContact();
setupNav();
setupSmoothScroll();
setupHeaderState();
setupReveals();
