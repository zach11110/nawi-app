import React, {useState} from 'react'
import DescriptionInfluancer from './DescriptionInfluancer'
import BackgroundInf from './BackgroundInf';
import AboutInfluancer from './AboutInfluancer';
import SimilarInfluancer from './SimilarInfluancer';


const InfluancerServices = ({props}) => {
  const [Des3, setDes3] = useState(0);


  return (
    
    <div className='bg-[#EBEAFA]'>
    <BackgroundInf/>
      <DescriptionInfluancer setDes={setDes3}/>
      {Des3 === 0 && <AboutInfluancer/> }
      {Des3 === 1 && <SimilarInfluancer/> }
      {/* {Des2 === 1 && <Share/>} */}
      <br></br>
    </div>
  )
}

export default InfluancerServices
