import React from 'react'
import Img from '../assets/Images/Flat1.png'
import '../assets/Css/style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function DetailsPropety() {
    const {t} = useTranslation();
    return (
        <div className="bg-[#ebeafa] "> <br /> <br />
            <h1 className='text-3xl px-12 text-end text-gray-800 '> {t('details_ad')}</h1> <br/>
            <section className='flex justify-center w-full'>
                <div className="bg-white lg:w-[50%] sm:w-[100%] shadow-lg  flex justify-between p-3">
                    <div className="flex">
                        <img src={Img} width="130px" height="50px" alt="" />
                        <p className='bg-green-200 text-lg text-green-500 h-10 p-1 ml-2'>{t('details_Licensed')}</p>
                        <div className="text-blue-800 mt-24 -mx-14  text-xl">3000 Rial</div>
                    </div>
                    <div className="p-3 ">
                        <h1 className='text-2xl'>{t('details_name')}</h1>
                        <h3 className='mt-3'>{t('details_location')}</h3>
                        <div className='p-3 flex '>
                            <p className='me-3' >5x7</p>
                            <p className='me-3' >9 {t('details_bathroom')}</p>
                            <p className='me-3' >3 {t('details_rooms')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Link to="">
            <div className="flex justify-center">
                <h1 className='hover:text-[#800080] font-medium'>{t('details_details')}</h1>
            </div></Link>
            <br />
            <h1 className='text-3xl px-12 text-end text-gray-800 '> {t('details_Transfer')}</h1> <br/>
            <section className='flex justify-center w-full'>
                <div className="bg-white lg:w-[50%] sm:w-[100%] flex justify-between  rounded-xl">
                    <div className=" px-5 text-center py-7 text-2xl w-full ">
                        <p className='mb-2'>{t('details_chin')}</p>
                        <p className='mb-2'>{t('details_chout')}</p>
                        <p className='mb-2'>{t('details_owner')}</p>
                        <p className='mb-2'>{t('details_type')}</p>
                    </div>
                    <div className=" px-5 py-7 text-center w-full text-2xl">
                        <p className='mb-2'>11/28/2921</p>
                        <p className='mb-2'>01/28/2022</p>
                        <p className='mb-2'>Louay</p>
                        <p className='mb-2'>Rent</p>
                    </div>
                </div>
            </section>
            <br />
            <h1 className='text-3xl px-12 text-end text-gray-800 '> {t('details_Payment')}</h1> <br/>
            <section className='flex justify-center w-full'>
                <div className="bg-white lg:w-[50%] sm:w-[100%] flex justify-between rounded-xl">
                    <div className="px-5 py-7 w-full text-center text-2xl ">
                        <p className='mb-2'>{t('details_Paymenttime')}</p>
                        <p className='mb-2  lg:text-2xl'>{t('details_Price')}</p>
                        <p className='mb-2'>{t('details_Discount')}</p> 
                        <div className="">
                            <p className='bg-[#ebeafa] rounded-lg h-20 pb-2'>{t('details_Total')}</p>
                        </div>


                    </div>
                    <div className="px-5 py-7 w-full text-center text-2xl">
                        <p className='mb-2'>11/28/2921</p>
                        <p className='mb-2'>220</p>
                        <p className='mb-2'>-10</p>
                        <div className="w-full  ">
                            <p className='bg-[#ebeafa] rounded-lg h-20 pb-2'>210</p>
                        </div>
                    </div>
                </div>

            </section>
            <br />
            <h1 className='text-3xl px-12 text-end text-gray-800 '>  {t('details_method')} </h1> <br/>
            <section className='flex justify-center' >
                <div className="p-6 text-xl text-center px-20 rounded-xl bg-white  w-[45%]">
                    <p className='ml-[-60px]'>**********@gmail.com</p>

                </div>
            </section>
            <br />





        </div>

    )
}

export default DetailsPropety
