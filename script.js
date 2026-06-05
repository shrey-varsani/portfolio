// --- Data ---
const PROJECTS = [
  {
    id: 1,
    title: "Online Exam System",
    description:
      "A secure and scalable platform for digital examinations. Features include automated proctoring using computer vision, dynamic question generation, and real-time performance analytics.",
    longDescription:
      "A comprehensive digital assessment platform designed for educational institutions. The system includes a sophisticated examiner dashboard for exam creation and live monitoring, and a secure taker interface. It implements automated grading for various question types and generates detailed analytics reports for performance evaluation. Built with high security in mind to prevent unfair practices during online exams.",
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    category: "Web App",
    link: "https://onlineexamsystem-jdbg.onrender.com/",
    githubRepo: "https://github.com/shrey-varsani/onlineExamSystem.git",
    image: "online_exam.png",
    extraImages: ["input_file_2.png"],
  },
  {
    id: 2,
    title: "Custom Email Server & Client",
    description:
      "A full-stack email solution featuring a custom SMTP server implementation and a modern, encrypted web interface. Includes real-time notifications via WebSockets and advanced filtering.",
    longDescription:
      "An end-to-end email ecosystem comprising a custom-built SMTP server and a feature-rich web client. The server handles mail delivery and receipt with TLS encryption support. The React-based client provides a seamless UX for managing emails, with real-time updates for new incoming mail. This project demonstrates deep understanding of network protocols, security, and full-stack integration.",
    tech: ["SMTP", "React", "Node.js", "WebSockets"],
    category: "Full-Stack",
    link: "#",
    githubRepo: "https://github.com/shrey-varsani/custom-email-system",
    image: "mail_server.png",
    extraImages: ["input_file_1.png"],
  },
  {
    id: 3,
    title: "Offline Peer-to-Peer Encrypted Messaging System",
    description:
      "A decentralized messaging platform that works over local networks without internet access. Uses end-to-end encryption and automatic peer discovery.",
    longDescription:
      "This project is a decentralized, serverless messaging application designed for resilient communication in offline environments. It leverages P2P networking protocols to discover peers on a local network (LAN) and establishes secure, encrypted channels for real-time chat. The system implements Signal-protocol-inspired Axolotl Ratchet for forward secrecy and uses multi-cast DNS for zero-config service discovery. Perfect for emergency situations or private local collaborations.",
    tech: [
      "Golang",
      "Node.js",
      "WebRTC",
      "React",
      "Multicast DNS",
      "libsodium",
    ],
    category: "Security",
    link: "#",
    githubRepo: "https://github.com/shrey-varsani/p2p-networking.git",
    image: "p2p_messaging.png",
    extraImages: ["input_file_3.png"],
  },
  {
    id: 4,
    title: "Data Structures & Algorithms Repository",
    description:
      "A comprehensive collection of Data Structures and Algorithms implementations and interview-focused coding problems. Features topic-wise organization, optimized solutions, and complexity analysis for efficient learning and preparation.",
    longDescription:
      "A structured repository covering fundamental and advanced Data Structures and Algorithms concepts, including Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Binary Search Trees, Heaps, Graphs, Dynamic Programming, Greedy Algorithms, Backtracking, Tries, and more. The repository contains solutions to important coding interview questions with optimized approaches, detailed explanations, and time-space complexity analysis. Designed as both a learning resource and a practical reference for technical interview preparation, competitive programming, and problem-solving skill development.",
    tech: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
    category: "Educational Resource",
    link: "#",
    githubRepo: "https://github.com/shrey-varsani/DSA.git",
    image: "DSA.png",
    extraImages: [],
  },
];

const SKILLS = [
  { name: "Java", level: 90 },
  { name: "Spring Boot", level: 85 },
  { name: "React", level: 92 },
  { name: "JavaScript", level: 95 },
  { name: "MySQL", level: 80 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Git/GitHub", level: 85 },
];

// --- State Management ---
let currentCategory = "All";
let currentSearchQuery = "";

// --- initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons first so they are available for other functions
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  initTheme();
  initMobileMenu();
  initNavbarScroll();
  initSmoothScroll();
  initActiveScrollHighlight();
  renderProjects();
  initProjectFilters();
  initProjectSearch();
  initProjectModal();
  initSkillAnimations();
  initScrollToTop();
  initContactForm();
  initResumeButtons();
});

