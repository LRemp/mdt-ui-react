import React from 'react';
import Icon from '../../elements/Icon';
import { format } from 'date-fns';

const IncidentReport = ({ id, title, author, activeUntil, ...rest }) => {
  return (
    <div className="IncidentReport" {...rest} key={id}>
      <span className="IncidentReport__title">{title}</span>
      <div className="IncidentReport__icon">
        <Icon name="flag" />
      </div><br />
      <span className="IncidentReport__details">
        Written by
        <span className="IncidentReport__offender"> {author}</span>.<br />
        Incident report valid until {format(activeUntil, 'dd/MM/yyyy HH:mm')}
      </span>
    </div>
  );
};

export default IncidentReport;
