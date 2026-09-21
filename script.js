/**
 * Logique Interactive & Rendu Dynamique du CV en Ligne
 * Segnon Israël GOUDAYI — cv-izisaas.pro
 * « Médecine × IA × Ingénierie × Innovation »
 */

// URL de base de l'API FastAPI (relative si servi sur le même port 8000, absolue sinon)
const API_BASE = window.location.port === "8000" ? "" : "http://localhost:8000";

// Initialisation robuste compatible avec tout état de chargement du document
function startCvApp() {
  const data = window.cvData || (typeof cvData !== "undefined" ? cvData : {});

  // 1. Données de profil & Métriques (Rendu immédiat 0ms avec données locales)
  initPersonalData(data.personal || {});
  initStats(data.personal?.stats || []);

  // 2. Modules dynamiques
  initSkills(data.skills?.categories || []);
  initTimeline(data.experiences || [], data.education || []);
  initProjects(data.projects || []);
  initTestimonials(data.testimonials || []);

  // 3. Interactions UI & Contrôles
  initThemeToggle();
  initHeaderScrollSpy();
  initMobileMenu();
  initPrintCv();
  initBackToTop();
  initContactForm();
  initProjectModal();

  // 4. Synchronisation asynchrone avec l'API Backend FastAPI
  syncCvWithBackend();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startCvApp);
} else {
  startCvApp();
}

/**
 * Synchronisation dynamique avec le backend FastAPI
 */
async function syncCvWithBackend() {
  const dot = document.getElementById("backendDot");
  const statusText = document.getElementById("backendStatusText");
  const docsLink = document.getElementById("apiDocsLink");

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(`${API_BASE}/api/cv`, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const backendData = await res.json();
      window.cvData = backendData;

      // Réactualisation dynamique des composants avec les données certifiées du backend
      initPersonalData(backendData.personal || {});
      initStats(backendData.personal?.stats || []);
      initSkills(backendData.skills?.categories || []);
      initTimeline(backendData.experiences || [], backendData.education || []);
      initProjects(backendData.projects || []);
      initTestimonials(backendData.testimonials || []);

      if (dot) dot.classList.add("connected");
      if (statusText) statusText.textContent = "API Backend FastAPI + Pydantic v2 : Connecté";
      if (docsLink) {
        docsLink.style.display = "inline";
        docsLink.href = `${API_BASE}/docs`;
      }
      return true;
    }
  } catch (err) {
    // Mode autonome / hors-ligne : données locales préservées
  }

  if (dot) dot.classList.remove("connected");
  if (statusText) statusText.textContent = "Mode Autonome (Données locales prêtes)";
  if (docsLink) docsLink.style.display = "none";
  return false;
}

/**
 * 1. Injection des données personnelles dans le DOM
 */
function initPersonalData(personal = {}) {
  if (!personal) return;

  const currentYear = document.getElementById("currentYear");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  const heroFullName = document.getElementById("heroFullName");
  if (heroFullName && personal.fullName) heroFullName.textContent = personal.fullName;

  const heroSubtitle = document.getElementById("heroSubtitle");
  if (heroSubtitle && personal.title) heroSubtitle.textContent = personal.title;

  const heroPitch = document.getElementById("heroPitch");
  if (heroPitch && personal.subtitle) heroPitch.textContent = personal.subtitle;

  const heroStatusBadge = document.getElementById("heroStatusBadge");
  if (heroStatusBadge && personal.statusBadge) heroStatusBadge.textContent = personal.statusBadge;

  const aboutBio = document.getElementById("aboutBio");
  if (aboutBio && personal.bio) aboutBio.textContent = personal.bio;

  const aboutLocation = document.getElementById("aboutLocation");
  if (aboutLocation && personal.location) aboutLocation.textContent = personal.location;

  const contactLocationVal = document.getElementById("contactLocationVal");
  if (contactLocationVal && personal.location) contactLocationVal.textContent = personal.location;

  const contactEmailVal = document.getElementById("contactEmailVal");
  if (contactEmailVal && personal.email) {
    contactEmailVal.textContent = personal.email;
    contactEmailVal.href = `mailto:${personal.email}`;
  }

  const contactPhoneVal = document.getElementById("contactPhoneVal");
  if (contactPhoneVal && personal.phone) {
    contactPhoneVal.textContent = personal.phone;
    contactPhoneVal.href = `https://wa.me/${personal.phoneClean || "22991845627"}`;
  }

  const heroGithubLink = document.getElementById("heroGithubLink");
  if (heroGithubLink && personal.github) heroGithubLink.href = personal.github;

  const heroWhatsappLink = document.getElementById("heroWhatsappLink");
  if (heroWhatsappLink && personal.phoneClean) {
    heroWhatsappLink.href = `https://wa.me/${personal.phoneClean}?text=Bonjour%20Isra%C3%ABl,%20j'ai%20consult%C3%A9%20votre%20CV%20en%20ligne...`;
  }

  const whatsappDirectCta = document.getElementById("whatsappDirectCta");
  if (whatsappDirectCta && personal.phoneClean) {
    whatsappDirectCta.href = `https://wa.me/${personal.phoneClean}?text=Bonjour%20Isra%C3%ABl,%20j'aimerais%20discuter%20d'un%20projet...`;
  }
}

