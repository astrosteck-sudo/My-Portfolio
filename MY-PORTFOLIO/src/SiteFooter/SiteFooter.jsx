import "./SiteFooter.css";

const LINKS = [
  { label: "GitHub", href: "https://github.com/astrosteck-sudo?tab=repositories" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/paul-foli-320ba1400" },
  { label: "Facebook", href: "https://web.facebook.com/people/Paul-Foli/pfbid0Vgdbo3npmMbV3JKYqtDYCe1bjQwHJSCDG8aWPCTi8pkC3HEzWQxdJNSNxmWMi4Bml/" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner shell">
        <div className="site-footer-brand">
          <h2 className="metal-text">EPISILION_SERVICES</h2>
          <p>Web &amp; app development — UI/UX engineering out of Accra, Ghana.</p>
        </div>

        <div className="site-footer-links">
          <span className="eyebrow">Elsewhere</span>
          <div>
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer-status">
          <span className="site-footer-pulse" />
          Available for new builds
        </div>
      </div>

      <div className="site-footer-base shell">
        <p>© {new Date().getFullYear()} EPISILION SERVICES. ALL RIGHTS RESERVED.</p>
        <p>BUILT IN REACT · DEPLOYED CONTINUOUSLY</p>
      </div>
    </footer>
  );
}
