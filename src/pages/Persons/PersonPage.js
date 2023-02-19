import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Icon from '../../elements/Icon';
import Fingerprint from '../../img/fingerprint.png';
import Mugshot from '../../img/mugshot.png';
import { saveNotes } from '../../api/persons';
import useApi from '../../hooks/useApi';

const PersonPage = ({ 
    id,
    identifier,
    identity,
    dob,
    gender,
    stateid,
    fingerprint,
    mugshot,
    notes,
    wanted,
    onBack,
    onNotesSave,
    ...rest
}) => {
  const api = useApi();
  let history = useHistory();
  const [newNotes, setNewNotes] = useState(notes);

  const createReport = () => {
    history.push('/reports');
    
    var selectionFired = new CustomEvent('start-creating-report', {
        detail: { 
            id,
            identifier,
            identity,
            dob,
            gender,
            stateid,
        }
    });
    setTimeout(() => document.dispatchEvent(selectionFired), 200);
  }

  const createWarrant = () => {
    history.push('/warrants');
    var selectionFired = new CustomEvent('start-creating-warrant', {
        detail: { 
            stateid,
            identity,
        }
    });
    setTimeout(() => document.dispatchEvent(selectionFired), 200);
  }

  const handleSaveNotes = () => {
    api(saveNotes({ id, notes: newNotes }))
    onNotesSave(newNotes);
  }

  return (
    <div className="PersonPage">
        <div onClick={onBack} className="BackButton">
            <Icon name="arrow-circle-left"/> Back
        </div>
        <br/>
        <div className="PersonPage__title">You are viewing a Person's Profile</div>
        <br/>
        <span className="PersonPage__header">{identity}</span>

        <span className="PersonPage__warning tooltip" hidden={!wanted}>
            <Icon name="exclamation-triangle" />
            <span className="tooltiptext">Person has active warrant!</span>
        </span>
        <div className="PersonPage__buttons">
            <button className="Button" onClick={createReport}>New Report</button>
            <button className="Button" onClick={createWarrant}>New Warrant</button>
            <button className="Button">Edit Profile</button>
        </div>
        <div className="PersonPage__grid">
            <span className="PersonCreate__grid__icon">
                <Icon name="user" />
            </span>

            <div className="PersonPage__grid__1">
                <span className="PersonPage__grid__title">DOB</span><br/><br/>
                {dob}<br/><br/>
                <span className="PersonPage__grid__title">Sex</span><br/><br/>
                {gender}<br/><br/>
                <span className="PersonPage__grid__title">ID</span><br/><br/>
                {stateid}<br/><br/>
            </div>
            <div className="PersonPage__grid__2">
                <span className="PersonPage__grid__title">Fingerprint</span><br/><br/>
                {fingerprint !== null ? <>
                    <img class="PersonPage__fingerprint" src={Fingerprint} /><br/>
                    <span style={{'font-size': '1.1vh', 'font-weight': 'bolder'}}>{fingerprint}</span>
                </> : <i style={{'font-size': '1.1vh'}}>No fingerprint...</i>}
                
            </div>
            <div className="PersonPage__grid__3">
                <span className="PersonPage__grid__title">Mugshot</span><br/><br/>
            
                <img class="Person__mugshot" src={Mugshot} />
                
                
            </div>
            <div className="PersonPage__grid__4">
                <textarea className="PersonPage__grid__notes" defaultValue={notes} onChange={(e) => setNewNotes(e.target.value)}></textarea><br/>
                <button className="Button" onClick={handleSaveNotes}>Save</button>
            </div>
        </div>
    </div>
  );
};

export default PersonPage;