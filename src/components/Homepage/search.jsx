import React from "react";
import { FaSearch, FaHome, FaBuilding, FaKey } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdLocationOn, MdMic, MdCamera } from "react-icons/md";

const Search = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {/* Filter */}
        <div className="w-full">
          <div className="bg-white rounded-full shadow-md flex justify-between items-center p-2">
            <FilterButton icon={<FaKey />} text="أجار" />
            <FilterButton icon={<FaBuilding />} text="بيع" />
            <FilterButton icon={<FaHome />} text="شراء" />
          </div>
        </div>

        {/* Location */}
        <div className="w-full">
          <div className="relative">
            <select className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-full py-3 px-4 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option selected>الامارات - دبي</option>
            </select>
            <MdLocationOn className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Notification */}
        <div className="w-full flex justify-center md:justify-end">
          <button className="bg-white border-2 border-green-400 rounded-full p-2 hover:bg-green-100 transition-colors duration-200">
            <IoMdNotifications size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Search */}
        <div className="w-full col-span-1 md:col-span-2 lg:col-span-1">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-full py-3 px-4 pr-12 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="...ابحث عن بيت، شقة"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <MdMic size={20} className="text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <MdCamera size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterButton = ({ icon, text }) => (
  <button className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors duration-200">
    {icon}
    <span>{text}</span>
  </button>
);

export default Search;