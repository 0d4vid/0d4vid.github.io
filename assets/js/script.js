/* ═══════════════════════════════════════════════════════════
   NONAGNI DAVID — PORTFOLIO  ·  script.js
   Sections: i18n · Preloader · Canvas · GSAP · AOS · Nav
   ═══════════════════════════════════════════════════════════ */

/* ── CONTENT (bilingual) ─────────────────────────────────── */
const content = {
  en: {
    preloader:       "assembling signal map",
    navServices:     "Services",
    navProcess:      "Process",
    navProof:        "Proof",
    navStack:        "Stack",
    navContact:      "Contact",
    navCta:          "Discuss a project",

    heroTitle:       "Build systems. Automate work.",
    heroLeadPrefix:  "I help teams with ",
    heroPrimary:     "Discuss a project",
    heroSecondary:   "Explore services",
    heroStatus:      "AVAILABLE FOR PROJECT",

    servicesTitle:   "Capabilities.",
    servicesLead:    "Each offer is scoped to reduce manual work, connect existing tools, and leave you with systems that can be maintained after delivery.",
    serviceN8nTitle: "n8n automation",
    serviceN8nText:  "Workflow design for lead handling, reporting, notifications, data sync, approvals, and internal operations.",
    serviceAiTitle:  "AI integration",
    serviceAiText:   "AI assistants, RAG patterns, document processing, prompt workflows, and integrations that fit existing products.",
    serviceEtlTitle: "ETL and data warehouse",
    serviceEtlText:  "Data extraction, cleaning, transformation, warehouse-ready structures, analytics foundations, and operational dashboards.",
    serviceWebTitle: "Web development",
    serviceWebText:  "Responsive websites, frontend interfaces, backend services, APIs, and practical product experiences.",
    serviceAppTitle: "App development",
    serviceAppText:  "Mobile and desktop application support, product prototypes, workflow tools, and internal apps.",
    serviceDataTitle:"Data science",
    serviceDataText: "Exploratory analysis, ML prototypes, model evaluation, dashboards, and decisions supported by structured evidence.",

    processTitle:    "Process.",
    processStep0:    "diagnose",
    processStep1:    "design",
    processStep2:    "build",
    processStep3:    "stabilize",
    processDiagnose: "Map the current workflow, data sources, manual steps, constraints, and real success criteria.",
    processDesign:   "Define the automation, data flow, user touchpoints, fallback paths, and handoff expectations.",
    processBuild:    "Implement workflows, integrations, pipelines, interfaces, and dashboards with clear checkpoints.",
    processStabilize:"Test edge cases, document usage, prepare maintenance notes, and make the system understandable.",

    proofTitle:      "Work proof.",
    proofLead:       "These frames are ready for screenshots, dashboards, and case study details. Click on a project card to view detailed specifications.",
    projectTitle0:   "Llama 3 Fine-Tuning",
    projectTag0:     "AI & Data",
    projectTitle1:   "RAG Chatbot",
    projectTag1:     "AI Integration",
    projectTitle2:   "Flashart Agency",
    projectTag2:     "Web Dev",
    projectTitle3:   "Explora SARL",
    projectTag3:     "Web Dev",
    projectTitle4:   "Le Messager Website",
    projectTag4:     "UI/UX Proposal",
    projectTitle5:   "Okuko Fast-Food",
    projectTag5:     "UI/UX Proposal",
    projectTitle6:   "NSK Services",
    projectTag6:     "Web Dev",
    projectTitle7:   "Portfolio Site",
    projectTag7:     "Web Dev",
    projectTitle8:   "Telegram Bot",
    projectTag8:     "Automation",
    projectTitle9:   "Content Machine",
    projectTag9:     "Automation",
    projectTitle10:  "WhatsApp Bot",
    projectTag10:    "Automation",
    showMoreProofs:  "Show more projects",

    aboutTitle:      "About me.",
    aboutBioTitle:   "Architecting automated flows and practical AI products.",
    aboutBioText:    "Based in Douala, Cameroon, I work as an AI automation builder and software developer. I help businesses eliminate repetitive manual workflows, connect disconnected SaaS applications, build custom data analysis systems, and deploy custom AI integrations that solve real business needs.",
    statYears:       "years of experience",
    statProjects:    "projects completed",
    statCommunity:   "coding community members",
    statEducation:   "bachelor & bts degree",
    orbitTitle:      "Orbit SARL",
    orbitTextShort:  "AI & Software Intern - Applied machine learning models and business tool integration.",
    codingHqTitle:   "Coding HQ",
    codingHqTextShort: "CTO & Co-founder - Led engineering training, community mentoring, and web projects.",

    stackTitle:      "Stack.",
    stackAutomation: "Automation",
    stackAi:         "AI and data",
    stackWeb:        "Web and apps",
    stackTools:      "Tools",

    contactTitle:    "Let's build.",
    contactLead:     "Reach out for automation, AI integration, ETL, web/app builds, data analysis, or recruiter conversations.",

    footerRights:    "All rights reserved.",
    footerLang:      "Passer en français",
    backToTop:       "Back to top ↑",
  },

  fr: {
    preloader:       "assemblage de la carte signal",
    navServices:     "Services",
    navProcess:      "Processus",
    navProof:        "Preuves",
    navStack:        "Stack",
    navContact:      "Contact",
    navCta:          "Discuter d'un projet",

    heroTitle:       "Construire. Automatiser. Clarifier.",
    heroLeadPrefix:  "J'aide les équipes avec ",
    heroPrimary:     "Discuter d'un projet",
    heroSecondary:   "Voir les services",
    heroStatus:      "DISPONIBLE POUR UN PROJET",

    servicesTitle:   "Capacités.",
    servicesLead:    "Chaque offre est conçue pour réduire le travail manuel, connecter les outils existants et livrer des systèmes maintenables.",
    serviceN8nTitle: "Automatisation n8n",
    serviceN8nText:  "Conception de workflows pour la gestion des leads, la synchronisation de données, les approbations et les opérations internes.",
    serviceAiTitle:  "Intégration IA",
    serviceAiText:   "Assistants IA, patterns RAG, traitement de documents, workflows de prompts et intégrations adaptées aux produits existants.",
    serviceEtlTitle: "ETL et entrepôt de données",
    serviceEtlText:  "Extraction, nettoyage, transformation, structures prêtes pour l'entrepôt, bases analytiques et tableaux de bord opérationnels.",
    serviceWebTitle: "Développement web",
    serviceWebText:  "Sites web responsive, interfaces frontend, services backend, APIs et expériences produit pratiques.",
    serviceAppTitle: "Développement d'applications",
    serviceAppText:  "Support d'applications mobiles et desktop, prototypes produit, outils de workflow et applications internes.",
    serviceDataTitle:"Science des données",
    serviceDataText: "Analyse exploratoire, prototypes ML, évaluation de modèles, tableaux de bord et décisions appuyées par des données structurées.",

    processTitle:    "Processus.",
    processStep0:    "diagnostiquer",
    processStep1:    "conception",
    processStep2:    "construction",
    processStep3:    "stabilisation",
    processDiagnose: "Cartographier le workflow actuel, les sources de données, les étapes manuelles, les contraintes et les critères de succès réels.",
    processDesign:   "Définir l'automatisation, le flux de données, les points de contact utilisateur, les chemins de repli et les attentes de livraison.",
    processBuild:    "Implémenter les workflows, intégrations, pipelines, interfaces et tableaux de bord avec des points de contrôle clairs.",
    processStabilize:"Tester les cas limites, documenter l'utilisation, préparer les notes de maintenance et rendre le système compréhensible.",

    proofTitle:      "Preuves de travail.",
    proofLead:       "Ces cadres sont prêts pour les captures d'écran, tableaux de bord et détails de cas d'étude. Cliquez sur un projet pour voir les détails.",
    projectTitle0:   "Fine-Tuning Llama 3",
    projectTag0:     "IA & Données",
    projectTitle1:   "Chatbot RAG",
    projectTag1:     "Intégration IA",
    projectTitle2:   "Agence Flashart",
    projectTag2:     "Développement Web",
    projectTitle3:   "Explora SARL",
    projectTag3:     "Développement Web",
    projectTitle4:   "Site Le Messager",
    projectTag4:     "Proposition UI/UX",
    projectTitle5:   "Okuko Fast-Food",
    projectTag5:     "Proposition UI/UX",
    projectTitle6:   "NSK Services",
    projectTag6:     "Développement Web",
    projectTitle7:   "Portfolio Interactif",
    projectTag7:     "Développement Web",
    projectTitle8:   "Bot Telegram Python",
    projectTag8:     "Automatisation",
    projectTitle9:   "Machine à Contenu",
    projectTag9:     "Automatisation",
    projectTitle10:  "Bot WhatsApp",
    projectTag10:    "Automatisation",
    showMoreProofs:  "Voir plus de projets",

    aboutTitle:      "À propos de moi.",
    aboutBioTitle:   "Architecture de flux automatisés et produits IA pratiques.",
    aboutBioText:    "Basé à Douala, Cameroun, je travaille comme concepteur d'automatisation IA et développeur de logiciels. J'aide les entreprises à éliminer les tâches manuelles répétitives, connecter les applications SaaS déconnectées, construire des systèmes d'analyse de données personnalisés et déployer des intégrations d'IA sur mesure pour répondre aux besoins réels de l'entreprise.",
    statYears:       "années d'expérience",
    statProjects:    "projets réalisés",
    statCommunity:   "membres de la communauté",
    statEducation:   "licence & bts",
    orbitTitle:      "Orbit SARL",
    orbitTextShort:  "Stagiaire IA & Logiciel - Intégration de modèles ML et d'outils d'entreprise.",
    codingHqTitle:   "Coding HQ",
    codingHqTextShort: "CTO & Co-fondateur - Formation en ingénierie, mentorat communautaire et projets web.",

    stackTitle:      "Stack.",
    stackAutomation: "Automatisation",
    stackAi:         "IA et données",
    stackWeb:        "Web et apps",
    stackTools:      "Outils",

    contactTitle:    "Construisons.",
    contactLead:     "Contactez-moi pour de l'automatisation, de l'intégration IA, de l'ETL, du développement web/app, de l'analyse de données ou des échanges recruteurs.",

    footerRights:    "Tous droits réservés.",
    footerLang:      "Switch to English",
    backToTop:       "Retour en haut ↑",
  },
};

