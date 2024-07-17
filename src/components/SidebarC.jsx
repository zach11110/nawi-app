import React, {useState} from 'react';
import Sidebar from 'react-sidebar';
import { FaBars, FaList, FaRegHeart, FaUser, FaBell, FaComment, FaMap, FaCog } from 'react-icons/fa';

const SidebarC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

      const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
      };

      const sidebarContent = (
        <div className="h-full bg-gray-800 text-white">
          <div className="p-4 text-lg font-bold">لوحة القيادة</div>
          <div className="p-4 space-y-4">
            <div className="flex items-center p-2 hover:bg-gray-700">
              <FaList className="mr-2" />
              <span>الإحصائيات</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-700">
              <FaUser className="mr-2" />
              <span>ملفي الشخصي</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-700">
              <FaBell className="mr-2" />
              <span>الإشعارات</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-700">
              <FaComment className="mr-2" />
              <span>المحادثات</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-700">
              <FaMap className="mr-2" />
              <span>الخريطة</span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-700">
              <FaCog className="mr-2" />
              <span>الإعدادات</span>
            </div>
          </div>
        </div>
      );
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
          <Sidebar
            sidebar={sidebarContent}
            open={sidebarOpen}
            onSetOpen={setSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
            pullRight={true} // لجعل الشريط الجانبي يظهر على اليمين
          >
            <button
              className="p-2 m-4 text-white bg-blue-500 rounded-md md:hidden"
              onClick={handleSidebarToggle}
            >
              <FaBars />
            </button>
          </Sidebar>
         
          <div className="flex-1 p-4 md:ml-64">
            <button
              className="hidden p-2 text-white bg-blue-500 rounded-md md:inline-block"
              onClick={handleSidebarToggle}
            >
              <FaBars />
            </button>
            <h1 className="text-2xl">محتوى رئيسي</h1>
            <p>هذه هي منطقة المحتوى الرئيسية.</p>
          </div>
        </div>
  )
}

export default SidebarC