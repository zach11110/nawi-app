import React, { useState, useEffect } from 'react'
import pana from "../assets/Images/pana.png";
import "../assets/Css/style.css";
import OtpInput from 'react-otp-input';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';



function Verificationpayment() {
    const {t} = useTranslation();

    const [seconds, setSeconds] = useState(60);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [seconds]);
    const [otp, setOtp] = useState('');
    return (
        <div className=' px-6 py-16 bg-[#ebeafa] right-to-left'>
            <br /> <br />
            <div className="flex justify-center mb-6">
                <img src={pana} alt="Payment Illustration" className="w-96" />
            </div><br></br>
            <h1 className='font-bold text-[30px] px-6 py-4 '> {t('Verif_title')} </h1>
            <h1 className='px-6'>{t("Verif_body")}</h1>
            <div className='flex justify-center w-full  left-to-right'>
                <OtpInput
                    inputStyle="border m-2  text-black border-gray-300 rounded-md w-full h-10 text-center text-lg focus:outline-none focus:border-purple-500"
                    value={otp}
                    // containerStyle='w-52'
                    onChange={setOtp}
                    numInputs={4}
                    // renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />
            </div>

            <div className="text-center my-3 bg-white w-32 lg:mx-[47%] sm:mx-72 rounded-full p-3">    {seconds}
                <svg width="23" height="28" viewBox="0 0 23 28" className='-my-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.875 1.91675H15.125" stroke="#252B5C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.5 11.5835V16.4168" stroke="#252B5C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.4997 26.0833C14.0634 26.0833 16.5222 25.0649 18.335 23.252C20.1479 21.4392 21.1663 18.9804 21.1663 16.4167C21.1663 13.8529 20.1479 11.3942 18.335 9.5813C16.5222 7.76845 14.0634 6.75 11.4997 6.75C8.93591 6.75 6.47716 7.76845 4.66431 9.5813C2.85146 11.3942 1.83301 13.8529 1.83301 16.4167C1.83301 18.9804 2.85146 21.4392 4.66431 23.252C6.47716 25.0649 8.93591 26.0833 11.4997 26.0833V26.0833Z" stroke="#252B5C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className='h-5'></div>
            </div>
            <div className="flex justify-center">
                <span className='m-3'>{t('Verif_receive')}</span>
                <button className='text-blue-900'
                    disabled={seconds > 0}
                    onClick={() => alert('الزر مفعّل')}
                >
                    {t('Verif_Re_transmitter')}
                </button>
            </div>
            <div className="flex mx-[43%] w-10">
                <Link to="/verifica_tionpaymen" > <button className="w-44 py-3 sm:-mx-16 lg:mx-[35%] mt-4 bg-yellow-500 text-white font-bold rounded-full">{t('payment_button')}</button></Link>
            </div>
            <Link to="/Payment">
            <div className='bg-white rounded-full w-10 h-10 p-3 flex justify-center lg:mx-[70%] sm:mx-[62%] -my-11 '>
                <svg width="15" height="20" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.24023 14.48L1.76023 7.99998L8.24023 1.51998" stroke="#252B5C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            </Link>

        </div>

    );
}

export default Verificationpayment





