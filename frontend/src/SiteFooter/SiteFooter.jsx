import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import "./SiteFooter.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/astrosteck-sudo?tab=repositories" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/paul-foli-320ba1400" },
  { label: "Facebook", href: "https://web.facebook.com/people/Paul-Foli/pfbid0Vgdbo3npmMbV3JKYqtDYCe1bjQwHJSCDG8aWPCTi8pkC3HEzWQxdJNSNxmWMi4Bml/" },
];

const SITEMAP = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "founder", label: "Founder" },
  { id: "contact", label: "Contact" },
];

export function SiteFooter() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="ftr">
      <div className="shell">
        <div className="ftr-top">
          <div className="ftr-brand">
            <span className="ftr-mark" aria-hidden="true">
              E
            </span>
            <div>
              <h2 className="display ftr-title">Episilion Services</h2>
              <p className="body ftr-blurb">
                A full-stack development studio building web platforms, mobile apps and the
                systems behind them.
              </p>
            </div>
          </div>

          <nav className="ftr-col" aria-label="Sitemap">
            <span className="eyebrow eyebrow--plain ftr-col-title">Navigate</span>
            <ul>
              {SITEMAP.map((item) => (
                <li key={item.id}>
                  <button onClick={() => go(item.id)}>{item.label}</button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ftr-col">
            <span className="eyebrow eyebrow--plain ftr-col-title">Elsewhere</span>
            <ul>
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ftr-col">
            <span className="eyebrow eyebrow--plain ftr-col-title">Contact</span>
            <ul>
              <li>
                <a href="mailto:episilionservices@gmail.com">
                  <Mail aria-hidden="true" />
                  episilionservices@gmail.com
                </a>
              </li>
              <li>
                <span className="ftr-static">
                  <MapPin aria-hidden="true" />
                  Accra, Ghana
                </span>
              </li>
            </ul>
            <span className="ftr-status">
              <span className="ftr-pulse" aria-hidden="true" />
              Available for new work
            </span>
          </div>
        </div>

        <div className="ftr-base">
          <p>© {new Date().getFullYear()} Episilion Services. All rights reserved.</p>
          <p>Founded by Paul Deon Foli · Built with React &amp; Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
