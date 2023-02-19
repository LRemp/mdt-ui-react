import React, { useState } from 'react';
import Icon from '../elements/Icon';

import '../styles/components/Dropdown.scss';

const Dropdown = ({ placeholder, list, setValue }) => {
  
  const [selected, setSelected] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  const select = (item) => {
    setSelected(item);
    setIsHidden(true);
    setValue(item);
  }

  return(
    <>
      <div className="Dropdown" onClick={() => setIsHidden(!isHidden)}>
        <span className="Dropdown__placeholder">{selected === null ? placeholder : selected}</span>
        <Icon className="Dropdown__placeholder__arrow"name="chevron-down"/>
      </div>
      <div className="Dropdown__list" hidden={isHidden}>
          {list.map((item, index) => {
            return (
              <div className={`Dropdown__element ${selected === item ? "Dropdown__selected" : ""}`} onClick={() => select(item)}>
                {item}
              </div>
            )
          })}
        </div>
    </>
  )
};

export default Dropdown;
