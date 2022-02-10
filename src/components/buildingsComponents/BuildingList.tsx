import React from 'react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from 'react-redux';

const BuildingList = ({
  clientId,
  setAddBuilding,
  addBuilding,
}: {
  clientId: number;
  setAddBuilding: any;
  addBuilding: boolean;
}) => {
  const clients = useSelector((state: any) => state.clientsReducer);
  const addHandler = () => {
    setAddBuilding(!addBuilding);
  };

  return (
    <Box className="list-box" sx={{ display: 'flex' }}>
      <Box
        className="list-content"
        sx={{ backgroundColor: 'text.secondary', color: 'text.primary' }}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            minHeight: 480,
            '& ul': { padding: 0 },
          }}
        >
          {clients
            .filter((client: any) => {
              if (client.id === clientId) {
                return client;
              }
            })
            .map((client: any) => {
              return client.buildings.map((building: any, index: number) => {
                return (
                  <ListItem
                    key={index}
                    disableGutters
                    secondaryAction={
                      <>
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                        <IconButton>
                          <DeleteForeverIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemButton>
                      <ListItemText primary={building.name} />
                    </ListItemButton>
                  </ListItem>
                );
              });
            })}
        </List>
        <Button
          sx={{
            color: 'text.primary',
            background: 'primary',
            width: '100%',
            height: '50px',
          }}
          variant="contained"
          onClick={addHandler}
        >
          Add Building
        </Button>
      </Box>
    </Box>
  );
};

export default BuildingList;
