import React, { useState } from 'react';
import Buildings from '../components/Buildings';
import SelectComponent from '../components/Select';
import { motion } from 'framer-motion';

const Body = () => {
  const [client, setClient] = useState('');

  return (
    <div className="body-container">
      <div className="body-content">
        {client ? (
          <motion.div
            animate={{
              y: client !== '' ? -10 : 0,
              opacity: client !== '' ? 1 : 0.5,
            }}
            initial={client}
            transition={{
              duration: 1,
              stiffness: 10000,
            }}
          >
            <SelectComponent client={client} setclient={setClient} />
          </motion.div>
        ) : (
          <motion.div
            animate={{
              y: client ? 0 : -100,
            }}
            initial={client}
            transition={{
              duration: 1,
              stiffness: 10000,
            }}
          >
            <SelectComponent client={client} setclient={setClient} />
          </motion.div>
        )}

        {client !== '' ? (
          <motion.div
            style={{ opacity: 0 }}
            animate={{
              y: -50,
              opacity: 1,
            }}
            initial={client}
            transition={{ duration: 2 }}
          >
            <Buildings client={client} />
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default Body;
