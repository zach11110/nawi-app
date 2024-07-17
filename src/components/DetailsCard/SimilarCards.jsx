import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { BsTextareaResize } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const SimilarCards = ({
  id,
  image,
  title,
  location,
  price,
  rooms,
  baths,
  rating,
  status,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={title}
        />
        <span
          className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold ${
            status === "مرخص"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-right">{title}</h3>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">{location}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-blue-600">{price}</span>
          <div className="flex space-x-3 text-sm text-gray-600">
            <div className="flex items-center">
              <BsTextareaResize className="mr-1 text-[#800080]" />
              <span>5x7</span>
            </div>
            <div className="flex items-center">
              <FaBath className="mr-1 text-[#800080]" />
              <span>{baths}</span>
            </div>
            <div className="flex items-center">
              <FaBed className="mr-1 text-[#800080]" />
              <span>{rooms}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarCards;