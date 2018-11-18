const COLORS = {
  fadedBlack: '#71777b',
  gunmetal: '#26323C',
  jellybean: '#D1614D',
  roastCoffee: '#704544',
  salmon: '#F98B68',
  seashell: '#FFF4EA',
  white: '#FFFFFF'
};

/**
 * Return the color matching the given name.
 *
 * @param {string} colorName
 * @return {string}
 */
export default function color(colorName) {
  const chosenColor = COLORS[colorName];

  if (!chosenColor) {
    throw new Error(`${colorName} is not a valid color`);
  }

  return chosenColor;
}
