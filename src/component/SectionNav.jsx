import React, { useState } from "react";
import "../CSS/sectionNav.css";
import { useLanguage } from "../context/LanguageContext";

const SectionNav = () => {
  const [active, setActive] = useState("timeline");
  const { texts, dir } = useLanguage(); 

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div className="section-nav-wrapper" style={{ direction: dir }}>
      <div className="section-nav">
        <button
          className={`nav-item ${active === "timeline" ? "active" : ""}`}
          onClick={() => scrollToSection("timeline")}
        >
          {texts?.sectionNav?.timeline}
        </button>
        <button
          className={`nav-item ${active === "life" ? "active" : ""}`}
          onClick={() => scrollToSection("life")}
        >
          {texts?.sectionNav?.life}
        </button>
        <button
          className={`nav-item ${active === "impact" ? "active" : ""}`}
          onClick={() => scrollToSection("impact")}
        >
          {texts?.sectionNav?.impact}
        </button>
        <button
          className={`nav-item ${active === "gallery" ? "active" : ""}`}
          onClick={() => scrollToSection("gallery")}
        >
          {texts?.sectionNav?.gallery}
        </button>
        <button
          className={`nav-item ${active === "projects" ? "active" : ""}`}
          onClick={() => scrollToSection("projects")}
        >
          {texts?.sectionNav?.projects}
        </button>
        <button
          className={`nav-item ${active === "honors" ? "active" : ""}`}
          onClick={() => scrollToSection("honors")}
        >
          {texts?.sectionNav?.honors}
        </button>
        <button
          className={`nav-item ${active === "quotes" ? "active" : ""}`}
          onClick={() => scrollToSection("quotes")}
        >
          {texts?.sectionNav?.quotes}
        </button>
        <button
          className={`nav-item ${active === "videos" ? "active" : ""}`}
          onClick={() => scrollToSection("videos")}
        >
          {texts?.sectionNav?.videos}
        </button>
      </div>
    </div>
  );
};

export default SectionNav;
