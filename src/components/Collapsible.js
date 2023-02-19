import { useState, useRef } from 'react';
import { classnames } from '../helpers/classnames';

import '../styles/components/Collapsible.scss';

const Collapsible = ({ title, className, children, ...rest }) => {
  const ref = useRef();
  const [maxHeight, setMaxHeight] = useState(0);

  const handleClick = (e) => {
    if (maxHeight) {
      setMaxHeight(0);
    } else {
      setMaxHeight(ref.current.scrollHeight);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={classnames(
          'Collapsible',
          !!maxHeight && 'Collapsible--active',
          'Collapsible__label'
        )}
        {...rest}
      >
        {title}
      </div>
      <div ref={ref} className="Collapsible__container" style={{ maxHeight }}>
        {children}
      </div>
    </>
  );
};

export default Collapsible;
