import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Braces,
  Check,
  Cloud,
  CodeXml,
  Compass,
  Database,
  Download,
  Gauge,
  Layers,
  Mail,
  MapPin,
  Monitor,
  MonitorSmartphone,
  Palette,
  PenTool,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../PageHeader/PageHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import CountUp from "../components/CountUp";
import { ContactForm } from "./ContactForm";
import episilionAdmins from "../assets/Designer.png";
import episilionLogo from "../assets/episilion_logo.jpg";
import "./Homepage.css";

const RESUME = "/Paul_Deon_Foli_Resume-2 (1).pdf";

const STATS = [
  { label: "Products shipped", target: 3, suffix: "" },
  { label: "Platforms live", target: 2, suffix: "" },
  { label: "Deployments", target: 500, suffix: "+" },
  { label: "Client satisfaction", target: 100, suffix: "%" },
];

const SERVICES = [
  {
    icon: CodeXml,
    title: "Web Development",
    body: "Marketing sites, dashboards and web apps built on modern React tooling — fast, accessible and easy to maintain.",
    points: ["React & Vite", "Design systems", "Performance budgets"],
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Apps",
    body: "Cross-platform React Native apps taken from prototype to store listing, with native-feeling interaction throughout.",
    points: ["React Native & Expo", "Play Store / App Store", "Offline-first data"],
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    body: "Installable Windows, macOS and Linux software for teams that need local files, hardware access or an offline-first workflow.",
    points: ["Electron & Tauri", "Native installers", "Local data & sync"],
  },
  {
    icon: Server,
    title: "APIs & Backend",
    body: "The unglamorous half that makes products work: auth, data models, payments, integrations and background jobs.",
    points: ["Node & Express", "PostgreSQL / MySQL", "Auth & payments"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    body: "Wireframes to polished interface systems, handed off as components your team can actually build against.",
    points: ["Figma systems", "Prototyping", "Motion & detail"],
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    body: "Audits and fixes that make an existing product measurably faster, more discoverable and cheaper to run.",
    points: ["Core Web Vitals", "Technical SEO", "Bundle diet"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    body: "Monitoring, refactors and iteration after launch — so the product keeps improving instead of quietly rotting.",
    points: ["Uptime monitoring", "Refactors", "Feature iteration"],
  },
  {
    icon: Compass,
    title: "Technical Consulting",
    body: "Architecture reviews, stack decisions and delivery planning for teams that need a second, experienced opinion.",
    points: ["Architecture review", "Stack selection", "Delivery planning"],
  },
];

const STACK = [
  {
    icon: Layers,
    name: "Frontend",
    tools: ["React", "Vite", "React Router", "TanStack Query", "Tailwind CSS", "CSS3"],
  },
  {
    icon: MonitorSmartphone,
    name: "Mobile",
    tools: ["React Native", "Expo", "EAS Build", "Reanimated"],
  },
  {
    icon: Monitor,
    name: "Desktop",
    tools: ["Electron", "Tauri", "Node.js", "SQLite", "Native installers"],
  },
  {
    icon: Database,
    name: "Backend & Data",
    tools: ["Node.js", "Express", "PostgreSQL", "MySQL", "Supabase", "REST APIs"],
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    tools: ["Vercel", "Render", "GitHub Actions", "Docker", "CI/CD"],
  },
  {
    icon: PenTool,
    name: "Design & Tooling",
    tools: ["Figma", "Design Systems", "Git & GitHub", "Vitest"],
  },
];

const PROJECTS = [
  {
    image: "/riser_rebrand.png",
    name: "Riser",
    status: "In progress",
    tone: "wip",
    body: "A creator-analytics platform that turns a public TikTok profile into a clear verdict on audience quality and marketing value — so brands know who is worth partnering with before they pay.",
    stack: ["React Native", "Expo", "PostgreSQL"],
    link: "/riser-landing",
    external: false,
  },
  {
    image: episilionAdmins,
    name: "Episilion Admins",
    status: "Completed",
    tone: "done",
    body: "A centralised admin panel for remote hostel management, letting administrators add, update and maintain listings safely without ever touching the database directly.",
    stack: ["React Native", "Node.js", "MySQL"],
    link: "/",
    external: false,
  },
  {
    image: episilionLogo,
    name: "Episilion Hostels",
    status: "Completed",
    tone: "done",
    body: "A student housing platform for discovering, comparing and shortlisting hostels around the UPSA campus in Accra.",
    stack: ["React", "Vite", "MySQL"],
    link: "https://www.episilionhostels.com/",
    external: true,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Scope",
    body: "A short working session to pin down the problem, the users and what success actually looks like.",
  },
  {
    step: "02",
    title: "Design",
    body: "Real screens, not slideware. You click through the interface before a line of production code is written.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly builds on a preview URL you can open on your phone, with progress you can see and question.",
  },
  {
    step: "04",
    title: "Ship & support",
    body: "Deployment, monitoring and iteration. You own the code and the accounts from day one.",
  },
];

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "You own everything",
    body: "Code, repositories, hosting and accounts are yours. No lock-in, no hostage situations.",
  },
  {
    icon: Zap,
    title: "Direct line, no layers",
    body: "You talk to the person writing the code. Fewer meetings, faster decisions, less telephone game.",
  },
  {
    icon: Compass,
    title: "Built to be handed over",
    body: "Readable code, documented decisions and a system your next developer can pick up without a rewrite.",
  },
];

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-card">
        <div className="hero-card-bar">
          <span className="hero-dot" />
          <span className="hero-dot" />
          <span className="hero-dot" />
          <span className="hero-card-path">episilion / deploy</span>
        </div>

        <div className="hero-card-body">
          <div className="hero-line">
            <span className="hero-key">status</span>
            <span className="hero-val hero-val--ok">passing</span>
          </div>
          <div className="hero-line">
            <span className="hero-key">stack</span>
            <span className="hero-val">react · node · postgres</span>
          </div>
          <div className="hero-line">
            <span className="hero-key">build</span>
            <span className="hero-val">1.4s · 92 kB gzip</span>
          </div>

          <div className="hero-bars">
            <span style={{ height: "38%" }} />
            <span style={{ height: "62%" }} />
            <span style={{ height: "48%" }} />
            <span style={{ height: "84%" }} />
            <span style={{ height: "70%" }} />
            <span style={{ height: "96%" }} />
            <span style={{ height: "58%" }} />
          </div>

          <div className="hero-line hero-line--last">
            <span className="hero-key">uptime</span>
            <span className="hero-val hero-val--ok">99.98%</span>
          </div>
        </div>
      </div>

      <div className="hero-float hero-float--a">
        <Braces />
        <span>Full-stack</span>
      </div>
      <div className="hero-float hero-float--b">
        <Sparkles />
        <span>Design-led</span>
      </div>
    </div>
  );
}

