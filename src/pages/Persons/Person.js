import React from 'react';
import Icon from '../../elements/Icon';

const Person = ({ id, identifier, identity, dob, gender, stateid, wanted, ...rest }) => {
  return (
    <div className={`Person ${wanted && "Person__wanted"}`} {...rest}>
        <span className="Person__identity">{identity}</span><br/>
        <span className="Person__dob">DOB {dob}</span><br/>
        <span className="Person__gender"><Icon name={gender === "MALE" ? "mars" : "venus"} /> {gender}</span><br/>
        <span className="Person__stateid">ID {stateid}</span><br/>
        <span className="Person__status">{wanted ? <Icon name={"exclamation-triangle"} /> : <Icon name={"user"} />}</span>
    </div>
  );
};

export default Person;
