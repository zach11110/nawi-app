import React from "react";
import { FaList, FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map1 = () => {
  const { t } = useTranslation();

  const center = [23.8859, 45.0792]; // Saudi Arabia coordinates

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Map */}
      <MapContainer center={center} zoom={6} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            Saudi Arabia
          </Popup>
        </Marker>
      </MapContainer>

      {/* Left Side Buttons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-4 z-[1000]">
        <Button icon={<FaSearch />} text={t('map_search')} />
        <Button icon={<FaList />} text={t('map_list')} />
      </div>

      {/* Bottom Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1000]">
        <button className="px-6 py-3 text-white bg-[#FFA500] hover:bg-[#800080] rounded-full transition-colors duration-300 whitespace-nowrap">
          {t('map_my_property')}
        </button>
      </div>
    </div>
  );
};

const Button = ({ icon, text }) => (
  <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-200 hover:bg-[#FFA500] hover:text-white border-2 border-[#FFA500] rounded-md transition-colors duration-300 whitespace-nowrap">
    {icon}
    <span>{text}</span>
  </button>
);

export default Map1;