import React, { useState, useEffect, useContext } from 'react';
import { useDebounce } from 'use-debounce';
import Icon from '../../elements/Icon';
import DataContext from '../../providers/data';
import { getIncidentReports, createIncidentReport, deleteIncidentReport } from '../../api/incidents';
import { getNewEventId } from '../../api/misc';

import '../../styles/styles.scss';
import useAsync from '../../hooks/useAsync';
import useApi from '../../hooks/useApi';
import Report from './Report';
import IncidentView from './IncidentView';
import IncidentCreate from './IncidentCreate';
import IncidentEdit from './IncidentEdit';

const IncidentReports = () => {
  const api = useApi();
  const [text, setText] = useState('');
  const [query] = useDebounce(text, 500);
  const { loading, result, run } = useAsync(true);
  const [reports, setReports] = useState(null);
  const [activeReport, setActiveReport] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log('registering event')
    /*document.addEventListener('start-creating-warrant', async function(e){
      const data = e.detail;
      const newWarrantData = await api(createWarrant(data));
      console.log(newWarrantData);
      setIsCreating(true);
      setActiveWarrant(null);
      setActiveWarrant(newWarrantData);

      setTimeout(() => {
        setIncidents(null);
        run(api(getIncidents(query)));
      }, 500)
    })    

    document.addEventListener('open-warrant', async function(e){
      const data = e.detail;
      setActiveWarrant(data);
    })*/
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setReports(result);
  }, [result]);

  useEffect(() => {
    if (query != null) {
      run(api(getIncidentReports(query)));
    } else {
      setReports(null);
    }
  }, [query]);

  const handleIndicentClick = (report) => {
    setActiveReport(report);
  };

  const handleBack = () => {
    setActiveReport(null);
    setIsCreating(false);
  };

  const handleCreateRequest = async (data) => {
    const newReport = await api(createIncidentReport(data));
    setActiveReport({...newReport});
    setIsCreating(null);
  }

  const handleCreate = async () => {
    const id = await api(getNewEventId("incidentreports"));
    console.log(id);
    const time = Date.now();
    
    setIsCreating({
      time: time,
      id: id,
    });
  };

  const handleCreateCancel = () => {
    setActiveReport(null);
    setIsCreating(false);
  }

  const handleEditSave = (data) => {
    const editedReport = {
      ...activeReport,
      ...data
    }
    setActiveReport(editedReport);
    setIsEditing(false);
    setTimeout(() => {
      setReports(null);
      run(api(getIncidentReports(query)));
    }, 500)
  };

  const handleEdit = (data) => {
    setActiveReport(activeReport);
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    const reportId = activeReport.id;
    setActiveReport(null);
    await api(deleteIncidentReport({
      id: reportId
    }))
    setReports(null);
    run(api(getIncidentReports(query)));
  }

  if(isEditing){
    return (
      <IncidentEdit onBack={handleEditCancel} onSave={handleEditSave} {...activeReport} />
    )
  }

  if(isCreating) {
    return (
      <IncidentCreate onBack={handleCreateCancel} onSave={handleCreateRequest} {...isCreating} />
    )
  }

  if (activeReport) { 
    return (
      <IncidentView onBack={handleBack} onDelete={handleDelete} onEdit={handleEdit} {...activeReport} />
    );
  }

  return (
    <div className="Incidents">
      <div className="Incidents__title">You are viewing an Incident Report list</div>
      <span className="Incidents__search">
        <input
          type="text"
          className="Incidents__search-input"
          placeholder="Search incident reports..."
          value={text}
          onChange={handleTextChange}
        />
        <Icon name="search" className="Incidents__search-icon" />
      </span>
      <span className="Incidents__buttons">
          <button className="Button" onClick={handleCreate}>Create new incident report</button>
      </span>

      {loading ? (
        <Icon name="sync fa-spin" />
      ) : !reports ? (
        <div className="Incidents__placeholder">What are you looking for?</div>
      ) : (
        <div className="Incidents__list">
          {reports.map((report) => (
            <Report
              key={report.id}
              onClick={() => handleIndicentClick(report)}
              {...report}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IncidentReports;
