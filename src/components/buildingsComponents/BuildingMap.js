import React, { useEffect } from 'react';
import { MapContainer, GeoJSON, Tooltip, CircleMarker } from 'react-leaflet';
import mapData from '../../../server/data/countries.json';
import countries from '../../../server/data/countriesList.json';
import 'leaflet/dist/leaflet.css';

const BuildingMap = ({ selectedBuilding, setSelectedBuilding }) => {
  const [countryName, setCountryName] = React.useState('');
  const mapStyle = {
    fillColor: '#fff',
    weight: 2,
    color: '#000',
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.on({
      tooltipopen: function (e) {
        e.target.setStyle({
          color: '#000',
          fillColor: '#0F1F57',
        });
      },
    });
  };

  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  useEffect(() => {
    countries.filter((country) => {
      if (equals(country.position, selectedBuilding.position)) {
        setCountryName(country.name);
      }
    });
  }, [selectedBuilding]);

  return (
    <div className="map-wrapper">
      <MapContainer
        style={{ height: '550px', width: '850px', borderRadius: '10px' }}
        center={selectedBuilding.position}
        zoom={5}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        whenCreated={(map) => {
          if (selectedBuilding.mode !== true) {
            setSelectedBuilding({
              map: map,
              mode: selectedBuilding.mode,
              building: selectedBuilding.building,
              postion: selectedBuilding.postion,
            });
          }
        }}
      >
        <GeoJSON
          style={mapStyle}
          data={mapData.features}
          onEachFeature={onEachCountry}
        />
        {selectedBuilding.mode ? (
          <>
            <CircleMarker
              center={selectedBuilding.position}
              pathOptions={{ color: 'red' }}
              radius={20}
            >
              <Tooltip
                permanent
              >{`${selectedBuilding.building.name} Located in ${countryName}`}</Tooltip>
            </CircleMarker>
          </>
        ) : null}
      </MapContainer>
    </div>
  );
};

export default BuildingMap;
