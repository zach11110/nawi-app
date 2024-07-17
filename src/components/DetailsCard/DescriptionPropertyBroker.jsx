import React from "react";
import { Link } from "react-router-dom";
import {
  FaBath,
  FaCcVisa,
  FaDumbbell,
  FaHorse,
  FaMoneyBillAlt,
  FaPaypal,
  FaShieldAlt,
  FaSwimmer,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";
import { BsTextareaResize } from "react-icons/bs";
import { LuBedDouble } from "react-icons/lu";

const DescriptionProperty = () => {
  return (
    <div>
      <p className="font-bold text-[19px] mt-[60px] mr-[20px] text-right">
        : أهم الأماكن
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-6 gap-4 px-8">
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaShieldAlt className="text-[#800080] size-5" />
          </div>
          <div className="text-1xl">4.546</div>
          <div>رتبة السلامة</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaBath className="text-[#800080] size-5" />
          </div>
          <div className="text-1xl">2</div>
          <div>حمامات</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <LuBedDouble className="text-[#800080] size-5" />
          </div>
          <div className="text-1xl">3</div>
          <div>غرف</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <BsTextareaResize className="text-[#800080] size-5" />
          </div>
          <div className="text-1xl">1.234</div>
          <div>مساحة</div>
        </div>
      </div>

      <p className="grid grid-cols-1 pr-6 pt-[90px] pb-10 text-right font-bold text-[19px]">
        : المرافق العامة
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-6 gap-4 px-8">
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/317fd1d0940baf4c7f064f2098f456b942387c0f6f6e40ec2cb58989e3de7a7c?"
              className="w-[30px] aspect-[1.12]"
            />
          </div>
          <div>مصف سيارات</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaSwimmer className="text-[#800080] size-5" />
          </div>
          <div>حوض سباحة</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaDumbbell className="text-[#800080] size-5" />
          </div>
          <div>تادي رياضي</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaUtensils className="text-[#800080] size-5" />
          </div>
          <div>مطعم</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaWifi className="text-[#800080] size-5" />
          </div>
          <div>Wi-Fi</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaHorse className="text-[#800080] size-5" />
          </div>
          <div>بيت المواشي</div>
        </div>
      </div>

      <p className="font-bold text-[19px] mt-[60px] mr-[20px] text-right">
        : طرق الدفع
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-6 gap-4 px-8">
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaCcVisa className="text-[#800080] size-5" />
          </div>
          <div>فيزا كارد</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaMoneyBillAlt className="text-[#800080] size-5" />
          </div>
          <div>كاش</div>
        </div>
        <div className="bg-white border rounded-xl shadow-xl p-4 text-center">
          <div className="flex flex-col justify-between items-center text-center">
            <FaPaypal className="text-[#800080] size-6" />
          </div>
          <div>باي بال</div>
        </div>
      </div>

      <p className="grid grid-cols-1 pr-6 pt-[90px] pb-10 text-right font-bold text-[19px]">
        : العنوان
      </p>
      <div className="flex justify-center items-center bg-white">
        <button className=" ml-[130px]">
          <span className="float-end ml-4 text-lg font-semibold mt-[7px]">
            رفض
          </span>
          <Link to="" className="flex flex-col">
            <svg
              width="45"
              height="45"
              viewBox="0 0 83 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M82.4165 41.6067C82.4165 64.3652 63.9668 82.815 41.2083 82.815C18.4496 82.815 0 64.3652 0 41.6067C0 18.848 18.4496 0.398438 41.2083 0.398438C63.9668 0.398438 82.4165 18.848 82.4165 41.6067ZM28.7206 29.1192C29.9276 27.9122 31.8844 27.9122 33.0915 29.1192L41.2083 37.2357L49.3246 29.1192C50.5316 27.9123 52.4886 27.9123 53.6956 29.1192C54.9026 30.3262 54.9026 32.2831 53.6956 33.4899L45.5788 41.6067L53.6956 49.7231C54.9026 50.9301 54.9026 52.8871 53.6956 54.094C52.4886 55.301 50.5316 55.301 49.3246 54.094L41.2083 45.9777L33.0915 54.094C31.8846 55.301 29.9277 55.301 28.7207 54.094C27.5138 52.8871 27.5138 50.9301 28.7207 49.7235L36.8373 41.6067L28.7206 33.4899C27.5136 32.283 27.5136 30.3261 28.7206 29.1192Z"
                fill="#990033"
              />
            </svg>
          </Link>
        </button>
        <button className="ml-[130px] p-8">
          <span className="float-end ml-4 text-lg font-semibold mt-[7px]">
            قبول
          </span>
          <Link to="" className="flex flex-col">
            <svg
              width="45"
              height="45"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 30.7031C12.0333 30.7031 9.13319 29.8234 6.66646 28.1752C4.19972 26.527 2.27714 24.1843 1.14183 21.4434C0.00651479 18.7025 -0.290556 15.6865 0.288222 12.7768C0.867 9.86706 2.29563 7.19432 4.39342 5.09653C6.4912 2.99875 9.16394 1.57013 12.0737 0.991355C14.9834 0.412577 17.9994 0.709617 20.7403 1.84493C23.4812 2.98025 25.8238 4.90284 27.4721 7.36957C29.1203 9.83631 30 12.7364 30 15.7031C30 19.6814 28.4197 23.4967 25.6066 26.3097C22.7936 29.1228 18.9783 30.7031 15 30.7031ZM6.507 19.0856C6.18444 18.7595 6.00352 18.3193 6.00352 17.8606C6.00352 17.4019 6.18444 16.9617 6.507 16.6356L7.39003 15.7576C7.54019 15.6061 7.71925 15.4863 7.91661 15.4053C8.11397 15.3243 8.32561 15.2838 8.53892 15.2862C8.75224 15.2886 8.96289 15.3338 9.1584 15.4192C9.35391 15.5045 9.53027 15.6283 9.67702 15.7831L11.237 17.4016C11.3114 17.4801 11.401 17.5426 11.5003 17.5853C11.5997 17.628 11.7066 17.6501 11.8148 17.6501C11.9229 17.6501 12.0299 17.628 12.1292 17.5853C12.2286 17.5426 12.3181 17.4801 12.3925 17.4016L20.3425 9.20663C20.4903 9.0507 20.6681 8.92627 20.8653 8.84083C21.0624 8.75538 21.2748 8.71069 21.4896 8.70943C21.7045 8.70817 21.9174 8.75036 22.1155 8.83349C22.3136 8.91661 22.4929 9.03895 22.6425 9.19314L23.5 10.0601C23.8147 10.3849 23.9907 10.8194 23.9907 11.2716C23.9907 11.7239 23.8147 12.1583 23.5 12.4831L12.9455 23.2086C12.7982 23.3611 12.622 23.4826 12.4271 23.5661C12.2322 23.6495 12.0226 23.6932 11.8107 23.6946C11.5987 23.696 11.3885 23.6551 11.1926 23.5742C10.9966 23.4933 10.8188 23.3741 10.6695 23.2236L6.507 19.0856Z"
                fill="#699F4C"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DescriptionProperty;
