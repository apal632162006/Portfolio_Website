// Single source of truth for all portfolio content.
// Edit this file to update the site — every section reads from here.

export const content = {
    meta: {
        name: "Ashish Pal",
        initials: "AP",
        role: "B.Tech CSE Student & Developer",
        tagline: "Building thoughtful software at the intersection of AI, web, and systems.",
        location: "New Delhi, India",
        availability: "Open to internships/collaborations/freelance/projects.",
        resumeUrl: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:7d265857-6308-4b6e-8653-e24a3ad505b7",
    },

    nav: [
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
    ],

    hero: {
        eyebrow: "Portfolio · Edition 01 · 2026",
        headline: ["Curious builder,", "quiet engineer,", "loud shipper."],
        intro:
            "I'm Ashish Pal — a B.Tech Computer Science student at the Faculty of Technology, University of Delhi. I build full-stack products, tinker with AI, and care deeply about craft.",
        primaryCta: { label: "Download Resume", href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:7d265857-6308-4b6e-8653-e24a3ad505b7" },
        secondaryCta: { label: "Get in touch", href: "#contact" },
        marquee: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "React",
            "Node.js",
            "AI / LLMs",
            "AWS",
            "Docker",
            "MongoDB",
            "MySQL",
            "System Design",
            "Open Source",
        ],
    },

    about: {
        kicker: "About",
        title: "A student who ships.",
        body: [
            "I'm a passionate Computer Science undergraduate at the Faculty of Technology, University of Delhi. I write clean, purposeful code across Python, C, JavaScript and SQL, and enjoy stitching front-ends, back-ends and infra into things people actually use.",
            "My work sits at the intersection of AI and web — from multilingual chatbots to attendance systems and reading apps. When I'm not building, I'm reading papers, contributing to small open-source tools, or preparing for my next problem set.",
        ],
        stats: [
            { value: "2", label: "Shipped projects" },
            { value: "3", label: "Programming paradigms" },
        ],
    },

    experience: [
        {
            role: "Founder's Office Intern",
            org: "Kamarth",
            period: "Jun 2025 — Dec 2025",
            location: "Remote",
            bullets: [
                "Worked directly with the founding team on 0→1 product bets, market research and GTM experiments.",
                "Prototyped internal tools and dashboards to accelerate operations and reporting.",
                "Owned cross-functional pieces spanning engineering, ops and strategy.",
            ],
            tags: ["Product", "Prototyping", "Ops"],
        },
    ],

    projects: [
        {
            title: "Polyglot AI",
            subtitle: "Multilingual chatbot with real-time translation and context memory.",
            description:
                "A conversational assistant that speaks 20+ languages, powered by an LLM backbone with a lightweight retrieval layer and streaming responses.",
            tags: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/apal632162006/Polyglot-AI",
            accent: "coral",
        },
        {
            title: "Employee Attendance System",
            subtitle: "Face-recognition attendance with role-based dashboards.",
            description:
                "End-to-end system with a Python vision pipeline, MySQL backend and an admin dashboard for reports, leaves and exports.",
            tags: ["JavaScript", "MySQL"],
            github: "https://github.com/apal632162006/Employee-Attendance-System",
            accent: "sun",
        },
        {
            title: "Counter App",
            subtitle: "Simple counter app with local storage persistence.",
            description:
                "A lightweight counter application with a clean UI, local storage persistence, and responsive design.",
            tags: ["HTML", "JavaScript", "CSS"],
            github: "https://github.com/apal632162006/Counter-App",
            accent: "violet",
        },
        {
            title: "Portfolio Website",
            subtitle: "A personal portfolio site built with React, Tailwind, and AI features.",
            description:
                "A modern portfolio website showcasing projects, an EmailJS contact form, and a chatbot assistant for live visitor conversations.",
            tags: ["React", "Tailwind", "JavaScript"],
            github: "https://github.com/apal632162006/Portfolio_Website",
            accent: "coral",
        },
    ],

    skills: [
        { group: "Languages", items: ["Python", "Java", "C", "JavaScript", "SQL"] },
        { group: "Web", items: ["React", "Node.js", "Flask", "HTML", "CSS", "Tailwind"] },
        { group: "Data", items: ["MySQL", "MongoDB", "REST APIs"] },
        { group: "Cloud & Tools", items: ["AWS", "Docker", "Git", "Linux", "GitHub Actions"] },
    ],

    education: [
        {
            title: "B.Tech, Computer Science & Engineering",
            org: "Faculty of Technology, University of Delhi",
            period: "2024 — 2028",
            detail: "Coursework in DSA, DBMS, OS, Computer Networks, AI/ML, Cybersecurity, Cloud Computing, Backend Development.",
        },
        {
            title: "Class XII — CBSE",
            org: "Senior Secondary",
            period: "2022 — 2023",
            detail: "Physics, Chemistry, Mathematics, Computer Science.",
        },
        {
            title: "Class X — CBSE",
            org: "Secondary",
            period: "2020 — 2021",
            detail: "Foundational sciences and mathematics.",
        },
    ],

    achievements: [
        { title: "JEE Main — All India Rank", detail: "Qualified with a competitive AIR across 1M+ candidates." },
        { title: "Faculty of Technology, DU", detail: "Admission into one of India's newest premier CSE programs." },
        { title: "Founder's Office · Kamarth", detail: "Selected as an early operator during a formative growth phase." },
    ],

    testimonials: [
        {
            quote: "Ashish brings a rare mix of curiosity and discipline to projects — he cares about both the product and the craft behind it.",
            author: "Mentor",
            role: "Product & Engineering",
        },
        {
            quote: "He approaches problems with calm focus, ships quickly, and keeps improving the details until the experience feels polished.",
            author: "Peer collaborator",
            role: "Builder",
        },
    ],

    journal: [
        { title: "Notes on learning systems programming as a first-year", date: "Coming soon", tag: "Essay" },
        { title: "Building Polyglot AI: what I learned about tokenizers", date: "Coming soon", tag: "Case study" },
        { title: "Why I keep a plain-text daily log", date: "Coming soon", tag: "Journal" },
    ],

    contact: {
        kicker: "Contact",
        title: "Let's build something.",
        body: "I'm open to internships, collaborations and interesting problems. The fastest way to reach me is email.",
        email: "apal63216@gmail.com",
        phone: "+91 70607 13362",
        socials: [
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ashish-pal-373a5b2a6/" },
            { label: "GitHub", href: "https://github.com/apal632162006" },
        ],
    },

    footer: {
        note: "Designed & built by Ashish Pal — Edition 01, 2026.",
    },
} as const;

export type Content = typeof content;
