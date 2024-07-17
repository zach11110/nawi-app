import React from 'react'
import imgscr from '../assets/ImagesVehicle/person.png'

function Vectorimg() {
    return (
        <div className=" w-full bg-[#ebeafa] p-6 ">

            <div className="rounded-full w-[30%] flex lg:mx-[45%] sm:mx-[35%] ">
                <img src={imgscr} width="190px"  alt="" srcset="" />
            </div>
       
            <h1 className='font-bold text-[25px] w-44 mx-72 lg:mx-[47%] '>محمد خليل</h1>


        </div>

    )
}

export default Vectorimg
