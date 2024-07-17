import React from "react";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchT = () => {

  const {t} = useTranslation();

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-5 p-5">
        {/* start filter */}
        <div className="m-4 border-2 ml-[30px] border-x-white rounded-3xl w-[400px] h-[60px] pl-12 pb-2 mt-[30px] bg-white justify-between items-center">
          <button className="p-2 m-2 hover:border-2 border-[#800080]">
             {t('all_order_expired')} 
            <svg
              width="20"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              className="size-5 mr-[70px] mt-[-20px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_980_45751)">
                <path
                  d="M16.9385 13.3039C15.2218 15.0122 12.7635 15.5372 10.6052 14.8622L6.68015 18.7789C6.39682 19.0706 5.83848 19.2456 5.43848 19.1872L3.62182 18.9372C3.02182 18.8539 2.46348 18.2872 2.37182 17.6872L2.12182 15.8706C2.06348 15.4706 2.25515 14.9122 2.53015 14.6289L6.44682 10.7122C5.78015 8.54557 6.29682 6.08724 8.01348 4.37891C10.4718 1.92057 14.4635 1.92057 16.9302 4.37891C19.3968 6.83724 19.3968 10.8456 16.9385 13.3039Z"
                  stroke="#100A55"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M6.18945 15.4375L8.10612 17.3542"
                  stroke="#100A55"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M12.5312 10.0313C13.2216 10.0313 13.7812 9.47161 13.7812 8.78125C13.7812 8.09089 13.2216 7.53125 12.5312 7.53125C11.8409 7.53125 11.2812 8.09089 11.2812 8.78125C11.2812 9.47161 11.8409 10.0313 12.5312 10.0313Z"
                  stroke="#100A55"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_980_45751">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.447266 0.863281)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>{" "}
          <button className="p-2 hover:border-2 border-[#800080]">
             {t('all_order_active')} 
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              className="size-5 mr-[70px] mt-[-20px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_980_45756)">
                <path
                  d="M14.166 17.7839H5.83268C3.33268 17.7839 1.66602 16.5339 1.66602 13.6172V7.78385C1.66602 4.86719 3.33268 3.61719 5.83268 3.61719H14.166C16.666 3.61719 18.3327 4.86719 18.3327 7.78385V13.6172C18.3327 16.5339 16.666 17.7839 14.166 17.7839Z"
                  stroke="#100A55"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M10 13.1992C11.3807 13.1992 12.5 12.0799 12.5 10.6992C12.5 9.31851 11.3807 8.19922 10 8.19922C8.61929 8.19922 7.5 9.31851 7.5 10.6992C7.5 12.0799 8.61929 13.1992 10 13.1992Z"
                  stroke="#100A55"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M4.58398 8.61719V12.7839"
                  stroke="#100A55"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M15.416 8.61719V12.7839"
                  stroke="#100A55"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </g>
              <defs>
                <clipPath id="clip0_980_45756">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.699219)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="p-2 hover:border-2 border-[#800080]">
             {t('travel_ser_des3')}
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              className="size-5 mr-[60px] mt-[-20px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_980_45761)">
                <path
                  d="M17.2598 7.26867L11.7046 2.95182C11.217 2.57291 10.617 2.36719 9.99935 2.36719C9.38169 2.36719 8.78165 2.57291 8.29414 2.95182L2.73789 7.26867C2.40398 7.5281 2.13382 7.86034 1.94805 8.24001C1.76228 8.61969 1.66582 9.03675 1.66602 9.45936V16.9524C1.66602 17.5045 1.88551 18.0339 2.27621 18.4242C2.66691 18.8146 3.19681 19.0339 3.74935 19.0339H16.2494C16.8019 19.0339 17.3318 18.8146 17.7225 18.4242C18.1132 18.0339 18.3327 17.5045 18.3327 16.9524V9.45936C18.3327 8.60286 17.9369 7.79423 17.2598 7.26867Z"
                  stroke="#100A55"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_980_45761">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.699219)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        {/* end filter */}

        {/* start add travel */}
        <div class="m-4 ml-[220px]">
          <Link to="/order_travel/add1/">
            <div className="flex justify-center items-center mr-[440px] pt-[-18px]">
              <button className="flex w-[520px] items-center px-8 mt-[20px] bg-white text-purple-800 font-semibold rounded-full shadow-md hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                <FaPlus
                  size={25}
                  className="text-[#fff] border bg-[#800080] rounded-full mr-6"
                />
                {t('all_order_add_trip')} 
              </button>
            </div>
          </Link>
        </div>
        {/* end add travel */}


        {/* start loaction */}
        <div class="m-4 ml-[140px]">
          <select
            id="countries"
            className="p-4 m-4 bg-white border-2 border-white text-sm rounded-full dark:placeholder-gray-400 dark:text-black font-bold"
          >
            <option selected>قطر - الدوحة</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.2"
            stroke="currentColor"
            className="size-5 -z-50 mt-[-52px] ml-[14px]"
          >
            <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
        {/* end loaction */}

        {/* start alerm */}
        <div class="m-4 mt-[40px] ml-[200px] w-[40px] h-[35px] bg-white border-2 border-green-400 rounded-full">
          <a href="#32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          </a>
        </div>
        {/* end alerm */}
       
        {/* start serach */}
        <div className="m-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <a href="#22">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 25 25"
                  stroke-width="0.8"
                  stroke="currentColor"
                  className="size-8 mt-[5px]"
                >
                  <path d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
              </a>

              <a href="#32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 25 25"
                  stroke-width="0.8"
                  stroke="currentColor"
                  className="size-8 mt-[10px]"
                >
                  <path d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              </a>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 h-[60px] mb-[-40px] border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-white focus:border-white block w-full ps-16 pr-[40px] text-right  dark:bg-white shadow-md shadow-gray-400 dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-white dark:focus:border-white"
              placeholder={t('all_order_input_search')} 
              required
            />
          </div>
        </div>
        {/* end serach */}
      </div>
    </div>
  );
};

export default SearchT;
