import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import imgscr from '../assets/ImagesVehicle/person.png'
import { useTranslation } from 'react-i18next';


function EditProfileComponents() {
  const {t} = useTranslation();
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*,video/*",

        onDrop: (acceptedFiles) => {
            setFiles((prevFiles) => []);
            setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        },
    });
    return (
        <div className=' bg-[#ebeafa] '> <br/>
            <div className="rounded-full w-[30%] flex lg:mx-[44%] sm:mx-[35%] ">
                {
                    files.length === 0 ? <img src={imgscr} width="190px" alt="" srcset="" /> :
                        files.map((file, index) => (
                            <img src={URL.createObjectURL(file)} width="190px"  className='rounded-full h-[200px]' alt="" srcset="" />
                        ))}
            </div>
            <div className="bg-blue-950 rounded-full w-12 h-10 p-3 flex justify-center mx-[51%] z-10 relative -mt-6  text-white">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                        </svg>
                    </button>
                </div>
            </div>
            <h1 className='font-bold text-[25px] w-44 sm:mx-72  lg:mx-[47%] '>محمد خليل</h1>
            <br></br><br></br>
            <div className="grid lg:mx-[37%] sm:mx-36 justify-center items-center ">
            <form action="" className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center' method="post">
                <input type="text" className='p-3 mt-4 w-[30rem] rounded-full border-2 focus:outline-none focus:border-purple-800 transition-colors' /><br></br><br/>
                <input type="text" className='p-3 mt-4 w-[30rem] rounded-full border-2 focus:outline-none focus:border-purple-800 transition-colors' /> <br/>
                <input type="email" className='p-3 mt-4  w-[30rem] rounded-full border-2 focus:outline-none focus:border-purple-800 transition-colors' name="" id="" /> <br/>
                <div className="flex justify-between w-[60%] mx-[15%] mt-9"> 
                <Link to="/Profile">
                    <button className=" w-40 py-5 px-11  bg-white text-xl  rounded-full">
                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  className="inline mr-2 -mt-2"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
                Link
                </button>
                </Link>
                <Link>
                <button className=" w-52  py-5 px-10  mx-[30px] bg-blue-950 text-xl text-white  rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  className="inline  mr-2 -mt-2"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
                UnLink
                </button>
                </Link>
            </div>
            </form><br></br><br/>
            <Link>
            <button className='p-6 w-56 bg-yellow-500 rounded-full text-white text-xl font-bold mx-[20%]'>
                {t('edit_profile_loca')}
            </button>
            
            </Link> <br/> <br/>
            </div>

        </div>
    )
}

export default EditProfileComponents
