import React, { useState, useEffect } from 'react';
import Icon from '../../elements/Icon';
import { getArmoury } from '../../api/armoury';
import Event from './Event';

import '../../styles/pages/Vehicles.scss';
import useAsync from '../../hooks/useAsync';
import useApi from '../../hooks/useApi';



const Armoury = () => {

    const api = useApi();
    const { loading, result, run } = useAsync(true);
    const [armoury, setArmoury] = useState(null);
  
    useEffect(() => {
        setArmoury(result);
    }, [result]);

    useEffect(() => {
        run(api(getArmoury()));
    }, []);

  return (
    <div className="Armoury">
      <div className="Armoury__title">
        Armoury
      </div>
        {loading ? (
            <Icon name="sync fa-spin" />
        ) : !armoury ? (
            <div className="Armoury__placeholder">There's no recent events</div>
        ) :  (
            <div className="Armoury__Grid">
                <div className="Armoury__Grid__grid1">
                    <span className="Armoury__Grid__Title">Armoury logs</span>
                    <div className="Armoury__Grid__List">
                        {armoury.map((event) => (
                            <Event
                                key={event.id}
                                {...event}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )}

      </div>
  );
};

export default Armoury;
