import React, { useRef, useEffect } from "react";
import nawi from "../../../assets/Images/nawi.svg";
import { useTranslation } from "react-i18next";

const Story_admin = ({ title }) => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);

  const stories = Array(12).fill(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      let isDown = false;
      let startX;
      let scrollLeft;

      const mouseDownHandler = (e) => {
        isDown = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
      };

      const mouseLeaveHandler = () => {
        isDown = false;
      };

      const mouseUpHandler = () => {
        isDown = false;
      };

      const mouseMoveHandler = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3;
        scrollContainer.scrollLeft = scrollLeft - walk;
      };

      scrollContainer.addEventListener('mousedown', mouseDownHandler);
      scrollContainer.addEventListener('mouseleave', mouseLeaveHandler);
      scrollContainer.addEventListener('mouseup', mouseUpHandler);
      scrollContainer.addEventListener('mousemove', mouseMoveHandler);

      return () => {
        scrollContainer.removeEventListener('mousedown', mouseDownHandler);
        scrollContainer.removeEventListener('mouseleave', mouseLeaveHandler);
        scrollContainer.removeEventListener('mouseup', mouseUpHandler);
        scrollContainer.removeEventListener('mousemove', mouseMoveHandler);
      };
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="font-bold text-right text-2xl mb-6">{title}</h2>
      <div className="flex justify-center">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 max-w-full"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {stories.map((_, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 scroll-snap-align-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="flex flex-col items-center w-20 sm:w-24">
                <a href="#1" className="block w-16 h-16 sm:w-20 sm:h-20 mb-2">
                  <img
                    className="w-full h-full rounded-full border-2 border-gray-200 object-cover"
                    src={nawi}
                    alt={`Story ${index + 1}`}
                  />
                </a>
                <p className="text-center text-xs sm:text-sm truncate w-full">{t('story_name')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story_admin;