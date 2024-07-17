import React from "react";
import { useTranslation } from "react-i18next";
import { FaKey, FaCar, FaHome, FaMapMarkerAlt, FaBell, FaMicrophone, FaCamera, FaSearch } from "react-icons/fa";

const SearchVehicle = () => {
  const { t } = useTranslation();

  const filterOptions = [
    { icon: <FaKey />, label: t('navbar_rent') },
    { icon: <FaCar />, label: t('navbar_selling') },
    { icon: <FaHome />, label: t('navbar_buying') },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        {/* Filter */}
        <div className="w-full md:w-auto">
          <div className="flex justify-center bg-white rounded-full shadow-md p-2">
            {filterOptions.map((option, index) => (
              <button
                key={index}
                className="flex items-center px-4 py-2 rounded-full hover:bg-purple-100 transition-colors duration-200"
              >
                {React.cloneElement(option.icon, { className: "mr-2 text-purple-600" })}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="w-full md:w-64">
          <div className="relative">
            <select className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-full py-3 px-4 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option>{t('search_loc')}</option>
            </select>
            <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Notification */}
        <div className="w-full md:w-auto flex justify-center">
          <button className="bg-white border-2 border-green-400 rounded-full p-2 hover:bg-green-100 transition-colors duration-200">
            <FaBell className="text-gray-600 text-xl" />
          </button>
        </div>

        {/* Search */}
        <div className="w-full md:w-96">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-full py-3 px-4 pr-12 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder={t('search_btn_car')}
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <FaMicrophone className="text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <FaCamera className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVehicle;