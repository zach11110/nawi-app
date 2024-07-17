import { t } from "i18next";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";

const Add6 = () => {
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
    <div className="bg-[#EBEAFA]">
      <div className="p-8 rounded-2xl focus:bg-[#800080] focus:text-white max-w-3xl mx-auto">
        <h2 className="text-3xl focus:bg-[#800080] focus:text-white font-semibold mb-6 text-center mr-[90px]">
         {t('add6_vehicle_end')}
        </h2>

        <div className="mb-8 pt-[60px]">
          <label className="text-xl block mb-2 font-semibold text-black text-right">
          {t('add6_vehicle_add_img')}
          </label>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 right-20">
                  <button
                    onClick={removeFile(file)}
                    className="bg-green-600 text-white rounded-full p-1 w-6 h-8  hover:bg-red-700"
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

        <label className="text-xl block mb-8 font-semibold text-black text-right">
           {t('add6_vehicle_regional')}
        </label>
        <textarea
            className="text-right w-[75%] max-w-lg h-48 mr-[270px] p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-800 transition-colors"
            placeholder={t('add6_vehicle_input')}
          />

        <Link to="/vehicle/share/">
          <button className="bg-[#FFA500] ml-[130px] hover:bg-amber-500 text-[#fff] w-[250px] rounded-full font-medium my-6 mx-auto md:mx-90 py-3 text-[23px]">
          {t('add1_vehicle_next')}
          </button>
        </Link>

        <Link to="/vehicle/add5/">
          <div className=" mt-[30px] bg-white rounded-full w-10 h-10 p-3 flex justify-center float-left hover:bg-[#FFA500]">
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
    </div>
  );
};

export default Add6;
