import React from "react";
import Laptop from "../assets/Images/nawi.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { title: 'hero_users_count', description: 'hero_services' },
    { title: 'hero_properties', description: 'hero_houses', titleColor: 'text-[#1c0080]' },
    { title: 'hero_travel', description: 'hero_moretravel' },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-purple-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold">
              {t('hero_header')}{' '}
              <span className="text-[#800080]">{t('hero_header2')}</span>
            </h1>
            <p className="text-xl sm:text-2xl">{t('hero_header3')}</p>
            <Link to="/choose_categories">
              <button className="bg-[#FFA500] hover:bg-amber-500 text-white w-full sm:w-auto px-8 py-3 rounded-full font-medium text-xl sm:text-2xl transition duration-300">
                {t('hero_let_go')}
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img className="w-full max-w-md h-auto" src={Laptop} alt="Hero" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="mt-16 text-center sm:text-left">
          <p className="text-2xl font-bold flex flex-col sm:flex-row items-center justify-center sm:justify-start">
            <Link to="/choose_categories">
              <button className="bg-gray-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md font-normal text-xl transition duration-300 mb-4 sm:mb-0 sm:mr-4">
                {t('hero_serv')}
              </button>
            </Link>
            <span>{t('hero_new_way')}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, description, titleColor = 'text-[#800080]' }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center">
      <img src={Laptop} alt={title} className="w-16 h-12 mb-4" />
      <h3 className={`text-lg font-medium ${titleColor}`}>{t(title)}</h3>
      <p className="text-base text-gray-600 mt-1">{t(description)}</p>
    </div>
  );
};

export default Hero;