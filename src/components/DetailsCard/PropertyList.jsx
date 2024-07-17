// src/components/PropertyList.jsx
import React from 'react';
import PropertyCard from './SimilarCards';
import Flat1 from "../../assets/Images/Flat1.png";
import Flat2 from "../../assets/Images/Flat2.png";
import { useTranslation } from 'react-i18next';



const PropertyList = () => {

  const {t} = useTranslation();

  const properties = [
    {
      image: Flat1,
      title: t('property_name'),
      location: t('property_loc'),
      price: t('property_price'),
      rooms: '3 غرف',
      baths: '2 حمام',
      rating: 3.2,
      status: t('property_license')
    },
    {
      image: Flat2,
      title: 'شقة سكنية للاجار',
      location: 'شارع الملك سعود - جدة',
      price: '5300 ريال',
      rooms: '3 غرف',
      baths: '2 حمام',
      rating: 4.9,
      status: 'مرخص'
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;