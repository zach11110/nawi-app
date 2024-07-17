import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Add2 = () => {

  const {t} = useTranslation();
    const [selectedOption, setSelectedOption] = useState({
    "CD مشغل اسطوانات": false,
    "مكيف": false,
    "USB/AUX مدخل": false,
    "اكياس هوائية": false,
    "مقاعد كهربائية": false,
    "زجاج كهربائي": false,
  });
  
  const handleOptionChange = (option) => {
    setSelectedOption({
      ...selectedOption,
      [option]: !selectedOption[option],
    });
  };

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const [checked1, setChecked1] = useState(false);

  const handleChange1 = () => {
    setChecked1(!checked1);
  };

  const [checked2, setChecked2] = useState(false);

  const handleChange2 = () => {
    setChecked2(!checked2);
  };

  const [checked3, setChecked3] = useState(false);

  const handleChange3 = () => {
    setChecked3(!checked3);
  };

  const [checked4, setChecked4] = useState(false);

  const handleChange4 = () => {
    setChecked4(!checked4);
  };

  const [checked5, setChecked5] = useState(false);

  const handleChange5 = () => {
    setChecked5(!checked5);
  };

  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

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
        {t('add1_vehicle_wel')} <span>{t('add1_vehicle_name')}</span>{t('add1_vehicle_fill')}
        </h2>
        <h3 className="text-[26px] font-black mb-[80px] mr-[-25px] text-right">
        {t('add1_vehicle_inner')}
        </h3>
        <div className="col-span-1 md:col-span-2 text-right">
          <h3 className="text-xl font-semibold mb-[-43px]">
        {t('add1_vehicle_color')}
          </h3>

          <div className="w-[60%] font-medium h-36 rounded-full">
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
                : t('add1_vehicle_inner1')}
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
                  placeholder={t('add1_vehicle_enter')}
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
          <h3 className="text-[26px] font-black mb-[80px] mr-[-25px] text-right">
          {t('add1_vehicle_featu')}
          </h3>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex col-span-1 items-center  mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checked}
                  onChange={handleChange}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    checked
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {checked && (
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
                <span className="text-gray-700">{t('add1_vehicle_cd')}</span>
              </label>
            </div>
            <div className="flex items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checked1}
                  onChange={handleChange1}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    checked1
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {checked1 && (
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
                <span className="text-gray-700">{t('add1_vehicle_air')}</span>
              </label>
            </div>
            <div className="flex items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checked2}
                  onChange={handleChange2}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    checked2
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {checked2 && (
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
                <span className="text-gray-700">{t('add1_vehicle_input')}</span>
              </label>
            </div>
            <div className="flex items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checked3}
                  onChange={handleChange3}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    checked3
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {checked3 && (
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
                <span className="text-gray-700">{t('add1_vehicle_bags')}</span>
              </label>
            </div>
            <div className="flex items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checked4}
                  onChange={handleChange4}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    checked4
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {checked4 && (
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
                <span className="text-gray-700">{t('add1_vehicle_seats')}</span>
              </label>
            </div>
            <div className="flex items-center mt-[70px]">
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={checked5}
                  onChange={handleChange5}
                />
                <span
                  className={`inline-block w-5 h-5 border-2 rounded ${
                    checked5
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-600"
                  } flex items-center justify-center`}
                >
                  {checked5 && (
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
                <span className="text-gray-700">{t('add1_vehicle_glass')}</span>
              </label>
            </div>
          </div>
        </div>

        <Link to="/vehicle/add3">
          <button
            type="submit"
            className="bg-[#FFA500] ml-[77px] hover:bg-amber-500 text-[#fff] w-[230px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[23px]"
          >
            {t('add1_vehicle_next')}
          </button>
        </Link>

        <Link to="/vehicle/add1">
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
        <h3 className="text-center mr-[160px] font-medium">2/6</h3>
      </div>
    </div>
  );
};

export default Add2;
