import React from "react";
import { useTranslation } from "react-i18next";


const Description = ({setDes}) => {
  
  const {t} = useTranslation();

  return (
    
    <div className="flex justify-center items-start h-[50px] w-full">
      <ul className="flex rounded-2xl mt-[20px] pl-5 justify-center space-x-8 font-semibold text-3xl">
        <div>
          <li className="px-[50px]">
            <button
              className="py-4 px-10 focus:outline-none hover:border-b-2 border-[#800080] w-[300px] hover:text-[#800080] transition-colors duration-300 ease-in-out"
              onClick={() => setDes(0)}
            >
              {t('prpo_ser_des_men')}
            </button>
          </li>
        </div>
        <div>
          <li className="px-[50px]">
            <button
              className="py-4 px-10 focus:outline-none hover:border-b-2 border-[#800080] w-[300px] hover:text-[#800080] transition-colors duration-300 ease-in-out"
              onClick={() => setDes(1)}
            >
              {t('prpo_ser_des_women')}
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Description;