/**
 * 2. Rendu des statistiques & chiffres clés
 */
function initStats(stats = []) {
  const statsGrid = document.getElementById("statsGrid");
  if (!statsGrid || !stats.length) return;

  statsGrid.innerHTML = stats
    .map(
      (s) => `
    <div class="stat-box">
      <div class="stat-number">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `
    )
    .join("");
}

/**
 * 3. Rendu & Filtrage des Compétences avec animation de progression
 */
function initSkills(categories = []) {
  const skillsGrid = document.getElementById("skillsGrid");
  const skillsTabs = document.getElementById("skillsTabs");
  if (!skillsGrid || !skillsTabs) return;

  // Aplatissement des compétences avec les métadonnées de catégorie
  const allSkills = [];
  categories.forEach((cat) => {
    (cat.items || []).forEach((item) => {
      allSkills.push({ ...item, categoryId: cat.id, categoryName: cat.name });
    });
  });

  const renderSkills = (filter = "all") => {
    const list = filter === "all" ? allSkills : allSkills.filter((s) => s.categoryId === filter);

    skillsGrid.innerHTML = list
      .map(
        (s) => `
      <div class="skill-card">
        <div class="skill-card-top">
          <span class="skill-name">${s.name}</span>
          <span class="skill-tag">${s.tag}</span>
        </div>
        <div class="skill-bar-bg" aria-hidden="true">
          <div class="skill-bar-fill" style="width: 0%;" data-level="${s.level}"></div>
        </div>
      </div>
    `
      )
      .join("");

    // Animation fluide des barres de progression
    requestAnimationFrame(() => {
      skillsGrid.querySelectorAll(".skill-bar-fill").forEach((bar) => {
        const level = bar.getAttribute("data-level") || "80";
        bar.style.width = `${level}%`;
      });
    });
  };

  renderSkills("all");

  // Onglets de filtre de compétences
  skillsTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".skill-tab-btn");
    if (!btn) return;

    skillsTabs.querySelectorAll(".skill-tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category") || "all";
    renderSkills(category);
  });
}

/**
 * 4. Rendu de la Timeline (Expériences vs Formations)
 */
