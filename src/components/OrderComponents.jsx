import React from 'react'
import Flat2 from '../assets/Images/Flat1.png'
import Flat1 from '../assets/Images/Flat2.png'
import { FaBath, FaBed, } from 'react-icons/fa';
import Img from '../assets/Images/Flat1.png'
import { BsTextareaResize } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function OrderComponents() {
    const {t} = useTranslation();
    const orders = [
        {
            id: 1,
            name: "رحلة القارب الزجاجي",
            location: "شرم الشيخ - مصر",
            image: Flat2,
            price: " ريال 3500 ",
            rating: "4.1",
        },
        {
            id: 2,
            name: "رحلة القارب الزجاجي",
            location: "شرم الشيخ - مصر",
            image: Flat1,
            price: " ريال 3500 ",
            rating: "4.1",
        },
        {
            id: 3,
            name: "رحلة القارب الزجاجي",
            location: "شرم الشيخ - مصر",
            image: Flat2,
            price: " ريال 3500 ",
            rating: "4.1",
        },
        {
            id: 4,
            name: "رحلة القارب الزجاجي",
            location: "شرم الشيخ - مصر",
            image: Flat1,
            price: " ريال 3500 ",
            rating: "4.1",
        },
    ];
    return (
        <div className='bg-[#ebeafa] '> <br /> <br />
            <section className="grid sm:grid-cols-1 lg:w-[70%] px-9 lg:grid-cols-2 w-full lg:ml-64  py-3">
                {orders.map((order) => (
                    <div className="bg-white lg:w-full  shadow-lg m-3 border-4   flex justify-between p-3">
                        <div className="flex">
                            <img src={Img} width="140px" height="40px" alt="" />
                            <p className='bg-green-200 text-lg text-green-500 h-10 p-1 ml-2'>{t('details_Licensed')}</p>
                            <div className="text-blue-800 mt-24 -mx-14  text-xl">3000 R</div>
                        </div>
                        <div className="p-2 ">
                            <h1 className='text-2xl ml-28'>{t('details_name')}</h1>
                            <h3 className='mt-3 ml-24'>{t('details_location')}</h3>
                            <div className='p-3 flex'>
                                <p className=' p-2 flex ' >
                                    <BsTextareaResize className='mr-2 mt-0.5  text-[#800080]' />
                                    5x7</p>
                                <p className='me-2 flex p-2' >
                                    <FaBath className='mr-2   text-[#800080]' />
                                    9 {t('details_bathroom')}</p>
                                <p className='mr-2 p-2 flex  '>
                                    <FaBed className='mr-2 mt-1   text-[#800080]' />
                                    3 {t('details_rooms')}</p>
                            </div>
                            <hr className='h-[4px]  bg-gray-800 mx-9'></hr> <br/>
                            <div className="flex px-3 justify-center">
                                <button className='rounded-full p-1 bg-red-800'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x text-white" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </button>
                                <span className='px-3'> {t('order_refuse')} </span>
                                <button className='rounded-full p-1 bg-green-600'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x text-white" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                    </svg>
                                </button>
                                <span className='px-3'> {t('order_accetance')} </span>

                            </div>

                        </div>
                    </div>
                ))}
            </section>



        </div>
    )
}

export default OrderComponents

