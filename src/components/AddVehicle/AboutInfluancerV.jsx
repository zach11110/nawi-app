import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";

const AboutInfluancerV = () => {
  return (
    <div className="grid grid-cols-1 w-full h-auto mx-auto p-[80px] rounded-lg">
      <p className="text-2xl text-gray-800 text-right font-medium pr-12 space-y-1 tracking-wide leading-loose">
        <p>
          . عزة زعرور مذيعة ومقدمة برامج تلفزيونية ومؤثرة على مواقع التواصل
          الاجتماعي
        </p>
        <p>.من أصول فلسطينية مقيمة في دبي</p>
        <p>.يتابعها 6.1 مليون متابع على منصة انستغرام</p>
        <p>.و 3.5 مليون متابع على سناب شات</p>
        <p>.و 5000 على منصة تيك توك</p>
        <p>
          . وهي من فئة المشاهير الذين يمكنك مشاركة عرضك معهم لتقديم أفضل
          الإعلانات لك
        </p>
      </p>

      <div className="mt-8">
        <h3 className="text-center pl-12 text-lg font-bold">{t('about_b_address')}</h3>
        <div className="mt-4">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Map"
            className="w-full md:w-1/2 mx-auto rounded-lg"
          />
        </div>
      </div>
      <div className="text-center w-sc bg-white mb-[-103px]">
        <span className="mr-[-110px] font-bold">
         {t('inf_ser_about_pay')}<span className="text-2xl text-[#990033]">{t('inf_ser_about_pay1')}</span> {t('inf_ser_about_pay2')}
        </span>
        <Link to="">
          <button className="bg-[#FFA500] ml-[130px] hover:bg-amber-500 text-[#fff] w-[220px] rounded-full font-medium my-6 md:py-3 text-[23px]">
             {t('des_proprty_now')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutInfluancerV;
