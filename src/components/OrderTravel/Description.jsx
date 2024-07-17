import React from "react";
import { useTranslation } from "react-i18next";

const Description = ({ setDes }) => {

  const {t} = useTranslation();

  return (
    <div className="flex justify-center items-start h-[50px] w-full">
      <ul className="flex bg-white rounded-full mt-[20px] p-2 space-x-12 font-semibold">
        <div className="">
          <li className="">
            <button
              className="py-4 px-10 rounded-full border-[#800080] hover:text-white hover:bg-[#800080]"
              style={{ transition: "all .15s ease" }}
              onClick={() => setDes(2)}
            >
               {t('travel_ser_des1')}
            </button>
          </li>
        </div>
        <div>
          <li className="">
            <button
              className="py-4 px-10 rounded-full border-[#800080] hover:text-white hover:bg-[#800080]"
              style={{ transition: "all .15s ease" }}
              onClick={() => setDes(1)}
            >
               {t('travel_ser_des2')}
            </button>
          </li>
        </div>
        <div>
          <li className="">
            <button
              className="py-4 px-10 rounded-full border-[#800080] hover:text-white hover:bg-[#800080]"
              style={{ transition: "all .15s ease" }}
              onClick={() => setDes(0)}
            >
               {t('travel_ser_des3')}
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Description;
