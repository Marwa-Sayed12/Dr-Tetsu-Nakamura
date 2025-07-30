import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Gallery.css';
import img1 from '../images/gallery/award3.jpg';
import img2 from '../images/gallery/goryak.jpg';
import img3 from '../images/gallery/2019.jpg';
import img4 from '../images/gallery/x-ray.jpg';
import img5 from '../images/gallery/pms.jpg';
import img6 from '../images/gallery/img2.jpg';
import img7 from '../images/gallery/kar.jpg';
import img8 from '../images/gallery/2016.jpg';
import img9 from '../images/projects/2018.jpg';
import img10 from '../images/gallery/img12.jpg';
import img11 from '../images/gallery/img10.jpg';
import img12 from '../images/marg.jpg';



import { useLanguage } from '../context/LanguageContext'; 

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
 
  const { texts, dir } = useLanguage(); 

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => resetTimeout();
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="gallery-section" style={{ direction: dir }}>
      <h2 className="section-title">{texts?.gallery?.['gallery.title']}</h2>

      <div className="slider-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? 'active' : ''}`}
          >
            <img src={img} alt={`Gallery ${index + 1}`} />
            <div className="caption">
              <p>{texts?.gallery?.[`gallery.cap${index + 1}`]}</p>
            </div>
          </div>
        ))}

        <button className="nav-arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav-arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Gallery;
