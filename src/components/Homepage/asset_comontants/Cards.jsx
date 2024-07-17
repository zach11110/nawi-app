import React from "react";
import Laptop from "../../../assets/Images/laptop.jpg";
import { Link } from "react-router-dom";
import { FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

const Cards = ({ title, isSpecial }) => {
  const cardData = [
    {
      id: 1,
      image: Laptop,
      price: 25000,
      title: "شقة للإيجار",
      location: "الرياض - شارع الملك سلمان",
      area: "5 x 7",
      baths: 2,
      rooms: 3,
    },
    // Add more card data as needed
  ];

  return (
    <div className="bg-[#e5c3f3] py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-right mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <Card key={card.id} {...card} isSpecial={isSpecial} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="#"
          className="inline-block bg-[#800080] hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out"
        >
          تصفح عقارات أخرى
        </Link>
      </div>
    </div>
  );
};

const Card = ({ image, price, title, location, area, baths, rooms, isSpecial }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 ease-in-out">
        <FaHeart className="text-purple-600" />
      </button>
      {isSpecial && (
        <span className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          مميز
        </span>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-purple-600 font-bold text-xl">{price} ريال</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 text-right flex items-center justify-end mb-4">
        <FaMapMarkerAlt className="ml-1" /> {location}
      </p>
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <span className="flex items-center"><FaRulerCombined className="mr-1" /> {area} م²</span>
        <span className="flex items-center"><FaBath className="mr-1" /> {baths} حمام</span>
        <span className="flex items-center"><FaBed className="mr-1" /> {rooms} غرف</span>
      </div>
      <Link
        to="/details_cards_property/"
        className="block text-center bg-gray-100 hover:bg-gray-200 text-purple-600 font-medium py-2 rounded transition duration-300 ease-in-out"
      >
        عرض التفاصيل
      </Link>
    </div>
  </div>
);

export default Cards;