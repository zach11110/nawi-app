import React from 'react'
import Flat2 from '../assets/Images/Flat1.png'
import Flat1 from '../assets/Images/Flat2.png'
import Img from '../assets/Images/Flat1.png'
import { FaBath, FaBed, } from 'react-icons/fa';
import { BsTextareaResize } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function SortComponents() {
    const {t} = useTranslation();
    const orders = [
        {
            id: 1,
            name: "رحلة القارب الزجاجي",
            location: "شرم الشيخ - مصر",
            image: Flat2,
            price: " ريال 3500 ",
            rating: "4.1",
            status: 'مرخص',
        },
        {
            id: 2,
            name: "رحلة القارب الزجاجي",
            location: "شرم الشيخ - مصر",
            image: Flat1,
            price: " ريال 3500 ",
            rating: "4.1",
            status: 'مرخص',
        },
        {
            id: 3,
            name: "رحلة القارب الزجاجي",
            location: "شرم الشيخ - مصر",
            image: Flat2,
            price: " ريال 3500 ",
            rating: "4.1",
            status: 'غير مرخص',
        },
        {
            id: 4,
            name: "رحلة القارب الزجاجي",
            location: "شرم الشيخ - مصر",
            image: Flat1,
            price: " ريال 3500 ",
            rating: "4.1",
            status: 'مرخص',
        },
    ];
    return (
        <div className="bg-[#ebeafa]">
            <div className="flex justify-center p-3 ">
                <button type="button" className='border-2 p-5 rounded-xl bg-white focus:bg-[#800080] focus:text-white'>{t('sort_Travel')}</button>
                <button type="button" className='border-2 p-5 rounded-xl bg-white focus:bg-[#800080] focus:text-white'>{t('sort_propety')}</button>
                <button type="button" className='border-2 p-5 rounded-xl bg-white focus:bg-[#800080]  focus:text-white'>{t('sort_car')}</button>
                <button type="button" className='border-2 p-5 rounded-xl bg-white focus:bg-[#800080] focus:text-white ' >{t('sort_all')}</button>
            </div><br /> <br />
            <section className="grid sm:grid-cols-1 lg:w-[70%] px-9 lg:grid-cols-2 w-full lg:ml-64  py-3">
                {orders.map((order) => (
                    <div className="bg-white lg:w-full  shadow-lg m-3 border-4   flex justify-between p-3">
                        <div className="flex">
                            <img src={Img} width="130px" height="50px" alt="" />
                            <p className='bg-green-200 text-lg text-green-500 h-10 p-1 ml-2'>{order.status}</p>
                            <div className="text-blue-800 mt-24 -mx-14  text-xl">{order.price}</div>
                        </div>
                        <div className="p-0.5 ">
                            <div className=" text-right">
                                <button className='rounded-full p-1 bg-red-800'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x text-white" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </button>
                            </div> 
                            <h1 className='text-2xl ml-14'>{order.name}</h1>
                            <h3 className='mt-3 ml-14'>{order.location}</h3>
                            <div className='p-3 flex ml-2'>
                                <p className='me-3 flex' >
                                <BsTextareaResize className='mr-2 mt-0.5  text-[#800080]' />
                                    5x7</p>
                                <p className='me-3 flex' >
                                <FaBath className='mr-2   text-[#800080]' />
                                    9 حمام</p>
                                <p className='me-3 flex' >
                                <FaBed className='mr-2 mt-1   text-[#800080]' />
                                    3 غرف</p>
                            </div>
                        </div>
                    </div>
                ))}

            </section>

        </div>
    )
}

export default SortComponents
