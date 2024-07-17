import React, {useState} from 'react'
import AboutOffice from './AboutOffice';
import OrdersTravelS from './OrdersTravelS';
import BackgroundInO from './BackgroundInO';
import DescriptionOffices from './DescriptionOffices';


const   TravelOfficesServices = ({props}) => {
  const [Des3, setDes3] = useState(0);


  return (
    
    <div className='bg-[#EBEAFA]'>
    <BackgroundInO/>
      <DescriptionOffices setDes={setDes3}/>
      {Des3 === 0 && <AboutOffice/> }
      {Des3 === 1 && <OrdersTravelS/> }
      <br></br>
    </div>
  )
}

export default TravelOfficesServices