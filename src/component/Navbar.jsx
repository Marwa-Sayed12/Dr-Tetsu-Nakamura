import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../CSS/navbar.css";
import logo from "../images/logo-removebg-preview-.png";
import enFlag from "../images/nav/english1.jpg";
import psFlag from "../images/nav/pashto1.png";
import drFlag from "../images/nav/pashto1.png";
import jpFlag from "../images/nav/jp1.png";

const flags = {
  ps: psFlag,
  dr: drFlag,
  en: enFlag,
  jp: jpFlag,
};

const langLabels = {
  ps: "پښتو",
  dr: "دری",
  en: "English",
  jp: "Japanese",
};

const Navbar = () => {
  const { language, changeLanguage, dir } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleChange = (lang) => {
    changeLanguage(lang);
    setOpen(false);
  };

  return (
    <nav className="navbar" style={{ textAlign: dir === "rtl" ? "right" : "left" }}>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="navbar-right">
        <div className="language-dropdown" onClick={() => setOpen(!open)}>
          <img src={flags[language]} alt={language} className="flag-icon" />
          <span>{langLabels[language]}<span className="dropdown-icon">▼</span></span>
        </div>

        {open && (
          <div
          className="dropdown-menu"
          style={dir === "rtl" ? { left: 0, right: "auto" } : { right: 0, left: "auto" }}
        >
            {Object.keys(flags).map((lang) => (
              <div key={lang} className="dropdown-item" onClick={() => handleChange(lang)}>
                <img src={flags[lang]} alt={lang} className="flag-icon" />
                <span>{langLabels[lang]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