function initTimeline(experiences = [], education = []) {
  const timelineContent = document.getElementById("timelineContent");
  const viewExpBtn = document.getElementById("viewExpBtn");
  const viewEduBtn = document.getElementById("viewEduBtn");
  if (!timelineContent || !viewExpBtn || !viewEduBtn) return;

  const renderExperiences = () => {
    timelineContent.innerHTML = experiences
      .map(
        (exp) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <div class="timeline-company">${exp.company} • ${exp.location}</div>
          <p style="margin-bottom: 12px; font-size: 0.94rem;">${exp.description}</p>
          <ul class="timeline-bullets">
            ${(exp.highlights || []).map((h) => `<li>${h}</li>`).join("")}
          </ul>
          <div class="timeline-tags">
            ${(exp.techStack || []).map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  };

  const renderEducation = () => {
    timelineContent.innerHTML = education
      .map(
        (edu) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${edu.degree}</h3>
            <span class="timeline-period">${edu.period}</span>
          </div>
          <div class="timeline-company">${edu.institution}</div>
          <p style="font-size: 0.94rem; color: var(--text-secondary);">${edu.details}</p>
        </div>
      </div>
    `
      )
      .join("");
  };

  // Affichage initial : Expériences
  renderExperiences();

  viewExpBtn.addEventListener("click", () => {
    viewExpBtn.classList.add("active");
    viewEduBtn.classList.remove("active");
    renderExperiences();
  });

  viewEduBtn.addEventListener("click", () => {
    viewEduBtn.classList.add("active");
    viewExpBtn.classList.remove("active");
    renderEducation();
  });
}

/**
 * 5. Générateur d'icônes SVG vectorielles par projet (Design 100% Vectoriel)
 */
function getProjectIconSvg(iconType) {
  switch (iconType) {
    case "anatomy":
      return `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`;
    case "dna":
      return `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m17 6-2.5-2.5"></path><path d="m14 8-1-1"></path><path d="m7 18 2.5 2.5"></path><path d="m3.5 14.5.5.5"></path><path d="m20 9 .5.5"></path><path d="m6.5 12.5 1 1"></path><path d="m16.5 10.5 1 1"></path><path d="m10 16 1 1"></path></svg>`;
    case "notebook":
      return `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="m9 14 2 2 4-4"></path></svg>`;
    case "trophy":
      return `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`;
    case "sparkles":
      return `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>`;
    case "truck":
    default:
      return `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18.5" r="2.5"></circle><circle cx="7" cy="18.5" r="2.5"></circle></svg>`;
  }
}

/**
 * 6. Rendu & Filtrage des Projets (Cartes vectorielles interactives)
 */
function initProjects(projects = []) {
  const projectsGrid = document.getElementById("projectsGrid");
  const projectFilters = document.getElementById("projectFilters");
  if (!projectsGrid || !projectFilters) return;

  const renderProjects = (filter = "all") => {
    const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);

    projectsGrid.innerHTML = list
      .map(
        (p) => `
      <article class="project-card" data-id="${p.id}">
        <div class="project-card-banner" onclick="openProjectModal('${p.id}')" role="button" tabindex="0" aria-label="Consulter ${p.title}">
          <div class="project-icon-wrapper">
            ${getProjectIconSvg(p.iconType)}
          </div>
          <span class="project-category-badge">${p.categoryLabel}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.shortDesc}</p>
          <div class="project-tags">
            ${(p.tags || []).map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-actions">
            <button type="button" class="btn btn-outline btn-sm" onclick="openProjectModal('${p.id}')">
              <span>Fiche Projet</span>
            </button>
            <div style="display: flex; gap: 12px; align-items: center;">
              <a href="${p.demoUrl || "#"}" target="_blank" rel="noopener noreferrer" class="project-link" title="En savoir plus">
                <span>Détails</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <a href="${p.githubUrl || "#"}" target="_blank" rel="noopener noreferrer" class="project-link" title="Code source GitHub">
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  };

  renderProjects("all");

  projectFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    projectFilters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter") || "all";
    renderProjects(filter);
  });
}

/**
 * 7. Rendu des Témoignages
 */
function initTestimonials(testimonials = []) {
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  if (!testimonialsGrid || !testimonials.length) return;

  testimonialsGrid.innerHTML = testimonials
    .map(
      (t) => `
    <div class="testimonial-card">
      <div class="quote-icon">“</div>
      <p class="testimonial-text">${t.quote}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.avatarLetter || "U"}</div>
        <div>
          <div class="author-name">${t.author}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

/**
 * 8. Modale Détails du Projet
 */
let allProjectsList = [];
function initProjectModal() {
  const data = window.cvData || (typeof cvData !== "undefined" ? cvData : {});
  allProjectsList = data.projects || [];

  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

window.openProjectModal = function (projectId) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const data = window.cvData || (typeof cvData !== "undefined" ? cvData : {});
  const list = allProjectsList.length ? allProjectsList : data.projects || [];
  const p = list.find((item) => item.id === projectId);
  if (!p) return;

  const modalIcon = document.getElementById("modalProjectIcon");
  const modalCategory = document.getElementById("modalProjectCategory");
  const modalTitle = document.getElementById("modalProjectTitle");
  const modalDesc = document.getElementById("modalProjectDescription");
  const modalTags = document.getElementById("modalProjectTags");
  const modalDemoBtn = document.getElementById("modalProjectDemoBtn");
  const modalGithubBtn = document.getElementById("modalProjectGithubBtn");

  if (modalIcon) modalIcon.innerHTML = getProjectIconSvg(p.iconType);
  if (modalCategory) modalCategory.textContent = p.categoryLabel;
  if (modalTitle) modalTitle.textContent = p.title;
  if (modalDesc) modalDesc.textContent = p.fullDesc || p.shortDesc;

  if (modalTags) {
    modalTags.innerHTML = (p.tags || []).map((t) => `<span class="tech-tag">${t}</span>`).join("");
  }

  if (modalDemoBtn) modalDemoBtn.href = p.demoUrl || "#";
  if (modalGithubBtn) modalGithubBtn.href = p.githubUrl || "#";

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

window.closeModal = function () {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
};

/**
 * 9. Bascule Thème Sombre / Clair (Sécurisée avec try/catch)
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");
  if (!toggleBtn) return;

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("theme-cv-izisaas");
  } catch (err) {
    // Ignorer l'erreur d'environnement restreint (ex: file://)
  }

  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme ? savedTheme : prefersDark ? "dark" : "dark";

  applyTheme(initialTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);

    try {
      localStorage.setItem("theme-cv-izisaas", nextTheme);
    } catch (err) {
      // Ignorer
    }

    showToast(`Thème ${nextTheme === "dark" ? "Sombre" : "Clair"} activé`);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "light") {
      if (moonIcon) moonIcon.style.display = "none";
      if (sunIcon) sunIcon.style.display = "block";
    } else {
      if (moonIcon) moonIcon.style.display = "block";
      if (sunIcon) sunIcon.style.display = "none";
    }
  }
}

/**
 * 10. ScrollSpy Précis & Header Sticky
 */
function initHeaderScrollSpy() {
  const header = document.getElementById("siteHeader");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  let ticking = false;

  const onScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;

    // Intensification du flou de l'en-tête
    if (header) {
      if (scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // ScrollSpy basé sur getBoundingClientRect pour éviter tout décalage d'offsetParent
    let currentId = "hero";
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    // Détection de fin de page pour le contact
    if (scrollY + windowHeight >= scrollHeight - 60) {
      currentId = "contact";
    } else {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Une section est active si son haut est au-dessus du tiers de l'écran
        if (rect.top <= 140 && rect.bottom >= 140) {
          currentId = section.getAttribute("id");
        }
      });
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (currentId && link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  // Exécution initiale
  onScroll();
}

/**
 * 11. Menu Mobile Réactif avec fermeture au clic extérieur
 */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  const header = document.getElementById("siteHeader");
  if (!mobileMenuBtn || !navLinks) return;

  const toggleMenu = (forceState) => {
    const isOpen = typeof forceState === "boolean" ? forceState : !navLinks.classList.contains("open");
    navLinks.classList.toggle("open", isOpen);
    mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu(false);
    });
  });

  // Fermer le menu si l'utilisateur clique en dehors
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("open") && header && !header.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Fermeture avec la touche Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      toggleMenu(false);
    }
  });
}

