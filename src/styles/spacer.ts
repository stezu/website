export interface Spacer {
  tiny: string;
  xSmall: string;
  small: string;
  medium: string;
  large: string;
  xLarge: string;
}

const AvailableSpacers: Spacer = {
  tiny: '2px',
  xSmall: '4px',
  small: '8px',
  medium: '16px',
  large: '32px',
  xLarge: '64px'
};

/**
 * Returns the spacer matching the given name.
 */
export default function spacer(spacerName: keyof Spacer) {
  return AvailableSpacers[spacerName];
}
