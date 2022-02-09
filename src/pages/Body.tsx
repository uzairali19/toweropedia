import React from 'react';
import Buildings from '../components/Buildings';
import SelectComponent from '../components/Select';

const Body = () => {
  return (
    <div className="body-container">
      <SelectComponent />
      <Buildings />
    </div>
  );
};

export default Body;
