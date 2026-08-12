import { useEffect, useState } from "react";
import "./PageHeader.css";

const NAV = [
  { id: "about", label: "About" },
  { id: "technologies", label: "Stack" },
  { id: "projects", label: "Work" },
  { id: "services", label: "Services" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export function PageHeader() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner shell">
        <button className="site-header-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="site-header-dot" />
          <span className="metal-text">EPISILION</span>
          <span className="site-header-brand-sub">_SERVICES</span>
        </button>

        <nav className="site-header-nav">
          {NAV.map((item) => (
            <button key={item.id} onClick={() => go(item.id)}>
              <span className="site-header-nav-index">0{NAV.indexOf(item) + 1}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <a
          className="site-header-cta"
          href="/Paul_Deon_Foli_Resume-2 (1).pdf"
          download="Paul_Deon_Foli_Resume.pdf"
        >
          RESUME<span>↓</span>
        </a>

        <button
          className={`site-header-burger ${open ? "open" : ""}`}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="site-header-progress" style={{ width: `${progress}%` }} />

      <div className={`site-header-mobile ${open ? "open" : ""}`}>
        {NAV.map((item) => (
          <button key={item.id} onClick={() => go(item.id)}>
            <span className="site-header-nav-index">0{NAV.indexOf(item) + 1}</span>
            {item.label}
          </button>
        ))}
        <a href="/Paul_Deon_Foli_Resume-2 (1).pdf" download className="site-header-cta">
          RESUME<span>↓</span>
        </a>
      </div>
    </header>
  );
}
