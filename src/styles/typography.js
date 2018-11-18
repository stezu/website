// TODO: https://ether.thescenery.co/typography/
// TODO: https://medium.com/@ethersystem/typography-in-design-systems-d61bf5d8a333

import { modularScale } from 'polished';

import cssLock from './cssLock';

const DESKTOP_STARTING_SIZE = 16;
const MOBILE_STARTING_SIZE = 14;
const NUMBER_OF_TYPE_SIZES = 5;
const FONT_SIZE_UNIT = 'px';

// Get the font size for the given heading level based on the max number of font sizes
function getFontSize(level, isMobile) {
  if (level > NUMBER_OF_TYPE_SIZES) {
    throw new Error(`level must be at most: ${NUMBER_OF_TYPE_SIZES}`);
  }

  const base = isMobile ? MOBILE_STARTING_SIZE : DESKTOP_STARTING_SIZE;
  const ratio = isMobile ? 'minorThird' : 'majorThird';

  return modularScale(NUMBER_OF_TYPE_SIZES - level, base, ratio).replace(
    'em',
    FONT_SIZE_UNIT
  );
}

// Get CSS-Lock compatible font styles so they progressively scale
// from the "mobile" value to the "desktop" value.
function getFluidFontSizeStyles(level) {
  const startSize = getFontSize(level, true);
  const endSize = getFontSize(level, false);

  return cssLock('fontSize', startSize, endSize);
}

const TYPOGRAPHY = {
  'Title 1': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 900,
    ...getFluidFontSizeStyles(1)
  },
  'Title 2': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 900,
    ...getFluidFontSizeStyles(2)
  },
  'Title 3': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 900,
    ...getFluidFontSizeStyles(3)
  },
  'Body 1': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    ...getFluidFontSizeStyles(4)
  },
  'Body 2': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    ...getFluidFontSizeStyles(5)
  }
};

/**
 * Return the typography styles matching the given name.
 *
 * @param {string} typeName
 * @return {object}
 */
export default function typography(typeName) {
  const chosenType = TYPOGRAPHY[typeName];

  if (!chosenType) {
    throw new Error(`${typeName} is not a valid type style`);
  }

  return chosenType;
}
