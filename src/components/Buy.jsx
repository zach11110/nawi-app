import React from 'react'
import Flat2 from '../assets/Images/Flat1.png'
import Flat1 from '../assets/Images/Flat2.png'
import { FaBath, FaBed, FaCheckCircle } from 'react-icons/fa';
import Img from '../assets/Images/Flat1.png'
import { BsTextareaResize } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

function Buy() {
    const { t } = useTranslation();
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
        <div className="bg-[#ebeafa] min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <h1 className='text-3xl lg:text-4xl font-bold text-right mb-4'>{t('buy_title')}</h1>
            <hr className='h-1 bg-gray-300 mb-8' />

            <div className="max-w-7xl mx-auto">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const OrderCard = ({ order }) => {
    const { name, location, image, price, size, baths, rooms, isLicensed } = order;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
                <img src={image} alt={name} className="w-full h-48 object-cover" />
                {isLicensed && (
                    <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <FaCheckCircle className="mr-1" />
                        مرخص
                    </span>
                )}
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-600 mb-4">{location}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 font-bold text-xl">{price}</span>
                    <div className="flex space-x-4">
                        <Spec icon={<BsTextareaResize />} value={size} />
                        <Spec icon={<FaBath />} value={`${baths} حمام`} />
                        <Spec icon={<FaBed />} value={`${rooms} غرف`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Spec = ({ icon, value }) => (
    <div className="flex items-center text-sm text-gray-600">
        <span className="mr-1 text-[#800080]">{icon}</span>
        {value}
    </div>
);

export default Buy;