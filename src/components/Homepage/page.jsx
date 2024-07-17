import React from 'react'
import Cards from "./asset_comontants/Cards";
import Storyadmin from "./asset_comontants/story_admin";
import Search from "./search";
import { useTranslation } from 'react-i18next';

const Page = () => {
  const {t} = useTranslation();
  return (
    <div className=' bg-[#e0cce7]'>
    <Storyadmin/>
    <Search/>
    <Cards title={t('page_best')} isSpecial={true}/>
    {/* <Important/> */}
    <Storyadmin  title={t('page_best_in')}/>
    <Cards title={t('page_best_p')} isSpecial={false} />
    </div>
  )
}

export default Page
