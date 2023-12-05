import { ToggleProps } from './Toggle.types';
import classNames from 'classnames';

import styles from './Toggle.module.scss';

const Toggle = ({ className, onToggle, checked, cookie }: ToggleProps) => {
  return (
    <div
      className={classNames(styles.toggle, className, {
        [styles.checked]: checked,
      })}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <input
        id={cookie}
        type="checkbox"
        checked={checked || false}
        onChange={e => onToggle(cookie, e.target.checked)}
      />
      <label data-on="On" data-off="Off" htmlFor={cookie} />
    </div>
  );
};

export default Toggle;
