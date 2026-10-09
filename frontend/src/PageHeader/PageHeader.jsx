import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import "./PageHeader.css";

const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "founder", label: "Founder" },
];

const RESUME = "/Paul_Deon_Foli_Resume-2 (1).pdf";

export function PageHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
      setScrolled(doc.scrollTop > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`hdr ${scrolled ? "is-scrolled" : ""}`}>
      <div className="hdr-inner shell">
        <button
          className="hdr-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Episilion Services — back to top"
        >
          <span className="hdr-mark" aria-hidden="true">
            E
          </span>
          <span className="hdr-wordmark">
            <strong>Episilion</strong>
            <em>Services</em>
          </span>
        </button>

        <nav className="hdr-nav" aria-label="Sections">
          {NAV.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? "is-active" : ""}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hdr-actions">
          <a
            className="btn btn--ghost btn--sm hdr-resume"
            href={RESUME}
            download="Paul_Deon_Foli_Resume.pdf"
          >
            <Download aria-hidden="true" />
            Résumé
          </a>
          <button className="btn btn--primary btn--sm hdr-cta" onClick={() => go("contact")}>
            Start a project
            <ArrowUpRight aria-hidden="true" />
          </button>

          <button
            className="hdr-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        className="hdr-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />

      <div className={`hdr-sheet ${open ? "is-open" : ""}`}>
        <nav aria-label="Sections">
          {NAV.map((item, index) => (
            <button key={item.id} onClick={() => go(item.id)}>
              <span className="hdr-sheet-index">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
              <ArrowUpRight aria-hidden="true" />
            </button>
          ))}
        </nav>
        <div className="hdr-sheet-actions">
          <button className="btn btn--accent btn--block" onClick={() => go("contact")}>
            Start a project
          </button>
          <a
            className="btn btn--ghost btn--block"
            href={RESUME}
            download="Paul_Deon_Foli_Resume.pdf"
          >
            <Download aria-hidden="true" />
            Download résumé
          </a>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
