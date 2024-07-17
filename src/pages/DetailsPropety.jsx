import React from 'react'
import Header from '../components/header'
import DetailsPropety from '../components/DetailsPropety'
import { useTranslation } from "react-i18next";

function DetailsPropetyPage() {
    const {t} = useTranslation();
    return (
        
        <div>
            <Header title={t('details_header')} />
            <DetailsPropety/>
        </div>
    )
}

export default DetailsPropetyPage
