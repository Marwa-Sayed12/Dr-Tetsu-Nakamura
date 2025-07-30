import React, { createContext, useContext, useState } from "react";
import en from "../data/en.json";
import ps from "../data/ps.json";
import dr from "../data/dr.json";
import jp from "../data/jp.json";

const LanguageContext = createContext();

const languageData = {
  en: { data: en, dir: "ltr" },
  ps: { data: ps, dir: "rtl" },
  dr: { data: dr, dir: "rtl" },
  jp: { data: jp, dir: "ltr" },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const { data: texts, dir } = languageData[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, texts, dir }}>
      <div dir={dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
