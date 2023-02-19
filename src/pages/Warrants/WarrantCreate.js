import React, { useState } from 'react';
import Icon from '../../elements/Icon';
import Collapsible from '../../components/Collapsible';
import { format } from 'date-fns';

const WarrantCreate = ({ 
    id,
    stateid,
    offender,
    author,
    details,
    activeUntil,
    time,
    reports,
    onBack,
    onSave,
    ...rest
}) => {

  const [newDetails, setNewDetails] = useState(details);
  const [selectedReports, setSelectedReports] = useState([]);

  const saveWarrant = () => {
    onSave({
        id,
        stateid,
        offender,
        author,
        time,
        activeUntil,
        details: newDetails,
        reports: selectedReports,
    })
  }

  const selectReport = (report) => {
    if(!selectedReports.find(x => x == report)){
        setSelectedReports([ ...selectedReports, report]);
    }
  }

  const removeSelectedReport = (report) => {
    setSelectedReports(selectedReports.filter(x => x != report));
  }

  return (
    <div className="WarrantCreate">
        <div onClick={onBack} className="BackButton">
            <Icon name="arrow-circle-left"/> Back
        </div>
        <br/>
        <div className="WarrantCreate__title">You are viewing a New Warrant</div>
        <br/>
        <span style={{ "font-size": "1.2vh", "color": "darkred" }}>*required fields</span><br/>
        <span className="WarrantCreate__header">Create New Warrant</span>
        <div className="PersonPage__buttons">
            <button className="Button" onClick={saveWarrant}>Send Warrant</button>
        </div>
        <div className="WarrantCreate__grid">
            <div className="WarrantCreate__grid-time">
                <span className="WarrantCreate__label">Time</span>
                <br />
                <br />
                {format(time, 'dd/MM/yyyy, HH:mm')}<br />
                Valid until {format(activeUntil, 'dd/MM/yyyy, HH:mm')}
            </div>
            <div className="WarrantCreate__grid-author">
                <span className="WarrantCreate__label">Author</span>
                <br />
                <br />
                {author}
            </div>
            <div className="WarrantCreate__grid-accused">
                <span className="WarrantCreate__label">Accused</span>
                <br />
                <br />
                {offender}
            </div>
            <div className="WarrantCreate__grid-id">
                <span className="WarrantCreate__label">Report ID</span>
                <br />
                <br />#{id}
            </div>
            <div className="WarrantCreate__grid-details">
                <span className="WarrantCreate__label">Warrant Details*</span>
                <br />
                <br />
                <textarea className="ReportEdit__textarea" defaultValue={details} onChange={(e) => setNewDetails(e.target.value)} />
                <br />
            </div>
            <div className="WarrantCreate__grid-select-reports">
                <Collapsible title="Attach Report(s)*">
                    <div style={{ padding: '1vh' }}>
                        <div style={{ 'margin-top': '0.5vh', 'margin-bottom': '0.5vh' }}>
                            <input
                                className="ReportEdit__input"
                                placeholder="Search for report"
                            />{' '}
                            <button
                                className="ReportEdit__edit-button"
                                style={{ float: 'none' }}
                            >
                            Search
                            </button>
                        </div>
                        {reports ? reports.map((report) => (
                            <div className="WarrantCreate__report">
                                {report.title || <i>No title...</i>}<br />
                                Accused - {report.offender}<br />
                                #{id}
                                <div onClick={() => selectReport(report)} style={{ 'position': 'absolute', 'right': '1vh', 'bottom': '1vh', 'font-size': '2vh' }}>
                                    <Icon name="plus" />
                                </div>
                            </div>
                        )) : <i>No reports...</i>}
                    </div>
                </Collapsible>
            </div>

            <div className="WarrantCreate__grid-reports">
                <span className="WarrantCreate__label">Selected Report(s)</span>
                <br />
                <br />
                { !selectedReports || selectedReports.length == 0 ? <span><i>No selected reports...</i></span> 
                    : 
                    <div>
                        {selectedReports.map((report) => (
                            <div className="WarrantCreate__report">
                                {report.title || <i>No title...</i>}<br />
                                Accused - {report.offender}<br />
                                #{report.id}
                                <div onClick={() => removeSelectedReport(report)} style={{ 'position': 'absolute', 'right': '1vh', 'bottom': '1vh', 'font-size': '2vh' }}>
                                    <Icon name="minus" />
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    </div>
  );
};

export default WarrantCreate;