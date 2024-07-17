import React from 'react'
import Header from '../components/header'
import { useTranslation } from 'react-i18next';
import EditProfileComponents from '../components/EditProfileComponents'

function EditProfile() {
    const {t} = useTranslation();
    return (
        <div>
            <Header title={t('content_header')}/>
            <EditProfileComponents />
        </div>
    )
}

export default EditProfile
