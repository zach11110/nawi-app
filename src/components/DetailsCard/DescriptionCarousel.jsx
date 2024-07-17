import { t } from 'i18next'
import React from 'react'

const DescriptionCarousel = () => {
  return (
    <div>
      <div className='bg-white'>
      <p className='text-right pr-8 font-bold text-[25px]'>{t('des_flat_h')}<span className='mr-4 p-2 text-[16px] text-[#800080] font-small'>{t('des_flat_h2')}</span></p>
      <p className='text-right pr-8  p-2  text-[18px]'>{t('des_flat_loc')}</p>
      <p></p>
      </div>
    </div>
  )
}

export default DescriptionCarousel
  