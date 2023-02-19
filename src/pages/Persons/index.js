import React, { useState, useEffect } from 'react';
import Icon from '../../elements/Icon';
import { getPersons } from '../../api/persons.js';
import Person from './Person';
import PersonCreate from './PersonCreate';
import PersonPage from './PersonPage';
import { useDebounce } from 'use-debounce';

import '../../styles/pages/Vehicles.scss';
import useAsync from '../../hooks/useAsync';
import useApi from '../../hooks/useApi';



const Persons = () => {

  const api = useApi();
  const [text, setText] = useState('');
  const [query] = useDebounce(text, 500);
  const { loading, result, run } = useAsync(true);
  const [persons, setPersons] = useState(null);
  const [activePerson, setActivePerson] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setCreating] = useState(false);


  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setPersons(result);
  }, [result]);

  useEffect(() => {
    if (query != null) {
      run(api(getPersons(query)));
    } else {
      setPersons(null);
    }
  }, [query]);

  const handlePersonClick = (person) => {
    setActivePerson(person);
  };

  const handleBack = () => {
    setActivePerson(null);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSave = () => {
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleCreate = () => {
    setCreating(true);
  };

  const handleCreateCancel = () => {
    setCreating(false);
  }

  const handleNotesSave = (text) => {
    activePerson.notes = text;
  }

  if(activePerson){
    return <PersonPage
      onBack={handleBack}
      onNotesSave={handleNotesSave}
      {...activePerson}
    />
  }

  if(isCreating){
    return <PersonCreate
      onBack={handleCreateCancel}
    />
  }

  return (
    <div className="Persons">
      <div className="Persons__title">
        You are viewing a Person list
      </div>
      <span className="Persons__search">
        <input
          type="text"
          className="Persons__search-input"
          placeholder="Person's name, surname, ID..."
          value={text}
          onChange={handleTextChange}
        />
        <Icon name="search" className="Persons__search-icon" />
      </span>
      <span className="Persons__buttons">
        <button className="Persons__button" onClick={handleCreate}>Add new person to DB</button>
      </span>
      {loading ? (
        <Icon name="sync fa-spin" />
      ) : !persons ? (
        <div className="Persons__placeholder">What are you looking for?</div>
      ) : (
        <div className="Persons__list">
          {persons.map((person) => (
              <Person
                key={person.id}
                onClick={() => handlePersonClick(person)}
                {...person}
              />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Persons;
