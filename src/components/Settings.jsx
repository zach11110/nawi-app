import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setStoredLanguage, getStoredLanguage } from "../store/languageStore";

function Settings() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const currentLanguage = getStoredLanguage();
    setSelected(currentLanguage === "en" ? "English" : "العربية");
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setStoredLanguage(language);
    setSelected(language === "en" ? "English" : "العربية");
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-[rgb(235,234,250)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('settings_title')}</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">{t('setting_lan')}</h3>
          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="bg-white w-full p-3 flex items-center justify-between border rounded-md cursor-pointer"
            >
              <span>{selected || t('setting_ar')}</span>
              <BiChevronDown size={20} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </div>
            {open && (
              <ul className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                <li
                  className="p-3 hover:bg-[#800080] hover:text-white cursor-pointer transition-colors duration-200"
                  onClick={() => changeLanguage("en")}
                >
                  {t('setting_en')}
                </li>
                <li
                  className="p-3 hover:bg-[#800080] hover:text-white cursor-pointer transition-colors duration-200"
                  onClick={() => changeLanguage("ar")}
                >
                  {t('setting_ar')}
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">{t('setting_pa')}</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#800080]"
            placeholder="••••••••"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/Profile" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto py-3 px-6 bg-white text-[#800080] border border-[#800080] rounded-full hover:bg-[#800080] hover:text-white transition-colors duration-300">
              {t('content_back')}
            </button>
          </Link>
          <button className="w-full sm:w-auto py-3 px-6 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition-colors duration-300">
            {t('content_sure')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;