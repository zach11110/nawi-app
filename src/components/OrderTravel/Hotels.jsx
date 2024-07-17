import React from "react";
import Flat1 from "../../assets/Images/Flat1.png";
import Flat2 from "../../assets/Images/Flat2.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hotels = () => {

  const {t} = useTranslation();

  const hotels = [
    {
      id: 1,
      name: "فندق الشفاء",
      location: "سيناء",
      image: Flat1,
      status: "مرخص",
      rating: 4.2,
    },
    {
      id: 2,
      name: "منتجع الدار",
      location: "الدمام",
      image: Flat2,
      status: "غير مرخص",
      rating: 4.2,
    },
    {
      id: 3,
      name: "فندق القصران",
      location: "الرياض",
      image: Flat1,
      status: "مرخص",
      rating: 4.2,
    },
    {
      id: 4,
      name: "فندق النجوم",
      location: "بيروت",
      image: Flat2,
      status: "غير مرخص",
      rating: 4.2,
    },
  ];

  return (
    <div className="min-h-screen text-right pt-12">
      <main>
        <section className="flex flex-wrap justify-center max-w-7xl mx-auto py-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="w-full sm:w-1/2 lg:w-1/2 p-2">
              <div className=" w-full rounded-lg shadow-md overflow-hidden mb-4 sm:mb-6 p-2 bg-white float-right">
                <div className="flex">
                  <img
                    className="w-32 h-34 object-cover"
                    src={hotel.image}
                    alt="/"
                  />
                  <div className="p-4 flex flex-col justify-between float-right">
                    <div>
                      <div className="flex mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold mr-2 ${
                            hotel.status === "مرخص"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {hotel.status}
                        </span>

                        <svg
                          width="14"
                          height="13"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-[6px] ml-[3px]"
                        >
                          <path
                            d="M13.4185 4.57767L9.26153 3.98457L7.40326 0.28611C7.3525 0.184848 7.269 0.102875 7.16585 0.0530477C6.90717 -0.0723237 6.59282 0.0321525 6.46348 0.28611L4.60521 3.98457L0.448251 4.57767C0.333644 4.59374 0.228861 4.64679 0.148636 4.72715C0.0516486 4.82502 -0.0017959 4.95668 4.60817e-05 5.09321C0.00188807 5.22974 0.0588658 5.35996 0.158459 5.45527L3.16607 8.33399L2.45551 12.3989C2.43885 12.4935 2.44951 12.5907 2.48628 12.6796C2.52305 12.7686 2.58446 12.8456 2.66355 12.902C2.74264 12.9584 2.83625 12.9919 2.93375 12.9987C3.03125 13.0055 3.12875 12.9854 3.21519 12.9406L6.93337 11.0214L10.6515 12.9406C10.7531 12.9936 10.8709 13.0113 10.9839 12.992C11.2688 12.9438 11.4603 12.6786 11.4112 12.3989L10.7007 8.33399L13.7083 5.45527C13.7901 5.37651 13.8442 5.27364 13.8605 5.16113C13.9047 4.87985 13.705 4.61946 13.4185 4.57767Z"
                            fill="#EEA651"
                          />
                        </svg>
                        <span className="text-yellow-500">{hotel.rating}</span>
                      </div>
                      <div className="">
                      <h3 className="text-lg font-semibold ml-[220px]">
                          {hotel.name}
                        </h3>
                        <p className="text-gray-500 text-md p-2 ml-[300px]">
                          {hotel.location}
                        </p>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 30 36"
                          fill="none"
                          className="float-right mr-[80px] mt-[-25px]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 0C11.0232 0.00442346 7.21062 1.49589 4.39859 4.14723C1.58656 6.79857 0.0047075 10.3933 1.59585e-05 14.1429C-0.00474707 17.207 1.05681 20.188 3.02183 22.6286C3.02183 22.6286 3.43092 23.1364 3.49774 23.2097L15 36L26.5077 23.2033C26.5677 23.1351 26.9782 22.6286 26.9782 22.6286L26.9795 22.6247C28.9436 20.1852 30.0046 17.2056 30 14.1429C29.9953 10.3933 28.4134 6.79857 25.6014 4.14723C22.7894 1.49589 18.9768 0.00442346 15 0ZM15 19.2857C13.9212 19.2857 12.8666 18.9841 11.9696 18.419C11.0726 17.8539 10.3735 17.0507 9.96066 16.1109C9.54782 15.1712 9.4398 14.1372 9.65027 13.1395C9.86073 12.1419 10.3802 11.2255 11.1431 10.5063C11.9059 9.78707 12.8778 9.29726 13.9359 9.09882C14.9939 8.90038 16.0907 9.00223 17.0874 9.39148C18.084 9.78073 18.9359 10.4399 19.5353 11.2856C20.1346 12.1314 20.4545 13.1257 20.4545 14.1429C20.4527 15.5063 19.8775 16.8134 18.8549 17.7775C17.8324 18.7416 16.4461 19.284 15 19.2857Z"
                            fill="#415770"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        {/* أزرار التحكم */}
        <div className="flex justify-center items-center">
          <Link to="/order_travel/add1/">
            <button className="bg-gray-300 text-black mx-[90px] px-7 py-3 rounded-3xl hover:bg-[#800080] hover:text-white">
            {t('travel_ser_des_order')} 
            </button>
          </Link>
          <Link to="/order_travel/add">
            <button className="bg-[#FFA500] text-white mx-[90px] px-7 py-3 rounded-3xl hover:bg-[#800080]">
            {t('add1_vehicle_next')}
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Hotels;
