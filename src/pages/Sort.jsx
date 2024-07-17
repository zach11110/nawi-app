import React from 'react'
import Header from '../components/header'
import SortComponents from '../components/SortComponents'
import { useTranslation } from "react-i18next";

function Sort() {
    const {t} = useTranslation();

    return (
        <div className="">
                <Header title={t('sort_Archives')}/>
                <SortComponents/>

        </div>
    )
}

export default Sort
