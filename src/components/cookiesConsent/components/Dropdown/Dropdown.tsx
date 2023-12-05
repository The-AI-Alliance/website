import React from 'react';
import { DropdownProps } from './Dropdown.types';
import classNames from 'classnames';

import styles from './Dropdown.module.scss';

const Dropdown = ({ className, onClick, open }: DropdownProps) => {
  return (
    <div
      className={classNames(styles.dropdown, className, {
        [styles.open]: open,
      })}
    >
      <button onChange={() => onClick()}>
        <span />
      </button>
    </div>
  );
};

export default Dropdown;
