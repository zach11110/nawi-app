import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import nawi from "../assets/Images/nawi.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? 'auto' : 'hidden';
  };

  useEffect(() => {
    // Add padding to the body to account for the fixed header
    document.body.style.paddingTop = "80px";
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingTop = "0px";
    };
  }, []);

  const navItems = [
    { label: 'navbar_rent', path: '/' },
    { label: 'navbar_buying', path: '/' },
    { label: 'navbar_selling', path: '/' },
    { label: 'navbar_prpoerties', path: '/' },
    { label: 'navbar_travels', path: '/' },
    { label: 'navbar_cars', path: '/' },
    { label: 'navbar_sources', path: '/' },
  ];

  const joinOptions = [
    { value: 'navbar_broker', label: t('navbar_broker') },
    { value: 'navbar_influanser', label: t('navbar_influanser') },
    { value: 'navbar_travel_office', label: t('navbar_travel_office') },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-0 right-0 z-[100] md:hidden">
        <div onClick={handleNav} className="cursor-pointer p-4">
          <AiOutlineMenu size={25} color="black" />
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block fixed top-0 left-0 w-full h-20 z-[100] bg-white shadow-md">
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
          <Link to="/">
            <img src={nawi} alt="Logo" className="w-auto h-12 md:h-16" />
          </Link>
          <div className="flex items-center">
            <ul className="flex">
              {navItems.map((item, index) => (
                <NavLink key={index} to={item.path} label={t(item.label)} />
              ))}
            </ul>
            <select className="mx-4 p-2 text-black hover:text-[#800080] text-sm border border-purple-500 rounded-md cursor-pointer">
              <option value="">{t('navbar_join')}</option>
              {joinOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))}
            </select>
            <Link to="/login">
              <button className="mx-2 px-6 py-2 border border-[#FFA500] rounded-md hover:bg-[#FFA500] hover:text-white transition duration-300">
                {t('navbar_signin')}
              </button>
            </Link>
            <Link to="/register">
              <button className="mx-2 px-6 py-2 bg-[#FFA500] text-white rounded-md hover:bg-amber-600 transition duration-300">
                {t('navbar_register_now')}
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-black/70 z-[10000] transition-opacity duration-300 ease-in-out ${
          nav ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={handleNav}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div 
        className={`
          fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen 
          bg-[#800080] transition-transform duration-300 ease-in-out z-[10001]
          ${nav ? 'translate-x-0' : '-translate-x-full'}
          overflow-y-auto
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-10">
          <div className="flex w-full items-center justify-between">
            <Link to="/">
              <img src={nawi} alt="Logo" className="w-auto h-8" />
            </Link>
            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <AiOutlineClose color="white" />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4 text-white">Let's build something legendary together</p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {navItems.map((item, index) => (
                <NavLink key={index} to={item.path} label={t(item.label)} mobile onClick={handleNav} />
              ))}
            </ul>
            <select className="my-4 p-2 text-black hover:text-[#800080] text-sm border border-purple-500 rounded-md cursor-pointer bg-white">
              <option value="">{t('navbar_join')}</option>
              {joinOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))}
            </select>
            <div className="flex flex-col gap-4">
              <Link to="/login" onClick={handleNav}>
                <button className="w-full px-6 py-2 border border-[#FFA500] rounded-md bg-white hover:bg-[#FFA500] hover:text-white transition duration-300">
                  {t('navbar_signin')}
                </button>
              </Link>
              <Link to="/register" onClick={handleNav}>
                <button className="w-full px-6 py-2 bg-[#FFA500] text-white rounded-md hover:bg-amber-600 transition duration-300">
                  {t('navbar_register_now')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ to, label, mobile, onClick }) => (
  <li className={`${mobile ? 'py-4 text-sm text-white' : 'ml-10 text-sm uppercase hover:border-b'}`}>
    <Link to={to} onClick={onClick}>{label}</Link>
  </li>
);

export default Navbar;