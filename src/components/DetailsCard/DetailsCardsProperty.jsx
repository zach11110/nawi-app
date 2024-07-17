import React, {useState} from 'react'
import Carousel from './Carousel'
import DescriptionCarousel from './DescriptionCarousel'
import DescriptionProperty from './DescriptionProperty'
import Images from './Images'
import Videos from './Videos'
import DescriptionCard from './DescriptionCard'
// import SimilarCards from './SimilarCards'
import PropertyList from './PropertyList'

const DetailsCardsProperty = () => {
  const [DesCard, setDesCard] = useState(0);

  return (
    <div className='bg-[#EBEAFA]'>
      <Carousel/>
      <DescriptionCarousel/>
      <DescriptionCard setDesCard={setDesCard}/>
        {DesCard === 0 && <DescriptionProperty/>}
        {DesCard === 1 && <Images/>}
        {DesCard === 1 && <Videos/>}
        <div className="min-h-screen  ">
        {DesCard === 2 && <PropertyList />}
      </div>
    </div>
  )
}

export default DetailsCardsProperty