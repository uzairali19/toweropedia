import React, { useState } from 'react';
import Buildings from '../components/Buildings';
import SelectComponent from '../components/Select';

const Body = () => {
  const [client, setClient] = useState('');

  return (
    <div className="body-container">
      <div className="body-content">
        <SelectComponent client={client} setclient={setClient} />
        <Buildings client={client} />
      </div>
    </div>
  );
};

export default Body;
