import React from 'react';
import '../CSS/honors.css';
import { useLanguage } from '../context/LanguageContext';

const HonorsSection = () => {
  const { texts, dir } = useLanguage();
  const honorsData = texts?.honors?.cards || [];

  return (
    <section id="honors" className="honors-section" style={{ direction: dir }}>
      <h2 className="section-title">{texts?.honors?.title}</h2>
      <p className="honors-intro">{texts?.honors?.intro}</p>

      <div className="honor-cards">
        {honorsData.map((honor, index) => (
          <div key={index} className="honor-card">
            <div className="honor-icon">🏅</div>
            <h4 className="honor-h4">{honor.title}</h4>
            <p className="honor-date">🗓️ {honor.date}</p>
            <p className="honor-desc">{honor.summary}</p>
            <br></br>
            <p className="honor-desc">📃 {honor.significance}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HonorsSection;
