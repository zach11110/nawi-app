import React, {useState} from 'react'
import BackgroundInfV from './BackgroundInfV';
import DescriptionInfluancerV from './DescriptionInfluancerV';
import SimilarInfluancerV from './SimilarInfluancerV';
import AboutInfluancerV from './AboutInfluancerV';


const InfluancerServicesV = ({props}) => {
  const [Des3, setDes3] = useState(0);


  return (
    
    <div className='bg-[#EBEAFA]'>
    <BackgroundInfV/>
      <DescriptionInfluancerV setDes={setDes3}/>
      {Des3 === 0 && <AboutInfluancerV/> }
      {Des3 === 1 && <SimilarInfluancerV/> }
      <br></br>
    </div>
  )
}

export default InfluancerServicesV
