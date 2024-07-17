import React from "react";


const DescriptionV = ({setDes}) => {
  

  return (
    
    <div className="flex justify-center items-start h-[50px] w-full">
      <ul className="flex rounded-2xl mt-[20px] pl-5 justify-center space-x-8 font-semibold text-3xl">
        <div>
          <li className="px-[50px]">
            <button
              className="py-4 px-10 focus:outline-none hover:border-b-2 border-[#800080] w-[300px] hover:text-[#800080] transition-colors duration-300 ease-in-out"
              onClick={() => setDes(0)}
            >
              رجال
            </button>
          </li>
        </div>
        <div>
          <li className="px-[50px]">
            <button
              className="py-4 px-10 focus:outline-none hover:border-b-2 border-[#800080] w-[300px] hover:text-[#800080] transition-colors duration-300 ease-in-out"
              onClick={() => setDes(1)}
            >
              نساء
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default DescriptionV;
