import React from "react";
import Flat1 from "../../assets/ImagesInfluancers/Azza.png";
import Flat2 from "../../assets/ImagesBrokers/User.png";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SimilarInfluancer = () => {

  const {t} = useTranslation();

  const influancers = [
    {
      id: 1,
      name: "وسام قطب",
      location: "عمان - الأردن",
      image: Flat2,
      job: "إنفلونسر",
      followers: "4.1 مليون",
      details: t('inf_ser_simila_details'),
    },
    {
      id: 2,
      name: "عزة زعرور",
      location: "دبي - الإمارات",
      image: Flat1,
      job: "إنفلونسر",
      followers: "6.1 مليون",
      details: "انقر لعرض تفاصيل المشهور",
    },
    {
      id: 3,
      name: "وسام قطب",
      location: "عمان - الأردن",
      image: Flat2,
      job: "إنفلونسر",
      followers: "4.1 مليون",
      details: "انقر لعرض تفاصيل المشهور",
    },
    {
      id: 4,
      name: "عزة زعرور",
      location: "دبي - الإمارات",
      image: Flat1,
      job: "إنفلونسر",
      followers: "6.1 مليون",
      details: "انقر لعرض تفاصيل المشهور",
    },
    {
        id: 3,
        name: "وسام قطب",
        location: "عمان - الأردن",
        image: Flat2,
        job: "إنفلونسر",
        followers: "4.1 مليون",
        details: "انقر لعرض تفاصيل المشهور",
    },
    {
        id: 4,
        name: "عزة زعرور",
        location: "دبي - الإمارات",
        image: Flat1,
        job: "إنفلونسر",
        followers: "6.1 مليون",
        details: "انقر لعرض تفاصيل المشهور",
    },

  ];


  return (
    <div className="min-h-screen text-right pt-12 bg-[#EBEAFA]">
      <main>
        <section className="flex flex-wrap justify-center max-w-7xl mx-auto py-3">
          {influancers.map((influancer) => (
            <div
              key={influancer.id}
              className="w-full sm:w-1/2 lg:w-1/2 p-2 my-[-60px] mt-[-30px] pb-[-40px]"
            >
              <div className="w-full h-[60%] rounded-lg shadow-md overflow-hidden mb-2 sm:p-2 bg-white float-right">
                <div className="flex">
                  <img
                    className="w-20 h-20 mt-[20px] object-cover"
                    src={influancer.image}
                    alt="/"
                  />
                  <div className="p-4 flex flex-col justify-between float-right mt-[-5px]">
                    <div>
                      <div className="grid mr-[390px] mb-[-30px]">
                        <span className=" text-gray-500 px-2 py-2 rounded-full text-xs font-semibold mr-2">
                          {influancer.followers}
                        </span>
                      </div>

                      <div className="mb-12">
                        <h3 className="text-[25px] mr-[8px] font-semibold">
                          {influancer.name}
                        </h3>

                        <p className="text-gray-500 flex float-right mr-6 pt-2 pb-2">
                          {influancer.location}
                          <FaMapMarkerAlt className="ml-4 mt-[5px]" />
                        </p>
                        <p className="text-blue-700 text-md p-2 ml-[310px] mr-6 text-lg font-semibold cursor-pointer hover:text-[#FFA500]">
                          {influancer.job}
                        </p>
                        <div className="flex mt-[-30px] pb-[22px]">
                          <Link to="/property/influancer_services/">
                            <span className=" text-gray-500 px-12 rounded-full text-lg font-semibold mr-2 hover:text-[#800080]">
                              {influancer.details}
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

export default SimilarInfluancer