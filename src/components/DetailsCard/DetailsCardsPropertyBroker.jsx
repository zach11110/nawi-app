import React, {useState} from 'react'
import Carousel from './Carousel'
import DescriptionCarousel from './DescriptionCarousel'
import Images from './Images'
import Videos from './Videos'
import DescriptionCard from './DescriptionCard'
import PropertyList from './PropertyList'
import DescriptionPropertyBroker from './DescriptionPropertyBroker'


const DetailsCardsPropertyBroker = () => {
  const [DesCard, setDesCard] = useState(0);

  return (
    <div className='bg-[#EBEAFA]'>
      <Carousel/>
      <DescriptionCarousel/>
      <DescriptionCard setDesCard={setDesCard}/>
        {DesCard === 0 && <DescriptionPropertyBroker/>}
        {DesCard === 1 && <Images/>}
        {DesCard === 1 && <Videos/>}
        <div className="min-h-screen  ">
        {DesCard === 2 && <PropertyList />}
      </div>
    </div>
  )
}

export default DetailsCardsPropertyBroker