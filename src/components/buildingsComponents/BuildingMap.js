import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import mapData from '../../../server/data/countries.json';
import 'leaflet/dist/leaflet.css';

const BuildingMap = () => {
  const mapStyle = {
    fillColor: '#fff',
    weight: 2,
    color: '#000',
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.name;
    const countryCode = country.id;
    layer.bindPopup(`${countryName} (${countryCode})`);
  };

  return (
    <div className="map-wrapper">
      <MapContainer
        style={{ height: '550px', width: '850px', borderRadius: '10px' }}
        center={[51.505, -0.09]}
        zoom={2}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <GeoJSON
          style={mapStyle}
          data={mapData.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
};

export default BuildingMap;
