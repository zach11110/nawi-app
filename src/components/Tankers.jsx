import React from 'react'
import Flat2 from '../assets/Images/Flat1.png'
import Flat1 from '../assets/Images/Flat2.png'
import { FaBath, FaBed, } from 'react-icons/fa';
import Img from '../assets/Images/Flat1.png'
import { BsTextareaResize } from "react-icons/bs";

function Tankers() {
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
            <h1 className='text-3xl lg:text-[40px] text-right px-9 py-2'>مناقلات</h1>
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
            <section className="flex w-full justify-center px-9 py-3">
                <textarea name="" className='p-3 border-2  border-[#800080] w-[50rem] rounded-3xl' rows={9} id=""></textarea>
                <label className='px-16 text-2xl text-gray-800 '>تفاصيل المناقلة</label> <br />
            </section>
            <hr className=' h-1 bg-gray-300' /> <br />

            <section className='flex justify-center w-full px-9 py-3'>
                <div className="bg-white lg:w-[50%] sm:w-[100%] flex justify-between rounded-xl">
                    <div className="px-5 py-7 w-full text-center text-2xl ">
                        <p className='mb-2'>Period time </p>
                        <p className='mb-2 sm:text-lg  lg:text-2xl'>Monthly payment</p>
                        <p className='mb-2'>Discount</p>

                        <div className="">
                            <p className='bg-[#ebeafa]  h-20 pb-2'>Total</p>
                        </div>


                    </div>
                    <div className="px-5 py-7 w-full text-center text-2xl">
                        <p className='mb-2'>11/28/2921</p>
                        <p className='mb-2'>220</p>
                        <p className='mb-2'>-10</p>
                        <div className="w-full  ">
                            <p className='bg-[#ebeafa]  h-20 pb-2'>210</p>
                        </div>
                    </div>
                </div>
                <label className='px-16 text-2xl text-gray-800 '>تفاصيل الدفع</label> <br />
            </section>
            <hr className=' h-1 bg-gray-300' /> <br />
            <section className='flex justify-center' >
                <div className="p-9 text-xl text-center px-20 rounded-xl bg-white  w-[45%]">
                    <p>**********@gmail.com</p>

                </div>
                <label className='px-16 text-2xl text-gray-800 '>طريقة الدفع</label>
            </section><br />
            <div className="bg-white w-full flex justify-center p-3"> <br />
                <div className="mx-96 flex">
                    <div className='text-xl'>السعر الصافي
                        <br /> <span className='bg-[#ebeafa] text-xl'> 100 ريال </span>
                    </div>
                    <button className=" w-56 py-6 px-1 text-2xl bg-yellow-500 text-white font-bold rounded-full">  تواصل الان </button> <br></br>
                </div>

            </div>

        </div>
    )
}

export default Tankers
