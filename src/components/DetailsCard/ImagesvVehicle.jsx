import React from "react";
import Vehicle from "../../assets/ImagesVehicle/car.png";
import { useTranslation } from "react-i18next";
// import Nawi from "../../assets/ImagesVehicle/car.png";

const images = [Vehicle, Vehicle, Vehicle, Vehicle, Vehicle, Vehicle, Vehicle, Vehicle, Vehicle];

const ImagesvVehicle = () => {

  const {t} = useTranslation();
  
  return (
    <div className="flex justify-center items-center">
      <div className="mb-[250px] ml-[40px]">
        <h2
          className="flex justify-between font-bold text-[21px]"
          style={{ position: "relative", top: "-500px" }}
        >
         <h4 className="text-[#800080]">(6)</h4> {t('vehicle_img')} 
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 p-12 mt-[70px] w-[80%] text-center object-cover">
        {images.map((_, index) => (
          <button
            key={index}
            className={"sm:w-auto object-cover w-full h-full"}
          >
            <img
              src={images[index]}
              alt={`Thumbnail ${index}`}
              className="w-[500px] h-[400px] object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImagesvVehicle;