/* Typewriter phrases */
const phrases = {
  en: [
    "n8n automation.",
    "AI integration.",
    "ETL pipelines.",
    "web development.",
    "data science.",
    "app development.",
  ],
  fr: [
    "l'automatisation n8n.",
    "l'intégration IA.",
    "les pipelines ETL.",
    "le développement web.",
    "la science des données.",
    "le développement mobile.",
  ],
};

/* ── STATE ───────────────────────────────────────────────── */
let currentLang    = "en";
let twIndex        = 0;
let twCharIndex    = 0;
let twIsDeleting   = false;
let twTimer        = null;

let activeProcessIndex = 0;
let activeModalProjectIndex = null;

/* ── LANGUAGE ────────────────────────────────────────────── */
function setLang(lang) {
  currentLang = lang;
  const data  = content[lang];

  // Update HTML lang attribute for screen readers & search engines
  try {
    document.documentElement.lang = lang;
  } catch (e) {}

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (data[key] !== undefined) el.textContent = data[key];
  });

  // lang-toggle button label
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.textContent = lang === "en" ? "FR" : "EN";
  });

  // If modal is active, reload active project content
  const modal = document.getElementById("project-modal");
  if (modal && modal.classList.contains("active") && activeModalProjectIndex !== null) {
    populateModal(activeModalProjectIndex, lang);
  }

  // Reset typewriter
  clearTimeout(twTimer);
  twIndex      = 0;
  twCharIndex  = 0;
  twIsDeleting = false;
  const tw = document.querySelector("[data-typewriter]");
  if (tw) tw.textContent = "";
  typewriterTick();

  // Save selection to localStorage
  try {
    localStorage.setItem("preferredLang", lang);
  } catch (e) {}

  // Update URL search parameter dynamically
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get("lang") !== lang) {
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    }
  } catch (e) {}
}

