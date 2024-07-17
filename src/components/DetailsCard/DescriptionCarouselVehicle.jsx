import React from 'react'
import { useTranslation } from 'react-i18next'

const DescriptionCarouselVehicle = () => {

  const {t} = useTranslation();

  return (
    <div>
      <div className='bg-white'>
      <p className='text-right pr-8 font-bold text-[25px]'>{t('des_vehicle_name')}</p>
      <p className='text-right pr-8  p-2  text-[18px]'>{t('des_vehicle_loc')}</p>
      <p></p>
      </div>
    </div>
  )
}

export default DescriptionCarouselVehicle
  