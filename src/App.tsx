import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import {
  FaDownload,
  FaEnvelope,
  FaLinkedin,
  FaMoon,
  FaPaperPlane,
  FaPhone,
  FaSun,
} from "react-icons/fa"
import type { IconType } from "react-icons"
import StarField from "./components/StarField"
import Spaceship from "./components/Spaceship"

const BASE_URL = import.meta.env.BASE_URL


type ContactAction = {
  label: string
  href: string
  icon: IconType
  external?: boolean
  download?: boolean
}

type Project = {
  title: string
  badge: string
  context: string
  description: string
  tags: string[]
  cta?: { label: string; href: string; external?: boolean }
}

type Coursework = {
  module: string
  grade: string
  details: string
}

const contactActions: ContactAction[] = [
  {
    label: "Email Me",
    href: "mailto:ferike.pap@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Call Me",
    href: "tel:0894418000",
    icon: FaPhone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/francisc-pap-a8b960330",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "Download CV",
    href: `${BASE_URL}CV.pdf`,
    icon: FaDownload,
    download: true,
  },
  {
    label: "Contact Form",
    href: "#contact",
    icon: FaPaperPlane,
  },
]

const skillGroups = [
  {
    title: "Languages & Foundations",
    items: ["Python", "Java", "C", "Assembly", "SQL", "HTML", "CSS"],
  },
  {
    title: "Platforms & Tooling",
    items: [
      "Docker",
      "Git & GitHub",
      "Linux (Unraid)",
      "Raspberry Pi",
      "Monitoring & Logging",
      "Testing (JUnit)",
      "LaTeX",
    ],
  },
  {
    title: "Professional Strengths",
    items: [
      "Teamwork",
      "Communication",
      "Problem Solving",
      "Time Management",
      "Adaptability",
      "Ownership",
    ],
  },
]

const projects: Project[] = [
  {
    title: "HomeLab Media Platform - Unraid + Plex",
    badge: "Featured",
    context: "Role: Developer - Outcome: 20 users and up to 8 concurrent 1080p streams, 99.9% uptime",
    description:
      "Operate a 20TB parity-protected Unraid server hosting Plex for friends and family, prioritising reliability, security, and effortless access.",
    tags: ["Unraid", "Docker/Compose", "Plex", "Sonarr/Radarr"],
  },
  {
    title: "HexOust - Interactive JavaFX Hex-Grid Strategy Game",
    badge: "Collaborative Project",
    context: "Team of 3 - Agile sprints with peer PR reviews and fortnightly showcases",
    description:
      "Led a 3-person agile team to build a JavaFX strategy game with an axial grid engine, BFS capture mechanics, thematic UI, and comprehensive JUnit test coverage.",
    tags: ["Java", "JavaFX", "JUnit 5", "Agile Sprints", "Game Logic"],
    cta: {
      label: "Request Walkthrough",
      href: "mailto:ferike.pap@gmail.com?subject=HexOust%20Walkthrough%20Request",
    },
  },
]

const coursework: Coursework[] = [
  {
    module: "Data Structures & Algorithms",
    grade: "A",
    details:
      "Implemented data structures from scratch (JUnit-tested), analysed algorithmic complexity, and delivered performant sorting, searching, and dynamic programming solutions.",
  },
  {
    module: "Operating Systems",
    grade: "A+",
    details:
      "Explored processes, threading, scheduling, and memory management with hands-on Linux labs focusing on synchronisation and reliability.",
  },
  {
    module: "Databases & Information Systems",
    grade: "B+",
    details:
      "Designed relational database schemas, applied normalisation, and built an end-to-end system modelling a hiring workflow.",
  },
]

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Coursework", href: "#coursework" },
  { label: "Contact", href: "#contact" },
]

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
} satisfies MotionProps

const HEADSHOT_SRC = `${BASE_URL}Headshot.jpg`

const placeholderAvatar = (
  <div className="relative">
    <div className="absolute -inset-1 rounded-full bg-aurora/40 blur-3xl" aria-hidden="true" />
    <img
      src={HEADSHOT_SRC}
      alt="Portrait of Francisc Pap"
      className="h-44 w-44 rounded-full border border-white/30 object-cover shadow-glow"
      loading="lazy"
    />
  </div>
)

