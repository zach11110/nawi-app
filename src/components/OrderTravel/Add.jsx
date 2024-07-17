import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import { FaCalendarAlt, FaPhone } from "react-icons/fa";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Add = () => {

  const {t} = useTranslation();

  return (
    <div>
      <Header title={t('travel_ser_top_header')} className=" flex flex-col items-center" />

      <div className="flex flex-col items-center justify-center min-h-screen text-right bg-gray-100">
        <div className="p-8 w-full max-w-md">
        <div className="mb-4">
            <label className="block text-gray-700 p-2">{t('order_travel_add')}</label>
            <div className="flex items-center mb-[100px] ">
              <textarea  className=" text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
                 focus:border-purple-800 transition-colors appearance-none h-48 w-full"
                type="text"
                placeholder={t('order_travel_add2')}>
               
                </textarea>
            </div>
          </div>


          <div className="mb-4">
            <label className="block text-black font-semibold p-2">{t('order_travel_num')}</label>
            <div className="flex items-center py-2 mb-[40px] border-2 rounded-full">
              <input
                className="appearance-none  text-right bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder={t('order_travel_num')}
              />
              <FaPhone className="text-gray-400 mr-3" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 p-2">{t('order_travel_price')}</label>
            <div className="flex items-center py-2 border-2 rounded-full">
              <input
                className="appearance-none bg-transparent text-right border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder={t('order_travel_price2')}
              />
              <FaCalendarAlt className="text-gray-400 mr-3" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              {t('travel_ser_des_order')}
            </button>
            <button
              className="bg-[#FFA500]  hover:bg-[#FFA500] text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              {t('add1_vehicle_next')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
