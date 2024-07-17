import React from "react";
import Video1 from "../../assets/Vedios/Video1.mp4";
import Video2 from "../../assets/Vedios/Video2.mp4";
import { useTranslation } from "react-i18next";

const Video = [Video1, Video2, Video1, Video2];

const VideosVehicle = () => {
  
  const {t} = useTranslation();

  return (
    <div className="flex justify-center items-center">
      <div className="ml-[25px]">
        <h2
          className="flex justify-between font-bold text-[21px]"
          style={{ position: "relative", top: "-740px" }}
        >
         <h4 className="text-[#800080]">(4)</h4> {t('vehicle_video')} 
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-10 w-[75%] mt-[50px] object-cover">
        {Video.map((_, index) => (
          <div className="w-full max-w-3xl p-4">
            <video className="w-full h-full sm:w-auto object-cover" controls>
              <source src={Video[index]} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosVehicle;
