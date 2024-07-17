import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function ContentComponents() {
    const {t} = useTranslation();
    return (
        <div className='p-3  text-[30px] text-center  bg-[#ebeafa]'>
            <p>
               {t('content_contentus')} <br></br> {t('content_textarea')}
            </p>

            <textarea name="" id="input" className="p-9 w-1/2 my-6  text-black rounded-2xl focus:text-white-2 py-5 px-3 text-right focus:outline-none
                 focus:border-purple-800 transition-colors appearance-none" rows="5" required="required">
            </textarea>
            <div className="flex justify-between w-[40%] mx-[30%]">
                <Link to="/Profile">
                    <button className=" lg:w-56  py-2 px-11  bg-white  rounded-full">{t('content_back')}</button>
                </Link>
                <button className=" w-56 py-2 px-11  bg-yellow-500 text-white font-bold rounded-full">{t('content_sure')}</button>
            </div>
            <br/>

        </div>
    )
}

export default ContentComponents



