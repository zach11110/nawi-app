import React, {useState} from 'react'
import Description from './Description'
import DescriptionOrderTravel from './DescriptionOrderTravel'
import Hotels from './Hotels'
import Resturants from './Resturants'
import Header from '../header'
import { useTranslation } from 'react-i18next'



const TravelServices = ({props}) => {

  const {t} = useTranslation();

  const [Des2, setDes2] = useState(0);

  return (
    
    <div className='bg-[#EBEAFA]'>
    <Header title= {t('travel_ser_top_header')}/>

      <h2 className='float-right font-semibold text-[20px] p-8'>{t('travel_ser_top_header2')}</h2>
      <Description setDes={setDes2}/>
      {Des2 === 0 && <DescriptionOrderTravel/>}
      {Des2 === 1 && <Hotels/> }
      {Des2 === 2 && <Resturants/>}
      <br></br>  
    </div>
  )
}

export default TravelServices