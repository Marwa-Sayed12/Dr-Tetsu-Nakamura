import React from 'react';
import '../CSS/footer.css';
import { FaGithub, FaLinkedin, FaGlobe , FaYoutube, FaStar } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { texts, dir } = useLanguage();

  return (
    <footer className="footer" style={{ direction: dir }}>
      <div className="footer-content">
        <p>{texts?.footer?.credits}</p>

        <div className="social-icons">
          <a href="https://github.com/Marwa-Sayed12/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/marwa-sayed-2b34b624a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://marwa-sayed.netlify.app/" target="_blank" rel="noopener noreferrer"><FaGlobe  /></a>
         
        </div>

        <a
          href="https://github.com/Marwa-Sayed12/Dr.-Tetsu-Nakamura"
          className="star-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStar className="star-icon" /> {texts?.footer?.star}
        </a>
        <p className="right">{texts?.footer?.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
