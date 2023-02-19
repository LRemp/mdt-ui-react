import { useState, useCallback } from 'react';
import useEvent from '../../hooks/useEvent';
import context from './context';

const Provider = ({ children }) => {
  const [data, setData] = useState({
    chargeCategories: [
      {
        uid: 0,
        name: 'Offenses against other people',
        charges: [
          {
            id: 0,
            name: 'Driving under influence',
            fine: 2000,
            duration: 7200,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            id: 1,
            name: 'Reckless driving',
            fine: 1750,
            duration: 3600,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            id: 2,
            name: 'Speeding over 40km/h',
            fine: 2500,
            duration: 0,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
        ],
      },
      {
        uid: 1,
        name: 'Offenses involving a theft',
        charges: [
          {
            id: 3,
            name: 'Bank robbery',
            fine: 50000,
            duration: 72000,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            id: 4,
            name: 'House robbery',
            fine: 5000,
            duration: 3600,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            id: 5,
            name: 'Rape + theft',
            fine: 0,
            duration: 100000,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
        ],
      },
    ],
    officerData: {
      identity: "Anonymous",
    },
    status: "TRUE",
    meta: {
      incidents: {
        duration: 10080000
      },
      warrants: {
        duration: 10080000
      }
    }
  });
  const handleInitEvent = useCallback((initData) => {
    setData(initData);
  }, []);

  useEvent('init', handleInitEvent);

  return <context.Provider value={data}>{children}</context.Provider>;
};

export default Provider;
