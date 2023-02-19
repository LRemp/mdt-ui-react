import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '../../elements/Icon';
import { getActiveWarrants } from '../../api/warrants';
import useApiResult from '../../hooks/useApiResult';
import useApi from '../../hooks/useApi';
import useAsync from '../../hooks/useAsync';
import useEvent from '../../hooks/useEvent';
import { format } from 'date-fns';

const ActiveWarrants = () => {
  const api = useApi();
  let history = useHistory();
  const { loading, result, run } = useAsync(true);
  /*const { loading, result: activeWarrants = [] } = useApiResult(
    getActiveWarrants,
    []
  );*/

  useEvent("UpdateActiveWarrants", (data) => {
    //activeWarrants = data.warrants;
    run(api(getActiveWarrants()));
  })

  useEffect(() => {
    run(api(getActiveWarrants()));
  }, [])

  const openWarrant = (data) => {
    history.push('/warrants');
    var selectionFired = new CustomEvent('open-warrant', {
        detail: data
    });
    setTimeout(() => document.dispatchEvent(selectionFired), 200);
  }

  return (
    <div className="ActiveWarrants">
      {loading ? (
        <Icon name="sync fa-spin" big />
      ) : !result ? <i>No active warrants...</i> : (
        result.map((warrant) => (
          <div key={warrant.id} className="ActiveWarrants__item" onClick={() => openWarrant(warrant)}>
            <div className="ActiveWarrants__item-title">{warrant.offender}</div>
            <div className="ActiveWarrants__item-icons">
              <Icon name="grip-lines-vertical" />
              <Icon name="grip-lines-vertical" />
            </div>
            <span className="ActiveWarrants__item-summary">
              Warrant issued by{' '}
              <span className="ActiveWarrants__item-issuer">{warrant.author}</span>.
              <br />
              Warrant active until {format(warrant.activeUntil, 'dd/MM/yyyy HH:mm')}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default ActiveWarrants;