function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true
    const stored = window.localStorage.getItem("theme")
    if (stored) return stored === "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    const root = window.document.documentElement
    root.classList.toggle("dark", isDark)
    window.localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  const contactItems = useMemo(
    () =>
      contactActions.map(({ icon: Icon, label, href, external, download }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer noopener" : undefined}
          download={download}
          className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 shadow-glow transition hover:-translate-y-0.5 hover:border-comet/60 hover:bg-white/10 hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aurora/20 text-aurora transition group-hover:bg-aurora group-hover:text-white">
            <Icon className="text-base" />
          </span>
          {label}
        </a>
      )),
    [],
  )

  return (
    <div className={isDark ? "dark" : ""}>
      <StarField />
      <Spaceship className="top-20" delay={0} duration={25} />
      <Spaceship className="top-1/3" delay={10} duration={30} />
      <Spaceship className="bottom-1/4" delay={5} duration={20} />

      <div className="relative min-h-screen overflow-hidden bg-transparent">

        <header className="sticky top-0 z-40 border-b border-white/5 bg-midnight/60 backdrop-blur-xl transition-all duration-500 dark:bg-black/60">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-white/80 lg:px-12">
            <a href="#top" className="font-display text-lg font-semibold text-white">
              Francisc Pap
            </a>
            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-comet"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 shadow-glow transition hover:text-white"
            >
              {isDark ? <FaSun className="text-base" /> : <FaMoon className="text-base" />}
              {isDark ? "Light" : "Dark"} Mode
            </button>
          </nav>
        </header>

        <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-24 lg:px-12">
          <motion.section
            id="top"
            className="mb-24 grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-glow md:grid-cols-[auto,1fr]"
            {...fadeIn}
          >
            <div className="flex flex-col items-center justify-center gap-6">
              {placeholderAvatar}
              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                3rd-year Computer Science @ UCD
              </div>
            </div>
            <div className="space-y-6 text-white">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-comet">Portfolio 2025</p>
                <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                  Francisc Pap - aspiring reliability-focused software engineer.
                </h1>
                <p className="mt-4 max-w-2xl text-base text-white/80">
                  3rd-year UCD student seeking a 6-month internship from March. I enjoy building clean, well-tested software and running reliable services. Core strengths include Python, C, Java, SQL, Git, Docker/Compose, Linux administration (Unraid), and end-to-end monitoring, logging, backup, and recovery workflows.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">{contactItems}</div>
            </div>
          </motion.section>

          <motion.section id="profile" className="mb-20" {...fadeIn}>
            <div className="glass-panel p-10">
              <h2 className="section-title mb-6">Profile</h2>
              <div className="grid gap-6 text-white/85 md:grid-cols-2">
                <p>
                  I thrive where reliability matters-designing systems that teammates can trust and iterating with strong feedback loops. Whether maintaining a self-hosted media platform or architecting a JavaFX strategy game, I bring intentional testing, observability, and documentation so everyone can build faster.
                </p>
                <p>
                  Looking ahead to my 6-month internship, I want to join teams shipping user-facing experiences or platform tooling where craftsmanship, measurement, and ownership are valued. I combine infrastructure know-how with product empathy and a collaborative mindset.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section id="skills" className="mb-20" {...fadeIn}>
            <div className="glass-panel p-10">
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="section-title">Skills</h2>
                <span className="badge-pill">Hands-on & Team-Ready</span>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
                    <h3 className="font-display text-lg text-white">{group.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-comet" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section id="education" className="mb-20" {...fadeIn}>
            <div className="glass-panel p-10">
              <h2 className="section-title mb-8">Education</h2>
              <div className="flex flex-col gap-6 text-white/85 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-comet">2022 - Present</p>
                  <h3 className="mt-2 font-display text-2xl text-white">
                    University College Dublin - BSc Computer Science
                  </h3>
                  <p className="mt-2 text-sm text-starlight">First Class Honours (1:1)</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>
                      <span className="badge-pill">Cothrom na Feinne Scholarship</span>
                    </li>
                    <li>
                      <span className="badge-pill">UCD Entrance Scholar Award</span>
                    </li>
                  </ul>
                </div>
                <div className="max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="font-display text-sm uppercase tracking-[0.3em] text-white/70">Highlight Modules</p>
                  <ul className="mt-4 grid gap-4 text-sm text-white/80">
                    {coursework.slice(0, 2).map((course) => (
                      <li key={course.module}>
                        <p className="font-semibold text-white">{course.module}</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-comet">Grade {course.grade}</p>
                        <p className="mt-2 text-white/80">{course.details}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section id="projects" className="mb-20" {...fadeIn}>
            <div className="glass-panel p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="section-title">Projects</h2>
                <span className="badge-pill">Reliability & UX</span>
              </div>
              <div className="mt-8 space-y-6">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur shadow-glow transition hover:-translate-y-1 hover:border-comet/40 hover:shadow-glow-strong"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="badge-pill bg-aurora/20 text-white/90">{project.badge}</span>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">{project.context}</p>
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-white">{project.title}</h3>
                    <p className="mt-3 text-sm text-white/80">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge-pill bg-white/10 text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.cta && (
                      <a
                        href={project.cta.href}
                        target={project.cta.external ? "_blank" : undefined}
                        rel={project.cta.external ? "noreferrer noopener" : undefined}
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-comet/40 bg-comet/10 px-5 py-2 text-sm font-semibold text-comet transition hover:-translate-y-0.5 hover:bg-comet/20 hover:text-white"
                      >
                        {project.cta.label}
                        <FaPaperPlane className="text-xs" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section id="coursework" className="mb-20" {...fadeIn}>
            <div className="glass-panel p-10">
              <h2 className="section-title">Coursework Highlights</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {coursework.map((course) => (
                  <div key={course.module} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-comet">
                      {course.module}
                      <span className="badge-pill bg-white/10 text-white/80">{course.grade}</span>
                    </div>
                    <p className="mt-3 text-sm text-white/80">{course.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section id="contact" className="mb-16" {...fadeIn}>
            <div className="glass-panel p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="section-title">Let's Build Together</h2>
                <span className="badge-pill">Formspree Integration</span>
              </div>
              <p className="mt-4 max-w-2xl text-sm text-white/80">
                Ready for an internship chat or have a project in mind? Drop me a message below - your note routes straight to my inbox via Formspree. I reply within two working days.
              </p>
              <form className="mt-8 grid gap-6 md:grid-cols-2" action="https://formspree.io/f/xblannql" method="POST">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-comet focus:ring-2 focus:ring-comet/40"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-comet focus:ring-2 focus:ring-comet/40"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-comet focus:ring-2 focus:ring-comet/40"
                  />
                </div>
                <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-white/60">
                    Prefer email? Reach me directly at
                    <a className="ml-1 text-comet transition hover:text-white" href="mailto:ferike.pap@gmail.com">
                      ferike.pap@gmail.com
                    </a>
                    .
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full border border-comet/50 bg-comet/20 px-6 py-3 text-sm font-semibold text-comet transition hover:-translate-y-0.5 hover:bg-comet/30 hover:text-white"
                  >
                    Send Message
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            </div>
          </motion.section>
        </main>

        <footer className="relative z-10 border-t border-white/5 bg-black/50">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/60 md:flex-row lg:px-12">
            <p>(c) {new Date().getFullYear()} Francisc Pap. Crafted with React, Vite, and Tailwind.</p>
            <div className="flex gap-4">
              <a href="mailto:ferike.pap@gmail.com" className="transition hover:text-comet">
                Email
              </a>
              <a href="tel:0894418000" className="transition hover:text-comet">
                Phone
              </a>
              <a
                href="https://www.linkedin.com/in/francisc-pap-a8b960330"
                target="_blank"
                rel="noreferrer noopener"
                className="transition hover:text-comet"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App


