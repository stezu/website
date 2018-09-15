const BREAKPOINTS = {
  medium: '@media (min-width: 450px)',
  large: '@media (min-width: 900px)'
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
