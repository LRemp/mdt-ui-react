import React, { useContext, useEffect, useState } from 'react';
import ActiveWarrants from './ActiveWarants';
import Bulletin from './Bulletin';
import DataContext from '../../providers/data';

import '../../styles/pages/Home.scss';

const Home = () => {

  const { state } = useContext(DataContext);
  console.log(state);
  useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <div className="Home">
      <span>{state}</span>
      <div className="Home__title">
        Hello there, officer! What would you like to do? :)
      </div>
      <div className="Home__content">
        <div className="Home__column">
          <div className="Home__header">ACTIVE WARRANTS</div>
          <ActiveWarrants />
        </div>
        <div className="Home__column">
          <div className="Home__header">BULLETIN</div>
          <Bulletin />
        </div>
      </div>
    </div>
  );
};

export default Home;
