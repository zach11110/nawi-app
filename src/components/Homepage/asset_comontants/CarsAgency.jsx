import React, { useState } from "react";
import Car from "../../../assets/ImagesVehicle/car.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const ITEMS_PER_PAGE_FIRST = 6;
const ITEMS_PER_PAGE = 12;

const CarsAgency = ({ title, isSpecial }) => {

  const {t} = useTranslation();

  const vehicles = [
    {
      id: 1,
      name: t('agency_vehicle_name'),
      des1: "G63",
      des2: t('agency_vehicle_engine'),
      des3: t('agency_vehicle_horse'),
      image: Car,
      price: t('agency_vehicle_price'),
      details: t('agency_vehicle_details'),
      charies: t('agency_vehicle_seater'),
      speed: t('agency_vehicle_speed'),
      dezel: t('agency_vehicle_dez'),
    },
    {
      id: 2,
      name: "فيراري",
      des1: "G63",
      des2: "محركين",
      des3: "قوة (422 ،585) حصان",
      image: Car,
      price: " ريال 3500 ",
      details: "انقر لعرض التفاصيل",
      charies: "5 مقاعد",
      speed: "220كم/س",
      dezel: "100 لتر",
    },
    {
      id: 3,
      name: "فيراري",
      des1: "G63",
      des2: "محركين",
      des3: "قوة (422 ،585) حصان",
      image: Car,
      price: " ريال 3500 ",
      details: "انقر لعرض التفاصيل",
      charies: "5 مقاعد",
      speed: "220كم/س",
      dezel: "100 لتر",
    },
    {
      id: 4,
      name: "فيراري",
      des1: "G63",
      des2: "محركين",
      des3: "قوة (422 ،585) حصان",
      image: Car,
      price: " ريال 3500 ",
      details: "انقر لعرض التفاصيل",
      charies: "5 مقاعد",
      speed: "220كم/س",
      dezel: "100 لتر",
    },
    {
      id: 5,
      name: "فيراري",
      des1: "G63",
      des2: "محركين",
      des3: "قوة (422 ،585) حصان",
      image: Car,
      price: " ريال 3500 ",
      details: "انقر لعرض التفاصيل",
      charies: "5 مقاعد",
      speed: "220كم/س",
      dezel: "100 لتر",
    },
    {
      id: 6,
      name: "فيراري",
      des1: "G63",
      des2: "محركين",
      des3: "قوة (422 ،585) حصان",
      image: Car,
      price: " ريال 3500 ",
      details: "انقر لعرض التفاصيل",
      charies: "5 مقاعد",
      speed: "220كم/س",
      dezel: "100 لتر",
    },

    {
      id: 7,
      name: "فيراري",
      des1: "G63",
      des2: "محركين",
      des3: "قوة (422 ،585) حصان",
      image: Car,
      price: " ريال 3500 ",
      details: "انقر لعرض التفاصيل",
      charies: "5 مقاعد",
      speed: "220كم/س",
      dezel: "100 لتر",
    },
  ];


  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const getCurrentItems = () => {
    const startIndex = currentPage === 1 ? 0 : ITEMS_PER_PAGE_FIRST + (currentPage - 2) * ITEMS_PER_PAGE;
    const endIndex = currentPage === 1 ? ITEMS_PER_PAGE_FIRST : startIndex + ITEMS_PER_PAGE;
    return vehicles.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentItems();
  const hasMoreItems = vehicles.length > (currentPage === 1 ? ITEMS_PER_PAGE_FIRST : (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <div className="my-[40px] mx-[20px]">
      <p className="p-6 font-bold text-right text-2xl">{title}</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ml-[10px] gap-3 pb-[170px]">
         {currentItems.map((vehicle) => (
          <div
            key={vehicle.id}
            className="h-[85%] lg:col-span-1 sm:col-span-1 md:col-span-2 border-2 mb-[55px] shadow-xl border-gray-300 bg-white rounded-lg m-4"
          > 
            <a href="#1">
              <div className="relative left-[515px] top-[5px] w-[50px] h-[50px] bg-white shadow-lg rounded-full">
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  className="size-6 absolute left-[12px] top-[15px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.19154 2.42787C2.78591 2.8335 2.46415 3.31504 2.24462 3.84502C2.0251 4.375 1.91211 4.94302 1.91211 5.51667C1.91211 6.09031 2.0251 6.65834 2.24462 7.18832C2.46415 7.71829 2.78591 8.19984 3.19154 8.60547L10.6485 16.0625L18.1055 8.60547C18.9247 7.78627 19.3849 6.67519 19.3849 5.51667C19.3849 4.35814 18.9247 3.24707 18.1055 2.42787C17.2863 1.60867 16.1752 1.14845 15.0167 1.14845C13.8582 1.14845 12.7471 1.60867 11.9279 2.42787L10.6485 3.70727L9.36913 2.42787C8.96351 2.02224 8.48196 1.70048 7.95198 1.48095C7.42201 1.26143 6.85398 1.14844 6.28034 1.14844C5.70669 1.14844 5.13867 1.26143 4.60869 1.48095C4.07871 1.70048 3.59717 2.02224 3.19154 2.42787V2.42787Z"
                    stroke="#800080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>

            <a href="#1">
              <img
                class="resize-none rounded-t-lg w-[590px] h-[200px] mt-[-50px] "
                src={vehicle.image}
                alt=""
              />
            </a>
            <div className="mt-[-15px] ml-[-8px]">
              {isSpecial && (
                <button className="px-2 pb-[35px] hover:bg-[#8c4fb4] bg-[#9e2b9e] text-[#fff] w-[130px] h-[40px] text-right rounded-lg font-medium my-2 mx-2 md:mx-90 text-[23px]">
                  <span className="">
                    {t('vehicle_special')}
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 mt-[-26px] ml-[11px]"
                    >
                      <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>

            <span className="text-left p-4 text-gray-700 block mt-[-20px]  text-[19px]">
              <span className="text-[#800080] font-bold">{vehicle.price}</span>
            </span>
            <div className="p-5">
              <a href="#1">
                <h5 class="mt-[-75px] text-[30px] text-right font-bold tracking-tight text-gray-900 dark:text-black">
                  {vehicle.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-[20px] text-right pt-2 mr-[20px] text-black">
                {vehicle.des1}
              </p>
              <p className="mb-3 font-normal text-[20px] text-right mr-[20px] text-black">
                {vehicle.des2}
              </p>
              <p className="mb-3 font-normal text-[20px] text-right mr-[20px] text-black">
                {vehicle.des3}
              </p>

              <Link
                to="/details_cards_vehicle/"
                className="text-[17px]  font-medium text-left text-black hover:text-[#FFA500]"
              >
                {vehicle.details}
              </Link>
              <hr className="mb-[20px]" />

              <div className="flex flex-cols-3 justify-center items-center mr-[40px]">
                <div className="text-base ml-[55px]">
                  <span>{vehicle.charies}</span>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    className="size-5 ml-[66px] mt-[-21px] w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5169 5.52861H13.4405C13.1675 5.52861 12.9348 5.72657 12.8909 5.99605L12.3345 9.41836C12.2852 9.7214 12.0736 9.95947 11.7967 10.0519C11.7152 9.86212 11.5968 9.69195 11.4508 9.55001L12.0516 2.20561C12.0972 1.64843 11.906 1.09311 11.5272 0.682086C11.1483 0.270932 10.6105 0.0351562 10.0515 0.0351562H5.54568C4.98663 0.0351562 4.44881 0.270932 4.06996 0.68202C3.69115 1.09311 3.50003 1.64843 3.54555 2.20554L4.14633 9.54994C4.00027 9.69189 3.88187 9.86205 3.80039 10.0518C3.52347 9.95937 3.3119 9.7213 3.26266 9.41826L2.70618 5.99595C2.66235 5.7265 2.4296 5.52855 2.1566 5.52855H1.08022C0.772727 5.52855 0.523438 5.77784 0.523438 6.08533C0.523438 6.39282 0.772727 6.64211 1.08022 6.64211H1.68309L2.16513 9.59699C2.29589 10.4013 2.89899 11.0151 3.67846 11.1695V11.5974C3.67846 11.9049 3.92457 12.1727 4.23203 12.1727H6.25546C6.31406 12.3954 6.5337 12.581 6.79634 12.581H7.24176V13.6945H6.07254C5.10039 13.6945 4.30946 14.4855 4.30946 15.4576V16.4783C4.30946 16.7858 4.55875 17.0351 4.86624 17.0351C5.17373 17.0351 5.42302 16.7858 5.42302 16.4783V15.4576C5.42302 15.0994 5.71445 14.808 6.07258 14.808H7.24179V15.8844C7.24179 16.1919 7.49108 16.4412 7.79857 16.4412C8.10607 16.4412 8.35536 16.1919 8.35536 15.8844V14.808H9.52457C9.88274 14.808 10.1741 15.0994 10.1741 15.4576V16.4783C10.1741 16.7858 10.4234 17.0351 10.7309 17.0351C11.0384 17.0351 11.2877 16.7858 11.2877 16.4783V15.4576C11.2877 14.4854 10.4968 13.6945 9.5246 13.6945H8.35539V12.581H8.80081C9.06345 12.581 9.28309 12.3954 9.34169 12.1727H11.3651C11.6726 12.1727 11.9187 11.9049 11.9187 11.5974V11.1695C12.6982 11.0151 13.3013 10.4013 13.432 9.59699L13.9141 6.64215H14.5169C14.8244 6.64215 15.0737 6.39286 15.0737 6.08536C15.0737 5.7779 14.8244 5.52861 14.5169 5.52861ZM10.8051 11.0592H4.79203V10.6618C4.79203 10.4204 4.98521 10.2426 5.22653 10.2426H10.3706C10.612 10.2426 10.8051 10.4204 10.8051 10.6618V11.0592ZM10.9417 2.124L10.3695 9.12903H5.22769L4.6554 2.124C4.63485 1.87235 4.71772 1.62227 4.88879 1.43659C5.05991 1.25092 5.2932 1.14866 5.54568 1.14866H10.0515C10.304 1.14866 10.5373 1.25092 10.7084 1.43659C10.8794 1.62227 10.9624 1.87238 10.9417 2.124Z"
                      fill="#800080"
                    />
                  </svg>
                </div>
                <div className="text-base ml-[55px]">
                  <span>{vehicle.speed}</span>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    className="size-5 ml-[70px] mt-[-21px] w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.28256 5.44084C1.94769 3.86955 3.05697 2.5341 4.45408 1.59028C5.85119 0.646185 7.539 0.09375 9.35024 0.09375C10.5572 0.09375 11.71 0.338931 12.7577 0.782165C14.3298 1.44712 15.6653 2.55671 16.6092 3.95365C17.553 5.3498 18.1055 7.03887 18.1055 8.84898C18.1055 9.00039 18.1017 9.15042 18.0941 9.29991H15.3512V8.39802H16.8136C16.7618 7.52951 16.5626 6.70207 16.2402 5.9392C15.9216 5.18543 15.4818 4.49425 14.9467 3.89051L13.9127 4.92479L13.2747 4.28658L14.308 3.25312C14.0623 3.03551 13.803 2.83222 13.5301 2.64857C12.4525 1.92099 11.1787 1.46863 9.80116 1.38672V2.84823H8.89931V1.38563C8.02984 1.43775 7.2024 1.63659 6.43963 1.9593C5.68573 2.27787 4.9944 2.71752 4.39094 3.25254L5.42495 4.28655L4.78773 4.92476L3.75359 3.8913C3.5357 4.13706 3.33365 4.3963 3.14859 4.66935C2.42129 5.74696 1.96869 7.02088 1.88691 8.39799H3.34856V9.29988H0.607008C0.598732 9.15039 0.595037 9.00035 0.595037 8.84895C0.594149 7.6423 0.839945 6.48945 1.28256 5.44084Z"
                      fill="#800080"
                    />
                    <path
                      d="M6.84138 3.21476C6.88978 3.19352 6.94976 3.21726 6.98273 3.27129L9.56084 7.51457C10.2077 7.6158 10.7031 8.17432 10.7031 8.8495C10.7031 9.59667 10.0976 10.2023 9.35041 10.2023C8.60341 10.2023 7.99769 9.59667 7.99769 8.8495C7.99769 8.59659 8.06828 8.36106 8.18897 8.15859L6.78786 3.35703C6.77008 3.29643 6.79296 3.23603 6.84138 3.21476ZM9.35041 9.52581C9.72401 9.52581 10.0268 9.22324 10.0268 8.84954C10.0268 8.47583 9.72401 8.17299 9.35041 8.17299C8.97694 8.17299 8.67413 8.47583 8.67413 8.84954C8.67413 9.22324 8.97694 9.52581 9.35041 9.52581Z"
                      fill="#800080"
                    />
                  </svg>
                </div>
                <div className="text-base ml-[55px]">
                  <span>{vehicle.dezel}</span>
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                    className="size-5 ml-[68px] mt-[-21px] w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7578 3.11318L13.8713 1.37556C13.7321 1.10283 13.3983 0.994617 13.1255 1.13371C12.8528 1.27286 12.7446 1.60672 12.8837 1.87941L13.5272 3.1406C12.5505 3.45573 11.8418 4.37307 11.8418 5.45323V7.26586C11.8418 7.57202 12.09 7.82022 12.3962 7.82022H13.7097V9.67723C13.7097 10.6035 12.9562 11.357 12.03 11.357H11.1301V1.65499C11.1302 0.903973 10.5192 0.292969 9.7682 0.292969H3.23164C2.28535 0.292969 1.51547 1.06282 1.51547 2.00911V14.5911C0.917976 14.7352 0.472656 15.2739 0.472656 15.915V16.7386C0.472656 17.0448 0.72085 17.293 1.02702 17.293H11.6187C11.9248 17.293 12.173 17.0448 12.173 16.7386V15.915C12.173 15.274 11.7277 14.7353 11.1302 14.5912V12.4657H12.03C13.5676 12.4657 14.8184 11.2148 14.8184 9.67727C14.8184 9.67196 14.8184 3.36512 14.8184 3.36512C14.8184 3.2775 14.7976 3.19117 14.7578 3.11318ZM2.62415 2.00911C2.62415 1.67415 2.89668 1.40169 3.2316 1.40169H9.7682C9.90786 1.40169 10.0215 1.51534 10.0215 1.65499V14.553H2.62419L2.62415 2.00911ZM1.58134 16.1842V15.915C1.58134 15.7754 1.695 15.6617 1.83465 15.6617H2.06979H10.5758H10.8109C10.9506 15.6617 11.0643 15.7754 11.0643 15.915V16.1843H1.58134V16.1842ZM13.7097 6.71153H12.9505V5.45327C12.9505 4.9257 13.2615 4.46962 13.7097 4.25809V6.71153Z"
                      fill="#800080"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {hasMoreItems && (
        <div className="text-center mt-[-200px] pb-[30px] font-bold text-xl">
          <Link to="/choose_categories/homepage_vehicles/all">
          <button
            onClick={handleNextPage}
            className="px-[60px]  py-4 bg-[#800080] text-white rounded-full hover:bg-[#FFA500] focus:outline-none"
          >
           {t('vehicle_more')}
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CarsAgency;