const AvailableColors = {
  fadedBlack: '#71777b',
  gunmetal: '#26323C',
  jellybean: '#D1614D',
  roastCoffee: '#704544',
  salmon: '#F98B68',
  seashell: '#FFF4EA',
  white: '#FFFFFF',
};

export type Color =
  | 'fadedBlack'
  | 'gunmetal'
  | 'jellybean'
  | 'roastCoffee'
  | 'salmon'
  | 'seashell'
  | 'white';

/**
 * Returns the color matching the given name.
 */
export default function color(colorName: Color): string {
  return AvailableColors[colorName];
}
