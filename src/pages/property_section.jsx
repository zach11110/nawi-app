import React from "react";
import image from "../assets/Images/nawi.svg";
import { useTranslation } from "react-i18next";

const Property_section = () => {
  const { t } = useTranslation();

  const features = [
    { title: 'section_safe', description: 'section_we' },
    { title: 'section_law', description: 'section_cast' },
    { title: 'section_best_cast', description: 'section_best_cast2' },
    { title: 'section_all', description: 'section_all2' },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-right mb-8">
          {t('hero_header')}{' '}
          <span className="text-[#800080]">{t('hero_header2')}</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-purple-200 rounded-3xl p-8 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{t('hero_header3')}</h3>
            <p className="text-gray-600 mb-6">{t('section_search')}</p>
            <button className="bg-[#FFA500] hover:bg-amber-500 text-white px-6 py-2 rounded-full font-medium text-lg transition duration-300">
              {t('section_serv')}
            </button>
            <img src={image} alt="Property" className="mt-8 w-full h-auto" />
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start">
      <img src={image} alt={title} className="w-16 h-14 mb-4" />
      <h4 className="text-lg font-bold mb-2">{t(title)}</h4>
      <p className="text-gray-600">{t(description)}</p>
    </div>
  );
};

export default Property_section;