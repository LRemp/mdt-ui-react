import React, { useState, useEffect } from 'react';
import Icon from '../../elements/Icon';
import { getVehicles } from '../../api/vehicles';
import Vehicle from './Vehicle';
import VehicleInfo from './VehicleInfo';
import { useDebounce } from 'use-debounce';

import '../../styles/pages/Vehicles.scss';
import useAsync from '../../hooks/useAsync';
import useApi from '../../hooks/useApi';



const Vehicles = () => {

  const api = useApi();
  const [text, setText] = useState('');
  const [query] = useDebounce(text, 500);
  const { loading, result, run } = useAsync(true);
  const [vehicles, setVehicles] = useState(null);
  const [activeVehicle, setActiveVehicle] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setVehicles(result);
  }, [result]);

  useEffect(() => {
    if (query != null) {
      run(api(getVehicles(query)));
    } else {
      setVehicles(null);
    }
  }, [query]);

  const handleVehicleClick = (vehicle) => {
    setActiveVehicle(vehicle);
  };

  const handleBack = () => {
    setActiveVehicle(null);
  };

  if(activeVehicle){
    return <VehicleInfo
      onBack={handleBack}
      {...activeVehicle}
    />
  }

  return (
    <div className="Vehicles">
      <div className="Vehicles__title">
        You are viewing a Vehicle list
      </div>
      <div className="Reports__search">
        <input
          type="text"
          className="Reports__search-input"
          placeholder="Vehicle Make, Color, Licence Plate..."
          value={text}
          onChange={handleTextChange}
        />
        <Icon name="search" className="Reports__search-icon" />
      </div>
      {loading ? (
        <Icon name="sync fa-spin" />
      ) : !vehicles ? (
        <div className="Vehicles__placeholder">What are you looking for?</div>
      ) : (
        <div className="Vehicles__list">
          {vehicles.map((vehicle) => (
              <Vehicle
                key={vehicle.id}
                onClick={() => handleVehicleClick(vehicle)}
                {...vehicle}
              />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Vehicles;
