import React from 'react';
import { format } from 'date-fns';
import Icon from '../../elements/Icon';

const Event = ({ id, identity, identifier, itemName, itemId, timestamp, type, ...rest }) => {
  return (
    <div className="Event" {...rest}>
        <span className={"Event__Icon", type === "TAKEOUT" ? "Event__Takeout" : "Event__Return"}><Icon name={type === "TAKEOUT" ? "arrow-alt-circle-up" : "arrow-alt-circle-down"} /></span>
        <span> {identity} has {type === "TAKEOUT" ? "taken" : "returned"} {itemName} {itemId != null ? `(ser.no. ${itemId})` : "" } at {format(timestamp, 'd/M/yyyy, H:mm')}</span>
    </div>
  );
};

export default Event;
