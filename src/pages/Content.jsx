import React from 'react'
import Header from '../components/header'
import Vectorimg from '../components/Vectorimg'
import ContentComponents from '../components/ContentComponents'
import { useTranslation } from "react-i18next";


function Content() {
    const {t} = useTranslation();
    return (
        <div>
            <Header title={t('content_header')} />
            <Vectorimg/>
            <ContentComponents/>
        </div>
    )
}

export default Content
