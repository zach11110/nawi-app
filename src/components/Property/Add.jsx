import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { CheckIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Add = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,video/*",
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const removeFile = (file) => () => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [kitchens, setKitchens] = useState(1);
  const [livingRooms, setLivingRooms] = useState(1);
  const [windows, setWindow] = useState(1);
  const [streets, setStreets] = useState(1);
  const [Balcons, setBalcons] = useState(1);

  const handleIncrement = (setter) => () => setter((prev) => prev + 1);
  const handleDecrement = (setter) => () =>
    setter((prev) => (prev > 0 ? prev - 1 : 0));

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const {t} = useTranslation();

  const options = [
    t('add_property_terrace'),
    t('add_property_swimming'),
    t('add_property_assistant'),
    t('add_property_alarm'),
    t('add_property_air'),
    t('add_property_wifi'),
    t('add_property_furnished'),
    t('add_property_hall'),
    t('add_property_elevator'),
    t('add_property_garage'),
    t('add_property_garden'),
    t('add_property_fireplace'),
    t('add_property_ball'),
    t('add_property_club'),
    t('add_property_basement'),

  ];

  const toggleOption = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((selected) => selected !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const [selectedOptions2, setSelectedOptions2] = useState(t('add_property_puy'));

  const options2 = [t('add_property_sale'), t('add_property_puy')];

  const toggleOption2 = (option2) => {
    setSelectedOptions2((prevSelectedOptions2) =>
      prevSelectedOptions2.includes(option2)
        ? prevSelectedOptions2.filter((selected2) => selected2 !== option2)
        : [...prevSelectedOptions2, option2]
    );
  };

  const [selectedOptions3, setSelectedOptions3] = useState(t('add_property_apartment'));

  const options3 = [t('add_property_hotel'), t('add_property_vella'), t('add_property_hut'), t('add_property_house'), t('add_property_apartment')];

  const toggleOption3 = (option3) => {
    setSelectedOptions3((prevSelectedOptions3) =>
      prevSelectedOptions3.includes(option3)
        ? prevSelectedOptions3.filter((selected3) => selected3 !== option3)
        : [...prevSelectedOptions3, option3]
    );
  };

  const [selectedOptions4, setSelectedOptions4] = useState(t('add_property_monthly'));

  const options4 = [t('add_property_annual'), t('add_property_monthly')];

  const toggleOption4 = (option4) => {
    setSelectedOptions4((prevSelectedOptions4) =>
      prevSelectedOptions4.includes(option4)
        ? prevSelectedOptions4.filter((selected4) => selected4 !== option4)
        : [...prevSelectedOptions4, option4]
    );
  };

  return (
    <div className="bg-[#EBEAFA]">
      <div className="p-8 rounded-2xl focus:bg-[#800080] focus:text-white max-w-3xl mx-auto">
        <h2 className="text-2xl focus:bg-[#800080] focus:text-white font-semibold mb-6 text-center mr-[90px]">
        {t('add1_property_wel')} <span>{t('add1_property_name')}</span>{t('add1_property_fill')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="p-6 ml-[-80px] text-center">
            {options2.map((option2) => (
              <button
                key={option2}
                onClick={() => setSelectedOptions2(option2)}
                className={`py-3 px-6 rounded-2xl ${
                  selectedOptions2.indexOf(option2)
                    ? "bg-white"
                    : "bg-[#800080] text-white"
                }`}
              >
                {option2}
              </button>
            ))}
          </div>
          <br></br>

          <div>
            <div className="flex flex-cols-1 gap-4 mt-[-40px] ml-[50px]">
              {options3.map((option3) => (
                <button
                  onClick={() => setSelectedOptions3(option3)}
                  className={`py-3 px-5 rounded-2xl ${
                    selectedOptions3 !== option3
                      ? "bg-white"
                      : "bg-[#800080] text-white"
                  }`}
                >
                  {option3}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-35px]">{t('add_property_price')}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="w-[60%] border text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none focus:border-purple-800 transition-colors"
                placeholder="6000"
              />
              <span className="ml-2">$</span>
            </div>

            
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-35px]">{t('add_property_price2')}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="w-[60%] border rounded-2xl text-black py-5 px-3 text-right focus:outline-none focus:border-purple-800 transition-colors"
                placeholder="500"
              />
              <span className="ml-2">$</span>
            </div>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked2}
                onChange={handleCheckboxChange2}
              />
              <span
                className={classNames(
                  "w-4 h-4 border border-gray-300 rounded-sm flex-shrink-0",
                  {
                    "bg-green-500": isChecked2,
                  }
                )}
              >
                {isChecked2 && <CheckIcon className="w-4 h-4 text-white" />}
              </span>
             {t('add5_vehicle_price2')}
            </label>
            <div className="flex gap-2 mt-[-25px] float-right mr-[350px]">
              {options4.map((option4) => (
                <button
                  onClick={() => setSelectedOptions4(option4)}
                  className={`py-3 px-5 rounded-2xl ${
                    selectedOptions4 !== option4
                      ? "bg-white"
                      : "bg-[#800080] text-white"
                  }`}
                >
                  {option4}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-35px]">{t('add5_property_area')}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="w-[60%] border rounded-2xl text-black py-4 px-9 text-right focus:outline-none focus:border-purple-800 transition-colors"
                placeholder={t('add_property_input')}
              />
              <span className="ml-[-35px]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_565_36753)">
                    <path
                      d="M14.5712 25.6479L5.70212 16.7788C4.69825 15.775 4.69825 13.9266 5.70212 12.9227L14.5712 4.05369C15.575 3.04981 17.4234 3.04981 18.4273 4.05369L27.2963 12.9227C28.3002 13.9266 28.3002 15.775 27.2963 16.7788L18.4273 25.6479C17.4234 26.6518 15.575 26.6518 14.5712 25.6479V25.6479Z"
                      stroke="#252B5C"
                      stroke-width="1.7"
                    />
                    <path
                      d="M3.30078 21.7339L10.5009 28.934"
                      stroke="#252B5C"
                      stroke-width="2.5"
                    />
                    <path
                      d="M22.5 28.934L29.7001 21.7339"
                      stroke="#252B5C"
                      stroke-width=" 2.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_565_36753">
                      <rect
                        width="33"
                        height="33"
                        fill="white"
                        transform="translate(0 0.000976562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-35px]">{t('add_property_direction')}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="w-[60%] border rounded-2xl text-black py-4 px-3 text-right focus:outline-none focus:border-purple-800 transition-colors"
                placeholder={t('add_property_direction2')}
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-right">
            <h3 className="text-xl font-semibold mb-[-35px] inline-block">
              {t('add_property_featu')}
            </h3>
            <div className="flex flex-wrap gap-2 p-2 mr-[20px]">
              <div className="w-[60%] flex items-center bg-white rounded-2xl focus:bg-[#800080] focus:text-white ml-[17px]">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleDecrement(setBedrooms)}
                >
                  -
                </button>
                <span className="mx-2">{bedrooms}</span>
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleIncrement(setBedrooms)}
                >
                  +
                </button>
                <span className="pl-[44px] mr-8">{t('add_property_bedroom')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-2 mr-[20px]">
              <div className="w-[60%] flex items-center bg-white rounded-2xl focus:bg-[#800080] focus:text-white ml-[17px]">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleDecrement(setBathrooms)}
                >
                  -
                </button>
                <span className="mx-2">{bathrooms}</span>
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleIncrement(setBathrooms)}
                >
                  +
                </button>
                <span className="pl-[44px] mr-8">{t('add_property_bathroom')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-2 2 mr-[20px]">
              <div className="w-[60%] flex items-center bg-white rounded-2xl focus:bg-[#800080] focus:text-white ml-[17px]">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleDecrement(setKitchens)}
                >
                  -
                </button>
                <span className="mx-2">{kitchens}</span>
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleIncrement(setKitchens)}
                >
                  +
                </button>
                <span className="pl-[44px] mr-8">{t('add_property_kitchen')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-2 mr-[20px]">
              <div className="w-[60%] flex items-center bg-white rounded-2xl focus:bg-[#800080] focus:text-white ml-[17px]">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleDecrement(setLivingRooms)}
                >
                  -
                </button>
                <span className="mx-2">{livingRooms}</span>
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleIncrement(setLivingRooms)}
                >
                  +
                </button>
                <span className="pl-[44px] mr-8">{t('add_property_livingroom')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-2 mr-[20px]">
              <div className="w-[60%] flex items-center bg-white rounded-2xl focus:bg-[#800080] focus:text-white ml-[17px]">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleDecrement(setWindow)}
                >
                  -
                </button>
                <span className="mx-2">{windows}</span>
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleIncrement(setWindow)}
                >
                  +
                </button>
                <span className="pl-[44px] mr-8">{t('add_property_window')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-2 mr-[20px]">
              <div className="w-[60%] flex items-center bg-white rounded-2xl focus:bg-[#800080] focus:text-white ml-[17px]">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleDecrement(setBalcons)}
                >
                  -
                </button>
                <span className="mx-2">{Balcons}</span>
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleIncrement(setBalcons)}
                >
                  +
                </button>
                <span className="pl-[44px] mr-8">{t('add_property_balcon')}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-2 mr-[20px]">
              <div className="w-[60%] flex items-center bg-white rounded-2xl focus:bg-[#800080] focus:text-white ml-[17px]">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleDecrement(setStreets)}
                >
                  -
                </button>
                <span className="mx-2">{streets}</span>
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded-2xl focus:bg-[#800080] focus:text-white m-4"
                  onClick={handleIncrement(setStreets)}
                >
                  +
                </button>
                <span className="pl-[44px] mr-8">{t('add_property_street')}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className={`py-2 px-4 rounded-2xl ${
                  selectedOptions.includes(option)
                    ? "bg-[#800080] text-white"
                    : "bg-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <h3 className="text-xl font-semibold">{t('add_property_enviroment')}</h3>
          <br></br>

          <div className="m-6 col-span-1 md:col-span-2 relative">
            <h3 className="text-xl font-semibold text-right mb-[-38px] mr-[-20px]">
              {t('add_property_delivery')}
            </h3>
            <div className="flex items-center mt-[-30px]">
              <input
                type="date"
                placeholder={t('add_property_delivery_date')}
                className="w-[60%] border rounded-2xl pr-10 focus:text-white-2xl py-4 px-3 text-right focus:outline-none focus:border-purple-800 transition-colors"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <span className="ml-[-35px]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_565_36753)">
                    <path
                      d="M14.5712 25.6479L5.70212 16.7788C4.69825 15.775 4.69825 13.9266 5.70212 12.9227L14.5712 4.05369C15.575 3.04981 17.4234 3.04981 18.4273 4.05369L27.2963 12.9227C28.3002 13.9266 28.3002 15.775 27.2963 16.7788L18.4273 25.6479C17.4234 26.6518 15.575 26.6518 14.5712 25.6479V25.6479Z"
                      stroke="#252B5C"
                      stroke-width="1.7"
                    />
                    <path
                      d="M3.30078 21.7339L10.5009 28.934"
                      stroke="#252B5C"
                      stroke-width="2.5"
                    />
                    <path
                      d="M22.5 28.934L29.7001 21.7339"
                      stroke="#252B5C"
                      stroke-width=" 2.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_565_36753">
                      <rect
                        width="33"
                        height="33"
                        fill="white"
                        transform="translate(0 0.000976562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="mb-8 pt-[60px]">
          <label className="text-xl block mb-2 font-semibold text-black text-right">
             {t('add_property_delivery_photo')}
          </label>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 right-20">
                  <button
                    onClick={removeFile(file)}
                    className="bg-green-600 text-white rounded-full p-1 w-6 h-8  hover:bg-red-700"
                  >
                    x
                  </button>
                </div>
                {file.type.startsWith("image") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-36 h-36 object-cover rounded"
                  />
                ) : (
                  <video
                    controls
                    src={URL.createObjectURL(file)}
                    className="w-36 h-36 object-cover rounded"
                  />
                )}
              </div>
            ))}
            <div
              {...getRootProps({ className: "dropzone" })}
              className="flex items-center justify-center w-36 h-36 rounded-2xl bg-white border-dashed border-2 cursor-pointer"
            >
              <input {...getInputProps()} />
              <span className="text-3xl">+</span>
            </div>
          </div>
        </div>

        <label className="text-xl block mb-2 font-semibold text-black text-right">
           {t('add_property_delivery_details')}
        </label>
        <div className="flex justify-center items-center p-4">
          <textarea
            className="text-right w-[60%] max-w-lg h-48 mr-[270px] p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-800 transition-colors"
            placeholder={t('add_property_delivery_details2')}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-xl font-bold text-black text-right">
           {t('add_property_delivery_locate')}
          </label>
          Map
        </div>

        <Link to="/property/share">
          <button className="bg-[#FFA500] ml-[130px] hover:bg-amber-500 text-[#fff] w-[250px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[23px]">
          {t('add1_vehicle_next')}
          </button>
        </Link>

        <Link to="">
          <div className=" mt-[30px] bg-white rounded-full w-10 h-10 p-3 flex justify-center float-left hover:bg-[#FFA500]">
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
      </div>
    </div>
  );
};

export default Add;
