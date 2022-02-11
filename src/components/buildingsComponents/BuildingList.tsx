import React, {useEffect, useRef} from 'react';
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
import usePrevious from '../customHooks/previousState';

const BuildingList = ({
  clientId,
  setAddBuilding,
  addBuilding,
  setEditBuilding,
  editBuilding,
}: {
  clientId: string;
  setAddBuilding: any;
  addBuilding: boolean;
  setEditBuilding: any;
  editBuilding: any;
}) => {
  const clients = useSelector((state: any) => state.clientsReducer);

  const prevEditBuilding:any = useRef();
  useEffect(()=>{
    prevEditBuilding.current = editBuilding;
  },[editBuilding])


  const dispatch = useDispatch();

  const addHandler = () => {
    setEditBuilding({mode: false, building: {}})
    setAddBuilding(!addBuilding);
  };

  const editHandler = (building: any) => {
      setEditBuilding({ mode: !editBuilding.mode, building: building });
      setAddBuilding(!addBuilding);
  };

  const deleteHandler = (building: any) => {
    dispatch(deleteBuilding(clientId, building._id));
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
                    <ListItemButton>
                      <ListItemText primary={building.name} />
                    </ListItemButton>
                  </ListItem>
                );
              });
            })}
        </List>

        {addBuilding ? <Button
          sx={{
            color: 'text.primary',
            background: 'primary',
            width: '100%',
            height: '50px',
          }}
          variant="contained"
          onClick={addHandler}
        >
          Show map
        </Button> : <Button
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
        </Button>}
        
      </Box>
    </Box>
  );
};

export default BuildingList;