/* ── TYPEWRITER ──────────────────────────────────────────── */
function typewriterTick() {
  const tw      = document.querySelector("[data-typewriter]");
  if (!tw) return;

  const list    = phrases[currentLang];
  const current = list[twIndex % list.length];

  if (twIsDeleting) {
    tw.textContent = current.slice(0, --twCharIndex);
  } else {
    tw.textContent = current.slice(0, ++twCharIndex);
  }

  let delay = twIsDeleting ? 42 : 72;

  if (!twIsDeleting && twCharIndex === current.length) {
    delay = 1800;
    twIsDeleting = true;
  } else if (twIsDeleting && twCharIndex === 0) {
    twIsDeleting = false;
    twIndex++;
    delay = 420;
  }

  twTimer = setTimeout(typewriterTick, delay);
}

/* ── PRELOADER ───────────────────────────────────────────── */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const cube = document.getElementById("cube");
  const lid = document.getElementById("lid");
  const base = document.getElementById("base");

  if (!preloader || !cube || !lid || !base) return;

  const lid_coordinates = [
    // lid outline
    [[-3,3,3],[-3,-3,3],[3,-3,3],[3,3,3],[-3,3,3],[-3,3,1],[-3,-3,1],[3,-3,1],[3,-3,3]],
    // lid inner lines
    [[3,1,3],[-3,1,3],[-3,1,1]],
    [[3,-1,3],[-3,-1,3],[-3,-1,1]],
    [[-3,-3,3],[-3,-3,1]],
    [[-1,-3,1],[-1,-3,3],[-1,3,3]],
    [[1,-3,1],[1,-3,3],[1,3,3]]
  ];

  const base_coordinates = [
    [[-3,3,1],[3,3,1],[3,-3,1],[-3,-3,1],[-3,3,1],[-3,3,-3],[-3,-3,-3],[3,-3,-3],[3,-3,1]],
    [[1,-3,-3],[1,-3,1],[1,1,1],[-3,1,1],[-3,1,-3]],
    [[-1,-3,-3],[-1,-3,1],[-1,-1,1],[-3,-1,1],[-3,-1,-3]],
    [[-3,-3,-3],[-3,-3,1]],
    [[-3,3,-1],[-3,-3,-1],[3,-3,-1]]
  ];

  const u = 4; // size of the cube
  let t = 0; // time
  let running = true;

  function project(coordinatesGroup, t) {
    return coordinatesGroup.map(function (coordinatesSubGroup) {
      return coordinatesSubGroup.map(function (coordinates) {
        const x = coordinates[0];
        const y = coordinates[1];
        const z = coordinates[2];

        return [
          (x *  Math.cos(t) - y * Math.sin(t)) * u + 30,
          (x * -Math.sin(t) - y * Math.cos(t) - z * Math.sqrt(2)) * u / Math.sqrt(3) + 30
        ];
      });
    });
  }

  function toPath(coordinates) {
    return 'M' + (JSON
      .stringify(coordinates)
      .replace(/]],\[\[/g, 'M')
      .replace(/],\[/g, 'L')
      .slice(3, -3)
    );
  }

  function easing(t) {
    return (2 - Math.cos(Math.PI * t)) % 2 * Math.PI / 4;
  }

  function tick() {
    if (!running) return;
    t = (t + 1/30) % 3;
    cube.style.transform = 'rotate(' + (Math.floor(t) * 120) + 'deg)';
    lid.setAttribute('d', toPath(project(lid_coordinates, easing(t))));
    requestAnimationFrame(tick);
  }

  base.setAttribute('d', toPath(project(base_coordinates, Math.PI / 4)));
  tick();

  /* Dismiss after content loads */
  window.addEventListener("load", () => {
    setTimeout(() => {
      running = false;
      preloader.style.transition = "opacity 520ms ease";
      preloader.style.pointerEvents = "none";
      preloader.style.opacity    = "0";
      setTimeout(() => preloader.remove(), 540);
    }, 900);
  });
}

