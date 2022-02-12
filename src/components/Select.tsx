import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, FormControl, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';

const SelectComponent = ({
  setclient,
  client,
}: {
  setclient: any;
  client: any;
}) => {
  const clients = useSelector((state: any) => state.clientsReducer);

  const handleChange = (e: SelectChangeEvent) => {
    setclient(e.target.value);
  };

  return (
    <FormControl className="selector" sx={{ m: 1, minWidth: '200px' }}>
      <InputLabel sx={{ color: 'text.primary' }}>Client</InputLabel>
      <Select
        id="demo-simple-select-autowidth"
        value={client}
        onChange={handleChange}
        autoWidth
        label="Client"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {clients.map((client: any) => {
          return (
            <MenuItem key={client._id} value={client._id}>
              {client.client_name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
