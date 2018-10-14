import { fluidRange } from 'polished';

import { MEDIUM_SCREEN, LARGE_SCREEN } from '@/constants';

// Get CSS-Lock compatible styles for a given property.
// See: https://css-tricks.com/between-the-lines/
export default function cssLock(prop, fromSize, toSize) {
  return fluidRange({
    prop,
    fromSize,
    toSize
  }, MEDIUM_SCREEN, LARGE_SCREEN);
}