/* ── ASCII FIELD (canvas) ────────────────────────────────── */
function initCanvas() {
  const canvas = document.getElementById("ascii-field");
  if (!canvas) return;

  const ctx    = canvas.getContext("2d");
  const chars  = "10アイウエオカキクケコサシスセソタチツテトナニヌネノ@#$%&";

  let cols, rows, grid = [];
  let mouseX = -1, mouseY = -1;
  let raf;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.ceil(canvas.width  / 14);
    rows = Math.ceil(canvas.height / 20);
    grid = Array.from({ length: cols * rows }, () => ({
      char:  chars[Math.floor(Math.random() * chars.length)],
      alpha: Math.random() * 0.07 + 0.01,
      speed: Math.random() * 0.004 + 0.001,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouseX = -1; mouseY = -1;
  });

  function draw(ts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "12px 'JetBrains Mono', monospace";

    grid.forEach((cell, i) => {
      const col = (i % cols) * 14;
      const row = Math.floor(i / cols) * 20 + 14;

      cell.alpha = 0.015 + 0.055 * Math.abs(Math.sin(ts * cell.speed + cell.phase));

      const dx   = col - mouseX;
      const dy   = row - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const near = Math.max(0, 1 - dist / 160);

      /* Occasionally flip character */
      if (Math.random() < 0.0015) {
        cell.char = chars[Math.floor(Math.random() * chars.length)];
      }

      const alpha = near > 0.06
        ? cell.alpha + near * 0.38
        : cell.alpha;

      ctx.fillStyle = near > 0.06
        ? `rgba(77, 200, 212, ${alpha})`     /* teal near cursor */
        : `rgba(240, 237, 230, ${alpha})`;   /* warm white ambient */

      ctx.fillText(cell.char, col, row);
    });

    raf = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  raf = requestAnimationFrame(draw);
}

/* ── GSAP + SCROLL ───────────────────────────────────────── */
function initGsap() {
  if (typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({ delay: 1.05 });

  // ① Initialize background variables to clear state
  gsap.set(".hero", {
    "--hero-blur": 0,
    "--hero-scale": 1.0,
    "--hero-opacity": 1.0
  });

  // ② Animate background to acrylic blur
  tl.to(".hero", {
    "--hero-blur": 24,
    "--hero-scale": 1.08,
    "--hero-opacity": 0.8,
    duration: 1.8,
    ease: "power2.out"
  }, 0);

  // ③ Header entrance starts at 0.8s (during the blur transition)
  tl.from(".site-header", {
    y: -36,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
  }, 0.8);

  /* ④ Film-strip metadata bars fade in starting at 0.8s */
  tl.from(".hero-strip-top span, .hero-strip-bottom span", {
    opacity: 0,
    y: -6,
    duration: 0.55,
    stagger: 0.08,
    ease: "power2.out",
  }, 0.8);

  /* ⑤ Cinematic name lines — title-card slide-up reveal */
  tl.from(".hero-name-a, .hero-name-b", {
    y: "130%",
    duration: 1.25,
    stagger: 0.1,
    ease: "expo.out",
  }, "-=0.3");

  /* ⑥ Sub-copy: kicker, h1, lead, buttons */
  tl.from(".ascii-kicker, #hero-title, .hero-lead, .hero-actions", {
    y: 28,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: "power3.out",
  }, "-=0.8");

  /* ⑦ Hero ASCII canvas fades in */
  tl.from(".hero-ascii-canvas", {
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  }, "-=0.75");

  /* ⑧ Frame corners pop in */
  tl.from(".hero-corner", {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    stagger: 0.06,
    ease: "back.out(2)",
    transformOrigin: "center center",
  }, "-=0.7");

  /* Scroll-triggered section bands */
  gsap.utils.toArray(".section-band").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
      y: 32,
      opacity: 0,
      duration: 0.75,
      ease: "power2.out",
    });
  });
}

/* ── AOS ─────────────────────────────────────────────────── */
function initAos() {
  if (typeof AOS === "undefined") return;
  AOS.init({
    duration: 620,
    easing:   "ease-out-cubic",
    once:     true,
    offset:   60,
  });
}

/* ── NAV — scroll spy + mobile toggle ───────────────────── */
function initNav() {
  const header  = document.querySelector(".site-header");
  const toggle  = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");

  /* Mobile hamburger */
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const expanded = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", expanded);
    });

    /* Close on nav link click */
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* Scroll spy — highlight active section */
  const sections = Array.from(
    document.querySelectorAll("section[id], section.section-band[id]")
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((s) => observer.observe(s));

  /* Sticky header shadow and hero active state on scroll */
  const onScroll = () => {
    if (!header) return;

    if (window.scrollY < 12) {
      header.classList.add("at-top");
      header.style.boxShadow = "none";
    } else {
      header.classList.remove("at-top");
      header.style.boxShadow = "0 4px 32px oklch(0 0 0 / 0.6)";
    }

    const hero = document.querySelector(".hero");
    if (hero) {
      const heroHeight = hero.offsetHeight;
      if (window.scrollY < heroHeight - 80) {
        header.classList.add("on-hero");
      } else {
        header.classList.remove("on-hero");
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Run once on boot to set initial state
}

/* ── LANG TOGGLES ────────────────────────────────────────── */
function initLangToggle() {
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(currentLang === "en" ? "fr" : "en");
    });
  });
}

