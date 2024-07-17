import React from 'react'
import Storyadmin from "./asset_comontants/story_admin";
import SearchVehicle from "./searchVehicle";
import Important from "./asset_comontants/important"
import CarsAgency from './asset_comontants/CarsAgency';


const Agency = () => {


  return (
    <div className=' bg-[#e0cce7]'>
    <Storyadmin/>
    <SearchVehicle/>
    <Important/>
    <CarsAgency isSpecial={true}/>
    </div>
  )
}

export default Agency
