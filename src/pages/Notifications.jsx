import React, {useState} from 'react'
import Header from '../components/header';
import NotificationsComponents from '../components/NotificationsComponents'
import Massage from '../components/Massage'
import Notificationsall from '../components/Notificationsall'
import { useTranslation } from 'react-i18next';

const Notifications = () => {
    const [Notifi, setNotifi] = useState(1);
    const {t} = useTranslation();
  
    return (
        <div>
            <Header title={t('Notifications_title')} />
            <NotificationsComponents setNotifi={setNotifi}/>
            {Notifi === 1 && <Massage/>}
            <div className="min-h-screen ">
            {Notifi === 2 && <Notificationsall/>}
            </div>
        </div>
        
    )
}

export default Notifications
