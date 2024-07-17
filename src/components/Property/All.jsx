import React, { useState } from 'react'
import Add from './Add'
import Share from './Share';
import PropertyServices from './PropertyServices';
import InfluancerServices from './InfluancerServices';
import ShareWomen from './ShareWomen';
import AboutInfluancer from './AboutInfluancer';
import SimilarInfluancer from './SimilarInfluancer';



const All = ({ props }) => {
  const [Des, setDes] = useState(0);
  const [Des1, setDes1] = useState(0);


  return (
    <div className="min-h-screen w-full bg-[#EBEAFA]">
      <Add/>
      {Des === 0 && <PropertyServices setDes={setDes} />}
      {Des === 1 && <Share setDes={setDes} />}
      {Des === 0 && <ShareWomen setDes={setDes} />}


      {Des1 === 1 && <InfluancerServices setDes={setDes1} />}
      {Des1 === 0 && <AboutInfluancer setDes={setDes1} />}
      {Des1 === 1 && <SimilarInfluancer setDes={setDes1} />}
    </div>
  )
}

export default All