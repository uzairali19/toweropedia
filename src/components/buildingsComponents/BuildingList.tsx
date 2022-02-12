import React, { useEffect, useRef, useState } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { deleteBuilding } from '../../redux/actions/clients';
import Loading from '../Loader';

const BuildingList = ({
  clientId,
  setAddBuilding,
  addBuilding,
  setEditBuilding,
  editBuilding,
  setSelectedBuilding,
  selectedBuilding,
}: {
  clientId: string;
  setAddBuilding: any;
  addBuilding: boolean;
  setEditBuilding: any;
  editBuilding: any;
  setSelectedBuilding: any;
  selectedBuilding: any;
}) => {
  const clients = useSelector((state: any) => state.clientsReducer);

  const [loading, setLoading] = useState(true);

  const prevEditBuilding: any = useRef();

  useEffect(() => {
    prevEditBuilding.current = editBuilding;
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [editBuilding]);

  const dispatch = useDispatch();

  const addHandler = () => {
    setSelectedBuilding({
      mode: false,
      building: {},
      position: [51.505, -0.09],
      map: selectedBuilding.map,
    });
    setEditBuilding({ mode: false, building: {} });
    setAddBuilding(!addBuilding);
  };

  const editHandler = (building: any) => {
    setSelectedBuilding({
      mode: false,
      building: {},
      position: [51.505, -0.09],
      map: selectedBuilding.map,
    });
    setEditBuilding({ mode: !editBuilding.mode, building: building });
    setAddBuilding(!addBuilding);
  };

  const deleteHandler = (building: any) => {
    dispatch(deleteBuilding(clientId, building._id));
    setSelectedBuilding({
      mode: false,
      building: {},
      position: [51.505, -0.09],
      map: selectedBuilding.map,
    });
  };

  const buildingHandler = (building: any) => {
    setSelectedBuilding({
      mode: true,
      building: building,
      position: building.position,
      map: selectedBuilding.map,
    });
    const map = selectedBuilding.map;
    map.flyTo(selectedBuilding.position, 6);
  };

  return (
    <Box className="list-box" sx={{ display: 'flex' }}>
      <Box
        className="list-content"
        sx={{ backgroundColor: 'text.secondary', color: 'text.primary' }}
      >
        {loading ? (
          <Loading />
        ) : (
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              minHeight: 480,
              maxHeight: 480,
              '& ul': { padding: 0 },
            }}
          >
            {clients
              .filter((client: any) => {
                if (client._id === clientId) {
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
                          <IconButton
                            onClick={(e) => {
                              e.preventDefault();
                              editHandler(building);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton>
                            <DeleteForeverIcon
                              onClick={(e) => {
                                e.preventDefault();
                                deleteHandler(building);
                              }}
                            />
                          </IconButton>
                        </>
                      }
                    >
                      <ListItemButton
                        onClick={(e) => {
                          e.preventDefault();
                          buildingHandler(building);
                        }}
                      >
                        <ListItemText primary={building.name} />
                      </ListItemButton>
                    </ListItem>
                  );
                });
              })}
          </List>
        )}
        {addBuilding ? (
          <Button
            sx={{
              color: 'text.alternate',
              background: 'secondary',
              width: '100%',
              height: '50px',
            }}
            variant="contained"
            onClick={addHandler}
          >
            Show map
          </Button>
        ) : (
          <Button
            sx={{
              color: 'text.alternate',
              background: 'secondary',
              width: '100%',
              height: '50px',
            }}
            variant="contained"
            onClick={addHandler}
          >
            Add Building
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default BuildingList;
