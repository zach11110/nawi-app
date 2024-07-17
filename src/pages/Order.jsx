import React from 'react'
import OrderComponents from '../components/OrderComponents'
import Search from '../components/Homepage/search'
import SidebarC from '../components/SidebarC'

function Order() {
    return (
        <div className="bg-[#ebeafa]">
            <Search />
            <OrderComponents/>
            <SidebarC/>

        </div>
        
    )
}

export default Order
