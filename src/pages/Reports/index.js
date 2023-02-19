import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import Icon from '../../elements/Icon';
import { getReports, createReport, deleteReport } from '../../api/reports';

import '../../styles/styles.scss';
import useAsync from '../../hooks/useAsync';
import useApi from '../../hooks/useApi';
//import useEvent from '../../hooks/useEvent';
import Report from './Report';
import ReportView from './ReportView';
import ReportEdit from './ReportEdit';
import ReportCreate from './ReportCreate';
import { getNewEventId } from '../../api/misc';

const Reports = () => {
  const api = useApi();
  const [text, setText] = useState('');
  const [query] = useDebounce(text, 500);
  const { loading, result, run } = useAsync(true);
  const [reports, setReports] = useState(null);
  const [activeReport, setActiveReport] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setReports(result);
  }, [result]);

  /*useEvent('start-creating-report', (e) => {
    console.log('got this event')
    console.log(e);
  })*/

  useEffect(() => {
    const handler = async (e) => {
      const data = e.detail;
      const newID = await api(getNewEventId("reports"));
      setIsEditing(false);
      setIsCreating({
        id: newID,
        time: Date.now(),
        offender: data.identity,
        stateid: data.stateid,
      })
    }

    document.addEventListener('start-creating-report', handler)
    
    return () => {
      document.removeEventListener('start-creating-report', handler);
    };
  }, []);

  useEffect(() => {
    if (query != null) {
      run(api(getReports(query)));
    } else {
      setReports(null);
    }
  }, [query]);

  const handleReportClick = (report) => {
    setActiveReport(report);
  };

  const handleBack = () => {
    setActiveReport(null);
    setIsEditing(false);
    setIsCreating(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSave = (data) => {
    const newObj = {...activeReport}
    setActiveReport(null);
    setIsEditing(false);
    newObj.charges = data.charges;
    newObj.details = data.details;
    newObj.notes = data.notes;
    newObj.outcome = data.outcome;
    setActiveReport(newObj)
    setTimeout(() => {
      setReports(null);
      run(api(getReports(query)));
    }, 500)
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleCreation = () => {

  }

  const handleDelete = async () => {
    const reportId = activeReport.id;
    setActiveReport(null);
    await api(deleteReport({
      id: reportId
    }))
    setReports(null);
    run(api(getReports(query)));
  }
  
  const handleCreateRequest = async (data) => {
    console.log(data);
    const report = await api(createReport(data));
    setIsCreating(null);
    setActiveReport(
      {...report}
    )
    run(api(getReports(query)));
  }

  const handleCreateCancel = () => {
    setIsCreating(null);
  }

  if (isCreating) {
    return (
      <ReportCreate
        onSave={handleCreateRequest}
        onEditCancel={handleCreateCancel}
        {...isCreating}
      />
    );
  }

  if (activeReport) {

    if (isEditing) {
      return (
        <ReportEdit
          onSave={handleEditSave}
          onEditCancel={handleEditCancel}
          {...activeReport}
        />
      );
    }
    return (
      <ReportView onBack={handleBack} onDelete={handleDelete} onEdit={handleEdit} {...activeReport} />
    );
  }

  return (
    <div className="Reports">
      <div className="Reports__title">You are viewing a Report list</div>
      <div className="Reports__search">
        <input
          type="text"
          className="Reports__search-input"
          placeholder="Report title, Person's name, ID, charges..."
          value={text}
          onChange={handleTextChange}
        />
        <Icon name="search" className="Reports__search-icon" />
      </div>

      {loading ? (
        <Icon name="sync fa-spin" />
      ) : !reports ? (
        <div className="Reports__placeholder">What are you looking for?</div>
      ) : (
        <div className="Reports__list">
          {reports.map((report) => (
            <Report
              key={report.id}
              onClick={() => handleReportClick(report)}
              {...report}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reports;
