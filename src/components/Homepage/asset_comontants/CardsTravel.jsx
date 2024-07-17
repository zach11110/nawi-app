import React, { useState } from "react";
import { Link } from "react-router-dom";
import Travel from "../../../assets/ImagesOrdertravels/2.png";
import { FaPlane } from "react-icons/fa";

const CardsTravel = ({ title, isSpecial }) => {
  const ITEMS_PER_PAGE_FIRST = 6;
  const ITEMS_PER_PAGE = 12;
  const order_travel = [
    {
      id: 1,
      name: "المالديف",
      image: Travel,
      itineraryFrom: "الرياض",
      itineraryTo: "جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
    },
    {
      id: 2,
      name: "المالديف",
      image: Travel,
      itineraryFrom: "الرياض",
      itineraryTo: "جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
    },
    {
      id: 3,
      name: "المالديف",
      image: Travel,
      itineraryFrom: "الرياض",
      itineraryTo: "جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
    },
    {
      id: 4,
      name: "المالديف",
      image: Travel,
      itineraryFrom: "الرياض",
      itineraryTo: "جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
    },
    {
      id: 5,
      name: "المالديف",
      image: Travel,
      itineraryFrom: "الرياض",
      itineraryTo: "جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
    },
    {
      id: 6,
      name: "المالديف",
      image: Travel,
      itineraryFrom: "الرياض",
      itineraryTo: "جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
    },

    {
      id: 7,
      name: "المالديف",
      image: Travel,
      itineraryFrom: "الرياض",
      itineraryTo: "جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const getCurrentItems = () => {
    const startIndex =
      currentPage === 1
        ? 0
        : ITEMS_PER_PAGE_FIRST + (currentPage - 2) * ITEMS_PER_PAGE;
    const endIndex =
      currentPage === 1 ? ITEMS_PER_PAGE_FIRST : startIndex + ITEMS_PER_PAGE;
    return order_travel.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentItems();
  const hasMoreItems =
    order_travel.length >
    (currentPage === 1
      ? ITEMS_PER_PAGE_FIRST
      : (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <div className="my-[40px] mx-[20px] bg-[#EBEAFA]">
      <p className="p-6 font-bold text-right text-2xl">{title}</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ml-[10px] gap-3 pb-[170px]">
        {currentItems.map((order_travel) => (
          <div
            key={order_travel.id}
            className="h-[85%] lg:col-span-1 sm:col-span-1 md:col-span-2 border-2 mb-[55px] shadow-xl border-gray-300 bg-white rounded-lg m-4"
          >
            <a href="#1">
              <div className="relative left-[410px] top-[3px] w-[50px] h-[50px] bg-white shadow-lg rounded-full">
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
                class="resize-none rounded-t-lg w-[500px] h-[200px] mt-[-50px] "
                src={order_travel.image}
                alt=""
              />
            </a>
            <div className="mt-[-35px] ml-[-8px]">
              {isSpecial && (
                <button className="px-2 pb-[35px] hover:bg-[#8c4fb4] bg-[#9e2b9e] text-[#fff] w-[150px] h-[40px] text-right rounded-lg font-medium my-2 mx-2 md:mx-90 text-[23px]">
                  <span className="">
                    رحلة مميزة
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 mt-[-26px] ml-[10px]"
                    >
                      <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>

            <span className="text-left p-4 text-gray-700 block mt-[-20px]  text-[19px]">
              <span className="text-[#800080] font-bold">
                {order_travel.price}
              </span>
            </span>
            <div className="p-5">
              <a href="#1">
                <h5 class="mt-[-75px] text-[30px] text-right font-bold tracking-tight text-gray-900 dark:text-black">
                  {order_travel.name}
                </h5>
              </a>
              <div className="flex float-right text-[20px] font-normal text-right my-2 text-black">
                <span className="mx-2">{order_travel.itineraryFrom}</span>
                <FaPlane className="mx-2 my-2" />
                <span className="mx-2">{order_travel.itineraryTo}</span>
              </div><br></br><br></br>
              <h3 className="mb-3 my-2 font-normal text-[20px] text-right mr-[20px] block text-black">
                {order_travel.source}
              </h3>
              <Link
                to="/order_travel/details_cards_travel_order/"
                className="text-[17px] font-medium text-left text-black hover:text-[#FFA500]"
              >
                {order_travel.details}
              </Link>
              <hr className="mb-[15px] mt-2" />

              <div className="flex flex-cols-3 justify-center items-center">
                <div className="text-base ml-[-20px]">
                  <span>{order_travel.caming}</span>
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    className="size-5 ml-[40px] mt-[-21px] w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6507 10.4141L14.1507 0.514062C14.1065 0.416859 14.0344 0.334274 13.9432 0.276313C13.852 0.218351 13.7455 0.187501 13.6367 0.1875H5.76172C5.65386 0.187673 5.54834 0.21816 5.45771 0.275327C5.36708 0.332494 5.29517 0.413932 5.25054 0.509937V0.514062V0.522312L0.747728 10.4141C0.709652 10.4978 0.69358 10.5895 0.70097 10.6809C0.708361 10.7722 0.73898 10.8603 0.790047 10.9372C0.841113 11.014 0.911007 11.0772 0.993379 11.1209C1.07575 11.1646 1.16799 11.1875 1.26171 11.1875H18.1367C18.2304 11.1875 18.3227 11.1646 18.4051 11.1209C18.4874 11.0772 18.5573 11.014 18.6084 10.9372C18.6595 10.8603 18.6901 10.7722 18.6975 10.6809C18.7049 10.5895 18.6888 10.4978 18.6507 10.4141ZM5.19922 10.0875H2.12726L5.19922 3.32937V10.0875ZM6.32422 10.0875V3.32937L9.39617 10.0875H6.32422ZM10.6273 10.0875L6.62726 1.2875H13.2711L17.2712 10.0875H10.6273Z"
                      fill="#800080"
                    />
                  </svg>
                </div>
                <div className="text-base ml-[55px]">
                  <span>{order_travel.resturant}</span>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    className="size-5 ml-[55px] mt-[-24px] w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_980_49233)">
                      <path
                        d="M6.75714 9.09138V5.97341C6.75714 5.83558 6.81211 5.70341 6.90995 5.60595C7.0078 5.50849 7.1405 5.45374 7.27888 5.45374C7.41725 5.45374 7.54996 5.50849 7.6478 5.60595C7.74565 5.70341 7.80061 5.83558 7.80061 5.97341V9.09138C7.80061 9.22921 7.74565 9.36138 7.6478 9.45884C7.54996 9.5563 7.41725 9.61105 7.27888 9.61105C7.1405 9.61105 7.0078 9.5563 6.90995 9.45884C6.81211 9.36138 6.75714 9.22921 6.75714 9.09138ZM16.1484 5.97341V17.9256C16.1484 18.0635 16.0935 18.1957 15.9956 18.2931C15.8978 18.3906 15.7651 18.4453 15.6267 18.4453C15.4883 18.4453 15.3556 18.3906 15.2578 18.2931C15.1599 18.1957 15.105 18.0635 15.105 17.9256V14.8077H11.9745C11.8362 14.8077 11.7034 14.7529 11.6056 14.6555C11.5078 14.558 11.4528 14.4258 11.4528 14.288C11.477 13.0432 11.6349 11.8046 11.9237 10.5932C12.5615 7.96307 13.7706 6.20011 15.4213 5.49597C15.5006 5.46212 15.5871 5.4484 15.6731 5.45605C15.7591 5.46369 15.8418 5.49246 15.9138 5.53977C15.9859 5.58709 16.0451 5.65147 16.086 5.72715C16.1269 5.80283 16.1484 5.88744 16.1484 5.97341ZM15.105 6.87632C13.0069 8.47233 12.596 12.3601 12.5158 13.7683H15.105V6.87632ZM9.8804 5.88831C9.87018 5.82008 9.84642 5.75455 9.81051 5.69556C9.7746 5.63656 9.72725 5.58528 9.67124 5.5447C9.61522 5.50413 9.55165 5.47506 9.48424 5.45921C9.41682 5.44336 9.34692 5.44104 9.27859 5.45238C9.21027 5.46372 9.1449 5.4885 9.08629 5.52527C9.02768 5.56204 8.97701 5.61007 8.93723 5.66655C8.89746 5.72303 8.86937 5.78683 8.85461 5.85424C8.83985 5.92165 8.83871 5.9913 8.85127 6.05915L9.36583 9.13231C9.36583 9.6836 9.14596 10.2123 8.75458 10.6021C8.3632 10.992 7.83237 11.211 7.27888 11.211C6.72538 11.211 6.19456 10.992 5.80318 10.6021C5.4118 10.2123 5.19192 9.6836 5.19192 9.13231L5.70583 6.05915C5.71839 5.9913 5.71725 5.92165 5.70249 5.85424C5.68773 5.78683 5.65964 5.72303 5.61986 5.66655C5.58009 5.61007 5.52942 5.56204 5.47081 5.52527C5.4122 5.4885 5.34683 5.46372 5.27851 5.45238C5.21018 5.44104 5.14028 5.44336 5.07286 5.45921C5.00545 5.47506 4.94188 5.50413 4.88586 5.5447C4.82985 5.58528 4.7825 5.63656 4.74659 5.69556C4.71068 5.75455 4.68692 5.82008 4.6767 5.88831L4.15496 9.00629C4.1505 9.03443 4.14832 9.06289 4.14844 9.09138C4.14948 9.82788 4.41187 10.5403 4.88923 11.1028C5.36658 11.6652 6.02819 12.0415 6.75714 12.1652V17.9256C6.75714 18.0635 6.81211 18.1957 6.90995 18.2931C7.0078 18.3906 7.1405 18.4453 7.27888 18.4453C7.41725 18.4453 7.54996 18.3906 7.6478 18.2931C7.74565 18.1957 7.80061 18.0635 7.80061 17.9256V12.1652C8.52956 12.0415 9.19117 11.6652 9.66853 11.1028C10.1459 10.5403 10.4083 9.82788 10.4093 9.09138C10.4092 9.06287 10.4068 9.03442 10.4021 9.00629L9.8804 5.88831Z"
                        fill="#800080"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_980_49233">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0.699219 0.6875)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-base ml-[55px]">
                  <span>{order_travel.hotel}</span>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    className="size-5 ml-[50px] mt-[-20px] w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9818 6.44531H2.7151V4.94531C2.7151 4.8127 2.65891 4.68553 2.55889 4.59176C2.45888 4.49799 2.32322 4.44531 2.18177 4.44531C2.04032 4.44531 1.90467 4.49799 1.80465 4.59176C1.70463 4.68553 1.64844 4.8127 1.64844 4.94531V14.9453C1.64844 15.0779 1.70463 15.2051 1.80465 15.2989C1.90467 15.3926 2.04032 15.4453 2.18177 15.4453C2.32322 15.4453 2.45888 15.3926 2.55889 15.2989C2.65891 15.2051 2.7151 15.0779 2.7151 14.9453V12.9453H16.5818V14.9453C16.5818 15.0779 16.638 15.2051 16.738 15.2989C16.838 15.3926 16.9737 15.4453 17.1151 15.4453C17.2566 15.4453 17.3922 15.3926 17.4922 15.2989C17.5922 15.2051 17.6484 15.0779 17.6484 14.9453V8.94531C17.6484 8.28227 17.3675 7.64639 16.8674 7.17755C16.3673 6.7087 15.689 6.44531 14.9818 6.44531ZM2.7151 7.44531H7.5151V11.9453H2.7151V7.44531ZM8.58177 11.9453V7.44531H14.9818C15.4061 7.44531 15.8131 7.60335 16.1131 7.88465C16.4132 8.16596 16.5818 8.54749 16.5818 8.94531V11.9453H8.58177Z"
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
              className="px-[60px]  py-4 bg-[#FFA500] text-white rounded-full hover:bg-[#800080] focus:outline-none"
            >
              تصفح رحلات أخرى
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardsTravel;
