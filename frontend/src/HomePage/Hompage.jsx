import "./Homepage.css";
import CountUp from "./CountUp";
import { PageHeader } from "../PageHeader/PageHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import episilion_logo from "../assets/episilion_logo.jpg";
// Add your team image to src/assets/ and uncomment the line below:
// import paulImage from "../assets/testiminial_1.jpg";
import { Link } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { ScrollReveal } from "./ScrollReveal";

const STATS = [
  { title: "Projects", target: 3 },
  { title: "Completed", target: 2 },
  { title: "Deployments", target: 500, suffix: "+" },
  { title: "Happy Clients", target: 100, suffix: "%" },
];

const STACK = [
  {
    name: "Frontend",
    icon: "⚛",
    tools: ["React", "Vite", "TanStack", "Tailwind", "CSS3"],
  },
  { name: "Mobile", icon: "📱", tools: ["React Native", "Expo", "EAS Build"] },
  {
    name: "Backend",
    icon: "⚙",
    tools: ["Node", "Express", "Supabase", "PostgreSQL"],
  },
  {
    name: "Design",
    icon: "🎨",
    tools: ["Figma", "UI Systems", "Motion", "Prototyping"],
  },
];

const SERVICES = [
  {
    code: "S/01",
    title: "Web Development",
    body: "Fast, responsive marketing sites and dashboards built on modern React tooling.",
  },
  {
    code: "S/02",
    title: "Mobile Apps",
    body: "Cross-platform React Native apps shipped to Play Store and App Store.",
  },
  {
    code: "S/03",
    title: "UI/UX Design",
    body: "Wireframes to polished design systems, handed off ready to build.",
  },
  {
    code: "S/04",
    title: "API & Backend",
    body: "Auth, databases, payments and integrations wired to your product.",
  },
  {
    code: "S/05",
    title: "Maintenance",
    body: "Monitoring, refactors and iteration after launch — not just handover.",
  },
  {
    code: "S/06",
    title: "Consulting",
    body: "Architecture reviews and technical direction for early product teams.",
  },
];

const PROJECTS = [
  {
    image: '/riser_rebrand.png',
    name: "Riser",
    status: "IN PROGRESS",
    body: "A TikTok analytics platform that turns a creator's public profile and content data into a clear, actionable verdict on their audience quality and marketing value — so brands know who's actually worth partnering with before they pay.",
    stack: "React Native · Expo · Supabase",
    link: '/riser-landing'
  },
  // {
  //   image: flexPay26,
  //   name: "FlexPay 26",
  //   status: "COMPLETED",
  //   body: "Flexible payment tracking platform with dashboards and automated reminders.",
  //   stack: "React · Node · PostgreSQL",
  //   link: '/'
  // },
  {
    image: episilion_logo,
    name: "Episilion Hostels",
    status: "COMPLETED",
    body: "A student hostel platform for discovering, comparing, and finding suitable hostels around UPSA campus.",
    stack: "React · Vite · CSS",
    link: 'https://www.episilionhostels.com/'
  },
];

function SectionHead({ index, eyebrow, title, children }) {
  return (
    <div className="section-head">
      <span className="section-head-index">{index}</span>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title metal-text">{title}</h2>
        {children && <p className="section-head-body">{children}</p>}
      </div>
    </div>
  );
}