/* ── HERO ASCII BACKGROUND ── */
const HANDS_IMAGE_BASE64 = "data:image/jpeg;base64,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";

function initHeroAsciiBg() {
  const canvas = document.getElementById("hero-ascii-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const img = new Image();

  let imgLoaded = false;
  img.onload = () => {
    imgLoaded = true;
    resize();
  };
  img.src = HANDS_IMAGE_BASE64;

  const charMap = " .:-=+*#%@";
  const cellWidth = 7;
  const cellHeight = 11;
  const offscreen = document.createElement("canvas");
  const octx = offscreen.getContext("2d");

  let cols = 0, rows = 0;
  let mouseX = -9999, mouseY = -9999;
  let raf;
  let time = 0;

  function resize() {
    if (!imgLoaded) return;
    
    // Scale to match parent dimensions
    const rect = canvas.parentNode.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      cols = 0;
      rows = 0;
      return;
    }

    canvas.width = rect.width;
    canvas.height = rect.height;

    cols = Math.ceil(canvas.width / cellWidth);
    rows = Math.ceil(canvas.height / cellHeight);

    if (cols <= 0 || rows <= 0) return;

    offscreen.width = cols;
    offscreen.height = rows;

    // Draw background.jpg onto offscreen canvas with "cover" behavior
    const canvasAspect = cols / rows;
    const imgW = img.naturalWidth || 800;
    const imgH = img.naturalHeight || 450;
    const imgAspect = imgW / imgH;
    let sx = 0, sy = 0, sWidth = imgW, sHeight = imgH;

    if (imgAspect > canvasAspect) {
      sWidth = imgH * canvasAspect;
      sx = (imgW - sWidth) / 2;
    } else {
      sHeight = imgW / canvasAspect;
      sy = (imgH - sHeight) / 2;
    }

    try {
      octx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, cols, rows);
    } catch (e) {
      console.warn("Offscreen draw failed:", e);
    }
  }

  // Mouse move listener relative to hero parent
  const heroParent = canvas.parentNode;
  if (heroParent) {
    heroParent.addEventListener("mousemove", (e) => {
      const rect = heroParent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = x;
      mouseY = y;
      heroParent.style.setProperty("--mouse-x", x + "px");
      heroParent.style.setProperty("--mouse-y", y + "px");
    });

    heroParent.addEventListener("mouseleave", () => {
      mouseX = -9999;
      mouseY = -9999;
      heroParent.style.setProperty("--mouse-x", "-9999px");
      heroParent.style.setProperty("--mouse-y", "-9999px");
    });
  }

  function draw() {
    if (!imgLoaded) {
      raf = requestAnimationFrame(draw);
      return;
    }

    // Dynamic resize check to recover from 0-size boot layouts (e.g. preloader active)
    const rect = canvas.parentNode.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height || cols === 0 || rows === 0) {
      resize();
    }

    if (cols === 0 || rows === 0) {
      raf = requestAnimationFrame(draw);
      return;
    }

    time += 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 10px 'JetBrains Mono', monospace";
    ctx.textBaseline = "top";

    // Redraw offscreen to get fresh samples
    const canvasAspect = cols / rows;
    const imgW = img.naturalWidth || 800;
    const imgH = img.naturalHeight || 450;
    const imgAspect = imgW / imgH;
    let sx = 0, sy = 0, sWidth = imgW, sHeight = imgH;

    if (imgAspect > canvasAspect) {
      sWidth = imgH * canvasAspect;
      sx = (imgW - sWidth) / 2;
    } else {
      sHeight = imgW / canvasAspect;
      sy = (imgH - sHeight) / 2;
    }
    
    try {
      octx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, cols, rows);
    } catch (e) {
      raf = requestAnimationFrame(draw);
      return;
    }

    const imgData = octx.getImageData(0, 0, cols, rows);
    const pixels = imgData.data;

    // Distort and render ASCII characters
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // 1. Wave distortion: compute offsets using sine waves
        const waveX = Math.sin(r * 0.15 + time * 0.04) * 1.5;
        const waveY = Math.cos(c * 0.1 + time * 0.03) * 0.8;

        // 2. Mouse interaction coordinate displacement
        const cellX = c * cellWidth;
        const cellY = r * cellHeight;
        const dx = cellX - mouseX;
        const dy = cellY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxMouseDist = 160;
        let mouseFactor = 0;

        let pushX = 0;
        let pushY = 0;
        if (dist < maxMouseDist) {
          mouseFactor = 1 - dist / maxMouseDist;
          const angle = Math.atan2(dy, dx);
          // Push coordinates away from mouse slightly
          pushX = Math.cos(angle) * mouseFactor * 3.5;
          pushY = Math.sin(angle) * mouseFactor * 1.5;
        }

        // Horizontal line glitch: select rows randomly to shift
        let glitchShift = 0;
        if (Math.sin(r * 0.4 + time * 0.1) > 0.96) {
          glitchShift = Math.sin(time * 0.5) * 3;
        }

        const sampleC = Math.max(0, Math.min(cols - 1, Math.round(c + waveX + pushX + glitchShift)));
        const sampleR = Math.max(0, Math.min(rows - 1, Math.round(r + waveY + pushY)));

        // Read brightness (inverted: hands are dark on white background)
        const idx = (sampleR * cols + sampleC) * 4;
        const rVal = pixels[idx];
        const gVal = pixels[idx + 1];
        const bVal = pixels[idx + 2];
        let brightness = 1 - (0.299 * rVal + 0.587 * gVal + 0.114 * bVal) / 255;

        // Boost contrast & threshold out the bright background noise
        if (brightness < 0.12) {
          brightness = 0;
        } else {
          // Normalize and boost midtones
          brightness = (brightness - 0.12) / 0.88;
          brightness = Math.pow(brightness, 0.7);
        }

        // 3. Radial vignette: fade out the image at the edges to blend into background
        // Wider horizontal (0.85) and vertical (0.7) vignette spread for complete visibility
        const centerX = cols / 2;
        const centerY = rows * 0.55; // centered vertically
        const dc = c - centerX;
        const dr = r - centerY;
        const distCol = dc / (cols * 0.85);
        const distRow = dr / (rows * 0.7);
        const radialDist = Math.sqrt(distCol * distCol + distRow * distRow);
        const vignette = Math.max(0, 1 - radialDist);
        const smoothVignette = Math.pow(vignette, 0.8); // softer power to keep edges visible
        
        let finalBrightness = brightness * smoothVignette;

        if (mouseFactor > 0) {
          finalBrightness += mouseFactor * 0.35; // boost mouse highlighting
        }

        // Clip brightness
        finalBrightness = Math.max(0, Math.min(1, finalBrightness));

        if (finalBrightness < 0.05) continue; // draw more detail

        // Select character
        const charIdx = Math.floor(finalBrightness * (charMap.length - 1));
        const char = charMap[charIdx];

        // Color highlighting near cursor (transition from dark charcoal to dark teal)
        const alpha = 0.25 + finalBrightness * 0.75;
        if (mouseFactor > 0.2) {
          // Dark teal signature color near cursor: rgba(16, 124, 137, alpha)
          ctx.fillStyle = `rgba(16, 124, 137, ${alpha})`;
        } else {
          // Dark charcoal color: rgba(26, 26, 26, alpha)
          ctx.fillStyle = `rgba(26, 26, 26, ${alpha})`;
        }

        ctx.fillText(char, cellX, cellY);
      }
    }

    raf = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  raf = requestAnimationFrame(draw);
}

