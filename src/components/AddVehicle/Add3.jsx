import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
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

  const handleChange3= () => {
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

  const [isChecked6, setIsChecked6] = useState(false);

  const handleChange6 = () => {
    setIsChecked6(!isChecked6);
  };


  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const [countries1, setCountries1] = useState(null);
  const [inputValue1, setInputValue1] = useState("");
  const [selected1, setSelected1] = useState("");
  const [open1, setOpen1] = useState(false);

  const [countries2, setCountries2] = useState(null);
  const [inputValue2, setInputValue2] = useState("");
  const [selected2, setSelected2] = useState("");
  const [open2, setOpen2] = useState(false);

  // useEffect(() => {
  //   fetch("https://restcountries.com/v2/all?fields=name")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountries(data);
  //     });
  // }, []);
  const {t} = useTranslation();

  return (
    <div className="bg-[#EBEAFA]">
      <div className="p-8 rounded-2xl focus:bg-[#800080] focus:text-white max-w-3xl mx-auto">
        <h2 className="text-3xl focus:bg-[#800080] focus:text-white font-semibold text-center mb-[70px] mr-[90px]">
        {t('add1_vehicle_wel')} <span>{t('add1_vehicle_name')}</span>{t('add1_vehicle_fill')}
        </h2>
        <h3 className="text-[26px] font-black mb-[80px] mr-[-25px] text-right">
        {t('add3_vehicle_exter')}
        </h3>
        <div className="col-span-1 md:col-span-2 text-right">
          <h3 className="text-xl font-semibold mb-[-43px]">
          {t('add3_vehicle_color')}
          </h3>

          <div className="w-[60%] font-medium h-36 rounded-full">
            <div
              onClick={() => setOpen(!open)}
              className={`bg-white w-full p-2 flex items-center justify-between border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors appearance-none ${
                 !selected && "text-gray-700"
               }`}
            >
              <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
              {selected
                ? selected?.length > 25
                  ? selected?.substring(0, 25) + "..."
                  : selected
                : t('add3_vehicle_color2')}
            </div>
            <ul
              className={`bg-white mt-2 overflow-y-auto ${
                open ? "max-h-[100px]" : "max-h-0"
              } `}
            >
              <div className="flex items-center px-1 sticky top-0 bg-white">
                <AiOutlineSearch size={18} className="text-gray-700" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                  placeholder={t('add1_vehicle_enter')}
                  className="placeholder:text-[#FFA500] p-2 outline-none"
                />
              </div>
              {countries?.map((country) => (
                <li
                  key={country?.name}
                  className={`p-2 text-sm hover:bg-[#800080] hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
                  onClick={() => {
                    if (
                      country?.name?.toLowerCase() !== selected.toLowerCase()
                    ) {
                      setSelected(country?.name);
                      setOpen(false);
                      setInputValue("");
                    }
                  }}
                >
                  {country?.name}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-[-43px]">{t('add2_vehicle_chassi')}</h3>

          <div className="w-[60%] font-medium h-36 rounded-full">
            <div
              onClick={() => setOpen1(!open1)}
              className={`bg-white w-full p-2 flex items-center justify-between border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors appearance-none ${
                 !selected1 && "text-gray-700"
               }`}
            >
              <BiChevronDown size={20} className={`${open1 && "rotate-180"}`} />
              {selected1
                ? selected1?.length > 25
                  ? selected1?.substring(0, 25) + "..."
                  : selected1
                : "Hback"}
            </div>
            <ul
              className={`bg-white mt-2 overflow-y-auto ${
                open1 ? "max-h-[100px]" : "max-h-0"
              } `}
            >
              <div className="flex items-center px-1 sticky top-0 bg-white">
                <AiOutlineSearch size={18} className="text-gray-700" />
                <input
                  type="text"
                  value={inputValue1}
                  onChange={(e) => setInputValue1(e.target.value.toLowerCase())}
                  placeholder={t('add2_vehicle_chassi2')}
                  className="placeholder:text-[#FFA500]  p-2 outline-none"
                />
              </div>
              {countries1?.map((country1) => (
                <li
                  key={country1?.name}
                  className={`p-2 text-sm hover:bg-[#800080] hover:text-white
            ${
              country1?.name?.toLowerCase() === selected1?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country1?.name?.toLowerCase().startsWith(inputValue1)
                ? "block"
                : "hidden"
            }`}
                  onClick={() => {
                    if (
                      country1?.name?.toLowerCase() !== selected1.toLowerCase()
                    ) {
                      setSelected1(country1?.name);
                      setOpen1(false);
                      setInputValue1("");
                    }
                  }}
                >
                  {country1?.name}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-[-43px]">{t('add3_vehicle_state')}</h3>

          <div className="w-[60%] font-medium h-36 rounded-full">
            <div
              onClick={() => setOpen2(!open2)}
              className={`bg-white w-full p-2 flex items-center justify-between border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors appearance-none ${
                 !selected2 && "text-gray-700"
               }`}
            >
              <BiChevronDown size={20} className={`${open2 && "rotate-180"}`} />
              {selected2
                ? selected2?.length > 25
                  ? selected2?.substring(0, 25) + "..."
                  : selected2
                : t('add3_vehicle_state2')}
            </div>
            <ul
              className={`bg-white mt-2 overflow-y-auto ${
                open2 ? "max-h-[100px]" : "max-h-0"
              } `}
            >
              <div className="flex items-center px-1 sticky top-0 bg-white">
                <AiOutlineSearch size={18} className="text-gray-700" />
                <input
                  type="text"
                  value={inputValue2}
                  onChange={(e) => setInputValue2(e.target.value.toLowerCase())}
                  placeholder={t('add3_vehicle_state3')}
                  className="placeholder:text-[#FFA500]  p-2 outline-none"
                />
              </div>
              {countries1?.map((country2) => (
                <li
                  key={country2?.name}
                  className={`p-2 text-sm hover:bg-[#800080] hover:text-white
            ${
              country2?.name?.toLowerCase() === selected2?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country2?.name?.toLowerCase().startsWith(inputValue2)
                ? "block"
                : "hidden"
            }`}
                  onClick={() => {
                    if (
                      country2?.name?.toLowerCase() !== selected2.toLowerCase()
                    ) {
                      setSelected2(country2?.name);
                      setOpen2(false);
                      setInputValue2("");
                    }
                  }}
                >
                  {country2?.name}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-[26px] font-black mb-[80px] mr-[-25px] text-right">
           {t('add3_vehicle_featu')}
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
                <span className="text-lg font-normal text-gray-800">{t('add3_vehicle_lamp')}</span>
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
                <span className="text-lg font-normal text-gray-800">{t('add3_vehicle_tire')}</span>
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
                <span className="text-lg font-normal text-gray-800">{t('add3_vehicle_mirr')}</span>
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
                <span className="text-lg font-normal text-gray-800">{t('add3_vehicle_windw')}</span>
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
                <span className="text-lg font-normal text-gray-800">{t('add3_vehicle_panor')}</span>
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
                <span className="text-lg font-normal text-gray-800">{t('add3_vehicle_light')}</span>
              </label>
            </div>

            <div className="flex col-span-1 items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked6}
                  onChange={handleChange6}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    isChecked6
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {isChecked6 && (
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
                <span className="text-lg font-normal text-gray-800">{t('add3_vehicle_orig')}</span>
              </label>
            </div>

            
          </div>
        </div>

        <Link to="/vehicle/add4">
          <button
            type="submit"
            className="bg-[#FFA500] ml-[77px] hover:bg-amber-500 text-[#fff] w-[230px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[23px]"
          >
            {t('add1_vehicle_next')}
          </button>
        </Link>

        <Link to="/vehicle/add2">
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
        <h3 className="text-center mr-[160px] font-medium">3/6</h3>
      </div>
    </div>
  );
};

export default Add3;
