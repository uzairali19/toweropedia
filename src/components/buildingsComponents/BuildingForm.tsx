import React, { useState } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from '@mui/material';
import countriesList from '../../../server/data/countriesList.json';

const BuildingForm = () => {
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState({
    id: '',
    name: '',
    position: null,
  });
  const countryHandler = (e: any) => {
    setCountry(e.target.value);
  };

  const countryAddHandler = () => {
    countriesList.filter((value: any) => {
      if (value.id === country) {
        setCountryData({
          id: value.id,
          name: countryData.name,
          position: value.position,
        });
      }
    });
  };

  console.log(countryData);

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
                <MenuItem key={country.id} value={country.id}>
                  {country.name}
                </MenuItem>
              );
            })}
          </Select>
          <Button
            sx={{ backgroundColor: 'text.primary' }}
            variant="contained"
            onClick={countryAddHandler}
          >
            Create
          </Button>
          <Button sx={{ backgroundColor: 'text.danger' }} variant="contained">
            Cancel
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default BuildingForm;
