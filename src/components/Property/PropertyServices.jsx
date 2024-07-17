import React, {useState} from 'react'
import Description from './Description'
import Share from './Share'
import ShareWomen from './ShareWomen';


const TravelServices = ({props}) => {
  const [Des2, setDes2] = useState(0);


  return (
    
    <div className='bg-[#EBEAFA]'>
      <Description setDes={setDes2}/>
      {Des2 === 1 && <Share/> }
      {Des2 === 0 && <ShareWomen/>}
      <br></br>
    </div>
  )
}

export default TravelServices