/* ── PROJECTS DATA ───────────────────────────────────────── */
const projectsData = [
  {
    en: {
      title: "Llama 3 Fine-Tuning",
      tag: "AI & Data",
      desc: "Fine-tuned the Llama 3 8B model using Unsloth and PyTorch for specialized domain tasks, optimizing VRAM efficiency and training speed."
    },
    fr: {
      title: "Fine-Tuning Llama 3",
      tag: "IA & Données",
      desc: "Fine-tuning du modèle Llama 3 8B à l'aide d'Unsloth et PyTorch pour des tâches spécialisées, optimisant l'efficacité de la VRAM et la vitesse d'entraînement."
    },
    tools: ["Python", "Unsloth", "PyTorch", "Hugging Face"],
    image: "assets/screenshots/-fine-tune-llama-3-8b-with-v0-sg5jl5r2xpcd1.webp"
  },
  {
    en: {
      title: "RAG Chatbot",
      tag: "AI Integration",
      desc: "Implemented a Retrieval-Augmented Generation (RAG) pipeline for a company chatbot using Mistral API and ChromaDB vector store."
    },
    fr: {
      title: "Chatbot RAG",
      tag: "Intégration IA",
      desc: "Implémentation d'un pipeline RAG (Génération augmentée par récupération) pour un chatbot d'entreprise avec Mistral LLM et la base vectorielle ChromaDB."
    },
    tools: ["Python", "ChromaDB", "Mistral API", "LangChain"],
    image: "assets/screenshots/RAG - system for a company chatbot.avif"
  },
  {
    en: {
      title: "Flashart Agency",
      tag: "Web Dev",
      desc: "Website for a creative agency. Developed with high-performance CSS/SCSS and Vanilla JS, including advanced SEO and speed optimization."
    },
    fr: {
      title: "Agence Flashart",
      tag: "Développement Web",
      desc: "Site web pour une agence créative développé avec SCSS et Vanilla JS. Intègre une optimisation avancée du SEO et du temps de chargement."
    },
    tools: ["HTML5", "SCSS", "JavaScript", "Tailwind CSS"],
    image: "assets/screenshots/Screenshot 2025-12-06 at 03-03-30 Flashart Creative Agency in Douala Cameroon.avif"
  },
  {
    en: {
      title: "Explora SARL",
      tag: "Web Dev",
      desc: "Website for a geotechnical studies company in Cameroon, providing clean layouts and contact forms. Link: explorasarl.com."
    },
    fr: {
      title: "Explora SARL",
      tag: "Développement Web",
      desc: "Site d'entreprise pour une société d'études géotechniques au Cameroun, avec une présentation épurée et des formulaires de contact. Lien : explorasarl.com."
    },
    tools: ["HTML5", "CSS", "JavaScript", "Tailwind CSS"],
    image: "assets/screenshots/Screenshot 2025-12-06 at 03-03-48 Explora - Fondations Sûres.avif"
  },
  {
    en: {
      title: "Le Messager Website",
      tag: "UI/UX Proposal",
      desc: "A frontend proposal design for Restaurant Le Messager in Douala, highlighting menus and reservations."
    },
    fr: {
      title: "Site Le Messager",
      tag: "Proposition UI/UX",
      desc: "Proposition de design frontend pour le Restaurant Le Messager à Douala, mettant en valeur les menus et le système de réservation."
    },
    tools: ["HTML5", "CSS", "JavaScript", "Tailwind CSS"],
    image: "assets/screenshots/Screenshot 2026-01-13 at 15-56-45 Restaurant Le Messager.avif"
  },
  {
    en: {
      title: "Okuko Fast-Food",
      tag: "UI/UX Proposal",
      desc: "Modern digital restaurant concept website proposal designed for Okuko Fast-Food in Douala, Cameroon."
    },
    fr: {
      title: "Okuko Fast-Food",
      tag: "Proposition UI/UX",
      desc: "Proposition de site internet moderne pour la restauration rapide Okuko Fast-Food à Douala, Cameroun."
    },
    tools: ["HTML5", "CSS", "JavaScript", "Tailwind CSS"],
    image: "assets/screenshots/Screenshot 2026-01-14 at 13-38-55 Okuko Fast-Food Good-Food Camerounais.avif"
  },
  {
    en: {
      title: "NSK Services",
      tag: "Web Dev",
      desc: "Web design proposal for NSK Services, a renovation and construction management supervisor in Cameroon. Hosted at nsk-services.netlify.app."
    },
    fr: {
      title: "NSK Services",
      tag: "Développement Web",
      desc: "Proposition de site pour NSK Services, superviseur de travaux de construction et rénovation au Cameroun. Hébergé sur nsk-services.netlify.app."
    },
    tools: ["HTML5", "CSS", "JavaScript", "Tailwind CSS"],
    image: "assets/screenshots/Screenshot 2026-06-10 at 10-46-18 NSK Service Construction supervision renovation et au Cameroun.avif"
  },
  {
    en: {
      title: "Portfolio Site",
      tag: "Web Dev",
      desc: "Dynamic portfolio site displaying capabilities, rotating circular process steps, and dynamic modal overlays for case studies."
    },
    fr: {
      title: "Portfolio Interactif",
      tag: "Développement Web",
      desc: "Site de portfolio dynamique présentant mes compétences, des étapes de processus circulaires interactives et des études de cas."
    },
    tools: ["HTML5", "CSS", "JavaScript", "GSAP", "AOS"],
    image: "assets/screenshots/Screenshot 2026-06-10 at 10-48-35 Nonagni David · AI Automation Builder.avif"
  },
  {
    en: {
      title: "Telegram Bot",
      tag: "Automation",
      desc: "A custom automated Telegram assistant built with python-telegram-bot for alerts and communications."
    },
    fr: {
      title: "Bot Telegram Python",
      tag: "Automatisation",
      desc: "Un assistant Telegram automatisé personnalisé conçu avec python-telegram-bot pour les alertes et les communications."
    },
    tools: ["Python", "python-telegram-bot"],
    image: "assets/screenshots/Telegram-bot-python.png"
  },
  {
    en: {
      title: "Content Machine",
      tag: "Automation",
      desc: "An automated social media content creation and publishing workflow built with n8n and AI tools."
    },
    fr: {
      title: "Machine à Contenu",
      tag: "Automatisation",
      desc: "Un flux de création et publication de contenu automatisé pour les réseaux sociaux développé avec n8n et l'IA."
    },
    tools: ["n8n", "OpenAI API", "Airtable"],
    image: "assets/screenshots/i-built-a-fully-automated-social-media-content-machine-that-v0-azb35unr1bre1.webp"
  },
  {
    en: {
      title: "WhatsApp Bot",
      tag: "Automation",
      desc: "A custom automated business chatbot assistant built for WhatsApp with Python."
    },
    fr: {
      title: "Bot WhatsApp",
      tag: "Automatisation",
      desc: "Un assistant chatbot professionnel automatisé conçu pour WhatsApp en Python."
    },
    tools: ["Python", "Twilio API", "OpenAI"],
    image: "assets/screenshots/portada_como_poner_un_bot_en_whatsapp.webp"
  }
];

