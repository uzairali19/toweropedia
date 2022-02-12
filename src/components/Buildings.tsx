import React, { useState } from 'react';
import { Box } from '@mui/material';
import BuildingList from './buildingsComponents/BuildingList';
import BuildingMap from './buildingsComponents/BuildingMap';
import BuildingForm from './buildingsComponents/BuildingForm';

const Buildings = ({ client }: { client: any }) => {
  const [addBuilding, setAddBuilding] = useState(false);
  const [editBuilding, setEditBuilding] = useState({
    mode: false,
    building: {},
  });
  const [selectedBuilding, setSelectedBuilding] = useState({
    mode: false,
    building: {},
    position: [51.505, -0.09],
    map: null,
  });

  return (
    <Box className="buildings">
      <BuildingList
        clientId={client}
        setAddBuilding={setAddBuilding}
        addBuilding={addBuilding}
        setEditBuilding={setEditBuilding}
        editBuilding={editBuilding}
        setSelectedBuilding={setSelectedBuilding}
        selectedBuilding={selectedBuilding}
      />
      {addBuilding ? (
        <BuildingForm
          clientId={client}
          editBuilding={editBuilding}
          setAddBuilding={setAddBuilding}
          addBuilding={addBuilding}
          selectedBuilding={selectedBuilding}
          setSelectedBuilding={setSelectedBuilding}
        />
      ) : (
        <BuildingMap
          selectedBuilding={selectedBuilding}
          setSelectedBuilding={setSelectedBuilding}
        />
      )}
    </Box>
  );
};

export default Buildings;
