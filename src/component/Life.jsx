import React,{useEffect} from 'react';
import '../CSS/life.css';
import { useLanguage } from '../context/LanguageContext';
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------- images ---------- */
import imgEarly from '../images/life/img4.png';
import imgDoctor from '../images/life/img5.png';
import imgPMS from '../images/life/image.png';
import imgCanal from '../images/life/p2.jpg';
import imgMorwarid from '../images/life/i3.png';
import hoyat from '../images/life/hoyat.jpg';
import imgMemorial from '../images/life/death.jpg';

const Life = () => {
  const { texts, dir } = useLanguage();
  console.log("Life Texts:", texts?.life);


  return (
    <section id="life" className="life-section" style={{ direction: dir }} >
      <div className="container">
        <h2 className="section-heading">{texts?.life?.title}</h2>

        <div className="life-row" >
  <div className="life-img-1">
    <img src={imgEarly} alt="Early" />
  </div>
  <div className="life-text" >
    <h3>{texts?.life?.earlyTitle}</h3>
    <p className="life-p">{texts?.life?.earlyDesc}</p>
  </div>
        </div>


        <div className="life-row reverse">
          <div className="life-img-2">
            <img src={imgDoctor} alt="Doctor" />
          </div>
          <div className="life-text">
            <h3>{texts?.life?.doctorTitle}</h3>
            <p className="life-p">{texts?.life?.doctorDesc}</p>
          </div>
        </div>

        <div className="life-row">
          <div className="life-img-1">
            <img src={imgPMS} alt="PMS" />
          </div>
          <div className="life-text">
            <h3>{texts?.life?.pmsTitle}</h3>
            <p className="life-p">{texts?.life?.pmsDesc}</p>
          </div>
        </div>

        <div className="life-row reverse">
          <div className="life-text">
            <h3>{texts?.life?.canalTitle}</h3>
            <p className="life-p">{texts?.life?.canalDesc}</p>
            <br></br><br></br><br></br><br></br>
            <div className="life-img-2">
              <img src={imgCanal} alt="Canal" />
            </div>
          </div>
        </div>

        <div className="life-text">
          <h3>{texts?.life?.irrigationTitle}</h3>
          <p className="life-p">{texts?.life?.irrigationDesc}</p>
        </div><br></br><br></br><br></br>

        <div className="life-row reverse">
          <div className="life-text">
            <h3>{texts?.life?.marwaridTitle}</h3>
            <p className="life-p">{texts?.life?.marwaridDesc}</p>
            <br></br><br></br><br></br><br></br>
            <div className="life-img-2">
              <img src={imgMorwarid} alt="Marwarid" />
            </div>
          </div>
        </div>

        <div className="life-row">
          <div className="life-text">
            <h3>{texts?.life?.honorTitle}</h3>
            <p className="life-p">{texts?.life?.honorDesc}</p>
            <br></br><br></br><br></br><br></br>
            <div className="life-img-1">
              <img src={hoyat} alt="Honor" />
            </div>
          </div>
        </div>

        <div className="life-row reverse">
          <div className="life-text">
            <h3>{texts?.life?.deathTitle}</h3>
            <p className="life-p">{texts?.life?.deathDesc}</p>
            <div className="life-img-2 death">
              <img src={imgMemorial} alt="Memorial" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Life;
