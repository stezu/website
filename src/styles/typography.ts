// TODO: https://ether.thescenery.co/typography/
// TODO: https://medium.com/@ethersystem/typography-in-design-systems-d61bf5d8a333

import { CSSObject } from '@emotion/core';
import { modularScale } from 'polished';

import cssLock from './cssLock';

const DESKTOP_STARTING_SIZE = 14;
const MOBILE_STARTING_SIZE = 12;
const FONT_SIZE_UNIT = 'px';

// Get the font size for the given heading level based on the max number of font sizes
function getFontSize(level: number, isMobile: boolean) {
  const base = isMobile ? MOBILE_STARTING_SIZE : DESKTOP_STARTING_SIZE;
  const ratio = isMobile ? 'majorSecond' : 'minorThird';

  return modularScale(level, base, ratio) + FONT_SIZE_UNIT;
}

// Get CSS-Lock compatible font styles so they progressively scale
// from the "mobile" value to the "desktop" value.
function getFluidFontSizeStyles(level: number) {
  const startSize = getFontSize(level, true);
  const endSize = getFontSize(level, false);

  return cssLock('fontSize', startSize, endSize);
}

const AvailableTypography = {
  'Title 1': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 900,
    ...getFluidFontSizeStyles(7),
  },
  'Title 2': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 900,
    ...getFluidFontSizeStyles(6),
  },
  'Title 3': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 900,
    ...getFluidFontSizeStyles(5),
  },
  'Title 4': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 900,
    ...getFluidFontSizeStyles(4),
  },
  'Title 5': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 900,
    ...getFluidFontSizeStyles(3),
  },
  'Title 6': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 900,
    ...getFluidFontSizeStyles(2),
  },
  'Body 1': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    ...getFluidFontSizeStyles(1),
  },
  'Body 2': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    ...getFluidFontSizeStyles(0),
  },
};

export type Typography =
  | 'Title 1'
  | 'Title 2'
  | 'Title 3'
  | 'Title 4'
  | 'Title 5'
  | 'Title 6'
  | 'Body 1'
  | 'Body 2';

/**
 * Return the typography styles matching the given name.
 */
export default function typography(typeName: Typography): CSSObject {
  return AvailableTypography[typeName];
}
