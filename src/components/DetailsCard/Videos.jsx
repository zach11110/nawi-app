import React from "react";
import Video1 from "../../assets/Vedios/Video1.mp4";
import Video2 from "../../assets/Vedios/Video2.mp4";
import { useTranslation } from "react-i18next";

const videos = [Video1, Video2, Video1, Video2];

const Videos = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex justify-between items-center">
          {t('des_card_flat_vedio')} 
          <span className="text-[#800080]">({videos.length})</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <video 
              className="w-full h-full object-cover rounded-lg shadow-md" 
              controls
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;