// src/components/PropertyList.jsx
import React from 'react';
import PropertyCard from './SimilarCards';
import Flat1 from "../../assets/ImagesOrdertravels/1.png";
import Flat2 from "../../assets/ImagesOrdertravels/2.png";
import { useTranslation } from 'react-i18next';



const TravelOrderList = () => {

  const {t} = useTranslation();

  const travels = [
    {
      image: Flat1,
      title: ' شقة سكنية للبيع',
      location: 'مصر - جيزة',
      price: '35500 ريال',
      rating: 4.6,
      rooms: t('add_property_bedroom'),
      baths : t('add_property_bathroom'),
      status : "مرخص",
    },
    {
      image: Flat2,
      title: ' شقة سكنية للايجار',
      location: 'الإمارات - دبي',
      price: '3500 ريال',
      rating: 3.2,
      rooms: "3 غرف",
      baths : "2 حمام",
      status : "غير مرخص",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {travels.map((travel, index) => (
          <PropertyCard key={index} {...travel} />
        ))}
      </div>
    </div>
  );
};

export default TravelOrderList;