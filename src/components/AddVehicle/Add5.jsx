import { CheckIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Add5 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const {t} = useTranslation();

  const options = [t('add5_vehicle_cash'), ('add5_vehicle_google'),  ('add5_vehicle_apple')];

  const toggleOption = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((selected) => (selected = !option))
        : [...prevSelectedOptions, option]
    );
  };

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

  const [isChecked0, setIsChecked0] = useState(false);

  const handleCheckboxChange0 = () => {
    setIsChecked0(!isChecked0);
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
 
 
   return (
    <div className="bg-[#EBEAFA]">
      <div className="p-8 rounded-2xl focus:bg-[#800080] focus:text-white max-w-3xl mx-auto">
        <h2 className="text-3xl focus:bg-[#800080] focus:text-white font-semibold text-center mb-[70px] mr-[90px]">
         {t('add5_vehicle_in_ex')}
        </h2>
        <div className="col-span-1 md:col-span-2 text-right">
          <h3 className="text-xl font-semibold mb-[-43px]">{t('add5_vehicle_lic')}</h3>

          <div className="w-[60%] font-medium h-36 rounded-full mb-[35px]">
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
                : t('add5_vehicle_lic2')}
            </div>
            <ul
              className={`bg-white mt-2 overflow-y-auto ${
                open ? "max-h-[100px]" : "max-h-0"
              } `}
            >
              {/* <div className="flex items-center px-1 sticky top-0 bg-white"></div> */}
              <li
                className="p-2 text-sm hover:bg-[#800080] hover:text-white"
                onClick={() => {
                  setSelected(t('add5_vehicle_lic2'));
                  setOpen(false);
                  setInputValue("");
                }}
              >
                {t('add5_vehicle_lic2')}
              </li>

              <li
                className="p-2 text-sm hover:bg-[#800080] hover:text-white"
                onClick={() => {
                  setSelected(t('add5_vehicle_lic3'));
                  setOpen(false);
                  setInputValue("");
                }}
              >
                {t('add5_vehicle_lic3')}
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-[-43px]">{t('add5_vehicle_insur')}</h3>

          <div className="w-[60%] font-medium h-36 rounded-full mb-[35px]">
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
                : t('add5_vehicle_insur2')}
            </div>
            <ul
              className={`bg-white mt-2 overflow-y-auto ${
                open1 ? "max-h-[100px]" : "max-h-0"
              } `}
            >
              {/* <div className="flex items-center px-1 sticky top-0 bg-white"></div> */}
              <li
                className="p-2 text-sm hover:bg-[#800080] hover:text-white"
                onClick={() => {
                  setSelected1(t('add5_vehicle_insur2'));
                  setOpen1(false);
                  setInputValue1("");
                }}
              >
                {t('add5_vehicle_insur2')}
              </li>

              <li
                className="p-2 text-sm hover:bg-[#800080] hover:text-white"
                onClick={() => {
                  setSelected1(t('add5_vehicle_insur3'));
                  setOpen1(false);
                  setInputValue1("");
                }}
              >
                {t('add5_vehicle_insur3')}
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-[-43px]">{t('add5_vehicle_tax')}</h3>

          <div className="w-[60%] font-medium h-36 rounded-full mb-[35px]">
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
                : t('add5_vehicle_tax2')}
            </div>
            <ul
              className={`bg-white mt-2 overflow-y-auto ${
                open2 ? "max-h-[100px]" : "max-h-0"
              } `}
            >
              {/* <div className="flex items-center px-1 sticky top-0 bg-white"></div> */}
              <li
                className="p-2 text-sm hover:bg-[#800080] hover:text-white"
                onClick={() => {
                  setSelected2(t('add5_vehicle_tax2'));
                  setOpen2(false);
                  setInputValue2("");
                }}
              >
                {t('add5_vehicle_tax2')}
              </li>

              <li
                className="p-2 text-sm hover:bg-[#800080] hover:text-white"
                onClick={() => {
                  setSelected2(t('add5_vehicle_tax3'));
                  setOpen2(false);
                  setInputValue2("");
                }}
              >
                {t('add5_vehicle_tax3')}
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-[-43px]">{t('add5_vehicle_servi')}</h3>
          <div className="w-[60%] font-medium h-36 rounded-full mb-[35px]">
            <input
              type="text"
              className="bg-white w-full p-2 flex items-center justify-between border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors "
              placeholder="76576456826"
            />
          </div>

          <h3 className="text-xl font-semibold mb-[-43px]">{t('add5_vehicle_pay')}</h3>
          <div className="w-[60%] font-medium h-36 rounded-full mb-[-10px] mt-[10px]">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {options.map((option2) => (
                <button
                  key={option2}
                  onClick={() => setSelectedOptions(option2)}
                  className={`py-3 px-6 ml-2 mb-4 rounded-2xl ${
                    selectedOptions.indexOf(option2)
                      ? "bg-white"
                      : "bg-[#800080] text-white"
                  }`}
                >
                  {option2}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-[100px]">
            <h3 className="text-xl font-semibold mb-[-43px]">{t('add5_vehicle_price')}</h3>
            <div className="w-[60%] font-medium h-36 rounded-full mb-[35px]">
              <input
                type="text"
                className="bg-white w-full p-2 flex items-center justify-between border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
               focus:border-purple-800 transition-colors "
                placeholder="76576456826"
              />
              <label className="flex items-center mt-2 ml-4">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked0}
                  onChange={handleCheckboxChange0}
                />
                <span
                  className={classNames(
                    "w-4 h-4 border border-gray-500 rounded-sm flex-shrink-0 mr-2",
                    {
                      "bg-green-500": isChecked0,
                    }
                  )}
                >
                  {isChecked0 && <CheckIcon className="w-4 h-4 text-white" />}
                </span>
                {t('add5_vehicle_price2')}
              </label>
            </div>
          </div>
        </div>

        <Link to="/vehicle/add6">
          <button
            type="submit"
            className="bg-[#FFA500] ml-[77px] hover:bg-amber-500 text-[#fff] w-[230px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[23px]"
          >
            {t('add1_vehicle_next')}
          </button>
        </Link>

        <Link to="/vehicle/add4">
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
        <h3 className="text-center mr-[160px] font-medium">5/6</h3>
      </div>
    </div>
  );
};

export default Add5;