export function Homepage() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <PageHeader />

      <main id="main" className="home page-enter">
        {/* ---------------- HERO ---------------- */}
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <Reveal>
                <span className="hero-badge">
                  <span className="hero-badge-dot" />
                  Available for new projects · Accra, Ghana
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="display h1 hero-title">
                  Full-stack development,
                  <br />
                  <span className="gradient-text">done properly.</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="lead hero-lead">
                  Episilion Services designs and engineers web platforms, mobile and desktop
                  applications, and the backends behind them — from first sketch to production,
                  with one person accountable for the whole thing.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="hero-actions">
                  <button className="btn btn--primary btn--lg" onClick={() => go("contact")}>
                    Start a project
                    <ArrowRight aria-hidden="true" />
                  </button>
                  <button className="btn btn--ghost btn--lg" onClick={() => go("work")}>
                    See the work
                  </button>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="hero-meta">
                  <span className="hero-meta-item">
                    <Check aria-hidden="true" />
                    Founded by Paul Deon Foli
                  </span>
                  <span className="hero-meta-item">
                    <MapPin aria-hidden="true" />
                    Accra, Ghana
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        {/* ---------------- STATS ---------------- */}
        <section className="section--tight">
          <div className="shell">
            <div className="stats">
              {STATS.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 90}>
                  <div className="stat">
                    <CountUp target={stat.target} suffix={stat.suffix} />
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section className="section" id="about">
          <div className="shell">
            <SectionHead
              index="01"
              eyebrow="About the studio"
              title="A small studio with an outsized standard."
              lede="Episilion Services is a full-stack development studio based in Accra. We take on a handful of projects at a time so each one gets real attention — the kind that shows up in load times, edge cases and how the thing feels to use."
            />

            <div className="about-grid">
              <Reveal className="about-copy">
                <p className="about-lead">
                  Most software problems are not technology problems. They are clarity problems:
                  nobody agreed on what was being built, or why. So we start there — with the
                  interface and the outcome — and let the architecture follow.
                </p>
                <p className="body">
                  That means fewer surprises, a product that behaves the way it was described, and
                  code that a future developer can read without swearing. Whether it is a marketing
                  site, an internal dashboard or a mobile app, the standard does not change.
                </p>

                <div className="about-tags">
                  <span className="chip chip--accent">Web platforms</span>
                  <span className="chip chip--accent">Mobile apps</span>
                  <span className="chip chip--accent">Desktop apps</span>
                  <span className="chip chip--accent">Backend systems</span>
                  <span className="chip chip--accent">UI/UX</span>
                </div>
              </Reveal>

              <div className="about-principles">
                {PRINCIPLES.map((item, index) => (
                  <Reveal key={item.title} delay={index * 110}>
                    <article className="panel panel--hover principle">
                      <span className="principle-icon">
                        <item.icon aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="h3">{item.title}</h3>
                        <p className="body">{item.body}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SERVICES ---------------- */}
        <section className="section" id="services">
          <div className="shell">
            <SectionHead
              index="02"
              eyebrow="What we do"
              title="Everything a product needs, end to end."
              lede="One engagement can cover the whole build or a single missing piece — web, mobile, desktop or the backend underneath. Either way you get the same engineering discipline."
            />

            <div className="services-grid">
              {SERVICES.map((service, index) => (
                <Reveal key={service.title} delay={(index % 3) * 100}>
                  <article className="panel panel--hover service">
                    <span className="service-icon">
                      <service.icon aria-hidden="true" />
                    </span>
                    <h3 className="h3 service-title">{service.title}</h3>
                    <p className="body service-body">{service.body}</p>
                    <ul className="service-points">
                      {service.points.map((point) => (
                        <li key={point}>
                          <Check aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- WORK ---------------- */}
        <section className="section" id="work">
          <div className="shell">
            <SectionHead
              index="03"
              eyebrow="Selected work"
              title="Products built and shipped."
              lede="A short list, deliberately. Each one is a real product with real users rather than a concept render."
            />

            <div className="work-grid">
              {PROJECTS.map((project, index) => {
                const Card = project.external ? "a" : Link;
                const linkProps = project.external
                  ? { href: project.link, target: "_blank", rel: "noreferrer" }
                  : { to: project.link };

                return (
                  <Reveal key={project.name} delay={index * 110}>
                    <Card className="panel panel--hover work-card" {...linkProps}>
                      <div className="work-media">
                        <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
                        <span className={`work-status work-status--${project.tone}`}>
                          {project.status}
                        </span>
                      </div>

                      <div className="work-body">
                        <div className="work-head">
                          <h3 className="h3">{project.name}</h3>
                          <ArrowUpRight className="work-arrow" aria-hidden="true" />
                        </div>
                        <p className="body">{project.body}</p>
                        <div className="work-stack">
                          {project.stack.map((tech) => (
                            <span key={tech} className="chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------------- STACK ---------------- */}
        <section className="section" id="stack">
          <div className="shell">
            <SectionHead
              index="04"
              eyebrow="Toolkit"
              title="The stack we reach for."
              lede="Chosen for longevity and hiring pool, not novelty. If a project genuinely needs something else, we will say so."
            />

            <div className="stack-grid">
              {STACK.map((group, index) => (
                <Reveal key={group.name} delay={index * 90}>
                  <article className="panel panel--hover stack-card">
                    <div className="stack-head">
                      <span className="stack-icon">
                        <group.icon aria-hidden="true" />
                      </span>
                      <h3 className="h3">{group.name}</h3>
                    </div>
                    <div className="stack-tools">
                      {group.tools.map((tool) => (
                        <span key={tool} className="chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- PROCESS ---------------- */}
        <section className="section">
          <div className="shell">
            <SectionHead
              index="05"
              eyebrow="How we work"
              title="A process with no black boxes."
              lede="You always know what is being built, what it costs and what happens next."
            />

            <div className="process-grid">
              {PROCESS.map((item, index) => (
                <Reveal key={item.step} delay={index * 100}>
                  <article className="process-step">
                    <span className="process-step-num">{item.step}</span>
                    <h3 className="h3">{item.title}</h3>
                    <p className="body">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- FOUNDER ---------------- */}
        <section className="section" id="founder">
          <div className="shell">
            <SectionHead
              index="06"
              eyebrow="The founder"
              title="One person, fully accountable."
              lede="Episilion Services is currently a one-person studio. That is a feature, not a limitation — you always know who is building your product."
            />

            <Reveal>
              <article className="panel founder">
                <div className="founder-media">
                  <img
                    src="/MyImage2.jpeg"
                    alt="Paul Deon Foli, founder of Episilion Services"
                    loading="lazy"
                  />
                </div>

                <div className="founder-body">
                  <span className="eyebrow">Founder &amp; Full-stack Engineer</span>
                  <h3 className="display founder-name">Paul Deon Foli</h3>
                  <p className="lead founder-bio">
                    Paul builds and ships the whole product — interface, application logic,
                    database and deployment. He started Episilion Services to work directly with
                    the people using what he makes, without the layers that usually sit in between.
                  </p>

                  <ul className="founder-facts">
                    <li>
                      <CodeXml aria-hidden="true" />
                      React, React Native &amp; Node.js
                    </li>
                    <li>
                      <Database aria-hidden="true" />
                      PostgreSQL, MySQL &amp; Supabase
                    </li>
                    <li>
                      <Blocks aria-hidden="true" />
                      Design systems &amp; UI engineering
                    </li>
                    <li>
                      <MapPin aria-hidden="true" />
                      Based in Accra, working remotely
                    </li>
                  </ul>

                  <div className="founder-actions">
                    <a className="btn btn--primary" href={RESUME} download="Paul_Deon_Foli_Resume.pdf">
                      <Download aria-hidden="true" />
                      Download résumé
                    </a>
                    <a
                      className="btn btn--ghost"
                      href="https://github.com/astrosteck-sudo?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View GitHub
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section className="section" id="contact">
          <div className="shell">
            <div className="contact-layout">
              <Reveal className="contact-aside">
                <span className="eyebrow">Get in touch</span>
                <h2 className="display h2 contact-title">
                  Tell us what you are
                  <br />
                  trying to build.
                </h2>
                <p className="lead">
                  Send a few lines about the project — the problem, the timeline, roughly what you
                  have in mind. You will get a straight answer within 24 hours, including whether
                  we are the right fit.
                </p>

                <ul className="contact-list">
                  <li>
                    <span className="contact-list-icon">
                      <Mail aria-hidden="true" />
                    </span>
                    <div>
                      <span className="contact-list-label">Email</span>
                      <a href="mailto:episilionservices@gmail.com">episilionservices@gmail.com</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-list-icon">
                      <MapPin aria-hidden="true" />
                    </span>
                    <div>
                      <span className="contact-list-label">Location</span>
                      <span>Accra, Ghana · working with clients worldwide</span>
                    </div>
                  </li>
                  <li>
                    <span className="contact-list-icon">
                      <Gauge aria-hidden="true" />
                    </span>
                    <div>
                      <span className="contact-list-label">Response time</span>
                      <span>Within 24 hours, Monday to Saturday</span>
                    </div>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={140} className="contact-form-col">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default Homepage;
