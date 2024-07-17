import React from 'react'
import PaymentComponents from '../components/PaymentComponents'
import Header from '../components/header'
import { useTranslation } from "react-i18next";

function Payment() {
    const {t} = useTranslation();
    const pay=t('payment_title');
    return (
        <div>
            <Header title={pay}/>
            <PaymentComponents />
        </div>
    );
}

export default Payment
