import React, { useState } from 'react';
import Icon from '../../elements/Icon';
import { registerPerson } from '../../api/persons.js';
import useApi from '../../hooks/useApi';
import Dropdown from '../../components/Dropdown';

const PersonCreate = ({ 
    onBack
}) => {

  const api = useApi();
  const [stateid, setStateid] = useState(null);
  const [identity, setIdentity] = useState(null);
  const [dob, setDob] = useState(null);
  const [mugshot, setMugshot] = useState(null);
  const [gender, setGender] = useState(null);
  const [fingerprints, setFingerprints] = useState(null);

  const handleCreateProfile = () =>{
      if(identity === null){
        return;
      }

      if(dob === null){
        return;
      }

      if(gender === null){
        return;
      }

      if(stateid === null){
        return;
      }

      api(registerPerson({
        stateid: stateid,
        identity: identity,
        dob: dob,
        mugshot: mugshot,
        gender: gender,
        fingerprints: fingerprints
      }));
      onBack();
  }

  return (
    <div className="PersonCreate">
        <div onClick={onBack} className="PersonCreate__back">
            <Icon name="arrow-circle-left"/> Back
        </div>
        <br />
        <div className="PersonCreate__title">You are adding new Person to the Database</div>
        <br />
        <span style={{ 'font-size': '1.2vh', 'color': "darkred" }}>*required fields</span>
        <br />
        <span className="PersonCreate__header">Add new Person</span>
        <span className="PersonCreate__buttons">
            <button className="PersonCreate__button" onClick={handleCreateProfile}>Save the Profile</button>
        </span>

        <div className="PersonCreate__grid">
            <span className="PersonCreate__grid__icon">
                <Icon name="user" />
            </span>

            <div className="PersonCreate__grid__1">
                <span className="PersonCreate__grid__title">Person's Name</span>
                <br />
                <br />
                <input
                    type="text"
                    className="InputField"
                    placeholder="Person's name and surname*"
                    onChange={(e) => setIdentity(e.target.value)}
                />
                <br />
                <br />
                <span className="PersonCreate__grid__title">DOB</span>
                <br />
                <br />
                <input
                    type="text"
                    className="InputField"
                    placeholder="Date of birth (dd/mm/yyyy)*"
                    onChange={(e) => setDob(e.target.value)}
                />
                <br />
                <br />
                <span className="PersonCreate__grid__title">Sex</span>
                <br />
                <br />
                <Dropdown
                    placeholder="GENDER*"
                    list = {[ "MALE", "FEMALE", "OTHER" ]}
                    setValue={setGender}
                />
                <br />
                <span className="PersonCreate__grid__title">ID</span>
                <br />
                <br />
                <input
                    type="text"
                    className="InputField"
                    placeholder="Person's ID number*"
                    onChange={(e) => setStateid(e.target.value)}
                />
                <br />
                <br />
            </div>
            <div className="PersonCreate__grid__2">
                <span className="PersonCreate__grid__title">Fingerprints</span><br/><br/>

                <button className="PersonCreate__button">Take Fingerprints**</button><br/><br/>
                <span style={{'font-size': '1.2vh'}}>**Only if person is being processed in PD for appropriate crimes!</span>
            
                {/*
                    <img class="PersonCreate__mugshot"/><br/>
                    <span style={{ "font-size": "1.1vh", "font-weight": "bolder"}}>34-B3890-DOVER-X1Q</span>
                */}

            </div>
            <div className="PersonCreate__grid__3">
                <span className="PersonCreate__grid__title">Mugshot</span><br/><br/>   
                <input type="text" className="InputField" placeholder=".../image.png" onChange={(e) => setMugshot(e.target.value)}></input>
            </div>
        </div>
    </div>
  );
};

export default PersonCreate;