import React, {useState} from 'react'
import DescriptionV from './DescriptionV'
import ShareV from './ShareV';
import ShareWomenV from './ShareWomenV';


const VehicleServicesV = ({props}) => {
  const [Des2, setDes2] = useState(0);


  return (
    
    <div className='bg-[#EBEAFA]'>
      <DescriptionV setDes={setDes2}/>
      {Des2 === 1 && <ShareV/> }
      {Des2 === 0 && <ShareWomenV/>}
      <br></br>
    </div>
  )
}

export default VehicleServicesV