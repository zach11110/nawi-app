import React, { useTransition } from 'react'
import Header from '../components/header'
import Vectorimg from '../components/Vectorimg'
import Settings from '../components/Settings'
import { useTranslation } from "react-i18next";

function Settingspage() {
    const {t} = useTranslation();
    return (
        <div className="">
            <Header title={t('content_header')}/>
            <Vectorimg/>
            <Settings/>
        </div>
    )
}

export default Settingspage
