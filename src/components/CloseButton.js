import React from 'react';
import clsx from 'clsx';
import Icon from '../elements/Icon';

import '../styles/components/CloseButton.scss';

const CloseButton = ({ className, ...rest }) => {
  const handleClick = () => {
    alert('TODO: CLOSE_WINDOW EVENT');
  };

  return (
    <div
      className={clsx('CloseButton', className)}
      onClick={handleClick}
      {...rest}
    >
      <Icon name="times-circle" />
    </div>
  );
};

export default CloseButton;
