import React from 'react';
import Icon from '../elements/Icon';

import '../styles/components/Content.scss';

const Content = ({ children }) => (
  <>
    <div className="Content__header">
      <div className="Content__header-content">
        <Icon name="user" />
        Tomas Jonas
      </div>
    </div>
    <div className="Content">{children}</div>
  </>
);

export default Content;
