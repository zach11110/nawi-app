import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import nawi from "../assets/Images/nawi.svg";
import { Link } from "react-router-dom";
import imgscr from '../assets/ImagesVehicle/person.png'


function Navbarlogin() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
    return (
        <div className="flex justify-between items-center h-16 max-w-full mx-auto  text-white bg-[#ffffff]">
        <img
          className="flex justify-between items-start h-16 max-w-full mx-auto"
          src={nawi}
          alt="/"
        />
  
        <ul className="hidden md:flex mx-60">
          
            <li className="">
                <button className="p-3 mt-2 mr-4 rounded-full text-black focus:bg-[#800080] focus:text-white">
              الدعم
              </button>
            </li>
          
         
            <li >
            <button className="p-3 mt-2 mr-4 rounded-full text-black focus:bg-[#800080] focus:text-white">
              اهتمامي
              </button>
            </li>
      
            <li >
            <button className="p-3 mt-2 mr-4 rounded-full text-black focus:bg-[#800080] focus:text-white">
                بيع
                </button>
                </li>
          
        
            <li >
            <button className="p-3 mt-2 mr-4 rounded-full text-black focus:bg-[#800080] focus:text-white">
              ملفي الشخصي
              </button>
            </li>
         
            <li >
            <button className="p-3 mt-2 mr-4 rounded-full text-black focus:bg-[#800080] focus:text-white">
              طلباتي
              </button>
            </li>
        
            <li >
            <button className="p-3 mt-2 mr-4 rounded-full text-black focus:bg-[#800080] focus:text-white">
              الخريطة
            </button>
            </li>
        
            <li >
            <button className="p-3 mt-2 mr-4 rounded-full text-black focus:bg-[#800080] focus:text-white">
              الرئيسية
            </button>
            </li>
        
          <div className="flex justify-between items-center h-16 max-w-[1240px] text-white bg-[#fff] mr-4">
      
            <Link>
              <li className=" py-0 mx-12 mt-2 text-black">
                <div className="flex">
                    <img src={imgscr} width="50px" height="40px" className="rounded-full" alt="" />
                    <p className="py-3 px-3">louay@gmail.com</p>

                </div>
              </li>
            </Link>
          </div>
        </ul>
        <div onClick={handleNav} className="block md:hidden text-[#800080]">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#800080] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <img
            className="flex justify-between items-start h-16 max-w-full mx-auto"
            src={nawi}
            alt="/"
          />
          <Link>
            <li className="p-4 border-b border-gray-500 hover:text-[#FFA500]">
              الدعم
            </li>
          </Link>
          <Link>
            <li className="p-4 border-b border-gray-500 hover:text-[#FFA500]">
              اهتمامي
            </li>
          </Link>
          <Link>
            <li className="p-4 border-b border-gray-500 hover:text-[#FFA500]">
              ملفي الشخصي
            </li>
          </Link>
          <Link>
            <li className="p-4 border-b border-gray-500 hover:text-[#FFA500]">
              طلباتي
            </li>
          </Link>
          <Link>
            <li className="p-4 border-b border-gray-500 hover:text-[#FFA500]">
              الخريطة
            </li>
          </Link>
          <Link>
            <li className="p-4 border-b border-gray-500 hover:text-[#FFA500]">
            الرئيسية
            </li>
          </Link>
 
        </ul>
      </div>
        
    )
}

export default Navbarlogin