/**
 * 12. Impression / Export PDF en 1 clic
 */
function initPrintCv() {
  const printBtn = document.getElementById("printCvBtn");
  if (!printBtn) return;

  printBtn.addEventListener("click", () => {
    showToast("Génération du format PDF du CV...");
    setTimeout(() => {
      window.print();
    }, 250);
  });
}

/**
 * 13. Bouton Flottant Retour en Haut (Back to Top)
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  let ticking = false;
  const updateVisibility = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const isScrolled = scrollY > 320;
    backToTopBtn.classList.toggle("visible", isScrolled);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    },
    { passive: true }
  );

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Exécution initiale
  updateVisibility();
}

/**
 * 14. Formulaire de Contact Intelligent (FastAPI API + Fallback Email)
 */
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const subjectInput = document.getElementById("contactSubject");
    const messageInput = document.getElementById("contactMessage");
    const submitBtn = document.getElementById("submitContactBtn");

    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const subject = subjectInput?.value.trim() || "Prise de contact depuis le CV en ligne";
    const message = messageInput?.value.trim() || "";

    if (!name || !email || !message) {
      showToast("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmission en cours...</span>`;
    }

    // 1. Tentative d'envoi direct à l'API FastAPI locale si le backend est actif
    let backendSuccess = false;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const resData = await response.json();
        backendSuccess = true;
        showToast(resData.message || "Message enregistré avec succès !");
        contactForm.reset();
      }
    } catch (err) {
      // Backend non démarré ou hors ligne : poursuite vers le fallback email
    }

    // 2. Si le backend n'est pas actif, ouverture automatique du client email
    if (!backendSuccess) {
      showToast("Ouverture de votre client de messagerie...");
      const targetEmail = window.cvData?.personal?.email || "segnonisraelg@gmail.com";
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
        `[Contact CV] ${subject} — ${name}`
      )}&body=${encodeURIComponent(
        `Bonjour Israël,\n\n${message}\n\n---\nExpéditeur : ${name}\nEmail : ${email}`
      )}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);

      contactForm.reset();
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  });
}

/**
 * 15. Notifications Toast Réutilisables avec gestion propre du délai
 */
let toastTimeoutId = null;
function showToast(message) {
  const toast = document.getElementById("toastNotice");
  const msgSpan = document.getElementById("toastMessage");
  if (!toast || !msgSpan) return;

  msgSpan.textContent = message;
  toast.classList.add("show");

  if (toastTimeoutId) {
    clearTimeout(toastTimeoutId);
  }

  toastTimeoutId = setTimeout(() => {
    toast.classList.remove("show");
    toastTimeoutId = null;
  }, 3500);
}
