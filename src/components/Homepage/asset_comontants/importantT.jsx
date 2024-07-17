import React from "react";
import city from "../../../assets/ImagesOrdertravels/city.png";
import { Link } from "react-router-dom";

const importantT = ({title}) => {
  const cities = [
    { id: 1, name: "دبي", image: city },
    { id: 2, name: "دبي", image: city },
    { id: 3, name: "دبي", image: city },
    { id: 4, name: "دبي", image: city },
    { id: 5, name: "دبي", image: city },
    { id: 6, name: "دبي", image: city },
    { id: 7, name: "دبي", image: city },
  ];
  return (
    <div className=" flex flex-col items-center pb-12">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-7 gap-14 pt-6">
        {cities.map((city) => (
          <Link to="">
            <div
              key={city.id}
              className="flex flex-col-2 px-4 py-2 float-left rounded-full shadow-md bg-white"
            >
              
              <div className="float-left mt-[10px]"><p className="text-lg font-semibold">{city.name}</p></div>
              <div className="pr-2 ml-2 mt-2"><img
                src={city.image}
                alt={city.name}
                className="w-10 h-10 object-cover rounded-full mb-2"
              /></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default importantT;