import React from "react";
import Laptop from "../assets/Images/nawi.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CategoriesType = () => {
  const { t } = useTranslation();

  const categories = [
    { title: 'catrgory_safe', description: 'category_we' },
    { title: 'category_best', description: 'category_best2' },
    { title: 'section_law', description: 'section_cast' },
    { title: 'section_all', description: 'section_all2' },
  ];

  return (
    <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {t('category_choose')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              title={t(category.title)}
              description={t(category.description)}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/choose_categories/homepage_properties/">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#FFA500] hover:bg-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFA500] transition duration-150 ease-in-out"
            >
              {t('category_btn')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
    <div className="p-6">
      <img src={Laptop} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
);

export default CategoriesType;