/* ── MODAL UTILITIES ─────────────────────────────────────── */
function populateModal(idx, lang) {
  const body = document.getElementById("modal-body");
  if (!body) return;

  const project = projectsData[idx];
  const pData = project[lang];
  const toolsMarkup = project.tools.map(t => `<li>${t}</li>`).join("");

  body.innerHTML = `
    <div class="modal-img-container">
      <img src="${project.image}" alt="${pData.title}" />
    </div>
    <div class="modal-meta">
      <span class="modal-tag">${pData.tag}</span>
      <ul class="modal-tools-list">
        ${toolsMarkup}
      </ul>
    </div>
    <h3 class="modal-title">${pData.title}</h3>
    <p class="modal-desc">${pData.desc}</p>
  `;
}

function openModal(idx) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  activeModalProjectIndex = idx;
  populateModal(idx, currentLang);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeModalProjectIndex = null;
}

/* ── PROCESS CAROUSEL ────────────────────────────────────── */
let processAutoplayTimer = null;
const AUTOPLAY_INTERVAL = 6000; // 6 seconds

function startProcessAutoplay() {
  stopProcessAutoplay();
  processAutoplayTimer = setInterval(() => {
    let nextIdx = (activeProcessIndex + 1) % 4;
    setActiveProcess(nextIdx);
  }, AUTOPLAY_INTERVAL);
}

