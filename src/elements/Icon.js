import React from 'react';
import clsx from 'clsx';

const Icon = ({ className, name, ...rest }) => (
  <i
    className={clsx(
      'fas',
      `fa-${name}`,
      Object.keys(rest)
        .filter((key) => rest[key] === true)
        .map((attribute) => `fa-${attribute}`),
      className
    )}
  ></i>
);

export default Icon;
