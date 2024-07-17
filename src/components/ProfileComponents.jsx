import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { useTranslation } from 'react-i18next';

function ProfileComponents() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const stats = [
    { value: 100, label: t('editinf_buying') },
    { value: 100, label: t('editinf_sale') },
    { value: 100, label: t('editinf_review') },
  ];

  const profileLinks = [
    { to: "/EditProfile", label: t('profile_inf') },
    { to: "/Settings", label: t('profile_setting') },
    { to: "/Content", label: t('profile_c') },
  ];

  return (
    <div className="min-h-screen bg-[#ebeafa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-12">
          {profileLinks.map((link, index) => (
            <Link key={index} to={link.to} className="block">
              <button className="w-full text-right bg-white hover:bg-gray-50 transition-colors duration-200 rounded-2xl p-6 shadow-md">
                {link.label}
              </button>
            </Link>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className="w-full text-right bg-white hover:bg-gray-50 transition-colors duration-200 rounded-2xl p-6 shadow-md"
          >
            {t('profile_logout')}
          </button>
        </div>

        <div className="text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200">
            {t('profile_logout')}
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-2xl font-semibold mb-4 text-center" id="modal-title">
                  {t('profile_Evaluation')}
                </h3>
                <div className="flex justify-center">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={48}
                    half={true}
                    color2={"#FFA500"}
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#FFA500] text-base font-medium text-white hover:bg-[#800080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFA500] sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
                  onClick={() => setShowModal(false)}
                >
                  {t('profile_send')}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
                  onClick={() => setShowModal(false)}
                >
                  {t('profile_close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileComponents;