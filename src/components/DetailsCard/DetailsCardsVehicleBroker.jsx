import React, { useState } from "react";
import DescriptionVehicle from "./DescriptionVehicle";
import DescriptionCard from "./DescriptionCard";
import VehicleList from "./VehicleList";
import CarouselVehicle from "./CarouselVehicle";
import DescriptionCarouselVehicle from "./DescriptionCarouselVehicle";
import ImagesvVehicle from "./ImagesvVehicle";
import VideosVehicle from "./VideosVehicle";
import DescriptionVehicleBroker from "./DescriptionVehicleBroker";

const DetailsCardsVehicleBroker = () => {
  const [DesCard, setDesCard] = useState(0);

  return (
    <div className="bg-[#EBEAFA]">
      <CarouselVehicle/>
      <DescriptionCarouselVehicle />
      <DescriptionCard setDesCard={setDesCard} />
        {DesCard === 0 && <DescriptionVehicleBroker />}
        {DesCard === 1 && <ImagesvVehicle />}
        {DesCard === 1 && <VideosVehicle />}
      <div className="min-h-screen">
        {DesCard === 2 && <VehicleList />}
      </div>
    </div>
  );
};

export default DetailsCardsVehicleBroker;
