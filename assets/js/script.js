/* ═══════════════════════════════════════════════════════════
   NONAGNI DAVID — PORTFOLIO  ·  script.js
   Sections: i18n · Preloader · Canvas · GSAP · Nav
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


/* Portfolio v2 copy. Hero translations remain unchanged. */
Object.assign(content.en, {"navProof": "Work", "v2NavAbout": "About", "v2Intro": "I build tools that take repetitive work off your team's hands.", "v2Service1": "Automation & AI", "v2Service1Text": "Connect your tools, automate recurring tasks, and build assistants that work with your data.", "v2Service2": "Web & applications", "v2Service2Text": "Websites, interfaces, and custom tools, built around how people use them.", "v2Service3": "Data & analytics", "v2Service3Text": "Bring scattered data together in pipelines, dashboards, and machine learning models.", "v2Work": "Selected work.", "v2Project2": "Website for a creative agency in Douala.", "v2Project1": "A company chatbot with document retrieval.", "v2Project9": "Social content creation and publishing with n8n.", "v2Archive": "More projects", "v2Location": "Douala, Cameroon", "v2About": "Behind the work.", "v2Bio": "I'm David, a software developer and AI automation builder based in Douala. I build workflows, websites, and data tools for businesses.", "v2Approach": "We start with how your team works today. Then I build, test, and document the tools you'll use next.", "v2Contact": "Have a project?", "v2ContactText": "Tell me what you're working on and where you need a hand."});
Object.assign(content.fr, {"navProof": "Projets", "v2NavAbout": "À propos", "v2Intro": "Des outils pour automatiser les tâches qui occupent vos journées.", "v2Service1": "Automatisation & IA", "v2Service1Text": "Connecter vos outils, automatiser les tâches récurrentes et créer des assistants qui utilisent vos données.", "v2Service2": "Web & applications", "v2Service2Text": "Des sites, des interfaces et des outils sur mesure, conçus pour leurs utilisateurs.", "v2Service3": "Données & analyse", "v2Service3Text": "Rassembler vos données dans des pipelines, des tableaux de bord et des modèles d'apprentissage automatique.", "v2Work": "Projets choisis.", "v2Project2": "Site web pour une agence créative à Douala.", "v2Project1": "Un chatbot d'entreprise qui consulte ses documents.", "v2Project9": "Création et publication de contenu social avec n8n.", "v2Archive": "Autres projets", "v2Location": "Douala, Cameroun", "v2About": "Derrière les projets.", "v2Bio": "Moi, c'est David. Développeur logiciel et créateur d'automatisations IA à Douala, je construis des workflows, des sites et des outils de données pour les entreprises.", "v2Approach": "On part du fonctionnement actuel de votre équipe. Je développe ensuite vos outils, les teste et prépare leur documentation.", "v2Contact": "Un projet en tête ?", "v2ContactText": "Parlez-moi de votre projet et de ce dont vous avez besoin."});

Object.assign(content.en, {"v2Step1": "Understand", "v2Step1Text": "Map your workflow and agree on what needs to change.", "v2Step2": "Plan", "v2Step2Text": "Choose the tools, define the scope, and walk through the approach together.", "v2Step3": "Build", "v2Step3Text": "Develop the system and share working versions for your feedback.", "v2Step4": "Hand over", "v2Step4Text": "Test real scenarios, document the setup, and show your team how to use it."});
Object.assign(content.fr, {"v2Step1": "Comprendre", "v2Step1Text": "Examiner votre fonctionnement et définir ce qui doit changer.", "v2Step2": "Préparer", "v2Step2Text": "Choisir les outils, délimiter le projet et valider l'approche ensemble.", "v2Step3": "Développer", "v2Step3Text": "Construire le système et partager des versions fonctionnelles pour recueillir vos retours.", "v2Step4": "Transmettre", "v2Step4Text": "Tester des cas réels, documenter la configuration et former votre équipe à l'utilisation."});

Object.assign(content.en, {"v2ServicesHeading": "What I build.", "v2StackLead": "The tools I use to build, connect, and ship."});
Object.assign(content.fr, {"v2ServicesHeading": "Ce que je crée.", "v2StackLead": "Mes outils pour développer, connecter et livrer."});


Object.assign(content.en, {v2ServicesHeading: 'Services.', v2Work: 'Projects.', v2About: 'About.', v2Bio: 'I build AI tools, automations, and software for teams that need their systems to do more of the work.', v2Approach: 'That includes AI assistants, connected workflows, websites, mobile apps, and internal tools.', v2StackLead: 'The tools I use for AI, automation, web, and app development.'});
Object.assign(content.fr, {v2ServicesHeading: 'Services.', v2Work: 'Projets.', v2About: 'À propos.', v2Bio: 'Je crée des outils IA, des automatisations et des logiciels pour les équipes qui veulent que leurs systèmes prennent en charge une plus grande partie du travail.', v2Approach: 'Cela inclut des assistants IA, des workflows connectés, des sites web, des applications mobiles et des outils internes.', v2StackLead: 'Mes outils pour l’IA, l’automatisation, le web et le développement d’applications.'});

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

