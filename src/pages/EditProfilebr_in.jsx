import React, {useState} from 'react'
import Header from '../components/header'
import EditProfilebr_inf from '../components/EditProfilebr_in'
import Tankers from '../components/Tankers'
import Buy from '../components/Buy';
import Sale from '../components/Sale';
import { useTranslation } from "react-i18next";

function Editprofilebr_in() {

    const {t} = useTranslation();
    
    const [Notifi, setNotifi] = useState(1);
    
    return (
        <div>
            <Header title={t('content_header')}/>
            <EditProfilebr_inf  setNotifi={setNotifi}/>
            {Notifi === 1 && <Tankers/>}
            <div className="min-h-screen ">
            {Notifi === 2 && <Buy/>}
            {Notifi === 3 && <Sale/>}
            </div>
        </div>
    )
}

export default Editprofilebr_in
