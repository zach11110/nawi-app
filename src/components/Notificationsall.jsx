import React from 'react'
import "../assets/Css/style.css"
import vector from '../assets/ImagesVehicle/person.png'
import { useTranslation } from 'react-i18next';

function Notificationsall() {
    const {t} = useTranslation();
    return (
        <div className="bg-[#ebeafa] right-to-left   ">
            <br></br> <br/>
            <div className="flex justify-center p-3 ">
                <button type="button" className='border-2 p-5 rounded-xl bg-white focus:bg-[#800080] focus:text-white ' >{t('sort_all')}</button>
                <button type="button" className='border-2 p-5 rounded-xl bg-white focus:bg-[#800080] focus:text-white'>{t('sort_car')}</button>
                <button type="button" className='border-2 p-5 rounded-xl bg-white focus:bg-[#800080] focus:text-white'>{t('sort_propety')}</button>
                <button type="button" className='border-2 p-5 rounded-xl bg-white focus:bg-[#800080]  focus:text-white'>{t('sort_Travel')}</button>
            </div><br /> <br />
            <div className="">
                <div className="lg:w-[47%] sm:w-96 sm:mx-[20%] lg:mx-[25%] p-14  border-2 border-white bg-white rounded-3xl">
                    <div className="-mt-11 -mx-14">
                        <img className='p-0 w-16 float-end' src={vector} alt="" />
                    </div>
                    <div className="p-3">
                        <h1 className='float-end px-3 font-bold text-[15px]'>محمد خليل</h1><br /> <br></br>
                        <p className='float-end px-3'>dcdecvcv</p>
                    </div>
                </div>
                <br/>
                <div className="lg:w-[47%] sm:w-96 sm:mx-[20%] lg:mx-[25%] p-14  border-2 border-white bg-white rounded-3xl">
                    <div className="-mt-11 -mx-14">
                        <img className='p-0 w-16 float-end' src={vector} alt="" />
                    </div>
                    <div className="p-3">
                        <h1 className='float-end px-3 font-bold text-[15px]'>محمد خليل</h1><br /> <br></br>
                        <p className='float-end px-3'>dcdecvcv</p>
                    </div>
                </div>
                <br/>
                <div className="lg:w-[47%] sm:w-96 sm:mx-[20%] lg:mx-[25%] p-14  border-2 border-white bg-white rounded-3xl">
                    <div className="-mt-11 -mx-14">
                        <img className='p-0 w-16 float-end' src={vector} alt="" />
                    </div>
                    <div className="p-3">
                        <h1 className='float-end px-3 font-bold text-[15px]'>محمد خليل</h1><br /> <br></br>
                        <p className='float-end px-3'>dcdecvcv</p>
                    </div>
                </div>
                <br/>
                <div className="lg:w-[47%] sm:w-96 sm:mx-[20%] lg:mx-[25%] p-14  border-2 border-white bg-white rounded-3xl">
                    <div className="-mt-11 -mx-14">
                        <img className='p-0 w-16 float-end' src={vector} alt="" />
                    </div>
                    <div className="p-3">
                        <h1 className='float-end px-3 font-bold text-[15px]'>محمد خليل</h1><br /> <br></br>
                        <p className='float-end px-3'>dcdecvcv</p>
                    </div>
                </div>
                <br/>
                <div className="lg:w-[47%] sm:w-96 sm:mx-[20%] lg:mx-[25%] p-14  border-2 border-white bg-white rounded-3xl">
                    <div className="-mt-11 -mx-14">
                        <img className='p-0 w-16 float-end' src={vector} alt="" />
                    </div>
                    <div className="p-3">
                        <h1 className='float-end px-3 font-bold text-[15px]'>محمد خليل</h1><br /> <br></br>
                        <p className='float-end px-3'>dcdecvcv</p>
                    </div>
                </div>
                <br/>

            </div>
            <br/>



        </div>

    );
}

export default Notificationsall
