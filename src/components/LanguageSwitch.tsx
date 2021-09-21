import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

const LanguageSwitch = () => {
  const { languages, language, originalPath, changeLanguage } = useI18next();
  return (
    <div className="absolute top-0 left-0 m-5 text-black">
      <select readOnly value={language.toUpperCase()} className="w-full h-10 pl-3 pr-6 text-base bg-gray-100 border rounded-lg ">
        {languages.map((lng) => (
          <option onClick={() => changeLanguage(lng, originalPath)} key={lng}>
              {lng.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitch;