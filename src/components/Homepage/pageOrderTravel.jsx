import React from "react";
import CardsTravel from "./asset_comontants/CardsTravel";
import Storyadmin from "./asset_comontants/story_admin";
import SearchTravel from "./SearchTravel";
// import Important from "./asset_comontants/important";
import ImportantT from "./asset_comontants/importantT";
// import Agency from "./Agency";
import Car from "../../assets/ImagesVehicle/car.png";
import ImportantOffices from "./asset_comontants/ImportantOffices";
import { useTranslation } from 'react-i18next';

const PageOrderTravel = () => {
  const {t} = useTranslation();
  const order_travel = [
    {
      id: 1,
      name: "المالديف",
      image: Car,
      itinerary: "الرياض جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
      room: "غرف 3",
    },
    {
      id: 2,
      name: "المالديف",
      image: Car,
      itinerary: "الرياض جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
      room: "غرف 3",
    },
    {
      id: 3,
      name: "المالديف",
      image: Car,
      itinerary: "الرياض جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
      room: "غرف 3",
    },
    {
      id: 4,
      name: "المالديف",
      image: Car,
      itinerary: "الرياض جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
      room: "غرف 3",
    },
    {
      id: 5,
      name: "المالديف",
      image: Car,
      itinerary: "الرياض جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
      room: "غرف 3",
    },
    {
      id: 6,
      name: "المالديف",
      image: Car,
      itinerary: "الرياض جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
      room: "غرف 3",
    },

    {
      id: 7,
      name: "المالديف",
      image: Car,
      itinerary: "الرياض جزر المالديف",
      source: "مكتب شاهين للسياحة",
      price: " ريال 4000 ",
      details: "انقر لعرض التفاصيل",
      hotel: "فندق 1",
      resturant: "مطعم 2",
      caming: "تخييم",
      room: "غرف 3",
    },
  ];

  return (
    <div className=" bg-[#EBEAFA]">
      <Storyadmin />
      <SearchTravel />
      <CardsTravel
        vehicles={order_travel}
        title={t('pageorder_title')}
        isSpecial={true}
      />
      {/* <AllCards/> */}
      <ImportantOffices title={t('pageoeder_travel')} /><br></br><br></br><br></br><br></br>
      <ImportantT title={t('pageorder_d')} />
      {/* <Agency /> */}
    </div>
  );
};

export default PageOrderTravel;
