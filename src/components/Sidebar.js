import React from 'react';
import clsx from 'clsx';

import '../styles/components/Sidebar.scss';

const Sidebar = ({ className, children, ...rest }) => (
  <div className={clsx('Sidebar', className)} {...rest}>
    <div className="Sidebar__content">{children}</div>
  </div>
);

export default Sidebar;
