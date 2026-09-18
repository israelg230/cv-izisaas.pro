/**
 * Logique Interactive & Rendu Dynamique du CV en Ligne
 * Israel GOUDAYI — cv-izisaas.pro
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.cvData || {};

  // --- Initialisation des données personnelles ---
  initPersonalData(data.personal);
  initStats(data.personal?.stats || []);
  initSkills(data.skills?.categories || []);
  initTimeline(data.experiences || [], data.education || []);
  initProjects(data.projects || []);
  initTestimonials(data.testimonials || []);

  // --- Interactions Globales & UI ---
  initThemeToggle();
  initHeaderScrollSpy();
  initMobileMenu();
  initPrintCv();
  initBackToTop();
  initContactForm();
  initProjectModal();
});

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
    contactPhoneVal.href = `https://wa.me/${personal.phoneClean || '22991845627'}`;
  }

  const heroGithubLink = document.getElementById("heroGithubLink");
  if (heroGithubLink && personal.github) heroGithubLink.href = personal.github;

  const heroWhatsappLink = document.getElementById("heroWhatsappLink");
  if (heroWhatsappLink && personal.phoneClean) {
    heroWhatsappLink.href = `https://wa.me/${personal.phoneClean}?text=Bonjour%20Israel,%20j'ai%20consult%C3%A9%20votre%20CV%20en%20ligne...`;
  }

  const whatsappDirectCta = document.getElementById("whatsappDirectCta");
  if (whatsappDirectCta && personal.phoneClean) {
    whatsappDirectCta.href = `https://wa.me/${personal.phoneClean}?text=Bonjour%20Israel,%20j'aimerais%20discuter%20d'un%20projet...`;
  }
}

/**
 * 2. Rendu des statistiques & chiffres clés
 */
function initStats(stats = []) {
  const statsGrid = document.getElementById("statsGrid");
  if (!statsGrid) return;

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
 * 3. Rendu & Filtrage des Compétences (Skills)
 */
function initSkills(categories = []) {
  const skillsGrid = document.getElementById("skillsGrid");
  const skillsTabs = document.getElementById("skillsTabs");
  if (!skillsGrid || !skillsTabs) return;

  // Flatten skills with category info
  const allSkills = [];
  categories.forEach((cat) => {
    cat.items.forEach((item) => {
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
          <div class="skill-bar-fill" style="width: ${s.level}%;"></div>
        </div>
      </div>
    `
      )
      .join("");
  };

  renderSkills("all");

  // Onglets de filtre
  skillsTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".skill-tab-btn");
    if (!btn) return;

    skillsTabs.querySelectorAll(".skill-tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
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
            ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
          </ul>
          <div class="timeline-tags">
            ${exp.techStack.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
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

  // Par défaut : Expériences
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
 * Générateur d'icônes SVG vectorielles pour chaque projet (100% Sans photo)
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
 * 5. Rendu & Filtrage des Projets (Cartes 100% vectorielles épurées)
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
        <div class="project-card-banner" onclick="openProjectModal('${p.id}')">
          <div class="project-icon-wrapper">
            ${getProjectIconSvg(p.iconType)}
          </div>
          <span class="project-category-badge">${p.categoryLabel}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.shortDesc}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-actions">
            <button type="button" class="btn btn-outline btn-sm" onclick="openProjectModal('${p.id}')">
              <span>Fiche Projet</span>
            </button>
            <div style="display: flex; gap: 12px;">
              <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="En savoir plus">
                <span>Détails</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="Code GitHub">
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

    const filter = btn.getAttribute("data-filter");
    renderProjects(filter);
  });
}

/**
 * 6. Rendu des Témoignages
 */
function initTestimonials(testimonials = []) {
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  if (!testimonialsGrid) return;

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
 * 7. Modale Détails du Projet (Sans image, orientée architecture et spécifications)
 */
let currentProjectsList = [];
function initProjectModal() {
  currentProjectsList = window.cvData?.projects || [];
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => closeModal());

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
  const p = (window.cvData?.projects || []).find((item) => item.id === projectId);
  if (!modal || !p) return;

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
    modalTags.innerHTML = p.tags.map((t) => `<span class="tech-tag">${t}</span>`).join("");
  }

  if (modalDemoBtn) modalDemoBtn.href = p.demoUrl;
  if (modalGithubBtn) modalGithubBtn.href = p.githubUrl;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * 8. Bascule Thème Sombre / Clair (Persistance localStorage)
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");
  if (!toggleBtn) return;

  // Récupérer la préférence stockée ou préférée par le système
  const savedTheme = localStorage.getItem("theme-cv-izisaas");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme ? savedTheme : prefersDark ? "dark" : "dark"; // Default Dark

  applyTheme(initialTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("theme-cv-izisaas", nextTheme);
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
 * 9. ScrollSpy & Style du Header sticky
 */
function initHeaderScrollSpy() {
  const header = document.getElementById("siteHeader");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    // Header background blur intensification
    if (header) {
      if (scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // ScrollSpy active link
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (currentId && link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

/**
 * 10. Menu Mobile Burger
 */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/**
 * 11. Impression / Export PDF en 1 clic
 */
function initPrintCv() {
  const printBtn = document.getElementById("printCvBtn");
  if (!printBtn) return;

  printBtn.addEventListener("click", () => {
    showToast("Préparation de l'export PDF du CV...");
    setTimeout(() => {
      window.print();
    }, 300);
  });
}

/**
 * 12. Bouton Retour en Haut (Back to Top)
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 350) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.pointerEvents = "auto";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.pointerEvents = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * 13. Formulaire de Contact Interactif
 */
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName")?.value.trim();
    const email = document.getElementById("contactEmail")?.value.trim();
    const subject = document.getElementById("contactSubject")?.value.trim();
    const message = document.getElementById("contactMessage")?.value.trim();

    if (!name || !email || !message) {
      showToast("Veuillez renseigner tous les champs requis.");
      return;
    }

    // Afficher confirmation toast
    showToast("Message préparé ! Ouverture de votre client email...");

    // Redirection mailto automatique avec contenu pré-rempli
    const targetEmail = window.cvData?.personal?.email || "segnonisraelg@gmail.com";
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      `[Contact CV] ${subject || "Nouveau message"} - ${name}`
    )}&body=${encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1000);

    contactForm.reset();
  });
}

/**
 * 14. Notifications Toast Réutilisables
 */
function showToast(message) {
  const toast = document.getElementById("toastNotice");
  const msgSpan = document.getElementById("toastMessage");
  if (!toast || !msgSpan) return;

  msgSpan.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}
