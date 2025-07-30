import React,{useEffect} from 'react';
import '../CSS/projects.css';
import { useLanguage } from '../context/LanguageContext';

import canal1 from '../images/projects/2018.jpg';
import canal2 from '../images/projects/canal1.jpg';
import canal3 from '../images/projects/canal2.jpg';
import canal4 from '../images/projects/canal3.jpg';
import canal5 from '../images/projects/canal4.jpg';
import canal6 from '../images/projects/canal5.jpg';
import canal7 from '../images/projects/canal6.jpg';
import canal8 from '../images/projects/canal7.jpg';
import canal9 from '../images/projects/canal8.jpg';


import farm from '../images/impact/farm.jpg';
import farm2 from '../images/projects/img-12.jpeg';
import farm3 from '../images/projects/farm1.jpg';
import farm4 from '../images/projects/farm2.jpg';
import farm5 from '../images/projects/c1.jpg';
import farm6 from '../images/projects/c2.jpg';


import hospital from '../images/projects/doc2.jpg';
import people from '../images/impact/people helped.jpg';

import m1 from '../images/masjid/masjid1.jpg';
import m2 from '../images/masjid/masjid2.jpg';
import m3 from '../images/masjid/masjid3.jpg';
import m4 from '../images/masjid/masjid4.jpg';
import m5 from '../images/masjid/masjid5.jpg';
import m6 from '../images/masjid/masjid6.jpg';
import m7 from '../images/masjid/masjid7.jpg';
import m8 from '../images/masjid/masjid9.jpg';

import darlolom from '../images/darolom.jpg';


const canalImages = [canal1, canal2, canal3, canal4, canal5, canal6, canal7, canal8, canal9];



const Projects = () => {
  const { texts, dir, lang } = useLanguage();

  useEffect(() => {
    document.body.setAttribute("lang", lang); 
  }, [lang]);
  
  
  return (
    <section id="projects" className="projects-section" style={{ direction: dir }}>
      <h2 className="section-title">{texts?.projects?.title}</h2>

      <div className="project-block">
        <div className="project-text-farm">
          <h3>{texts?.projects?.farmTitle}</h3>
          <p>{texts?.projects?.farmDesc}</p>
        </div>

        <div className="project-img-farm">
          <img src={farm} alt="Farmland project" />
          <img src={farm2} alt="Farmland project" />          
          <img src={farm5} alt="Farmland project" />         

        </div><br></br><br></br><br></br><br></br>

        <div className="project-text-farm">
          <p>{texts?.projects?.farmDesc1}</p>
          <p>{texts?.projects?.farmDesc2}</p>

        </div>
        <div className="project-img-farm-2">
          <img src={farm3} alt="Farmland project" />
          <img src={farm4} alt="Farmland project" />
          <img src={farm6} alt="Farmland project" />         

        </div>
      </div>

      <div className="project-block">
        <div className="project-text-hos">
          <h3>{texts?.projects?.hospitalTitle}</h3>
          <p>{texts?.projects?.hospitalDesc}</p>
        </div>
        <div className="project-img">
          <img src={hospital} alt="Hospital project" />
        </div>
      </div>

      <div className="project-block">
        <div className="project-text-masjid">
          <h3>{texts?.projects?.mosqueTitle}</h3>
          <p>{texts?.projects?.mosqueDesc}</p>
        </div>
        <div className="project-img-masjid">
          {[m1, m2, m3, m4, m5, m6, m7, m8].map((src, i) => (
            <img key={i} src={src} alt={`Mosque project ${i + 1}`} />
          ))}
        </div>
      </div>
      <div className="project-block">
        <div className="project-text-hos">
          <h3>{texts?.projects?.olomTitle}</h3>
          <p>{texts?.projects?.olomDesc}</p>
        </div>
        <div className="project-img">
            <img  src={darlolom} alt='olom'/>
        
        </div>
      </div>

      <div className="project-block">
        <div className="project-text-hos">
          <h3>{texts?.projects?.peopleTitle}</h3>
          <p>{texts?.projects?.peopleDesc}</p>
        </div>
        <div className="project-img">
          <img src={people} alt="People helped" />
        </div>
      </div>

      <div className="project-block">
        <div className="project-text-masjid">
          <h3>{texts?.projects?.canalTitle}</h3>
          <p>{texts?.projects?.canalDesc}</p>
        </div>

        <div className="project-img-canal">
          <img src={canal1} alt='canal1'/>
          <img src={canal2} alt='canal1'/>
          <img src={canal3} alt='canal1'/>
</div>

  <div className="project-text-masjid">
          <p>{texts?.projects?.canalDesc1}</p>
        </div>
        <div className="project-img-canal">
          <img src={canal4} alt='canal1'/>
          <img src={canal5} alt='canal1'/>
          <img src={canal6} alt='canal1'/>
</div>

       

  <div className="project-text-masjid">
          <p>{texts?.projects?.canalDesc2}</p>
        </div>
       
        <div className="project-img-canal imgB">
          <img src={canal7} alt='canal1'/>
          <img src={canal8} alt='canal1'/>
          <img src={canal9} alt='canal1'/>
</div>

      </div>
    </section>
  );
};

export default Projects;
