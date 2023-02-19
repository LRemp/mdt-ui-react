import React, { useContext, useState, useEffect } from 'react';
import { format } from 'date-fns';
import Collapsible from '../../components/Collapsible';
import DataContext from '../../providers/data';

const IncidentCreate = ({
  id,
  activeUntil,
  time,
  onSave,
  onBack,
}) => {
  const [title, setTitle] = useState("");
  const [suspect, setSuspect] = useState("");
  const [details, setDetails] = useState(null);
  const { officerData } = useContext(DataContext);

  const saveReport = () => {
    if(details === null){
      return
    }
    onSave({
      id: id,
      title: title,
      suspect: suspect,
      details: details
    })
  }

  return (
    <div className="IncidentCreate">
      <div onClick={onBack} className="ReportView__back">
        <i className="fas fa-arrow-circle-left"></i> Back
      </div>
      <div className="Reports__title">You are creating a new Incident Report</div>
      <br />
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
        onChange={(e) => setTitle(e.target.value)}
      />
      <span style={{ 'float': 'right' }}>
        <button className="Button" onClick={saveReport}>Save Incident Report</button>
      </span>


      <div className="IncidentCreate__grid">
        <div className="IncidentCreate__grid-time">
          <span className="IncidentCreate__label">Time</span>
          <br />
          <br />
          {format(time, 'dd/MM/yyyy, H:mm')}<br />
          <span style={{ 'font-size': '1.1vh' }}>Report will be valid for 7 days unless extended by Chief Commisioner</span>
        </div>
        <div className="IncidentCreate__grid-author">
          <span className="IncidentCreate__label">Reported By</span>
          <br />
          <br />
          {officerData.identity}
        </div>
        <div className="IncidentCreate__grid-accused">
          <span className="IncidentCreate__label">Possible Suspect</span>
          <br />
          <br />
          <input
            type="text"
            className="InputField"
            placeholder="Name and surname"
            onChange={(e) => setSuspect(e.target.value)}
          />
        </div>
        <div className="IncidentCreate__grid-id">
          <span className="IncidentCreate__label">Report ID</span>
          <br />
          <br />#{id}
        </div>
        <div className="IncidentCreate__grid-details">
          <span className="IncidentCreate__label">Report Details*</span>
          <br />
          <br />
          <textarea className="Textarea" defaultValue={''} onChange={(e) => setDetails(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default IncidentCreate;
