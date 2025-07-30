import React from 'react';
import '../CSS/quotes.css';
import quoteImg1 from '../images/png2.png';
import quoteImg2 from '../images/png1.png';
import { useLanguage } from '../context/LanguageContext';

const Quotes = () => {
  const { texts, dir } = useLanguage();

  return (
    <div style={{ direction: dir }}>
      <div className="honor-quotes left-img">
        <div className="quote-img">
          <img src={quoteImg1} alt="Quote background" />
        </div>
        <div className="quote-text">
          <span className="quote-mark">“</span>
          <p>{texts?.quotes?.quote1}</p>
          <span className="quote-author">— Dr. Tetsu Nakamura</span>
        </div>
      </div>
      <div className="honor-quotes right-img">
        <div className="quote-img">
          <img src={quoteImg2} alt="Quote background" />
        </div>
        <div className="quote-text">
          <span className="quote-mark">“</span>
          <p>{texts?.quotes?.quote2}</p>
          <span className="quote-author">— Dr. Tetsu Nakamura</span>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
