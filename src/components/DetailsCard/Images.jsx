import React from "react";
import Laptop from "../../assets/Images/Flat1.png";
import Nawi from "../../assets/Images/Flat2.png";
import { useTranslation } from "react-i18next";

const images = [Laptop, Nawi, Laptop, Nawi, Laptop, Nawi, Laptop, Nawi, Laptop];

const Images = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex justify-between items-center">
          {t('des_card_flat_img')} 
          <span className="text-[#800080]">(6)</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <img
              src={image}
              alt={`Property ${index + 1}`}
              className="object-cover w-full h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;