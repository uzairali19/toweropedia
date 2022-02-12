import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import countriesList from '../../../server/data/countriesList.json';
import { createBuilding, editingBuilding } from '../../redux/actions/clients';

const BuildingForm = ({
  clientId,
  editBuilding,
  setAddBuilding,
  addBuilding,
  selectedBuilding,
  setSelectedBuilding,
}: {
  clientId: string;
  editBuilding: any;
  setAddBuilding: any;
  addBuilding: boolean;
  selectedBuilding: any;
  setSelectedBuilding: any;
}) => {
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState({
    name: '',
  });

  useEffect(() => {
    if (editBuilding.mode) {
      setCountryData({ name: editBuilding.building.name });
      countriesList.forEach((country: any) => {
        if (editBuilding.building.position.join() == country.position.join()) {
          return setCountry(country.position);
        }
      });
    }
  }, [editBuilding]);

  const dispatch = useDispatch();

  const countryHandler = (e: any) => {
    setCountry(e.target.value);
  };

  const countryAddHandler = () => {
    const data = {
      name: countryData.name,
      position: country,
    };

    dispatch(createBuilding(clientId, data));
    setAddBuilding(!addBuilding);
    setSelectedBuilding({
      mode: true,
      building: {
        name: countryData.name,
      },
      position: country,
      map: selectedBuilding.map,
    });
    const map = selectedBuilding.map;
    map.flyTo(selectedBuilding.position, 6);
  };

  const countryEditHandler = () => {
    const data = {
      id: clientId,
      building_id: editBuilding.building._id,
      name: countryData.name,
      position: country,
    };

    dispatch(editingBuilding(clientId, editBuilding.building._id, data));
    setAddBuilding(!addBuilding);
    setSelectedBuilding({
      mode: true,
      building: {
        name: countryData.name,
      },
      position: country,
      map: selectedBuilding.map,
    });
    const map = selectedBuilding.map;
    map.flyTo(selectedBuilding.position, 6);
  };

  const cancelHandler = () => {
    setCountryData({ name: '' });
    setCountry('');
  };

  return (
    <div className="form-wrapper">
      <Box
        className="form-content"
        sx={{
          backgroundColor: 'text.secondary',
          height: '550px',
          width: '850px',
          borderRadius: '10px',
        }}
      >
        <TextField
          id="filled-basic"
          label="Building Name"
          variant="filled"
          sx={{ minWidth: '300px' }}
          value={countryData.name}
          onChange={(e: any) => {
            setCountryData({ ...countryData, name: e.target.value });
          }}
        />
        <FormControl sx={{ m: 1, minWidth: '300px', gap: '10px' }}>
          <InputLabel sx={{ color: 'text.primary' }}>Location</InputLabel>
          <Select
            id="demo-simple-select-autowidth"
            autoWidth
            label="Location"
            value={country}
            onChange={countryHandler}
          >
            {countriesList.map((country: any) => {
              return (
                <MenuItem key={country.id} value={country.position}>
                  {country.name}
                </MenuItem>
              );
            })}
          </Select>
          {editBuilding.mode ? (
            <Button
              sx={{ backgroundColor: 'text.primary' }}
              variant="contained"
              onClick={countryEditHandler}
            >
              Edit
            </Button>
          ) : (
            <Button
              sx={{ backgroundColor: 'text.primary' }}
              variant="contained"
              onClick={countryAddHandler}
            >
              Create
            </Button>
          )}

          <Button
            sx={{ backgroundColor: 'text.danger' }}
            variant="contained"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default BuildingForm;
