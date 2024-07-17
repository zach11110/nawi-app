import React, { useState } from 'react'
import Add from './Add1'
import Add2 from './Add2'
import Add3 from './Add3'
import Add4 from './Add4'
import Add5 from './Add5'
import Add6 from './Add6'
import VehicleServices from './VehicleServicesV'
import ShareV from './ShareV'
import ShareWomenV from './ShareWomenV'
// import Share from './Share';
// import PropertyServices from './PropertyServices';
// import InfluancerServices from './InfluancerServices';
// import ShareWomen from './ShareWomen';
// import AboutInfluancer from './AboutInfluancer';
// import SimilarInfluancer from './SimilarInfluancer';



const All = ({ props }) => {
  const [Des, setDes] = useState(0);

  return (
    <div className="min-h-screen w-full bg-[#EBEAFA]">
      <Add/>
      <Add2/>
      <Add3/>
      <Add4/>
      <Add5/>
      <Add6/>

      {Des === 0 && <VehicleServices setDes={setDes} />}
      {Des === 1 && <ShareV setDes={setDes} />}
      {Des === 0 && <ShareWomenV setDes={setDes} />}

      {/* {Des === 0 && <PropertyServices setDes={setDes} />}
      {Des === 1 && <Share setDes={setDes} />}
      {Des === 0 && <ShareWomen setDes={setDes} />} */}


      {/* {Des1 === 1 && <InfluancerServices setDes={setDes1} />}
      {Des1 === 0 && <AboutInfluancer setDes={setDes1} />}
      {Des1 === 1 && <SimilarInfluancer setDes={setDes1} />} */}
      {/* {Des1 === 1 && <Share setDes={setDes} />} */}
    </div>
  )
}

export default All