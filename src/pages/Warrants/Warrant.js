import React from 'react';
import Icon from '../../elements/Icon';
import { format } from 'date-fns';

const Warrant = ({ id, offender, author, activeUntil, ...rest }) => {
  return (
    <div className="Warrant" {...rest}>
      <span className="Warrant__offender">{offender}</span>
      <div className="Warrant__icon">
        <Icon name="grip-lines-vertical" />
        <Icon name="grip-lines-vertical" />
      </div><br />
      <span className="Warrant__details">
        Warrant issued by
        <span className="Warrant__offender"> {author}</span>.<br />
        Warrant active untill {format(activeUntil, 'dd/MM/yyyy H:mm')}
      </span>
    </div>
  );
};

export default Warrant;
