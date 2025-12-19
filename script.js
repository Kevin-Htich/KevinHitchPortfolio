// Update project data here.
const projects = [
  {
    title: "AAC Highlighting",
    status: "Demo",
    description:
      "Worked as SCRUM master for a team of 6 developers. Built a context aware AAC board which highlights words using microphone input with AI generation.",
    impact: "Currently bening used at Temple University Human-Computer Interaction Lab. Helping to improve the quality of life for people with disabilities.",
    links: [
      { label: "Live", href: "https://highlighting.vercel.app" },
      { label: "Repo", href: "https://github.com/Capstone-Projects-2025-Fall/project-002-highlighting" },
      { label: "YouTube Demo", href: "https://www.youtube.com/live/UQQAnY94y7U?si=uRHktPp8KHwxGMRx&t=548" },
    ],
    skills: ["TypeScript", "AI", "Deployment", "Agile", "Documentation"],
    notes:
      "Check out the demo we did in the links (presentation starts at 9:08).",
  },
  {
    title: "SecureCodeCoPilot",
    status: "Live",
    description:
      "A solo project to develop a SaaS product that scans developers repos for security vulnerabilities and provides AI-powered remediation suggestions.",
    impact: "Use of AI, for cyber-security, that finds vulnerabilities and runs AI improvments. All locally, amazing for healthcare, government, etc.",
    links: [
      { label: "Live", href: "https://SecureCodeCoPilot.dev" },
    ],
    skills: ["Full stack", "SaaS", "Python", "Typescript", "SQLLite", "AI"],
    notes:
      "Due to the nature of the project, I cannot share the repository. However, I can provide a demo if you are interested. Aditionally, the landing page is in the links",
  },
  {
    title: "Septa+",
    status: "No longer active",
    description:
      "Redesign of Philadelphia's public transit app.",
    impact: "Looks much cleaner with a focus on accessibility and usability. Shows a map with times, routes, and stops.",
    links: [
      { label: "Repo", href: "https://github.com/cis3296f24/02-Septa-CLI" },
    ],
    skills: ["Svelte", "API", "OpenMap", "Agile", "Accessibility"],
    notes:
      "This project is based off the old Septa app. It got officially reworked by Septa 12/24.",
  },
  {
    title: "Event System",
    status: "Live",
    description:
      "Full stack script for game events.",
    impact: "Redesigned old and and bug-ridden event system for both admins and users for a game server.",
    links: [
    ],
    skills: ["Scripting", "Full Stack", "SQL", "Meta-data", "real-time"],
    notes:
      "There are not any links for this project as is mandatory by and the company. If you are interested in learning more, I can provide a demo.",
  },
];

const grid = document.querySelector("#project-grid");
const year = document.querySelector("#year");
const topbar = document.querySelector(".topbar");

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute(
    "aria-label",
    `${project.title} project card. Press enter to toggle build notes.`
  );

  const linksMarkup = project.links
    .map(
      (link) =>
        `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
    )
    .join("");

  const skillsMarkup = project.skills
    .map((skill) => `<span class="pill">${skill}</span>`)
    .join("");

  card.innerHTML = `
    <div class="project-head">
      <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="project-status">${project.status}</span>
    </div>
    <h3>${project.title}</h3>
    <p class="project-desc">${project.description}</p>
    <p class="project-impact">${project.impact}</p>
    <div class="project-links">${linksMarkup}</div>
    <div class="skill-row">${skillsMarkup}</div>
    <div class="project-notes">${project.notes}</div>
  `;

  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }
    card.classList.toggle("is-open");
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("is-open");
    }
  });

  grid.appendChild(card);
});

year.textContent = new Date().getFullYear();

// Compact top bar after scrolling.
let isTicking = false;
const updateTopbar = () => {
  if (!topbar) {
    return;
  }
  topbar.classList.toggle("is-compact", window.scrollY > 80);
  isTicking = false;
};

window.addEventListener("scroll", () => {
  if (!isTicking) {
    window.requestAnimationFrame(updateTopbar);
    isTicking = true;
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});
