import React from "react";
import Car from "../../assets/ImagesVehicle/car.png";
import { useTranslation } from "react-i18next";

const VehicleList = () => {

  const {t} = useTranslation();

  const vehicles = [
    {
      id: 1,
      name: t('vehicle_similar_name'),
      feature: t('vehicle_similar_des'),
      image: Car,
      price: t('vehicle_similar_price'),
      rating: "4.1",
    },
    {
      id: 2,
      name: "فيراري",
      feature: "شاحن توربيني مزدوج القوة الحصانية",
      image: Car,
      price: "3500 ريال",
      rating: "4.1",
    },

    {
      id: 3,
      name: "فيراري",
      feature: "شاحن توربيني مزدوج القوة الحصانية",
      image: Car,
      price: "3500 ريال",
      rating: "4.1",
    },

    {
      id: 4,
      name: "فيراري",
      feature: "شاحن توربيني مزدوج القوة الحصانية",
      image: Car,
      price: "3500 ريال",
      rating: "4.1",
    },
  ];
  

  return (
    <div className="min-h-screen text-right pt-12 bg-[#EBEAFA] m-[60px]">
      <main>
        <section className="flex flex-wrap justify-center max-w-7xl mx-auto py-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="w-full sm:w-1/2 lg:w-1/2 p-2 my-[-60px] mt-[-20px] pb-[-40px]"
            >
              <div className="w-full h-[60%] rounded-lg shadow-md overflow-hidden mb-2 sm:p-2 bg-white float-right">
                <div className="flex">
                  <img
                    className="w-20 h-20 mt-[20px] object-cover"
                    src={vehicle.image}
                    alt="/"
                  />
                  <div className="p-4 flex flex-col justify-between float-right mt-[-15px]">
                    <div>
                      <div className="flex">
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
                        <span className="text-yellow-500">
                          {vehicle.rating}
                        </span>
                      </div>

                      <div className="mb-12">
                        <h3 className="text-[25px] mr-[2px] font-semibold">
                          {vehicle.name}
                        </h3>

                        <p className="text-gray-500 flex float-right ml-3 pt-2 pb-2 mr-[2px]">
                          {vehicle.feature}
                        </p>
                        <p className="text-blue-700 text-md p-2 mr-[2px] text-lg font-semibold">
                          {vehicle.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default VehicleList;
