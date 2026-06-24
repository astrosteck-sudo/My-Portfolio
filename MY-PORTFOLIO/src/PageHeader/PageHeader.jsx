import { useState } from "react";
import "./PageHeader.css";

export function PageHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <div className="episilion-services-header">
        <p>EPISILION_SERVICES</p>
        <div className="episilion-services-header-homepage-links">
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
          <p>Roadmap</p>
          <p>Contact</p>
        </div>
        <p className="episilion-services-header-resume">DOWNLOAD RESUME</p>

        <button
          className={`hamburger ${isMobileNavOpen ? "open" : ""}`}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`episilion-services-header-mobile-homepage-links ${isMobileNavOpen? 'open':'close'}`}>
        <p>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Roadmap</p>
        <p>Contact</p>
        <p className="episilion-services-header-mobile-resume">DOWNLOAD RESUME</p>
      </div>
    </>
  );
}
