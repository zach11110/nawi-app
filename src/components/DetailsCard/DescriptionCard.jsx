import React from "react";
import { useTranslation } from "react-i18next";

const DescriptionCard = ({ setDesCard }) => {
  const { t } = useTranslation();

  const buttons = [
    { label: 'des_card_flat_similar', value: 2 },
    { label: 'des_card_flat_img', value: 1 },
    { label: 'des_card_flat_des', value: 0 },
  ];

  return (
    <div className="flex justify-center items-start w-full mb-8 px-2 sm:px-4">
      <div className="bg-white rounded-2xl mt-4 p-2 sm:p-4 w-full max-w-3xl overflow-x-auto">
        <ul className="flex flex-row font-semibold space-x-2 sm:space-x-4">
          {buttons.map((button) => (
            <li key={button.value} className="flex-shrink-0 flex-grow">
              <button
                className="w-full py-2 px-2 sm:px-4 text-xs sm:text-sm md:text-base focus:outline-none hover:border-b-2 border-[#800080] hover:text-[#800080] transition-all duration-200 whitespace-nowrap"
                onClick={() => setDesCard(button.value)}
              >
                {t(button.label)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DescriptionCard;