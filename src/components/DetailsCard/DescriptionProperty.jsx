import React from "react";
import { Link } from "react-router-dom";
import {
  FaBath,
  FaCcVisa,
  FaDumbbell,
  FaHorse,
  FaMoneyBillAlt,
  FaPaypal,
  FaShieldAlt,
  FaSwimmer,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";
import { BsTextareaResize } from "react-icons/bs";
import { LuBedDouble } from "react-icons/lu";
import { useTranslation } from "react-i18next";

const DescriptionProperty = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 mb-8">
    <h2 className="text-2xl font-bold text-center mb-12">{t('des_property_top')}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: <FaShieldAlt className="text-[#800080] text-3xl" />, value: "4.546", label: t('des_property_safe') },
          { icon: <FaBath className="text-[#800080] text-3xl" />, value: "2", label: t('des_property_bath') },
          { icon: <LuBedDouble className="text-[#800080] text-3xl" />, value: "3", label: t('des_property_room') },
          { icon: <BsTextareaResize className="text-[#800080] text-3xl" />, value: "1.234", label: t('des_property_space') },
        ].map((item, index) => (
          <div key={index} className="bg-white border rounded-xl shadow-xl p-4 text-center">
            <div className="flex justify-center mb-2">{item.icon}</div>
            <div className="text-xl font-semibold">{item.value}</div>
            <div>{item.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">{t('des_property_gen')}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
        {[
          { icon: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/317fd1d0940baf4c7f064f2098f456b942387c0f6f6e40ec2cb58989e3de7a7c?" className="w-8 h-8" alt="" />, label: t('des_property_park') },
          { icon: <FaSwimmer className="text-[#800080] text-3xl" />, label: t('des_property_pool') },
          { icon: <FaDumbbell className="text-[#800080] text-3xl" />, label: t('des_property_gym') },
          { icon: <FaUtensils className="text-[#800080] text-3xl" />, label: t('des_property_rest') },
          { icon: <FaWifi className="text-[#800080] text-3xl" />, label: t('des_property_wifi') },
          { icon: <FaHorse className="text-[#800080] text-3xl" />, label: t('des_prpoerty_house') },
        ].map((item, index) => (
          <div key={index} className="bg-white border rounded-xl shadow-xl p-4 text-center">
            <div className="flex justify-center mb-2">{item.icon}</div>
            <div>{item.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">{t('des_property_pay')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { icon: <FaCcVisa className="text-[#800080] text-3xl" />, label: t('des_property_visa') },
          { icon: <FaMoneyBillAlt className="text-[#800080] text-3xl" />, label: t('des_property_cash') },
          { icon: <FaPaypal className="text-[#800080] text-3xl" />, label: t('des_property_paypal') },
        ].map((item, index) => (
          <div key={index} className="bg-white border rounded-xl shadow-xl p-4 text-center">
            <div className="flex justify-center mb-2">{item.icon}</div>
            <div>{item.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">{t('des_property_address')}</h2>
      <div className="text-center bg-white p-6 rounded-xl shadow-xl">
        <div className="mb-4">
          <span className="font-bold">{t('des_proprty_price')}</span>
          <span className="text-2xl ml-2">
            <span className="text-blue-600">350$</span> {t('des_property_price2')}
          </span>
        </div>
        <Link to="">
          <button className="bg-[#FFA500] hover:bg-amber-500 text-white w-full sm:w-auto px-8 py-3 rounded-full font-medium text-xl">
            {t('des_proprty_now')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DescriptionProperty;