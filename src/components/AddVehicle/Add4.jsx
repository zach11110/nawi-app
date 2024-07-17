import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Add3 = () => {

  const [isChecked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!isChecked);
  };

  const [isChecked1, setIsChecked1] = useState(false);

  const handleChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const [isChecked2, setIsChecked2] = useState(false);

  const handleChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const [isChecked3, setIsChecked3] = useState(false);

  const handleChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  const [isChecked4, setIsChecked4] = useState(false);

  const handleChange4 = () => {
    setIsChecked4(!isChecked4);
  };

  const [isChecked5, setIsChecked5] = useState(false);

  const handleChange5 = () => {
    setIsChecked5(!isChecked5);
  };

  const {t} = useTranslation();


  // useEffect(() => {
  //   fetch("https://restcountries.com/v2/all?fields=name")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountries(data);
  //     });
  // }, []);

  return (
    <div className="bg-[#EBEAFA]">
      <div className="p-8 rounded-2xl focus:bg-[#800080] focus:text-white max-w-3xl mx-auto">
        <h2 className="text-3xl focus:bg-[#800080] focus:text-white font-semibold text-center mb-[70px] mt-[40px] mr-[90px]">
        {t('add1_vehicle_wel')} <span>{t('add1_vehicle_name')}</span>{t('add1_vehicle_fill')}
        </h2>
        <div className="col-span-1 md:col-span-2 text-right">
          <h3 className="text-[26px] font-black mb-[10px] mr-[22px] text-right">
            {t('add4_vehicle_tech')}
          </h3>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="flex col-span-1 items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    isChecked
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {isChecked && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </span>
                <span className="text-lg font-normal text-gray-800">
                   {t('add4_vehicle_apple')}
                </span>
              </label>
            </div>
            <div className="flex col-span-1 items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked3}
                  onChange={handleChange3}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    isChecked3
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {isChecked3 && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </span>
                <span className="text-lg font-normal text-gray-800">
                   {t('add4_vehicle_scr')}
                </span>
              </label>
            </div>
            <div className="flex col-span-1 items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked1}
                  onChange={handleChange1}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    isChecked1
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {isChecked1 && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </span>
                <span className="text-lg font-normal text-gray-800">
                   {t('add4_vehicle_modes')}
                </span>
              </label>
            </div>
            <div className="flex col-span-1 items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked4}
                  onChange={handleChange4}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    isChecked4
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {isChecked4 && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </span>
                <span className="text-lg font-normal text-gray-800">
                   {t('add4_vehicle_cam')}
                </span>
              </label>
            </div>
            <div className="flex col-span-1 items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked2}
                  onChange={handleChange2}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    isChecked2
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {isChecked2 && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </span>
                <span className="text-lg font-normal text-gray-800">
                   {t('add4_vehicle_speed')}
                </span>
              </label>
            </div>
            <div className="flex col-span-1 items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked5}
                  onChange={handleChange5}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    isChecked5
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {isChecked5 && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </span>
                <span className="text-lg font-normal text-gray-800">
                    {t('add4_vehicle_blu')}
                </span>
              </label>
            </div>
          </div>
        </div>

        <Link to="/vehicle/add5">
          <button
            type="submit"
            className="bg-[#FFA500] ml-[77px] hover:bg-amber-500 text-[#fff] w-[230px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[23px]"
          >
            {t('add1_vehicle_next')}
          </button>
        </Link>

        <Link to="/vehicle/add3">
          <div className=" mt-[30px] ml-[30px] bg-white rounded-full w-10 h-10 p-3 flex justify-center float-left hover:bg-[#FFA500]">
            <svg
              width="15"
              height="20"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.24023 14.48L1.76023 7.99998L8.24023 1.51998"
                stroke="#000"
                stroke-width="1.6"
              />
            </svg>
          </div>
        </Link>
        <h3 className="text-center mr-[160px] font-medium">4/6</h3>
      </div>
    </div>
  );
};

export default Add3;