// --- Theme Management ---
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

  function setTheme(isDark) {
    // Query icons dynamically because Lucide might recreate them from <i> to <svg> multiple times
    const sunIcons = document.querySelectorAll(".sun-icon, #sun-icon");
    const moonIcons = document.querySelectorAll(".moon-icon, #moon-icon");

    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      sunIcons.forEach((icon) => icon.classList.remove("hidden"));
      moonIcons.forEach((icon) => icon.classList.add("hidden"));
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      sunIcons.forEach((icon) => icon.classList.add("hidden"));
      moonIcons.forEach((icon) => icon.classList.remove("hidden"));
      localStorage.setItem("theme", "light");
    }
  }

  // Initial check
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const isDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
  setTheme(isDark);

  const toggleHandler = () => {
    const currentlyDark = document.documentElement.classList.contains("dark");
    setTheme(!currentlyDark);
  };

  if (themeToggle) themeToggle.addEventListener("click", toggleHandler);
  if (mobileThemeToggle)
    mobileThemeToggle.addEventListener("click", toggleHandler);
}

// --- Resume Buttons ---
function initResumeButtons() {
  const viewBtn = document.getElementById("view-resume");
  const downloadBtn = document.getElementById("download-resume");

  // For portfolio demo, we can use a generic placeholder PDF or just a link to a resource
  // Replacing with actual links if available, otherwise using placeholder behavior
  const resumeUrl = "files/shrey_resume.pdf";

  if (viewBtn) {
    viewBtn.href = resumeUrl;
    viewBtn.addEventListener("click", (e) => {
      // Optional: log analytics or add additional feedback
      console.log("Viewing resume...");
    });
  }

  if (downloadBtn) {
    downloadBtn.href = resumeUrl;
    downloadBtn.addEventListener("click", (e) => {
      // Optional: log analytics or add additional feedback
      console.log("Downloading resume...");
    });
  }
}

// --- Mobile Menu ---
function initMobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = menuBtn.querySelector(".menu-icon");
  const closeIcon = menuBtn.querySelector(".close-icon");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Close menu on link click
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });
}

// --- Navbar Scroll ---
function initNavbarScroll() {
  const nav = document.querySelector("nav");
  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check
}

// --- Smooth Scroll with Offset ---
function initSmoothScroll() {
  const nav = document.querySelector("nav");

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();

        // Recalculate nav height in case it changed (scrolled vs not)
        const navHeight = nav.offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update URL hash without jumping
        history.pushState(null, null, href);
      }
    });
  });
}

// --- Active Section Highlighting ---
function initActiveScrollHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, #mobile-menu a");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px", // Adjusted to trigger when section is in the upper middle
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  // Special case for top of page
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY < 100) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#about",
          );
        });
      }
    },
    { passive: true },
  );
}

// --- Project Rendering & Filtering ---
function renderProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";

  const filtered = PROJECTS.filter((project) => {
    const matchesCategory =
      currentCategory === "All" ||
      project.category === currentCategory ||
      project.tech.includes(currentCategory);

    const matchesSearch =
      project.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(currentSearchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
            <div class="animate-slide-up" style="grid-column: 1 / -1; padding: 5rem 0; text-align: center;">
                <div class="icon-btn" style="width: 5rem; height: 5rem; margin: 0 auto 1.5rem; background-color: var(--dim); border: none; cursor: default;">
                    <i data-lucide="search" size="32"></i>
                </div>
                <h3 class="text-xl font-display font-medium" style="margin-bottom: 0.5rem">No projects found</h3>
                <p class="text-secondary text-sm">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
        `;
    // Initialize Lucide for the empty state icon
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
    return;
  }

  filtered.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card opacity-0 animate-slide-up cursor-pointer";
    card.style.animationDelay = `${index * 50}ms`;
    card.setAttribute("data-id", project.id);
    card.innerHTML = `
            <div class="project-thumbnail">
                <img src="${project.image}" alt="${project.title}" referrerPolicy="no-referrer">
            </div>
            <div class="project-body">
                <div class="project-tags">
                    ${project.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
                </div>
                <h3 class="project-title"><span class="project-title-link">${project.title}</span></h3>
                <p class="project-desc line-clamp-2">${project.description}</p>
                <div class="project-footer">
                    <span class="case-study-link">
                        View Details <i data-lucide="external-link" size="12"></i>
                    </span>
                    <span class="project-category">${project.category}</span>
                </div>
            </div>
        `;

    card.addEventListener("click", () => {
      window.location.hash = `project-${project.id}`;
    });
    container.appendChild(card);
  });

  // Re-initialize Lucide for the newly added project cards
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// --- Project Modal & Routing ---
function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    window.location.hash = "";
    window.location.hash = "projects";
  });

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) window.location.hash = "";
    if (e.target === modal) window.location.hash = "projects";
  });

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      window.location.hash = "";
      window.location.hash = "projects";
    }
  });

  // Handle initial hash on load
  handleHashChange();

  // Listen for hash changes
  window.addEventListener("hashchange", handleHashChange);
}

function handleHashChange() {
  const hash = window.location.hash;
  if (hash.startsWith("#project-")) {
    const projectId = parseInt(hash.replace("#project-", ""));
    openProjectModal(projectId);
  } else {
    closeProjectModal();
  }
}

function openProjectModal(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
        <div class="modal-content-inner">
            <div class="modal-image-gallery">
                <div class="main-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="modal-main-image">
                </div>
                ${
                  project.extraImages && project.extraImages.length > 1
                    ? `
                    <div class="extra-images-grid">
                        ${project.extraImages.map((img) => `<img src="${img}" class="extra-image" onclick="document.querySelector('.modal-main-image').src='${img}'">`).join("")}
                    </div>
                `
                    : ""
                }
            </div>
            
            <div class="modal-details">
                <div class="modal-header">
                    <div class="project-tags">
                        ${project.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
                    </div>
                    <h2 class="modal-title">${project.title}</h2>
                </div>
                
                <div class="modal-description">
                    <p class="long-desc">${project.longDescription}</p>
                </div>
                
                <div class="modal-actions">
                    ${
                      project.link && project.link !== "#"
                        ? `
                        <a href="${project.link}" target="_blank" class="btn-primary-small flex-center gap-2">
                             Live Demo <i data-lucide="external-link" size="16"></i>
                        </a>
                    `
                        : ""
                    }
                    <a href="${project.githubRepo}" target="_blank" class="resume-btn resume-btn-outline group flex-center gap-2">
                        View Repository <i data-lucide="github" size="16"></i>
                    </a>
                </div>
            </div>
        </div>
    `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent scrolling

  // Re-initialize Lucide for modal content
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = ""; // Restore scrolling
}

function initProjectFilters() {
  const filters = document.getElementById("project-filters");
  const techs = ["All", ...new Set(PROJECTS.flatMap((p) => p.tech))];

  filters.innerHTML = techs
    .map(
      (tech) => `
        <button class="filter-btn ${tech === currentCategory ? "active" : ""}" data-category="${tech}">${tech}</button>
    `,
    )
    .join("");

  filters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      document
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.dataset.category;
      renderProjects();
    }
  });

  filters.addEventListener("keydown", (e) => {
    if (!e.target.classList.contains("filter-btn")) return;

    const btns = Array.from(filters.querySelectorAll(".filter-btn"));
    const index = btns.indexOf(e.target);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % btns.length;
      btns[nextIndex].focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + btns.length) % btns.length;
      btns[prevIndex].focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      btns[0].focus();
    } else if (e.key === "End") {
      e.preventDefault();
      btns[btns.length - 1].focus();
    }
  });
}

