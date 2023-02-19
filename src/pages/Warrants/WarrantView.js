import React from 'react';
import Icon from '../../elements/Icon';
import { format } from 'date-fns';
import Mugshot from '../../img/mugshot.png';

const WarrantView = ({ 
    id,
    offender,
    author,
    details,
    activeUntil,
    time,
    reports,
    onBack,
    onDelete,
    ...rest
}) => {

  return (
    <div className="WarrantView">
        <div onClick={onBack} className="BackButton">
            <Icon name="arrow-circle-left"/> Back
        </div>
        <br/>
        <div className="WarrantView__title">You are viewing a Warrant</div>
        <br/>
        <span className="WarrantView__header">Warrant</span>
        <span style={{ 'float': 'right' }}>
            <button onClick={onDelete} className="Button">Delete</button>
        </span>
        <div className="WarrantView__grid">
            <div className="WarrantView__grid-time">
                <span className="WarrantView__label">Time</span>
                <br />
                <br />
                {format(time, 'dd/MM/yyyy, HH:mm')},<br />
                Valid until {format(activeUntil, 'dd/MM/yyyy, HH:mm')}
            </div>
            <div className="WarrantView__grid-author">
            <span className="WarrantView__label">Author</span>
            <br />
            <br />
            {author}
            </div>
            <div className="WarrantView__grid-accused">
            <span className="WarrantView__label">Accused</span>
            <br />
            <br />
            {offender}
            </div>
            <div className="WarrantView__grid-id">
            <span className="WarrantView__label">Report ID</span>
            <br />
            <br />#{id}
            </div>
            <div className="WarrantView__grid-details">
            <span className="WarrantView__label">Warrant Details</span>
            <br />
            <br />
            {details || <i>No Warrant details...</i>}
            <br />
            <br />
            </div>
            <div className="WarrantView__grid-charges">
            <span className="WarrantView__label">Selected Report(s)</span>
            <br />
            <br />
            { !reports || reports.length === 0 ? <span><i>No selected reports...</i></span> 
                : 
                <div>
                    {reports.map(({ id, title, offender }) => (
                        <div className="WarrantView__report">
                            {title}<br />
                            Accused - {offender}<br />
                            #{id}
                        </div>
                    ))}
                </div>}
            </div>
            <img class="WarrantView__mugshot" src={Mugshot} />
        </div>
    </div>
  );
};

export default WarrantView;