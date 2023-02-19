import React, { useState } from 'react';
import Icon from '../../elements/Icon';
import { format } from 'date-fns';
import { updateIncidentReport } from '../../api/incidents'; 

import useApi from '../../hooks/useApi';

const IncidentEdit = ({ 
  id,
  title,
  suspect,
  author,
  details,
  activeUntil,
  time,
  onSave,
  onBack,
  ...rest
}) => {

  const api = useApi();
  const [newSuspect, setNewSuspect] = useState(suspect);
  const [newDetails, setNewDetails] = useState(details);
  const [newTitle, setNewTitle] = useState(title);

  const saveChanges = async () => {
    const reportChanges = {
      id,
      title: newTitle,
      suspect: newSuspect,
      details: newDetails
    }
    await api(updateIncidentReport(reportChanges))
    onSave(reportChanges)
  }

  return (
    <div className="IncidentView">
      <div onClick={onBack} className="BackButton">
        <Icon name="arrow-circle-left"/> Back
      </div>
      <br/>
      <div className="IncidentView__title">You are editing an Incident Report</div>
      <br />
      <div>
        <div
          className="IncidentCreate__required-fields"
          style={{ 'font-size': '1.2vh', color: 'darkred' }}
        >
          * required fields
        </div>

        <input
          type="text"
          className="InputField"
          placeholder="Incident Report Title*"
          defaultValue={title}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <span style={{ 'float': 'right' }}>
          <button className="Button" onClick={saveChanges}>Save Changes</button>
        </span>

        
      </div>
      <div className="IncidentView__grid">
        <div className="IncidentView__grid-time">
          <span className="IncidentView__label">Time</span>
          <br />
          <br />
          {format(time, 'dd/MM/yyyy, HH:mm')}
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
          <input
            type="text"
            className="InputField"
            placeholder="Name and surname"
            onChange={(e) => setNewSuspect(e.target.value)}
            value={newSuspect}
          />
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
          <textarea className="Textarea" defaultValue={details} onChange={(e) => setNewDetails(e.target.value)} />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default IncidentEdit;