export function Homepage() {
  return (
    <>
      <PageHeader />

      <main className="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <span className="eyebrow">Accra, Ghana · Est. 2024</span>
              <h1>
                <span className="metal-text">WE BUILD</span>
                <span className="hero-outline" data-text="DIGITAL">DIGITAL</span>
                <span className="metal-text">PRODUCTS</span>
              </h1>
              <p className="hero-lead">
                Episilion Services is a two-person studio shipping web apps,
                mobile apps and interfaces that feel engineered — not templated.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-solid"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  VIEW WORK
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  START A PROJECT
                </button>
              </div>
              <div className="piano-roll">
                <span className="note long" />
                <span className="note short" />
                <span className="note short" />
                <span className="note long" />
              </div>
            </div>

            <div className="hero-visual panel">
              <img src="./episilionLogo.jpg" alt="Episilion Services" />
              <div className="hero-visual-meta">
                <span>SYS/ONLINE</span>
                <span>UI · UX · CODE</span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats shell">
          {STATS.map((s, index) => (
            <ScrollReveal key={s.title} delay={index * 100}>
              <div className="stat panel">
                <span className="stat-title">{s.title}</span>
                <CountUp target={s.target} suffix={s.suffix || ""} />
              </div>
            </ScrollReveal>
          ))}
        </section>

        {/* ABOUT */}
        <section className="about shell" id="about">
          <ScrollReveal>
            <SectionHead
              index="01"
              eyebrow="Who we are"
              title="ABOUT THE STUDIO"
            />
          </ScrollReveal>
          <div className="about-grid">
            <ScrollReveal delay={100}>
              <p className="about-lead">
                We design and build software end to end. One engineer, one
                designer, no layers of hand-off — which means fewer meetings and
                faster releases.
              </p>
            </ScrollReveal>
            <div className="about-cards">
              <ScrollReveal delay={200}>
                <div className="panel about-card">
                  <span className="eyebrow">Approach</span>
                  <p>
                    Every project starts with the interface. We prototype the real
                    screens early so decisions are made on something you can
                    click.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="panel about-card">
                  <span className="eyebrow">Delivery</span>
                  <p>
                    Weekly builds, previews you can open on your phone, and code
                    you own outright at the end of the engagement.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="stack shell" id="technologies">
          <ScrollReveal>
            <SectionHead index="02" eyebrow="Capabilities" title="TECHNOLOGIES" />
          </ScrollReveal>
          <div className="stack-grid">
            {STACK.map((s, index) => (
              <ScrollReveal key={s.name} delay={index * 100}>
                <div className="panel stack-card">
                  <div className="stack-card-header">
                    <span className="stack-icon">{s.icon}</span>
                    <span className="stack-card-name">{s.name}</span>
                  </div>
                  <div className="stack-tools">
                    {s.tools.map((tool) => (
                      <span key={tool} className="tech-chip">{tool}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="services shell" id="services">
          <ScrollReveal>
            <SectionHead index="03" eyebrow="What we do" title="SERVICES" />
          </ScrollReveal>
          <div className="services-grid">
            {SERVICES.map((s, index) => (
              <ScrollReveal key={s.code} delay={index * 100}>
                <article className="panel service-card">
                  <span className="service-code">{s.code}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects shell" id="projects">
          <ScrollReveal>
            <SectionHead index="04" eyebrow="Selected work" title="PROJECTS" />
          </ScrollReveal>
          <div className="projects-grid">
            {PROJECTS.map((p, index) => (
              <ScrollReveal key={p.name} delay={index * 100}>
                <Link
                  to={p.link}
                  className="panel project-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="project-image">
                    <img src={p.image} alt={p.name} />
                    <span
                      className={`project-status ${p.status === "COMPLETED" ? "done" : "wip"}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div className="project-body">
                    <h3>{p.name}</h3>
                    <p>{p.body}</p>
                    <span className="project-stack">{p.stack}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="team shell" id="team">
          <ScrollReveal>
            <SectionHead index="05" eyebrow="The people" title="TEAM" />
          </ScrollReveal>
          <div className="team-grid">
            <ScrollReveal delay={100}>
              <div className="panel team-card">
                <div className="team-avatar">
                  {/* To add Paul's image: 
                      1. Place testiminial_1.jpg in src/assets/ folder
                      2. Uncomment the import at top: import paulImage from "../assets/testiminial_1.jpg";
                      3. Uncomment the img tag below and remove the fallback span
                  */}
                  {/* <img src={paulImage} alt="Paul Deon Foli" /> */}
                  <span className="team-avatar-initials">PF</span>
                </div>
                <div>
                  <h3>Paul Deon Foli</h3>
                  <span className="eyebrow">Founder · Full-stack Engineer</span>
                  <p>
                    React, React Native and Node. Builds the product and ships it.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            {/* <div className="panel team-card">
              <span className="team-avatar">ES</span>
              <div>
                <h3>Episilion Design</h3>
                <span className="eyebrow">Interface &amp; Motion</span>
                <p>Design systems, prototypes and the details that make it feel finished.</p>
              </div>
            </div> */}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact shell" id="contact">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
