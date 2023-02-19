import React from 'react';
import Icon from '../elements/Icon';
import { format } from 'date-fns';

import '../styles/components/EditHistory.scss';

const Content = ({ data }) => (
    <div className="EditHistory">
        <div className="EditHistory__title">Edit History</div>
        { !data.length ? (
            <div className="EditHistory__placeholder">
                No edits were made...
            </div>
        ) : (
        <>
            {data.map(({ editedBy, time }) => (
            <div className="EditHistory__item">
                Edited by <span className="font-weight-bold">{editedBy}</span>{' '}
                at{' '}
                <span className="font-weight-bold">
                {format(time, 'dd/MM/yyyy, H:mm')}
                </span>
            </div>
            ))}
        </>
        )}
    </div>
);

export default Content;
