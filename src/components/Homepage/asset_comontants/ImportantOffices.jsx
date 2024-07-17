import React from 'react'
import office from "../../../assets/ImagesOrdertravels/office.png";
import { Link } from 'react-router-dom';


const ImportantOffices = ({title}) => {
  return (
    <div>
      <p className="font-bold text-right text-2xl mb-[30px]">{title}</p>
      <div className=" grid grid-cols-4 lg:flex">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
          <div className="lg:w-1/12 sm:w-1/4 p-2 md:flex-cols-12 pb-2">
            <Link to="/order_travel/travel_offieces_services">
              <img
                className="flex justify-between items-start rounded-full border-2 h-16 max-w-full mx-auto overflow-x-auto"
                src={office}
                alt="/"
              />
            </Link>
            <p className="text-center">مكتب شاهين</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImportantOffices
