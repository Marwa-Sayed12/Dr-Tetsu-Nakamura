import React,{useEffect} from 'react';
import { FaUsers, FaRoad, FaLeaf, FaHospital, FaMosque, FaMedal } from 'react-icons/fa';
import '../CSS/impact.css';

import impactImg from '../images/impact/img1-.jpg';
import canal from '../images/projects/canal1.jpg';
import farm from '../images/impact/farm.jpg';
import hospital from '../images/impact/hospital1.jpg';
import award from '../images/impact/award.jpg';
import people from '../images/impact/people helped.jpg';
import mosque from '../images/impact/mosque.jpg';

import { useLanguage } from '../context/LanguageContext';

const Impact = () => {
  const { texts, dir, language } = useLanguage();

  const stats = [
    { icon: <FaUsers />, value: '650,000+', label: texts?.impact?.cards?.people, img: people },
    { icon: <FaRoad />, value: '27 km', label: texts?.impact?.cards?.canals, img: canal },
    { icon: <FaLeaf />, value: '16,000 ha', label: texts?.impact?.cards?.farmland, img: farm },
    { icon: <FaHospital />, value: '2', label: texts?.impact?.cards?.hospitals, img: hospital },
    { icon: <FaMosque />, value: '2', label: texts?.impact?.cards?.mosques, img: mosque },
    { icon: <FaMedal />, value: '2', label: texts?.impact?.cards?.awards, img: award },
  ];

  useEffect(() => {
    document.body.setAttribute('lang', language);
    document.body.setAttribute('dir', dir);
  }, [language, dir]);

  return (
    <section id="impact" className="impact-section" style={{ direction: dir }}>
      <h2 className="impact-heading">{texts?.impact?.title}</h2>

      
      <div className="container impact-intro">
        <div className="impact-img-wrapper">
          <img src={impactImg} alt="Dr. Nakamura irrigation project" className="impact-img" />
        </div>
        <div className="impact-text">
          <blockquote>
          <p dangerouslySetInnerHTML={{
  __html: texts?.impact?.quote?.replace(/“(.*?)”/, '<span class="highlight">“$1”</span>')
}} />

            <footer>{texts?.impact?.footer}</footer>
          </blockquote>
        </div>
      </div>

      <div className="container impact-cards-grid">
        {stats.map((s, i) => (
          <div key={i} className="button-85">
            <img src={s.img} alt="impact visual" className="card-image" />
            <div className="card-overlay-full">
              <h3 className="overlay-title neon-glow">{s.icon}</h3>
              <p className="overlay-desc">{s.label}</p>
              <button id="num" className="overlay-btn" role="button">{s.value}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
