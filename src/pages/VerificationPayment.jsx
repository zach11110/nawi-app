import React from 'react'
import Header from '../components/header';
import Verificationpaymen from '../components/Verificationpayment';
import { useTranslation } from "react-i18next";



function VerificationPayment() {
    const {t} = useTranslation();


    return (
        <div>
            <Header title={t('payment_title')}/>
            <Verificationpaymen />
   
        </div>
    );
}

export default VerificationPayment