let activeModalProjectIndex = null;
let modalTrigger = null;

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
    btn.setAttribute("aria-label", lang === "en" ? "FR - switch to French" : "EN - switch to English");
  });

  // If modal is active, reload active project content
  const modal = document.getElementById("project-modal");
  if (modal && modal.classList.contains("active") && activeModalProjectIndex !== null) {
    populateModal(activeModalProjectIndex, lang);
  }

  document.getElementById("modal-close").setAttribute("aria-label", lang === "fr" ? "Fermer le projet" : "Close project");

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

  /* Let images finish loading after the page becomes visible. */
  const dismiss = () => {
    setTimeout(() => {
      running = false;
      preloader.style.transition = "opacity 360ms ease";
      preloader.style.pointerEvents = "none";
      preloader.style.opacity = "0";
      setTimeout(() => preloader.remove(), 380);
    }, 150);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", dismiss, { once: true });
  } else {
    dismiss();
  }
}

/* ── GSAP + SCROLL ───────────────────────────────────────── */
function initGsap() {
  if (typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  // Keep the final acrylic background without repainting a full-screen blur each frame.

  // Header entrance
  tl.from(".site-header", {
    y: -36,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
  }, 0);

  /* Film-strip metadata bars fade in */
  tl.from(".hero-strip-top span, .hero-strip-bottom span", {
    opacity: 0,
    y: -6,
    duration: 0.35,
    stagger: 0.08,
    ease: "power2.out",
  }, 0.05);

  /* Cinematic name lines — title-card slide-up reveal */
  tl.from(".hero-name-a, .hero-name-b", {
    y: "130%",
    duration: 0.65,
    stagger: 0.1,
    ease: "expo.out",
  }, 0.05);

  /* Sub-copy: kicker, h1, lead, buttons */
  tl.from(".ascii-kicker, #hero-title, .hero-lead, .hero-actions", {
    y: 28,
    opacity: 0,
    duration: 0.45,
    stagger: 0.1,
    ease: "power3.out",
  }, 0.25);

  /* Frame corners pop in */
  tl.from(".hero-corner", {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    stagger: 0.06,
    ease: "back.out(2)",
    transformOrigin: "center center",
  }, 0.4);

  /* Scroll-triggered section bands */
  gsap.utils.toArray(".section-band:not(.hero)").forEach((section) => {
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
      desc: "A website for a creative agency in Douala, built with HTML, SCSS, and JavaScript."
    },
    fr: {
      title: "Agence Flashart",
      tag: "Développement Web",
      desc: "Un site pour une agence créative à Douala, développé en HTML, SCSS et JavaScript."
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
      desc: "An earlier version of this portfolio, with an animated hero and project details in overlays."
    },
    fr: {
      title: "Portfolio Interactif",
      tag: "Développement Web",
      desc: "Une version précédente de ce portfolio, avec un accueil animé et des fiches de projets."
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
    <h3 class="modal-title" id="modal-project-title">${pData.title}</h3>
    <p class="modal-desc">${pData.desc}</p>
  `;
}

function openModal(idx) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modalTrigger = document.activeElement;
  modal.inert = false;
  document.querySelector(".v2").inert = true;
  document.querySelector(".hero").inert = true;
  document.querySelector(".site-header").inert = true;
  activeModalProjectIndex = idx;
  populateModal(idx, currentLang);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeModalProjectIndex = null;
  modal.inert = true;
  document.querySelector(".v2").inert = false;
  document.querySelector(".hero").inert = false;
  document.querySelector(".site-header").inert = false;
  modalTrigger?.focus();
}

function initProjectModal() {
  const cards = document.querySelectorAll("[data-project-idx]");
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
    if (e.key === "Tab" && activeModalProjectIndex !== null) {
      e.preventDefault();
      document.getElementById("modal-close").focus();
    }
    if (e.key === "Escape") {
      const modal = document.getElementById("project-modal");
      if (modal && modal.classList.contains("active")) {
        closeModal();
      }
    }
  });
}

/* ── BOOT ────────────────────────────────────────────────── */
(function init() {
  initPreloader();
  initNav();
  initLangToggle();
  initProjectModal();

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

  /* Start the entrance once layout is ready, independent of late image requests. */
  requestAnimationFrame(initGsap);
})();

/* Short scene entrances; content remains visible if animation is unavailable. */
function initV2Scenes() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({target, isIntersecting}) => {
      if (!isIntersecting) return;
      target.animate([
        { opacity: 0.25, transform: 'translateY(24px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 750, easing: 'cubic-bezier(.22,1,.36,1)' });
      observer.unobserve(target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.v2-project, .v2-stack-group, .v2-steps li, .v2-portrait').forEach(el => observer.observe(el));
}
initV2Scenes();