function initProjectSearch() {
  const searchInput = document.getElementById("project-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value;
    renderProjects();
  });
}

// --- Skill Animations ---
function initSkillAnimations() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = SKILLS.map(
    (skill, index) => `
        <div class="skill-item opacity-0 transform translate-y-4 transition-all duration-700" style="transition-delay: ${index * 100}ms">
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar-bg">
                <div class="skill-progress" 
                     data-level="${skill.level}"
                     style="box-shadow: 0 0 10px var(--primary-rgba);"></div>
            </div>
        </div>
    `,
  ).join("");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".skill-item");
          items.forEach((item, idx) => {
            item.classList.remove("opacity-0", "translate-y-4");
            const bar = item.querySelector(".skill-progress");
            // Small delay to let the item animation start first
            setTimeout(
              () => {
                bar.style.width = `${bar.dataset.level}%`;
              },
              idx * 100 + 300,
            );
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  observer.observe(container);
}

// --- Scroll To Top ---
function initScrollToTop() {
  const btn = document.getElementById("scroll-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Contact Form Validation & Submission ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const btn = form.querySelector(".btn-submit");
  const originalBtnContent = btn.innerHTML;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (data.name.trim().length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    btn.disabled = true;
    btn.classList.add("is-loading");
    btn.innerHTML = `
      <div class="spinner"></div>
      <span>Sending...</span>
    `;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        btn.classList.remove("is-loading");
        btn.classList.add("is-success");
        btn.innerHTML = `
          <i data-lucide="check" size="20"></i>
          <span>Thanks for your message!</span>
        `;

        if (typeof lucide !== "undefined") lucide.createIcons();
        form.reset();

        setTimeout(() => {
          btn.classList.remove("is-success");
          btn.disabled = false;
          btn.innerHTML = originalBtnContent;
          if (typeof lucide !== "undefined") lucide.createIcons();
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      // Error State
      btn.classList.remove("is-loading");
      btn.classList.add("is-error");
      btn.innerHTML = `
        <i data-lucide="alert-circle" size="20"></i>
        <span>Error! Try again.</span>
      `;

      if (typeof lucide !== "undefined") lucide.createIcons();

      setTimeout(() => {
        btn.classList.remove("is-error");
        btn.disabled = false;
        btn.innerHTML = originalBtnContent;
        if (typeof lucide !== "undefined") lucide.createIcons();
      }, 4000);
    }
  });
}
