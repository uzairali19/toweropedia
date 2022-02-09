import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, FormControl, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';

const SelectComponent = () => {
  const [client, setClient] = useState('');
  const clients = useSelector((state: any) => state.clientsReducer);

  const handleChange = (event: SelectChangeEvent) => {
    setClient(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: '100px' }}>
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
              <MenuItem key={client.id} value={client.id}>
                {client.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
