import React,{useEffect} from "react";
import "../CSS/hero.css";
import characterImg from "../images/mmmm.png";
import Navbar from "./Navbar";
import { useLanguage } from "../context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const { texts, dir , language} = useLanguage();


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    document.body.setAttribute('lang', language);
    document.body.setAttribute('dir', dir);
  }, [language, dir]);
  return (
    <section data-aos="fade" className="hero-section" style={{ direction: dir }}>
      <Navbar />

      <div className="hero-content">
       
     
         <div className="hero-text" data-aos="fade-up-right">
        
          <h1 className="hero-title">{texts?.hero?.name}</h1>
          <p className="hero-brief">{texts?.hero?.brief}</p>
          <p className="hero-date">{texts?.hero?.date}</p>

       </div>

       
        <div className="hero-image" >
          <img src={characterImg} alt="Character" />
        </div>
      </div>
    </section>
  );
};

export default Hero;



{/* data-aos="flip-left"  data-aos-duration="2000" data-aos-once="false"> */}
