import React from 'react'
import Vector from '../components/Vectorimg'
import Header from '../components/header'
import ProfileComponents from '../components/ProfileComponents'
import { useTranslation } from 'react-i18next';

function Profile() {
    const {t} = useTranslation();
    return (
        <div className="">
        <Header title={t('content_header')}/>
        <Vector />
        <ProfileComponents/>
        
        </div>
    )
}

export default Profile
