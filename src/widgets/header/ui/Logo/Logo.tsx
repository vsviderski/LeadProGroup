import { LogoIcon } from './LogoIcon';
import { LogoText } from './LogoText';

export const APP_NAME = 'Lead Pro';

export function Logo() {
  return (
    <span className="flex shrink-0 items-center gap-3" aria-label={APP_NAME} role="img">
      <LogoIcon size={22} />
      <LogoText height={12} />
    </span>
  );
}
