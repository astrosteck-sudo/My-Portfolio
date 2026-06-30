import { useState } from "react";
import "./PageHeader.css";

export function PageHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const smoothScroll = (parameter) => {
    document.getElementById(parameter)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMobileNavOpen(false)
    // if (parameter === "order") {
    // document.getElementById("order")?.scrollIntoView({
    //   behavior: "smooth",
    // });
    // } else {
    //   document.getElementById("contact")?.scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }
  };
  return (
    <>
      <div className="episilion-services-header">
        <p>EPISILION_SERVICES</p>
        <div className="episilion-services-header-homepage-links">
          <p onClick={() => smoothScroll("about")}>About</p>

          <p onClick={() => smoothScroll("technologies")}>Technologies</p>
          <p onClick={() => smoothScroll("projects")}>Projects</p>
          <p onClick={() => smoothScroll("services")}>Services</p>
          <p onClick={() => smoothScroll("team")}>Team</p>
          <p onClick={() => smoothScroll("contact")}>Contact</p>
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

      <div
        className={`episilion-services-header-mobile-homepage-links ${isMobileNavOpen ? "open" : "close"}`}
      >
        <p onClick={() => smoothScroll("about")}>About</p>

        <p onClick={() => smoothScroll("technologies")}>Technologies</p>
        <p onClick={() => smoothScroll("projects")}>Projects</p>
        <p onClick={() => smoothScroll("services")}>Services</p>
        <p onClick={() => smoothScroll("team")}>Team</p>
        <p onClick={() => smoothScroll("contact")}>Contact</p>
        <p className="episilion-services-header-mobile-resume">
          DOWNLOAD RESUME
        </p>
      </div>
    </>
  );
}
