import React, {useState} from 'react'
import BackgroundB from './BackgroundB';
import AboutBroker from './AboutBroker';
import DescriptionBroker from './DescriptionBroker';
import AllOrderBroker from './AllOrderBroker';


const BrokerServices = ({props}) => {
  const [Des3, setDes3] = useState(0);


  return (
    
    <div className='bg-[#EBEAFA]'>
    <BackgroundB/>
      <DescriptionBroker setDes={setDes3}/>
      {Des3 === 0 && <AboutBroker/> }
      {Des3 === 1 && <AllOrderBroker/> }
      <br></br>
    </div>
  )
}

export default BrokerServices