import { fluidRange } from 'polished';

import { MEDIUM_SCREEN, LARGE_SCREEN } from '@/constants';

interface Styles {
  [ruleOrSelector: string]: string | number | Styles;
}

// Get CSS-Lock compatible styles for a given property.
// See: https://css-tricks.com/between-the-lines/
export default function cssLock(
  prop: string,
  fromSize: string,
  toSize: string
): Styles {
  return fluidRange(
    {
      prop,
      fromSize,
      toSize,
    },
    MEDIUM_SCREEN,
    LARGE_SCREEN
  );
}
