import React  from 'react'
import pana from "../assets/Images/pana.png";
import "../assets/Css/style.css";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function PaymentComponents() {
  const {t} = useTranslation();
  
  
  
  return ( 
    <div className="min-h-screen bg-[#ebeafa] right-to-left">

      <main className="container mx-auto py-12">
        <div className="p-8 rounded-lg ">
          <div className="flex justify-center mb-6">
            <img src={pana} alt="Payment Illustration" className="w-1/2" />
          </div><br></br>
          <h1 className='font-bold text-[25px]'>{t('payment_header')}</h1> <br></br>
          <div className='flex justify-center'>
            <form className="space-y-6 ">
              <div>
                <label className="p-6">{t('payment_name_owner')}</label>
                <input type="text" className="w-72 px-4 py-2  border rounded-lg border-white focus: outline-none focus:border-yellow-500"  />
                <div className="mx-[113px] -my-11">
                  <svg width="36" height="45" viewBox="0 0 36 45" fill="none"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.4667 33.8429C24.2879 36.2881 21.4025 37.7766 18.2377 37.7766C14.8789 37.7766 11.8348 36.1001 9.61621 33.3828" stroke="#252B5C" stroke-width="2.6" stroke-linecap="round" />
                    <path d="M25.9233 33.0589C25.6941 32.7048 25.4488 32.3645 25.1881 32.04C23.2671 29.6493 20.6616 28.3062 17.9449 28.3062C15.2282 28.3062 12.6228 29.6493 10.7018 32.04C10.3569 32.4692 10.0392 32.9258 9.75 33.4058" stroke="#252B5C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.2377 26.8497C19.6349 26.8497 20.9748 26.159 21.9628 24.9294C22.9507 23.6999 23.5057 22.0323 23.5057 20.2935C23.5057 18.5547 22.9507 16.8871 21.9628 15.6576C20.9748 14.428 19.6349 13.7373 18.2377 13.7373C16.8406 13.7373 15.5006 14.428 14.5127 15.6576C13.5247 16.8871 12.9697 18.5547 12.9697 20.2935C12.9697 22.0323 13.5247 23.6999 14.5127 24.9294C15.5006 26.159 16.8406 26.8497 18.2377 26.8497V26.8497Z" stroke="#252B5C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div> <br /> <br />
                <label className="p-6">{t('payment_numbercord')}</label>
                <input type="text" className="w-72 px-4 py-2 border rounded-lg border-white focus: outline-none focus:border-yellow-500" />
                <div className="mx-[24px] -my-9">

                <svg width="36" height="35" className='mx-[96px] -my-10' viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.1582 13.2817H25.7571M3.1582 13.2817V8.50049C3.1582 8.27671 3.22963 8.0621 3.35677 7.90387C3.48392 7.74563 3.65636 7.65674 3.83617 7.65674H25.0791C25.2589 7.65674 25.4314 7.74563 25.5585 7.90387C25.6856 8.0621 25.7571 8.27671 25.7571 8.50049V13.2817H3.1582ZM3.1582 13.2817V26.5005C3.1582 26.7243 3.22963 26.9389 3.35677 27.0971C3.48392 27.2553 3.65636 27.3442 3.83617 27.3442H25.0791C25.2589 27.3442 25.4314 27.2553 25.5585 27.0971C25.6856 26.9389 25.7571 26.7243 25.7571 26.5005V13.2817H3.1582Z" stroke="#252B5C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>

              </div><br /> <br />

              <label className="p-6">{t('payment_secret_code')}</label>
              
              <input type="text" className=" px-4 py-2 w-[100px] border rounded-lg border-white focus: outline-none focus:border-yellow-500" />
              <div className="mx-[24px]   -my-9">
              <svg width="36" height="35" className='mx-[95px] -my-16' viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.1582 13.2817H25.7571M3.1582 13.2817V8.50049C3.1582 8.27671 3.22963 8.0621 3.35677 7.90387C3.48392 7.74563 3.65636 7.65674 3.83617 7.65674H25.0791C25.2589 7.65674 25.4314 7.74563 25.5585 7.90387C25.6856 8.0621 25.7571 8.27671 25.7571 8.50049V13.2817H3.1582ZM3.1582 13.2817V26.5005C3.1582 26.7243 3.22963 26.9389 3.35677 27.0971C3.48392 27.2553 3.65636 27.3442 3.83617 27.3442H25.0791C25.2589 27.3442 25.4314 27.2553 25.5585 27.0971C25.6856 26.9389 25.7571 26.7243 25.7571 26.5005V13.2817H3.1582Z" stroke="#252B5C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
                <div className="flex justify-end">
              <input type="date" className=" mx-[1px] px-3 py-2  w-28 border rounded-lg border-white focus: outline-none focus:border-yellow-500" />
              </div>
              <br /> <br /> <br />
              <Link to="/verifica_tionpaymen">
            <button  className="w-48 py-3 mx-[40%] mt-4 bg-yellow-500 text-white font-bold rounded-full">   {t('payment_button')} </button>
            </Link>
            </form>
          </div>
        </div>
      </main>

    </div>
  );
}

export default PaymentComponents






