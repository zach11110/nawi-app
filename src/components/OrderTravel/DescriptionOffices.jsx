import React from "react";
import { useTranslation } from "react-i18next";

const DescriptionOffices = ({ setDes }) => {

  const {t} = useTranslation();

  return (
    
    <div className="flex justify-center items-start h-full mt-[-265px] w-full">
      <ul className="flex bg-white rounded-full p-2 space-x-12 font-semibold">
        <div className="">
          <li className="">
            <button
              className="py-4 px-[80px] rounded-full border-[#800080] hover:text-white hover:bg-[#800080] transition-colors duration-300 ease-in-out"
              style={{ transition: "all .15s ease" }}
              onClick={() => setDes(1)}
            >
               {t('travelOffice_des1')}
            </button>
          </li>
        </div>
        <div>
          <li className="">
            <button
              className="py-4 px-[80px] rounded-full border-[#800080] hover:text-white hover:bg-[#800080] transition-colors duration-300 ease-in-out"
              style={{ transition: "all .15s ease" }}
              onClick={() => setDes(0)}
            >
               {t('des_card_flat_des')}
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default DescriptionOffices;
