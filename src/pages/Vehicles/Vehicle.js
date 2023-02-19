import React from 'react';
import Icon from '../../elements/Icon';

const Vehicle = ({ id, modelName, numberplate, color, state, ...rest }) => {
  return (
    <div className={`Vehicle ${state === "STOLEN" ? "Vehicle__Stolen" : ""}`} {...rest}>
        <span className="Vehicle__model">{modelName}</span><br/>
        <span className="Vehicle__numberplate">{numberplate}</span><br/>
        <span className="Vehicle__color">{color}</span><br/>
        <span className="Vehicle__status"><Icon name={state === "STOLEN" ? "exclamation-triangle" : "car"} /></span>
    </div>
  );
};

export default Vehicle;
