import React from 'react'
import "../assets/Css/style.css"
import vector from '../assets/ImagesVehicle/person.png'
import { useTranslation } from 'react-i18next';


function Massage() {
    const {t} = useTranslation();
    return (
        <div className=" bg-[#ebeafa] right-to-left p-11">
            <p className='font-bold text-[30px] p-6 '>{t('Messages')}</p>
            <div className="lg:w-[47%] sm:w-[500px] lg:mx-[25%]  sm:mx-[5%] p-14  mt-10 border-2 border-white bg-white rounded-3xl">
                <div className="-mt-11 -mx-14">
                    <img className='p-0 w-16 float-end' src={vector} alt="" />
                </div>
                <div className="p-3">
                    <h1 className='float-end px-3 font-bold text-[15px]'>محمد خليل</h1><br /> <br></br>
                    <p className='float-end px-3'>dcdecvcv</p>
                    <p className='py-2 px-5'>10:45</p>
                    <div className="rounded-full w-20 text-white bg-green-500 text-center">100</div>
                </div>
            </div>
            <div className="lg:w-[47%] sm:w-[500px] lg:mx-[25%]  sm:mx-[5%] p-14  mt-10 border-2 border-white bg-white rounded-3xl">
                <div className="-mt-11 -mx-14">
                    <img className='p-0 w-16 float-end' src={vector} alt="" />
                </div>
                <div className="p-3">
                    <h1 className='float-end px-3 font-bold text-[15px]'>محمد خليل</h1><br /> <br></br>
                    <p className='float-end px-3'>dcdecvcv</p>
                    <p className='py-2 px-5'>10:45</p>
                    <div className="rounded-full w-20 text-white bg-green-500 text-center">100</div>
                </div>
            </div>
            <div className="lg:w-[47%] sm:w-[500px] lg:mx-[25%]  sm:mx-[5%] p-14  mt-10 border-2 border-white bg-white rounded-3xl">
                <div className="-mt-11 -mx-14">
                    <img className='p-0 w-16 float-end' src={vector} alt="" />
                </div>
                <div className="p-3">
                    <h1 className='float-end px-3 font-bold text-[15px]'>محمد خليل</h1><br /> <br></br>
                    <p className='float-end px-3'>dcdecvcv</p>
                    <p className='py-2 px-5'>10:45</p>
                    <div className="rounded-full w-20 text-white bg-green-500 text-center">100</div>
                </div>
            </div>
            <div className="lg:w-[47%] sm:w-[500px] lg:mx-[25%]  sm:mx-[5%] p-14  mt-10 border-2 border-white bg-white rounded-3xl">
                <div className="-mt-11 -mx-14">
                    <img className='p-0 w-16 float-end' src={vector} alt="" />
                </div>
                <div className="p-3">
                    <h1 className='float-end px-3 font-bold text-[15px]'>محمد خليل</h1><br /> <br></br>
                    <p className='float-end px-3'>dcdecvcv</p>
                    <p className='py-2 px-5'>10:45</p>
                    <div className="rounded-full w-20 text-white bg-green-500 text-center">100</div>
                </div>
            </div>
       


        </div>

    );
}

export default Massage
