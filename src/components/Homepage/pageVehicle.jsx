import React from "react";
import CardsVehicle from "./asset_comontants/CardsVehicle";
import Storyadmin from "./asset_comontants/story_admin";
import SearchVehicle from "./searchVehicle";
import Important from "./asset_comontants/important";
import { useTranslation } from "react-i18next";
// import Agency from "./Agency";

const PageVehicle = () => {
  
  const {t} = useTranslation();

  return (
    <div className=" bg-[#EBEAFA]">
      <Storyadmin />
      <SearchVehicle />
      <CardsVehicle
        title={t('best_vehicles')}
        isSpecial={true}
      />
      <Important title={t('top_agencies')} />
      {/* <NewCars  title={': أحدث السيارات 2024'}/> */}
      <CardsVehicle title={t('top_vehicles')} isSpecial={false} />
    </div>
  );
};

export default PageVehicle;