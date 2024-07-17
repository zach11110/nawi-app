import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom'
import '../assets/Css/style.css'
import { useTranslation } from "react-i18next";

function JoinTravel_officee() {
    const {t} = useTranslation();
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles((prevFiles) => []);
            setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        },
    });
    const removeFile = (file) => () => {
        setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
    };
    return (
        <div className=' justify-center overflow-y-hidden bg-[#ebeafa]'>
            <div className=" flex flex-col items-center  bg-[#EBEAFA]">
                <div className="w-full max-w-5xl p-4 mt-10">
                    <div className="space-y-4">
                        <div className="relative sm:left-20  lg:left-1/4 pt-4">
                            <input
                                type="text"
                                placeholder=" 5855524"
                                className="w-[49%] p-2 pr-10 border text-right border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                                onFocus={(e) => (e.target.type = "text")}
                                onBlur={(e) => (e.target.type = "text")}
                            />
                            <label className='px-9 text-lg font-bold'>{t('JoinTravel_number')} </label>
                        </div>
                        <div className="relative sm:left-20 lg:left-1/4 pt-4">
                            <input
                                type="url"
                                placeholder=" https://www.instagram.com/"
                                className="w-[49%] p-2 pr-10 border text-right border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                                onFocus={(e) => (e.target.type = "text")}
                                onBlur={(e) => (e.target.type = "text")}
                            />
                            <label className='px-9 text-lg font-bold'> {t('JionInf_Instagram')} </label>
                        </div>
                        <div className="relative sm:left-20 lg:left-1/4 pt-4">
                            <input
                                type="url"
                                placeholder=" https://www.fecebook.com/"
                                className="w-[49%] p-2 pr-10 border text-right border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                                onFocus={(e) => (e.target.type = "text")}
                                onBlur={(e) => (e.target.type = "text")}
                            />
                            <label className='px-9 text-lg font-bold'> {t('Facebook_link')} </label>
                        </div>
                        <div className="relative sm:left-20 lg:left-1/4 pt-4">
                            {files.length === 0 ?
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div className="flex items-center justify-center sm:w-[550px] lg:w-[75%]">
                                        <label for="dropzone-file" className="flex flex-col items-center justify-center  w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                        </label>
                                        <label className='px-28 z-10 relative text-lg  font-bold'> {t('image')}  </label>
                                    </div>
                                </div>
                                : files.map((file, index) => (
                                    <div className="flex">
                                        <img key={index} src={URL.createObjectURL(file)} width="50%"  className='resize-none h-64' alt="" srcset="" />
                                        <div className=" top-0 left-5 -mx-10">
                                            <button
                                                onClick={removeFile(file)}
                                                className="bg-green-600 text-white z-10 relative rounded-full p-1 w-10 h-8  hover:bg-red-700"
                                            >
                                                x
                                            </button>
                                        </div>
                                        <label className='px-24 text-lg  font-bold'> {t('image')}  </label>
                                    </div>

                                ))} </div>
                        <div className="relative sm:left-20 lg:left-1/4 pt-4">
                            <textarea
                                placeholder={t('description')}
                                rows="10"
                                className="w-[49%]  p-2 pr-10 border text-right border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                            <label className='px-9 text-lg font-bold '>{t('description')}</label>
                        </div>
                    </div>
                    {/* أزرار التحكم */}
                    <div className="flex justify-center sm:mr-36 p-12 mr-16">
                        <Link to="/">
                            <button className="bg-gray-300 sm:w-32 lg:w-40 text-black  lg:mx-[70px] px-7 py-3 rounded-3xl hover:bg-[#800080] hover:text-white">
                                {t('content_back')}
                            </button>
                        </Link>
                        <Link to="/order_travel/travel_service/">
                            <button className="bg-[#FFA500]  lg:w-56 text-white  px-7 py-3 rounded-3xl hover:bg-[#800080]">
                                {t('JionInf_send')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default JoinTravel_officee

