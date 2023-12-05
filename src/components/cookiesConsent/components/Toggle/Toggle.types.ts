import { CookieTypes } from '../../helpers/Types';
export interface ToggleProps {
  className?: string;
  onToggle: (cookie: CookieTypes, agreement: boolean) => void;
  checked: boolean;
  cookie: CookieTypes;
}
