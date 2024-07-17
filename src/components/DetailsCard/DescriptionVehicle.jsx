import React from "react";
import Images from "../../assets/ImagesVehicle/person.png";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

const DescriptionVehicle = () => {

  const {t} = useTranslation();

  return (
    <div className="container mx-auto p-[80px] rounded-lg">
      <p className="text-2xl text-gray-800 text-right font-medium space-x-4 tracking-wide leading-loose">
        {t('des_vehicle_des')}
      </p>
      <div className="w-screen ml-[-145px] rounded-lg">
        <img
          src={"path-to-map-image.jpg"}
          alt="Map"
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <div className="flex items-center p-12 ">
          <img
            src={Images}
            alt="Person"
            className="w-12 h-12 rounded-full  ml-11"
          />
          <div>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              className="ml-[165px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.862 26.9962C17.9147 26.9245 12.3961 26.162 6.61639 20.3848C0.838069 14.6064 0.0767314 9.09016 0.00370796 7.14191C-0.104475 4.1729 2.17007 1.28906 4.79756 0.162841C5.11397 0.0262438 5.46045 -0.0257631 5.80303 0.0119242C6.1456 0.0496114 6.47249 0.175698 6.75161 0.377811C8.91527 1.95425 10.4082 4.3392 11.6902 6.21443C11.9722 6.62643 12.0928 7.12778 12.029 7.62295C11.9651 8.11812 11.7213 8.57251 11.344 8.89952L8.70567 10.8586C8.5782 10.9506 8.48848 11.0858 8.45316 11.2389C8.41785 11.3921 8.43934 11.5529 8.51364 11.6914C9.11135 12.7771 10.1743 14.3941 11.3913 15.6109C12.6097 16.8277 14.3028 17.9607 15.4644 18.6259C15.61 18.7076 15.7815 18.7305 15.9434 18.6897C16.1054 18.649 16.2456 18.5478 16.3353 18.4068L18.0527 15.7934C18.3684 15.3741 18.8342 15.0932 19.3525 15.0095C19.8707 14.9258 20.4013 15.0459 20.833 15.3445C22.7356 16.6614 24.9561 18.1283 26.5815 20.2091C26.8001 20.4902 26.9391 20.8248 26.9841 21.178C27.0291 21.5312 26.9783 21.8899 26.8371 22.2168C25.7053 24.8573 22.8411 27.1057 19.862 26.9962Z"
                fill="#800080"
              />
            </svg>
            <p className="text-gray-600 mt-[-25px]">+966 123 456 789</p>
          </div>
          <div className="ml-auto">
          </div>
          <p className="text-2xl font-bold">{t('des_vehicle_contact')}</p>
        </div>
        <div className="text-center w-full bg-white">
          <span className="mr-[-110px] font-medium">
            {t('des_vehicle_price')}
            <span className="text-2xl">
              <span className="text-blue-600 text-bold text-2xl">
               {t('des_vehicle_price2')}
              </span>
            </span>
          </span>
          <a href="#2">
            <button className="bg-[#FFA500] ml-[130px] hover:bg-amber-500 text-[#fff] w-[220px] rounded-full font-medium my-6 md:py-4 text-[23px]">
             {t('des_vehicle_now')}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DescriptionVehicle;
