import React from "react";
import Flat2 from "../../assets/ImagesOrdertravels/1.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AllOrderBroker = () => {

  const {t} = useTranslation();

  const officesTravel = [
    {
      id: 1,
      name: t('all_b_name'),
      price: t('all_b_price'),
      image: Flat2,
      job: t('all_b_job'),
      details: t('all_b_details'),
    },
    {
      id: 2,
      name: "الرياض - جزر المالديف",
      price: "3500 ريال",
      image: Flat2,
      job: "مكتب سفريات",
      details: "انقر لعرض تفاصيل الرحلة",
    },
    {
      id: 3,
      name: "الرياض - جزر المالديف",
      price: "3500 ريال",
      image: Flat2,
      job: "مكتب سفريات",
      details: "انقر لعرض تفاصيل الرحلة",
    },
    {
      id: 4,
      name: "الرياض - جزر المالديف",
      price: "3500 ريال",
      image: Flat2,
      job: "مكتب سفريات",
      details: "انقر لعرض تفاصيل الرحلة",
    },
    {
      id: 5,
      name: "الرياض - جزر المالديف",
      price: "3500 ريال",
      image: Flat2,
      job: "مكتب سفريات",
      details: "انقر لعرض تفاصيل الرحلة",
    },
    {
      id: 6,
      name: "الرياض - جزر المالديف",
      price: "3500 ريال",
      image: Flat2,
      job: "مكتب سفريات",
      details: "انقر لعرض تفاصيل الرحلة",
    },
  ];

  return (
    <div className="min-h-screen text-right pt-12 bg-[#EBEAFA]">
      <main>
        <section className="flex flex-wrap justify-center max-w-7xl mx-auto py-3">
          {officesTravel.map((officeTravel) => (
            <div
              key={officeTravel.id}
              className="w-full sm:w-1/2 lg:w-1/2 p-2 my-[-60px] mt-[-30px] pb-[-40px]"
            >
              <div className="w-full h-[60%] rounded-lg shadow-md overflow-hidden mb-2 mt-4 sm:p-2 bg-white float-right">
                <div className="flex">
                  <img
                    className="w-20 h-20 mt-[20px] object-cover"
                    src={officeTravel.image}
                    alt="/"
                  />
                  <div className="p-4 flex flex-col justify-between float-right mt-[-5px]">
                    <div>
                      <div className="grid mr-[390px] mb-[-30px]">
                        <span className=" text-gray-500 px-2 py-2 rounded-full text-xs font-semibold mr-2">
                          {officeTravel.followers}
                        </span>
                      </div>

                      <div className="mb-12">
                        <h3 className="text-[23px] mr-[-15px] font-semibold">
                          {officeTravel.name}
                        </h3>

                        
                        <p className="text-blue-700 text-md p-2 ml-[290px] text-lg font-semibold cursor-pointer hover:text-[#FFA500]">
                          {officeTravel.job}
                        </p>
                        <p className="text-[#990033] hover:text-[#FFA500] cursor-pointer text-2xl flex float-right ml-3 pt-2 pb-4">
                          {officeTravel.price}
                        </p>
                        <div className="flex mt-[-10px] pb-12 mr-[-10px]">
                          <Link to="/order_travel/travel_offieces_services/">
                            <span className=" text-gray-500 rounded-full text-lg font-semibold mr-2 hover:text-[#800080]">
                              {officeTravel.details}
                            </span>
                          </Link>
                        </div>
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

export default AllOrderBroker;
