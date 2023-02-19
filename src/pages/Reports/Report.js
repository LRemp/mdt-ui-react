import React from 'react';
import { format } from 'date-fns';

const Report = ({ title, id, time, offender, author, ...rest }) => {
  return (
    <div className="Report" {...rest} key={id}>
      <span className="Report__title">
        {title ? title : <i>No title...</i>}{' '}
        <span className="Report__date">{format(time, 'dd/MM/yyyy, HH:mm')}</span>
      </span>
      <div className="Report__details">
        #{id} | <span className="font-weight-bold">{offender}</span> accused by{' '}
        <span className="font-weight-bold">{author}</span>
      </div>
    </div>
  );
};

export default Report;
