import React from 'react';
import Icon from '../../elements/Icon';

const VehicleInfo = ({ 
    id, 
    modelName, 
    manufacturer,
    owner, 
    numberplate, 
    color, 
    vehicleClass, 
    state, 
    onBack, 
    ...rest 
}) => {
  return (
    <div className="VehicleInfo" {...rest}>
        <div onClick={onBack} className="VehicleInfo__back">
            <Icon name="arrow-circle-left" /> Back
        </div>
        <br />
        <div className="WarrantView__title">You are viewing a Vehicle</div>
        <br />
        <span className="VehicleInfo__title">{manufacturer} {modelName}</span>
        {" "}
        <span className="VehicleInfo__warning tooltip" hidden={state !== "STOLEN"}>
            <Icon name="exclamation-triangle" />
            <span className="tooltiptext">Vehicle has been reported stolen!</span>
        </span>
        <span className="VehicleInfo___buttonsContainer">
            <button className="VehicleInfo__button">Report as stolen</button>
            <button className="VehicleInfo__button">Vehicle has been returned!</button>
        </span>
        
        <div className="VehicleInfo__grid">
            <span className="VehicleInfo__grid__icon">
                <Icon name="car" />
            </span>

            <div className="VehicleInfo__grid__1">
                <span className="VehicleInfo__grid__title">Manufacturer</span>
                <br /><br />{manufacturer}<br /><br />
                <span className="VehicleInfo__grid__title">Vehicle Class</span>
                <br /><br />{vehicleClass}<br /><br />
                <span className="VehicleInfo__grid__title">COLOUR</span>
                <br /><br />{color}<br /><br />
            </div>
            <div className="VehicleInfo__grid__2">
                <span className="VehicleInfo__grid__title">Owner</span>
                <br /><br />{owner}<br /><br />
                <span className="VehicleInfo__grid__title">Licence Plate</span>
                <br /><br />{numberplate}<br /><br />
            </div>
            <div className="VehicleInfo__grid__3">
                
            </div>
            <div className="VehicleInfo__grid__4">
                
            </div>
        </div>
    </div>
  );
};

export default VehicleInfo;