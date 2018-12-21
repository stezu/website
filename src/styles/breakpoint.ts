import { MEDIUM_SCREEN, LARGE_SCREEN } from '@/constants';

export interface Breakpoint {
  medium: string;
  large: string;
}

const AvailableBreakpoints: Breakpoint = {
  medium: `@media (min-width: ${MEDIUM_SCREEN})`,
  large: `@media (min-width: ${LARGE_SCREEN})`
};

/**
 * Returns the breakpoint matching the given name.
 */
export default function breakpoint(breakpointName: keyof Breakpoint): string {
  return AvailableBreakpoints[breakpointName];
}
