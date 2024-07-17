import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
// import axios from 'axios'

const Add1 = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);


  const [horses, setHorses] = useState(null);
  const [inputValue1, setInputValue1] = useState("");
  const [selected1, setSelected1] = useState("");
  const [open1, setOpen1] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const {t} = useTranslation();

  return (
    <div className="bg-[#EBEAFA]">
      <div className="p-8 rounded-2xl focus:bg-[#800080] focus:text-white max-w-3xl mx-auto">
        <h2 className="text-3xl focus:bg-[#800080] focus:text-white font-semibold text-center mb-[70px] mr-[90px]">
        {t('add1_vehicle_wel')} <span>{t('add1_vehicle_name')}</span>{t('add1_vehicle_fill')}
        </h2>
        <h3 className="text-[26px] font-black mb-[20px] mr-[-25px] text-right">
          {t('')}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <br></br>

          <div></div>
          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-43px]">{t('add1_vehicle_state')}</h3>
            <div className="relative flex items-center pb-[40px]">
              <select
                type="text"
                className="w-[60%] border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
                 focus:border-purple-800 transition-colors appearance-none"
              >
                <option value="m">{t('add1_vehicle_used')}</option>
                <option value="n">{t('add1_vehicle_new')}</option>
              </select>
              <div className="absolute left-0 h-full flex items-center pl-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-43px]">{t('add1_vehicle_type')}</h3>
            <div className="relative flex items-center pb-[40px]">
              <select
                type="text"
                className="w-[60%] border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
                 focus:border-purple-800 transition-colors appearance-none"
              >
                <option value="m">{t('add1_vehicle_benz')}</option>
              </select>
              <div className="absolute left-0 h-full flex items-center pl-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-43px]">
            {t('add1_vehicle_model')}
            </h3>
            <div className="relative flex items-center pb-[40px]">
              <select
                type="text"
                className="w-[60%] border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
                 focus:border-purple-800 transition-colors appearance-none"
              >
                <option value="m">{t('add1_vehicle_model2')}</option>
              </select>
              <div className="absolute left-0 h-full flex items-center pl-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-43px]">{t('add1_vehicle_class')}</h3>
            <div className="relative flex items-center pb-[40px]">
              <select
                type="text"
                className="w-[60%] border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
                 focus:border-purple-800 transition-colors appearance-none"
              >
                <option value="m">s432</option>
                <option value="n">g3</option>
              </select>
              <div className="absolute left-0 h-full flex items-center pl-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-43px]">{t('add1_vehicle_year')}</h3>
            <div className="relative flex items-center pb-[40px]">
              <select
                type="text"
                className="w-[60%] border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
                 focus:border-purple-800 transition-colors appearance-none"
              >
                <option value="m">2024</option>
                <option value="n">2023</option>
                <option value="n">2022</option>
              </select>
              <div className="absolute left-0 h-full flex items-center pl-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-43px]">
             {t('add1_vehicle_mileage')}
            </h3>
            <div className="w-[60%] font-medium h-36 rounded-full mb-[-35px]">
          <input type="text" className="bg-white w-full p-2 flex items-center justify-between border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors " placeholder="40 000"/>
          </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-43px]">{t('add1_vehicle_num')}</h3>
            <div className="relative flex items-center pb-[40px]">
              <select
                type="text"
                className="w-[60%] border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
                 focus:border-purple-800 transition-colors appearance-none"
              >
                <option value="m">2</option>
                <option value="n">3</option>
                <option value="n">4</option>
              </select>
              <div className="absolute left-0 h-full flex items-center pl-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <div className="col-span-1 md:col-span-2 text-right">
          <h3 className="text-xl font-semibold mb-[-43px]">{t('add1_vehicle_fuel')}</h3>
          <div className="relative flex items-center pb-[40px]">
            <select
              type="text"
              className="w-[60%] border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors appearance-none"
            >
              <option value="m">{t('add1_vehicle_fuel1')}</option>
              <option value="n">{t('add1_vehicle_fuel2')}</option>
              <option value="n">{t('add1_vehicle_fuel3')}</option>
            </select>
            <div className="absolute left-0 h-full flex items-center pl-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 V3"
                />
              </svg>
            </div>
          </div>
        </div>

        <br></br>
        <div className="col-span-1 md:col-span-2 text-right">
          <h3 className="text-xl font-semibold mb-[-43px]">
          {t('add1_vehicle_trans')}
          </h3>
          <div className="relative flex items-center pb-[40px]">
            <select
              type="text"
              className="w-[60%] border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors appearance-none"
            >
              <option value="m">{t('add1_vehicle_trans1')}</option>
              <option value="n">{t('add1_vehicle_trans2')}</option>
            </select>
            <div className="absolute left-0 h-full flex items-center pl-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 V3"
                />
              </svg>
            </div>
          </div>
        </div>
        <br></br>

        <div className="col-span-1 md:col-span-2 text-right">
          <h3 className="text-xl font-semibold mb-[-43px]">{t('add1_vehicle_num_horse')}</h3>
          <div className="w-[60%] font-medium h-[100px] rounded-full">
            <div
              onClick={() => setOpen1(!open1)}
              className={`bg-white w-full p-2 flex items-center justify-between border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors appearance-none ${
                 !selected1 && "text-gray-700"
               }`}
            >
              {selected1
                ? selected1?.length > 25
                  ? selected1?.substring(0, 25) + "..."
                  : selected1
                : "Select Country"}
              <BiChevronDown size={20} className={`${open1 && "rotate-180"}`} />
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
                  placeholder="Enter country name"
                  className="placeholder:text-[#FFA500]  p-2 outline-none"
                />
              </div>
              {horses?.map((horse) => (
                <li
                  key={horse?.name}
                  className={`p-2 text-sm hover:bg-[#800080] hover:text-white
            ${
              horse?.name?.toLowerCase() === selected1?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              horse?.name?.toLowerCase().startsWith(inputValue1)
                ? "block"
                : "hidden"
            }`}
                  onClick={() => {
                    if (
                      horse?.name?.toLowerCase() !== selected1.toLowerCase()
                    ) {
                      setSelected1(horse?.name);
                      setOpen1(false);
                      setInputValue1("");
                    }
                  }}
                >
                  {horse?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <br></br>

        <div className="col-span-1 md:col-span-2 text-right">
          <h3 className="text-xl font-semibold mb-[-43px]">{t('add1_vehicle_engine')}</h3>
          <div className="w-[60%] font-medium h-37 rounded-full mb-[140px]">
            <div
              onClick={() => setOpen(!open)}
              className={`bg-white w-full p-2 flex items-center justify-between border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors appearance-none ${
                 !selected && "text-gray-700"
               }`}
            >
              {selected
                ? selected?.length > 25
                  ? selected?.substring(0, 25) + "..."
                  : selected
                : "Select Country"}
              <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
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
                  placeholder="Enter country name"
                  className="placeholder:text-[#FFA500]  p-2 outline-none"
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
        </div>

        <Link to="/vehicle/add2">
          <button
            type="submit"
            className="bg-[#FFA500] ml-[77px] hover:bg-amber-500 text-[#fff] w-[230px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[23px]"
          >
            {t('add1_vehicle_next')}
          </button>
        </Link>

        <Link to="">
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
        <h3 className="text-center mr-[160px] font-medium">1/6</h3>
      </div>
    </div>
  );
};

export default Add1;
