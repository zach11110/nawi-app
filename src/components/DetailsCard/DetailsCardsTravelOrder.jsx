import React, {useState} from 'react'
import Carousel from './Carousel'
import DescriptionCarousel from './DescriptionCarousel'
import DescriptionTravelOrder from './DescriptionTravelOrder'
import Images from './Images'
import Videos from './Videos'
import DescriptionCard from './DescriptionCard'
import TravelOrderList from './TravelOrderList'
import ImagesTravelOrder from './ImagesTravelOrder'

const DetailsCardsProperty = () => {
  const [DesCard, setDesCard] = useState(0);

  return (
    <div className='bg-[#EBEAFA]'>
      <Carousel/>
      <DescriptionCarousel/>
      <DescriptionCard setDesCard={setDesCard}/>
        {DesCard === 0 && <DescriptionTravelOrder/>}
        {DesCard === 1 && <ImagesTravelOrder/>}
        {DesCard === 1 && <Images/>}
        {DesCard === 1 && <Videos/>}
        <div className="min-h-screen  ">
        {DesCard === 2 && <TravelOrderList />}
      </div>
    </div>
  )
}

export default DetailsCardsProperty