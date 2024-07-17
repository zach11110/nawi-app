import React from 'react'
import { useTranslation } from 'react-i18next';

const Notifications = ({setNotifi}) => {
    const {t} = useTranslation();
    return (
        <div className='flex justify-center bg-[#ebeafa]'>
            <ul className="flex lg:w-[30%] justify-center focus:bg-white bg-gray-100 rounded-full mt-[20px] p-5 space-x-8 t font-semibold">
                <div>
                    <button
                        className="py-2 px-4 rounded-full focus:bg-white "
                        onClick={() => setNotifi(2)}
                    >
                        <li className="text-center">
                            {t('Notifications_title')}
                        </li>
                    </button>
                </div>
                <div className=''>
                    <button
                        className="py-2 px-4 rounded-full focus:bg-white "
                        onClick={() => setNotifi(1)}>
                        <li className="text-center">
                            {t('Notifications_Messages')}
                        </li>
                    </button>
                </div>
                <div>
                </div>
            </ul>

        </div>
    );
}

export default Notifications
