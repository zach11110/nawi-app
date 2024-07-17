import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import imgscr from '../assets/Images/Mask.png';
import imgv from '../assets/ImagesVehicle/person.png';
import { useTranslation } from "react-i18next";
import { FaEdit, FaCamera } from 'react-icons/fa';

const EditProfilebr_in = ({ setNotifi }) => {
    const { t } = useTranslation();
    const [coverImage, setCoverImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    const onDropCover = useCallback((acceptedFiles) => {
        setCoverImage(acceptedFiles[0]);
    }, []);

    const onDropProfile = useCallback((acceptedFiles) => {
        setProfileImage(acceptedFiles[0]);
    }, []);

    const { getRootProps: getCoverRootProps, getInputProps: getCoverInputProps } = useDropzone({
        accept: "image/*",
        onDrop: onDropCover,
    });

    const { getRootProps: getProfileRootProps, getInputProps: getProfileInputProps } = useDropzone({
        accept: "image/*",
        onDrop: onDropProfile,
    });

    const stats = [
        { value: 100, label: t('editinf_buying') },
        { value: 100, label: t('editinf_sale') },
        { value: 100, label: t('editinf_review') },
    ];

    const tabs = [
        { id: 1, label: t('editinf_Transfers') },
        { id: 2, label: t('editinf_purchase') },
        { id: 3, label: t('editinf_sale') },
    ];

    return (
        <div className='w-full bg-[#ebeafa]'>
            <div className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${coverImage ? URL.createObjectURL(coverImage) : imgscr})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div {...getCoverRootProps()} className="absolute bottom-4 right-4 cursor-pointer">
                    <input {...getCoverInputProps()} />
                    <FaEdit className="text-white text-2xl hover:text-[#800080] transition-colors" />
                </div>
            </div>

            <div className="relative -mt-20 md:-mt-24 flex justify-center">
                <div className="relative">
                    <img 
                        src={profileImage ? URL.createObjectURL(profileImage) : imgv} 
                        alt="Profile" 
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white object-cover"
                    />
                    <div {...getProfileRootProps()} className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer">
                        <input {...getProfileInputProps()} />
                        <FaCamera className="text-[#800080]" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center space-x-8 md:space-x-16 my-8'>
                {stats.map((stat, index) => (
                    <div key={index} className='text-center'>
                        <div className='text-3xl font-bold'>{stat.value}</div>
                        <div className='text-sm md:text-base'>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center px-4">
                <div className="bg-gray-100 rounded-full p-2 md:p-3 flex flex-wrap justify-center">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className="py-2 px-4 rounded-full text-sm md:text-base focus:bg-white focus:shadow-md transition-all duration-200"
                            onClick={() => setNotifi(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EditProfilebr_in;