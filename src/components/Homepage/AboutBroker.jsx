import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";

const AboutBroker = () => {
  return (
    <div className="grid grid-cols-1 w-full h-auto mx-auto p-[80px] rounded-lg">
      <p className="text-2xl text-center text-gray-800 ml-[27px] font-medium pr-12 space-y-1 tracking-wide leading-loose">
       {t('about_b_h')}
      </p>

      <div className="mt-8">
        <h3 className="text-center pl-12 text-lg font-bold">{t('about_b_address')}</h3>
        <div className="mt-4">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Map"
            className="w-full md:w-1/2 mx-auto rounded-lg"
          />
        </div>
      </div>
      <div className="text-center mb-[-103px]">
        <Link to="">
          <button className="bg-[#FFA500] ml-[50px] hover:bg-amber-500 text-[#fff] w-[220px] rounded-full font-medium my-6 md:py-3 text-[23px]">
            {t('about_b_now')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutBroker;
