import React, { useState } from 'react';
import { Box } from '@mui/material';
import BuildingList from './buildingsComponents/BuildingList';
import BuildingMap from './buildingsComponents/BuildingMap';
import BuildingForm from './buildingsComponents/BuildingForm';

const Buildings = ({ client }: { client: any }) => {
  const [addBuilding, setAddBuilding] = useState(false);
  return (
    <Box className="buildings">
      <BuildingList
        clientId={client}
        setAddBuilding={setAddBuilding}
        addBuilding={addBuilding}
      />
      {/* <BuildingMap /> */}
      <BuildingForm clientId={client} />
    </Box>
  );
};

export default Buildings;
