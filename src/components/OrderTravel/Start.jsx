import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../header";

const Start = () => {
  
  const {t} = useTranslation();

  return (
    <div>
     <Header
        title={t('travel_ser_top_header')}
        className="min-h-screen flex flex-col items-center"
      />
      <main className="flex-grow m-[300px] flex flex-col items-center justify-center">
        <div className="bg-[#e4d0e4] rounded-full p-6 mb-5 flex items-center justify-center">
          <div className="bg-[#cea5ce] rounded-full p-6 mb-5 flex items-center justify-center">
            <Link to="/order_travel/add1/">
              <div className="bg-[#800080] rounded-full p-6 mb-5 flex items-center justify-center">
                <button className="bg-[#800080] text-white text-4xl p-5 rounded-full">
                  +
                </button>
              </div>
            </Link>
          </div>
        </div>
        <p className="flex flex-cols-1 h-full text-gray-700 font-bold text-lg mb-[50px]">
         {t('order_travel_start_1')}
        </p>
        <p className="text-gray-800 font-bold text-xl">
           {t('order_travel_start_2')}
        </p>
      </main>
    </div>
  );
};

export default Start;
