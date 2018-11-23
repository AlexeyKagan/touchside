import React from 'react';

import './button.scss';

function Button(props) {
  const { children, className, ...restProps } = props;

  const btnClassName = `button ${className}`;

  return (
    <button className={btnClassName} {...restProps}>
      { children }
    </button>
  );
}

export default Button;
