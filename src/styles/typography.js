// TODO: https://medium.com/@ethersystem/typography-in-design-systems-d61bf5d8a333
import { modularScale, stripUnit } from 'polished';

import { breakpoint } from '@/styles';

const DESKTOP_STARTING_SIZE = 1.6;
const MOBILE_STARTING_SIZE = 1.7;
const NUMBER_OF_TYPE_SIZES = 5;
const FONT_SIZE_UNIT = 'ex';

// Get the font size for the given heading level based on the max number of font sizes
function getFontSize(level, isMobile) {
  if (level > NUMBER_OF_TYPE_SIZES) {
    throw new Error(`level must be at most: ${NUMBER_OF_TYPE_SIZES}`);
  }

  const base = isMobile ? MOBILE_STARTING_SIZE : DESKTOP_STARTING_SIZE;
  const ratio = isMobile ? 'minorThird' : 'majorThird';

  return modularScale(NUMBER_OF_TYPE_SIZES - level, base, ratio).replace('em', FONT_SIZE_UNIT);
}

// Get CSS-Lock compatible font styles.
// See: https://css-tricks.com/between-the-lines/
function getFluidFontSizeStyles(level) {
  const startSize = getFontSize(level, true);
  const endSize = getFontSize(level, false);
  // TODO: fix slope so it scales properly
  // TODO: https://ether.thescenery.co/typography/
  // TODO: use https://github.com/styled-components/polished/blob/version-2/src/helpers/modularScale.js
  // TODO: use https://github.com/styled-components/polished/blob/version-2/src/mixins/fluidRange.js
  // TODO: use https://github.com/styled-components/polished/blob/version-2/src/mixins/between.js
  // TODO: replace 450 and 900 with media query constants used by the breakpoint module
  // const slope = (stripUnit(endSize) - stripUnit(startSize)) / (900 - 450);
  // const base = stripUnit(startSize) - slope * 450;

  return {
    fontSize: startSize,
    // [breakpoint('medium')]: {
    //   fontSize: `calc(${base}${FONT_SIZE_UNIT} + ${100 * slope}vw)`
    // },
    [breakpoint('large')]: {
      fontSize: endSize
    }
  };
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
