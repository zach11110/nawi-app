import React, { useState } from "react";
import image from "../../assets/ImagesVehicle/car.png";
import image1 from "../../assets/ImagesVehicle/car.png";

const images = [image, image1, image, image1, image, image1, image];

const CarouselVehicle = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Big image slider */}
      <a href="#1">
        <div className=" relative bg-white pr-2 right-[-85rem] top-[18px] w-[42px] h-[40px] shadow-lg rounded-full z-50">
          <svg
            width="30"
            height="37"
            className="ml-[6px] mt-[4px]"
            viewBox="0 0 38 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.771 2C31.8679 2 36 6.33358 36 11.6791C36 21.3581 25.093 30.1573 19.22 32.204C13.347 30.1573 2.44 21.3581 2.44 11.6791C2.44 6.33358 6.57207 2 11.669 2C14.7901 2 17.5504 3.62521 19.22 6.11273C20.071 4.84143 21.2016 3.80391 22.516 3.08801C23.8304 2.3721 25.2899 1.9989 26.771 2Z"
              stroke="#000929"
              stroke-width="3"
            />
          </svg>
        </div>
      </a>

      <a href="#1">
        <div className=" relative bg-white right-[-97rem] p-2  top-[-20px] w-[42px] h-[40px] shadow-lg rounded-full z-50">
          <svg
            width="30"
            height="34"
            viewBox="0 0 34 34"
            className=""
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0645695 10.9996C0.0645695 11.3986 0.221731 11.7811 0.50148 12.0632C0.781229 12.3453 1.16065 12.5038 1.55628 12.5038H18.8392L12.4338 18.9595C12.2951 19.0994 12.1851 19.2654 12.11 19.4481C12.035 19.6309 11.9964 19.8267 11.9964 20.0245C11.9964 20.2222 12.035 20.4181 12.11 20.6008C12.1851 20.7835 12.2951 20.9496 12.4338 21.0894C12.5725 21.2293 12.7372 21.3402 12.9184 21.4159C13.0996 21.4916 13.2938 21.5305 13.4899 21.5305C13.6861 21.5305 13.8803 21.4916 14.0615 21.4159C14.2427 21.3402 14.4074 21.2293 14.5461 21.0894L23.4963 12.0646C23.6352 11.9248 23.7455 11.7589 23.8207 11.5761C23.8959 11.3934 23.9346 11.1975 23.9346 10.9996C23.9346 10.8018 23.8959 10.6059 23.8207 10.4231C23.7455 10.2404 23.6352 10.0744 23.4963 9.9347L14.5461 0.909859C14.266 0.627422 13.8861 0.46875 13.4899 0.46875C13.0938 0.46875 12.7139 0.627422 12.4338 0.909859C12.1537 1.1923 11.9964 1.57536 11.9964 1.97479C11.9964 2.37422 12.1537 2.75728 12.4338 3.03972L18.8392 9.49549H1.55628C1.16065 9.49549 0.781229 9.65396 0.50148 9.93604C0.221731 10.2181 0.0645695 10.6007 0.0645695 10.9996Z"
              fill="#000929"
            />
          </svg>
        </div>
      </a>

      <a href="#1">
        <div className=" relative bg-white p-1 right-[-88.5rem] top-[-62px] w-[42px] h-[40px] shadow-lg rounded-full z-50">
          <svg
            width="30"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6504 20.4004C27.4724 20.4004 29.7504 22.6784 29.7504 25.5004C29.7504 28.3224 27.4724 30.6004 24.6504 30.6004C21.8284 30.6004 19.5504 28.3224 19.5504 25.5004C19.5504 25.0924 19.6014 24.7184 19.7034 24.3274L12.2574 20.4174C11.3224 21.4544 9.99639 22.1004 8.50039 22.1004C5.67839 22.1004 3.40039 19.8224 3.40039 17.0004C3.40039 14.1784 5.67839 11.9004 8.50039 11.9004C9.99639 11.9004 11.3224 12.5634 12.2574 13.5834L19.7034 9.67339C19.6014 9.28239 19.5504 8.90839 19.5504 8.50039C19.5504 5.67839 21.8284 3.40039 24.6504 3.40039C27.4724 3.40039 29.7504 5.67839 29.7504 8.50039C29.7504 11.3224 27.4724 13.6004 24.6504 13.6004C23.1544 13.6004 21.8284 12.9374 20.8934 11.9174L13.4474 15.8274C13.6533 16.5958 13.6533 17.4049 13.4474 18.1734L20.8934 22.0834C21.8284 21.0464 23.1544 20.4004 24.6504 20.4004Z"
              fill="#000929"
            />
          </svg>
        </div>
      </a>

      <div
        className="absolute resize-none  inset-0 w-[1740px] h-[385px] bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`  , backgroundSize: "cover"  }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* small images sliders */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center items-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-10 h-10 m-1 border-2 rounded-lg ${
              index === currentImageIndex
                ? "border-purple-500"
                : "border-gray-200"
            }`}
            onClick={() => goToSlide(index)}
          >
            <img
              src={images[index]}
              alt={`Thumbnail ${index}`}
              className="w-[full] h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselVehicle;
