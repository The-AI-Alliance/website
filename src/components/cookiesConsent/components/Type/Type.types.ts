import { CookieTypes } from '../../helpers/Types';
export interface TypeProps {
  cookie?: CookieTypes;
  className?: string;
  onToggle: (cookie: CookieTypes, agreement: boolean) => void;
  necessaryCookiesText?: string;
  alwaysOnText?: string;
}
