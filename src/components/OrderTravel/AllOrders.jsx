import React from 'react'
import CardsT from "./CardsT";
import Storyadmin from "../../components/Homepage/asset_comontants/story_admin";
import SearchT from "./searchT";
import { useTranslation } from 'react-i18next';


const AllOrders = () => {
  
  const {t} = useTranslation();

  return (
    <div className=' bg-[#e0cce7]'>
    <Storyadmin/>
    <SearchT/>
    <CardsT title={t('all_order_all')} isSpecial={true}/>
    </div>
  )
}

export default AllOrders