import React, { useState } from "react";
import Flat1 from "../../assets/ImagesInfluancers/Azza.png";
import Flat2 from "../../assets/ImagesBrokers/User.png";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const ShareV = () => {
  const [selectedOption, setSelectedOption] = useState("");
  // const [isChecked, setIsChecked] = useState(false);
  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  const influancers = [
    {
      id: 1,
      name: "عزة زعرور",
      location: "دبي - الإمارات",
      image: Flat1,
      job: "إنفلونسر",
      followers: "6.1 مليون",
      details: "انقر لعرض تفاصيل المشهور",
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
      name: "عزة زعرور",
      location: "دبي - الإمارات",
      image: Flat1,
      job: "إنفلونسر",
      followers: "6.1 مليون",
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

  const brokers = [
    {
      id: 1,
      name: "مريم العبد",
      location: "السعودية - الرياض",
      image: Flat2,
      job: "سمسار",
    },
    {
      id: 2,
      name: "مريم العبد",
      location: "السعودية - الرياض",
      image: Flat2,
      job: "سمسار",
    },
    {
      id: 3,
      name: "مريم العبد",
      location: "السعودية - الرياض",
      image: Flat2,
      job: "سمسار",
    },
    {
      id: 4,
      name: "مريم العبد",
      location: "السعودية - الرياض",
      image: Flat2,
      job: "سمسار",
    },
  ];

  return (
    <div className="min-h-screen text-right pt-12 bg-[#EBEAFA]">
      <main>
        <section className="flex flex-wrap justify-center max-w-7xl mx-auto py-3">
          <p className="w-full text-right p-8 font-bold text-2xl">
            <span>
              <input
                type="radio"
                className="form-radio h-5 w-5 ml-2 mb-[45px]"
                name="propertyOption"
                value="option1"
              />
            </span>
            شارك عقارك مع :
            <span className="font-normal text-[15px] text-gray-500 ml-2">
              (رسوم 10 ريال) (خيار واحد على الأكثر)
            </span>
          </p>
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

                        <p className="text-gray-500 flex float-right ml-3 pt-2 pb-2">
                          {influancer.location}
                          <FaMapMarkerAlt className="ml-2 mt-[5px]" />
                        </p>
                        <p className="text-blue-700 text-md p-2 ml-[290px] text-lg font-semibold cursor-pointer hover:text-[#FFA500]">
                          {influancer.job}
                        </p>
                        <div className="flex mt-[-30px] pb-9">
                          <Link to="/vehicle/influancer_servicesV/">
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

        <section className="flex flex-wrap justify-center max-w-7xl mx-auto py-3">
          <p className="w-full text-right p-8 font-bold text-2xl">
            <span className="p-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 ml-2 mb-[45px]"
                name="propertyOption"
                value="option1"
              />
            </span>
            أو مع السماسرة :{" "}
            <span className="font-normal text-[15px] text-gray-500">
              (رسوم 5ريال)
            </span>
          </p>
          {brokers.map((broker) => (
            <div
              key={broker.id}
              className="w-full sm:w-1/2 lg:w-1/2 p-2 my-[-60px] mt-[-30px] pb-[-40px]"
            >
              <div className="w-full mt-[35px] h-[60%] rounded-lg shadow-md overflow-hidden mb-2 sm:p-2 bg-white float-right">
                <div className="flex">
                  <img
                    className="w-20 h-20 mt-[20px] object-cover"
                    src={broker.image}
                    alt="/"
                  />
                  <div className="p-4 flex flex-col justify-between float-right mt-[-5px] ml-[70px]">
                    <div>
                      <div className="mb-12">
                        <h3 className="text-[25px] text-right font-semibold">
                          {broker.name}
                        </h3>

                        <p className="text-gray-500 flex float-right ml-3 pt-2 pb-2">
                          {broker.location}
                          <FaMapMarkerAlt className="ml-2 mt-[5px]" />
                        </p>
                        <p className="text-blue-700 text-md p-2 ml-[290px] text-lg font-semibold cursor-pointer hover:text-[#FFA500]">
                          {broker.job}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link to="">
            <button className="bg-[#FFA500] mr-[45px] mt-2 hover:bg-[#800080] text-[#fff] w-[170px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[23px]">
              نشر
            </button>
          </Link>
        </section>

        <section className="flex flex-wrap justify-center max-w-7xl mx-auto py-3">
          <p className=" w-full text-right p-8 font-bold text-2xl">
            <span className="p-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 ml-2 mb-[45px]"
                name="propertyOption"
                value="option1"
              />
            </span>
            : أو خيارات بديلة للمشاركة
          </p>
          <div className="">
            <div className="mb-4">
              <label className="flex items-center ml-4">
                <span className="text-lg font-semibold ml-[-65px]">
                  مشاركة عامة بشكل جاد ومميز{" "}
                  <span className="text-gray-500">( رسوم 3 ريال )</span>
                </span>
                <input
                  type="radio"
                  name="participation"
                  className="form-radio h-5 w-5 text-blue-600 mr-2  ml-[23px]"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={() => setSelectedOption("option1")}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <span className="text-lg font-semibold">
                  مشاركة عامة بشكل جاد{" "}
                  <span className="text-gray-500">( رسوم 2 ريال )</span>
                </span>
                <input
                  type="radio"
                  name="participation"
                  className="form-radio h-5 w-5 bg-blue-600 mr-2 ml-[23px]"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={() => setSelectedOption("option2")}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center ml-7">
                <span className="text-lg font-semibold ml-[17px]">
                  مشاركة عامة مجاناَ{" "}
                  <span className="text-gray-500">( بدون رسوم )</span>
                </span>
                <input
                  type="radio"
                  name="participation"
                  className="form-radio h-5 w-5 text-blue-600 mr-2  ml-[23px]"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={() => setSelectedOption("option3")}
                />
              </label>
            </div>
            <Link to="/vehicle/shareWomen/">
              <button className="bg-[#FFA500] mr-[110px] mt-12 hover:bg-[#800080] text-[#fff] w-[170px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[23px]">
                التالي
              </button>
            </Link>

            <Link to="/property/add6">
              <div className=" mt-[60px] ml-[-40px] bg-white rounded-full w-10 h-10 p-3 flex justify-center float-left hover:bg-[#FFA500]">
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
        </section>

      </main>
    </div>
  );
};

export default ShareV;
