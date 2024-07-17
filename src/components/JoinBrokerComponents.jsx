import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { FaUpload, FaTimes } from 'react-icons/fa';

function JoinBrokerComponents() {
    const { t } = useTranslation();
    const [files, setFiles] = useState([]);
    const [licenseNumber, setLicenseNumber] = useState('');
    const [description, setDescription] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }))]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/*,video/*',
        onDrop
    });

    const removeFile = (file) => {
        setFiles(prevFiles => prevFiles.filter(f => f !== file));
        URL.revokeObjectURL(file.preview);
    };

    return (
        <div className='min-h-screen bg-[#ebeafa] py-12 px-4 sm:px-6 lg:px-8'>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center mb-8">{t('JoinBroker_title')}</h2>

                <div className="space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="licenseNumber" className='text-lg font-medium'>{t('JoinTravel_number')}</label>
                        <input
                            id="licenseNumber"
                            type="text"
                            value={licenseNumber}
                            onChange={(e) => setLicenseNumber(e.target.value)}
                            placeholder="5855524"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className='text-lg font-medium'>{t('image')}</label>
                        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-6 cursor-pointer hover:border-purple-600 transition duration-300 ease-in-out">
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p className="text-center text-gray-600">{t('drop_files_here')}</p>
                            ) : (
                                <div className="text-center">
                                    <FaUpload className="mx-auto text-4xl text-gray-400 mb-4" />
                                    <p className="text-gray-600">{t('drag_drop_or_click')}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {files.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                            {files.map((file, index) => (
                                <div key={index} className="relative group">
                                    <img src={file.preview} alt={`preview ${index}`} className="w-full h-32 object-cover rounded-md" />
                                    <button
                                        onClick={() => removeFile(file)}
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="description" className='text-lg font-medium'>{t('description')}</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={t('description')}
                            rows="5"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                </div>

                <div className="flex justify-center space-x-4 mt-8">
                    <Link to="/">
                        <button className="px-6 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition duration-300 ease-in-out">
                            {t('content_back')}
                        </button>
                    </Link>
                    <Link to="/order_travel/travel_service/">
                        <button className="px-6 py-2 bg-[#FFA500] text-white rounded-full hover:bg-[#800080] transition duration-300 ease-in-out">
                            {t('JionInf_send')}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default JoinBrokerComponents;