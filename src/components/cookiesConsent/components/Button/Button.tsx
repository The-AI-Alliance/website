import React from 'react';
import { ButtonProps } from './Button.types';
import classNames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ text, click, type, className }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={click}
      className={classNames(styles.button, className, {
        [styles.primary]: type === 'primary',
      })}
    >
      {text}
    </button>
  );
};

export default Button;
