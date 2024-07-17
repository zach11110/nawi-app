import React from 'react'
import Flat2 from '../assets/Images/Flat1.png'
import Flat1 from '../assets/Images/Flat2.png'
import { FaBath, FaBed, } from 'react-icons/fa';
import Img from '../assets/Images/Flat1.png'
import { BsTextareaResize } from "react-icons/bs";

function Sale() {
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
        <div className="bg-[#ebeafa]">
          <h1 className='text-3xl lg:text-[40px] text-right px-9 py-2 '>بيع</h1> 
             <hr className=' h-1 bg-gray-300' /> <br />
             <section className="grid sm:grid-cols-1 lg:w-[70%] px-9 lg:grid-cols-2 w-full lg:ml-64  py-3">
                {orders.map((order) => (
                    <div className="bg-white lg:w-full  shadow-lg m-3 border-4   flex justify-between p-3">
                        <div className="flex">
                            <img src={Img} width="130px" height="50px" alt="" />
                            <p className='bg-green-200 text-lg text-green-500 h-10 p-1 ml-2'>مرخص</p>
                            <div className="text-blue-800 mt-24 -mx-14  text-xl">3000 ريال</div>
                        </div>
                        <div className="p-2 ">
                            <h1 className='text-2xl'>شقة سكنية للبيع</h1>
                            <h3 className='mt-3'>شارع الملك سلمان - رياض</h3>
                            <div className='p-3 flex'>
                                <p className=' p-2 flex' >
                                <BsTextareaResize className='mr-2 mt-0.5  text-[#800080]' />
                                    5x7</p>
                                <p className='me-2 flex p-2' >
                                    <FaBath className='mr-2   text-[#800080]' />
                                    9 حمام</p>
                                <p className='mr-2 p-2 flex  '>
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

export default Sale
