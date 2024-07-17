import React, { useEffect, useState } from "react";
import photo from "../assets/Images/laptop.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useAtom } from 'jotai';
// import { dataAtom } from '../astoms';
import { userAtom } from "../../src/store";
import { useTheme } from "@material-tailwind/react";
import { login } from "../services/authenticationService";
import { useTranslation } from "react-i18next";
// import cogoToast from "cogo-toast";



const Login = () => {
 

  // const theme = useTheme();
  const location = useLocation();
  const [userAtomVar, setUserAtom] = useAtom(userAtom);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (field, value) => {
    setData({
      ...data,
      [field]: value
    })
  }
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const user = await login(data);
      if (user) {
        setUserAtom(user);
        if (location.pathname.indexOf('login') > -1) {
          navigate('/')
        } else {
          navigate(location.pathname);
        }
      }
    } catch (err) {
      setLoading(false);
      // cogoToast.error("معلومات التسجيل خاطئة يرجى المحاولة مجدددا");
    }

  };

  const {t} = useTranslation();

    

  return (
    <div className="text-[#333] ">
      <div className="min-h-screen flex flex-col  justify-between items-center py-6 px-4">
        <img
          className="w-[500px] mx-auto my-4 justify-between items-center"
          src={photo}
          alt="/"
        />
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
        
          <form className="space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full mr-[-225px]">
        
            <h3 className="text-3xl font-extrabold mb-8 text-center">
              {t('login_signin')}
            </h3>
            <div>
              <input
                name="email"
                value={data.email} onChange={(e) => handleChange('email', e.target.value)}
                type="email"
                autoComplete="email"
                required
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-full  outline-[#FFA500] text-right"
                placeholder={t('login_email')}
              />
             
            </div>
            <div>
              <input
                name="password"
                value={data.password} onChange={(e) => handleChange('password', e.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-full outline-[#FFA500] text-right"
                placeholder={t('login_password')}
              />
            </div>
            <div className="flex items-center justify-between ml-[20px]">
              <div className="text-sm">
                <a
                  href="jajvascript:void(0);"
                  className="text-blue-600 hover:text-[#800080]"
                >
               {t('login_password_forget')}
                </a>
              </div>
            </div>
            <div className="!mt-4">
              <button
                type="submit"
                className="w-[66%] ml-[70px] shadow-xl py-2.5 font-bold  text-white bg-[#FFA500] h-14 focus:outline-none rounded-full"
               onClick={handleClick}
              >

                 {t('login_signin')} 
              </button>
            </div>
            <div className="flex items-center">
              <div className="w-1/2 h-0.5 bg-gray-300"></div>
              <div className="mx-4 text-gray-500">{t('login_or')}</div>
              <div className="w-1/2 h-0.5 bg-gray-300"></div>
            </div>
            <div className="space-x-6 flex justify-center">
              <button
                type="button"
                className="w-44 shadow-xl py-2.5 font-bold text-whitebg-slate-300 h-14 focus:outline-none rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  className="inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
                <div className="justify-self-center"></div>
              </button>

              <button
                type="button"
                className="w-44 shadow-xl py-2.5 font-bold text-whitebg-slate-300 h-14 focus:outline-none rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  fill="#000"
                  className="inline"
                  viewBox="0 0 22.773 22.773"
                >
                  <path
                    d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="font-bold ml-[120px]">
              {t('login_acount')}
              <Link to="/register" className="text-blue-600 underline hover:text-[#800080]">
               {t('login_create')}
              </Link>
            </p>
          </form>    
        </div>
      </div>
    </div>
  );
};

export default Login;
