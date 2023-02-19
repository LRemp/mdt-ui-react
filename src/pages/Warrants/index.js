import React, { useState, useEffect, useContext } from 'react';
import { useDebounce } from 'use-debounce';
import Icon from '../../elements/Icon';
import { getWarrants, createWarrant, deleteWarrant } from '../../api/warrants';
import { getReports, createReport } from '../../api/reports';
import { getNewEventId } from '../../api/misc';
import DataContext from '../../providers/data';

import '../../styles/styles.scss';
import useAsync from '../../hooks/useAsync';
import useApi from '../../hooks/useApi';
import Warrant from './Warrant';
import WarrantView from './WarrantView';
import WarrantCreate from './WarrantCreate';

const Warrants = () => {
  const api = useApi();
  const { meta, officerData } = useContext(DataContext);
  const [text, setText] = useState('');
  const [query] = useDebounce(text, 500);
  const { loading, result, run } = useAsync(true);
  const [Warrants, setWarrants] = useState(null);
  const [activeWarrant, setActiveWarrant] = useState(null);
  const [isCreating, setIsCreating] = useState(false);


  useEffect(() => {
    document.addEventListener('start-creating-warrant', async function(e){
      const data = e.detail;
      const newID = await api(getNewEventId("warrants"));
      const reports = await api(getReports());
      const time = Date.now();
      setIsCreating({
        id: newID,
        time: time,
        activeUntil: time + meta.warrants.duration,
        offender: data.identity,
        author: officerData.identity,
        reports: reports || [],
        stateid: data.stateid,
      })
    })    

    document.addEventListener('open-warrant', async function(e){
      const data = e.detail;
      setActiveWarrant(data);
    })
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setWarrants(result);
  }, [result]);

  useEffect(() => {
    if (query != null) {
      run(api(getWarrants(query)));
    } else {
      setWarrants(null);
    }
  }, [query]);

  const handleWarrantClick = (warrant) => {
    setActiveWarrant(warrant);
  };

  const handleBack = () => {
    setActiveWarrant(null);
  };

  const handleCreateRequest = async (data) => {
    await api(createWarrant(data));
    setIsCreating(false);
    setActiveWarrant({...data})
    setTimeout(() => {
      setWarrants(null);
      run(api(getWarrants(query)));
    }, 500)
  };

  const handleCreateCancel = () => {
    setIsCreating(false);
  };

  const handleDelete = async () => {
    const warrantId = activeWarrant.id;
    setActiveWarrant(null);
    await api(deleteWarrant({
      id: warrantId
    }))
    setWarrants(null);
    run(api(getWarrants(query)));
  }

  if(isCreating) {
    return (
      <WarrantCreate onBack={handleCreateCancel} onSave={handleCreateRequest} {...isCreating} />
    )
  }

  if (activeWarrant) {

    return (
      <WarrantView onBack={handleBack} onDelete={handleDelete} {...activeWarrant} />
    );
  }

  return (
    <div className="Warrants">
      <div className="Warrants__title">You are viewing a Warrants list</div>
      <div className="Warrants__search">
        <input
          type="text"
          className="Warrants__search-input"
          placeholder="Warrant ID, Person's name, Report ID..."
          value={text}
          onChange={handleTextChange}
        />
        <Icon name="search" className="Warrants__search-icon" />
      </div>

      {loading ? (
        <Icon name="sync fa-spin" />
      ) : !Warrants ? (
        <div className="Warrants__placeholder">What are you looking for?</div>
      ) : (
        <div className="Warrants__list">
          {Warrants.map((warrant) => (
            <Warrant
              key={warrant.id}
              onClick={() => handleWarrantClick(warrant)}
              {...warrant}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Warrants;
