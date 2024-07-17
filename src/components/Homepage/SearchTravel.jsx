import React from 'react'

const SearchTravel = () => {
  return (
    <div className="p-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 p-4">

    

        {/* start loaction */}
    <div class="m-4 ml-[120px]">
      <select
        id="countries"
        className="p-4 m-4 bg-white border-2 border-white text-sm rounded-full dark:placeholder-gray-400 dark:text-black font-bold"
      >
        <option selected>قطر - الدوحة</option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.2"
        stroke="currentColor"
        className="size-5 -z-50 mt-[-52px] ml-[14px]"
      >
        <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    </div>
        {/* end loaction */}


       {/* start alerm */}
    <div class="m-4 mt-[40px] ml-[180px] w-[40px] h-[35px] bg-white border-2 border-green-400 rounded-full">
      <a href="#32">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
      </a>
    </div>
       {/* end alerm */}


       {/* start serach */}
    <div className="m-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <a href="#22">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 25 25"
                stroke-width="0.8"
                stroke="currentColor"
                className="size-8 mt-[5px]"
              >
                <path d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </a>

            <a href="#32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 25 25"
                stroke-width="0.8"
                stroke="currentColor"
                className="size-8 mt-[10px]"
              >
                <path d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
            </a>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 h-[60px] mb-[-40px] border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-white focus:border-white block w-full ps-16 pr-[40px] text-right  dark:bg-white shadow-md shadow-gray-400 dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-white dark:focus:border-white"
            placeholder="...ابحث عن سيارة"
            required
          />
        </div>
      </div>
       {/* end serach */}

    </div>
  </div>
  )
}

export default SearchTravel
