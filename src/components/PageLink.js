import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../elements/Icon';

import '../styles/components/PageLink.scss';

const PageLink = ({ icon, children, ...rest }) => (
  <NavLink className="PageLink" activeClassName="PageLink--active" {...rest}>
    <Icon name={icon} />
    <span className="PageLink__label">{children}</span>
  </NavLink>
);

export default PageLink;
