import React from 'react';
import clsx from 'clsx';

import '../styles/elements/Button.scss';

const Button = ({ className, children, ...rest }) => (
  <button className={clsx('Button', className)} {...rest}>
    {children}
  </button>
);

export default Button;
