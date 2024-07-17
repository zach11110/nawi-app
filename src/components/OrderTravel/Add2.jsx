import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Header from "../header";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Add2 = ({ prop }) => {

  const {t} = useTranslation();

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
  return (
    <div>
      <Header
        title={t('travel_ser_top_header')}
        className="min-h-screen flex flex-col items-center"
      />
      <div className="min-h-screen flex flex-col items-center bg-[#EBEAFA]">
        <div className="w-full max-w-5xl p-4 mt-10">
          {/* قسم الصور */}
          <div className="mb-8  pt-[60px]">
            <label className="text-xl block mb-2 font-bold text-black text-right">
             {t('order_travel_add_photos')}
            </label>
            <div className="mt-[10px] mr-[120px] grid grid-cols-3 gap-3">
              {files.map((file, index) => (
                <div key={index} className="relative">
                  <div className="absolute top-0 left-[110px]">
                    <button
                      onClick={removeFile(file)}
                      className="bg-green-600 text-white rounded-full w-6 h-8  hover:bg-red-700"
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

          {/* خريطة الرحلة */}
          <div className="text-right mb-8">
            <h2 className="text-xl font-bold mb-4">{t('order_travel_add_itinerary')}</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <img src="map.jpg" alt="Map" className="w-full rounded-lg" />
              <p className="text-gray-500 text-xs mt-2">© الموقع على الخريطة</p>
            </div>
          </div>

          {/* نموذج المعلومات */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="date"
                  placeholder={t('order_travel_add_input_start')}
                  className="w-full p-2 pr-10 border text-right border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
                <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('order_travel_add_input_capacity')}
                  className="w-full p-2 pr-10 border text-right border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="relative left-1/4 pt-4">
              <input
                type="date"
                placeholder={t('order_travel_add_input_end')}
                className="w-[49%] p-2 pr-10 border text-right border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <FaCalendarAlt className="absolute left-[46%] top-1/2 mt-2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* أزرار التحكم */}
          <div className="flex justify-center p-12">
            <Link to="/order_travel/add/">
              <button className="bg-gray-300 text-black mx-[80px] px-7 py-3 rounded-3xl hover:bg-[#800080] hover:text-white">
               {t('travel_ser_des_order')}
              </button>
            </Link>
            <Link to="/order_travel/travel_service/">
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

export default Add2;