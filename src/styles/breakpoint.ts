import { MEDIUM_SCREEN, LARGE_SCREEN } from '@/constants';

const AvailableBreakpoints = {
  medium: `@media (min-width: ${MEDIUM_SCREEN})`,
  large: `@media (min-width: ${LARGE_SCREEN})`,
};

export type Breakpoint = 'medium' | 'large';

/**
 * Returns the breakpoint matching the given name.
 */
export default function breakpoint(breakpointName: Breakpoint): string {
  return AvailableBreakpoints[breakpointName];
}
