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

  return (
    <Box className="buildings">
      <BuildingList
        clientId={client}
        setAddBuilding={setAddBuilding}
        addBuilding={addBuilding}
        setEditBuilding={setEditBuilding}
        editBuilding={editBuilding}
      />
      {addBuilding ? (
        <BuildingForm clientId={client} editBuilding={editBuilding} />
      ) : (
        <BuildingMap />
      )}
    </Box>
  );
};

export default Buildings;
