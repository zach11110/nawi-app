import React from "react";
import Header from "../header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Result1 = () => {
  const {t} = useTranslation();

  return (
    <div>
      <Header
        title={t('order_travel_result_summary')}
        className="min-h-screen flex flex-col items-center"
      />
      <div className="min-h-screen flex flex-col items-center bg-[#EBEAFA]">
        <div className="w-full max-w-5xl p-4 mt-10">
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-2xl focus:bg-[#800080] focus:text-white font-semibold mb-6 text-center mr-[155px]">
               {t('order_travel_result_services')}
            </h2>
            {/* نموذج المعلومات */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 font-semibold text-lg">
                <div className="text-center grid grid-cols-2 md:grid-cols-2">
                  <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                    10 000
                  </p> <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                    فندق السفير
                  </p>
                </div>
                <div className="text-center grid grid-cols-2 md:grid-cols-2">
                  <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                    25 000
                  </p> <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                    فندق الآغا
                  </p>
                </div>
                <div className="text-center grid grid-cols-2 md:grid-cols-2">
                  <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                    25 000
                  </p> <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                    فندق الأمير
                  </p>
                </div>
              </div>
             
            </div>
          </div>

          <div className=" mt-8 p-6 rounded-xl">
            {/* نموذج المعلومات */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 font-semibold text-lg">
                <div className="text-center grid grid-cols-2 md:grid-cols-2">
                  <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                    22/12/2024
                  </p> <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                   {t('order_travel_result_date')}
                  </p>
                </div>
                <div className="text-center grid grid-cols-2 md:grid-cols-2">
                  <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                    60 000
                  </p> <p
                    type="text"
                    readOnly
                    value={""}
                    className="w-[50%] h-[30%] p-2 pr-10 text-right"
                  >
                     {t('order_travel_result_total')}
                  </p>
                </div>
              </div>
             
            </div>
          </div>

          {/* أزرار التحكم */}
          <div className="flex justify-center p-12 mr-[120px]">
            <Link to="/order_travel/add/">
              <button className="bg-gray-300 text-black mx-[80px] px-7 py-3 rounded-3xl hover:bg-[#800080] hover:text-white">
                {t('travel_ser_des_order')}
              </button>
            </Link>
            <Link to="/order_travel/AllOrders/">
              <button className="bg-[#FFA500] text-white mx-[90px] px-7 py-3 rounded-3xl hover:bg-[#800080]">
                {t('add1_vehicle_next')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result1;
