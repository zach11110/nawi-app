import React from 'react'

function Header(title) {
    return (
        <div className='p-3 text-white font-bold text-[30px] text-center  bg-[#800080]'>
        {title.title}
        <div className='bg-white rounded-full w-10 h-10 p-3 flex justify-center float-right '>
          <svg width="15" height="20" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.24023 14.48L1.76023 7.99998L8.24023 1.51998" stroke="#252B5C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
        
    )
}

export default Header
