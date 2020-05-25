const AvailableSpacers = {
  tiny: '2px',
  xSmall: '4px',
  small: '8px',
  medium: '16px',
  large: '32px',
  xLarge: '64px',
};

export type Spacer =
  | 'tiny'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge';

/**
 * Returns the spacer matching the given name.
 */
export default function spacer(spacerName: Spacer): string {
  return AvailableSpacers[spacerName];
}
