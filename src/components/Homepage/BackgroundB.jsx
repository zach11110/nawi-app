import React from "react";
import image from "../../assets/ImagesBrokers/broker.jpg";
import { FaShareAlt, FaArrowRight, FaRegHeart, FaQrcode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BackgroundB = () => {

  const {t} = useTranslation();

  return (
    <div className="w-full h-screen">
      <div
        className="w-full h-96 bg-contain bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="flex space-x-[20px]  mt-4 absolute right-[160px]">
          <Link to="">
            <div className="border-2 p-2 bg-white rounded-full">
              <button className="flex items-center text-gray-600">
                <FaRegHeart className="size-7 text-black" />
              </button>
            </div>
          </Link>

          <Link to="">
            <div className="border-2 p-2 bg-white rounded-full">
              <button className="flex items-center text-gray-600">
                <FaShareAlt className="size-7 text-black" />
              </button>
            </div>
          </Link>

          <Link to="">
            <div className="border-2 p-2 bg-white rounded-full">
              <button className="flex items-center text-gray-600">
                <FaQrcode className="size-7 text-black" />
              </button>
            </div>
          </Link>

          <Link to="">
            <div className="border-2 p-2 ml-[20px] bg-white rounded-full">
              <button className="flex items-center text-gray-600">
                <FaArrowRight className="size-7 text-black" />
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-white mb-[40px]">
          <p className="text-right pr-8 pt-2 font-bold text-[27px]">
           {t('back_b_name')}
          </p>
          <p className="text-left pr-8 pl-4 mt-[-25px] text-[#800080] text-[18px] font-medium">
             {t('back_b_h2')}
          </p>
        
        <p className="text-right pr-8 p-2 text-gray-600 text-[18px]">
          {t('back_b_loc')}
        </p>
      </div>
    </div>
  );
};

export default BackgroundB;
