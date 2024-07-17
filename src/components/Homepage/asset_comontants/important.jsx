import React from "react";
import nawi from "../../../assets/ImagesVehicle/Firrari.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Important = ({title}) => {

  const {t} = useTranslation();
  const agencies = [
    { id: 1, name: t('agency_name'), image: nawi },
    { id: 2, name: t('agency_name'), image: nawi },
    { id: 3, name: t('agency_name'), image: nawi },
    { id: 4, name: t('agency_name'), image: nawi },
    { id: 5, name: t('agency_name'), image: nawi },
    { id: 6, name: t('agency_name'), image: nawi },
    { id: 7, name: t('agency_name'), image: nawi },
  ];
  return (
    <div className=" flex flex-col items-center pb-8">
      <h1 className="text-2xl font-bold mb-4 float-right">{title}</h1>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-7 gap-12">
        {agencies.map((agency) => (
          <Link to="/agency/">
            <div
              key={agency.id}
              className="flex flex-col-2 px-4 py-2 float-left rounded-full shadow-md bg-white"
            >
              
              <div className="float-left mt-[10px]"><p className="text-lg font-semibold">{agency.name}</p></div>
              <div className="pr-2 ml-2 mt-2"><img
                src={agency.image}
                alt={agency.name}
                className="w-10 h-10 object-cover rounded-full mb-2"
              /></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Important;
