export interface Color {
  fadedBlack: string;
  gunmetal: string;
  jellybean: string;
  roastCoffee: string;
  salmon: string;
  seashell: string;
  white: string;
}

const AvailableColors: Color = {
  fadedBlack: '#71777b',
  gunmetal: '#26323C',
  jellybean: '#D1614D',
  roastCoffee: '#704544',
  salmon: '#F98B68',
  seashell: '#FFF4EA',
  white: '#FFFFFF'
};

/**
 * Returns the color matching the given name.
 */
export default function color(colorName: keyof Color): string {
  return AvailableColors[colorName];
}