function stopProcessAutoplay() {
  if (processAutoplayTimer) {
    clearInterval(processAutoplayTimer);
    processAutoplayTimer = null;
  }
}

function setActiveProcess(index) {
  activeProcessIndex = index;

  const nodes = document.querySelectorAll(".process-wheel-node");
  nodes.forEach((node, idx) => {
    node.classList.toggle("active", idx === index);
  });

  const rotationAngle = -90 * index;
  const wheel = document.getElementById("process-wheel");
  if (wheel) {
    wheel.style.setProperty("--rotation-angle", `${rotationAngle}deg`);
    nodes.forEach((node) => {
      node.style.setProperty("--rotation-angle", `${rotationAngle}deg`);
    });
  }

  // Update text panel
  const titleEl = document.getElementById("process-step-title");
  const textEl = document.getElementById("process-step-text");
  const numEl = document.getElementById("process-step-num");

  const prefix = `processStep${index}`;
  const descKey = `process${["Diagnose", "Design", "Build", "Stabilize"][index]}`;

  if (titleEl && textEl && numEl) {
    numEl.textContent = `0${index + 1}`;

    if (typeof gsap !== "undefined") {
      gsap.to([titleEl, textEl], {
        opacity: 0,
        y: -10,
        duration: 0.2,
        onComplete: () => {
          titleEl.textContent = content[currentLang][prefix] || "";
          textEl.textContent = content[currentLang][descKey] || "";
          titleEl.setAttribute("data-i18n", prefix);
          textEl.setAttribute("data-i18n", descKey);

          gsap.to([titleEl, textEl], {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    } else {
      titleEl.textContent = content[currentLang][prefix] || "";
      textEl.textContent = content[currentLang][descKey] || "";
      titleEl.setAttribute("data-i18n", prefix);
      textEl.setAttribute("data-i18n", descKey);
    }
  }
}

function initProcessCarousel() {
  const nodes = document.querySelectorAll(".process-wheel-node");
  nodes.forEach((node, idx) => {
    node.addEventListener("click", () => {
      setActiveProcess(idx);
      startProcessAutoplay(); // Reset timer on manual click
    });
  });

  const prevBtn = document.getElementById("process-prev");
  const nextBtn = document.getElementById("process-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      let nextIdx = activeProcessIndex - 1;
      if (nextIdx < 0) nextIdx = 3;
      setActiveProcess(nextIdx);
      startProcessAutoplay(); // Reset timer on manual click
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      let nextIdx = activeProcessIndex + 1;
      if (nextIdx > 3) nextIdx = 0;
      setActiveProcess(nextIdx);
      startProcessAutoplay(); // Reset timer on manual click
    });
  }

  // Hover pauses autoplay, leaving resumes autoplay
  const container = document.querySelector(".process-carousel-container");
  if (container) {
    container.addEventListener("mouseenter", stopProcessAutoplay);
    container.addEventListener("mouseleave", startProcessAutoplay);
  }

  // Start autoplay initially
  startProcessAutoplay();
}

/* ── PROJECT MODAL ───────────────────────────────────────── */
function initProjectModal() {
  const cards = document.querySelectorAll(".proof-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-project-idx"));
      if (!isNaN(idx)) openModal(idx);
    });
  });

  const closeBtn = document.getElementById("modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  const overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.getElementById("project-modal");
      if (modal && modal.classList.contains("active")) {
        closeModal();
      }
    }
  });
}

/* ── SHOW MORE PROOFS ────────────────────────────────────── */
function initShowMoreProofs() {
  const showMoreBtn = document.getElementById("show-more-proofs");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      const hiddenCards = document.querySelectorAll(".proof-card.hidden");
      hiddenCards.forEach((card) => {
        card.classList.remove("hidden");
      });
      showMoreBtn.style.display = "none";
      if (typeof AOS !== "undefined") {
        AOS.refresh();
      }
    });
  }
}

/* ── BOOT ────────────────────────────────────────────────── */
(function init() {
  initPreloader();
  initCanvas();
  initHeroAsciiBg();
  initAos();
  initNav();
  initLangToggle();
  initProcessCarousel();
  initProjectModal();
  initShowMoreProofs();

  // Resolve language selection on load
  let initialLang = "fr";
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'fr' || langParam === 'en') {
      initialLang = langParam;
    } else {
      const savedLang = localStorage.getItem("preferredLang");
      if (savedLang === 'fr' || savedLang === 'en') {
        initialLang = savedLang;
      } else {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.startsWith("en")) {
          initialLang = "en";
        }
      }
    }
  } catch (e) {
    initialLang = "fr";
  }
  setLang(initialLang);

  /* GSAP fires after preloader clears */
  const preloader = document.getElementById("preloader");
  if (preloader) {
    const waitForLoad = () => {
      setTimeout(initGsap, 960);
    };
    if (document.readyState === "complete") {
      waitForLoad();
    } else {
      window.addEventListener("load", waitForLoad);
    }
  } else {
    initGsap();
  }
})();
