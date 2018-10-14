import { MEDIUM_SCREEN, LARGE_SCREEN } from '@/constants';

const BREAKPOINTS = {
  medium: `@media (min-width: ${MEDIUM_SCREEN})`,
  large: `@media (min-width: ${LARGE_SCREEN})`
};

/**
 * Return the breakpoint matching the given name.
 *
 * @param {string} breakpointName
 * @return {string}
 */
export default function breakpoint(breakpointName) {
  const chosenBreakpoint = BREAKPOINTS[breakpointName];

  if (!chosenBreakpoint) {
    throw new Error(`${breakpointName} is not a valid breakpoint`);
  }

  return chosenBreakpoint;
}
