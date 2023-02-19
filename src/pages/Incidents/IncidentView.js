import React from 'react';
import Icon from '../../elements/Icon';
import { format } from 'date-fns';
import EditHistory from '../../components/EditHistory';

const IncidentView = ({ 
    id,
    title,
    suspect,
    author,
    details,
    activeUntil,
    time,
    editHistory,
    onBack,
    onEdit,
    onDelete,
    ...rest
}) => {

  return (
    <div className="IncidentView">
        <div onClick={onBack} className="BackButton">
            <Icon name="arrow-circle-left"/> Back
        </div>
        <br/>
        <div className="IncidentView__title">You are viewing an Incident Report</div>
        <br/>
        <div>
            <span className="IncidentView__header">{title}</span>
            <span style={{ 'float': 'right' }}>
                <button className="Button">Export to Report</button>
                <button className="Button" onClick={onEdit}>Edit Report</button>
                <button className="Button" onClick={onDelete}>Delete</button>
            </span>
        </div>
        <div className="IncidentView__grid">
            <div className="IncidentView__grid-time">
                <span className="IncidentView__label">Time</span>
                <br />
                <br />
                {format(time, 'dd/MM/yyyy, HH:mm')}
                {/*<br /><br />
                <span className="IncidentView__label">Valid Until</span>
                <br /><br />
                {format(activeUntil, 'dd/MM/yyyy, HH:mm')}*/}
            </div>
            <div className="IncidentView__grid-author">
            <span className="IncidentView__label">Reported By</span>
            <br />
            <br />
            {author}
            </div>
            <div className="IncidentView__grid-accused">
            <span className="IncidentView__label">Possible Suspect</span>
            <br />
            <br />
            {suspect}
            </div>
            <div className="IncidentView__grid-id">
            <span className="IncidentView__label">Report ID</span>
            <br />
            <br />#{id}
            </div>
            <div className="IncidentView__grid-details">
            <span className="IncidentView__label">Report Details</span>
            <br />
            <br />
            {details || <i>No Warrant details...</i>}
            <br />
            <br />
            </div>
        </div>
        <EditHistory data={editHistory}/>
    </div>
  );
};

export default IncidentView;