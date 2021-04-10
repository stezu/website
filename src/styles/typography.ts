/**
 * The Typography module implements the typographical styles for the entire
 * site. There's a type ramp which scales at a constant rate that varies between
 * mobile and desktop. Simply put, since mobile screen sizes are smaller, the
 * difference between the largest and smallest font sizes is smaller than it is
 * on desktop. The mobile font sizes are slightly smaller than desktop to
 * account for smaller screen sizes.
 *
 * In most sites, font sizes transition from one size to the next (based on
 * breakpoints) abruptly. Since that approach leaves the middle screen sizes
 * unattended (and feels jarring when resizing manually), this site actually
 * ramps between the mobile and desktop font sizes at a constant rate. The
 * result is a visually appealing scaling of the font sizes so every screen size
 * feels like it's using the correct font size.
 *
 * Resources: https://ether.thescenery.co/typography/
 * https://medium.com/@ethersystem/typography-in-design-systems-d61bf5d8a333
 */

import { CSSObject } from '@emotion/react';
import { modularScale } from 'polished';

import cssLock from './cssLock';

// The minimum font size in pixels for our two screen sizes.
const DESKTOP_STARTING_SIZE = 14;
const MOBILE_STARTING_SIZE = 12;
const FONT_SIZE_UNIT = 'px';

// Store some constants for things that don't change much between levels.
const FONT_FAMILY = '"Roboto", sans-serif';
const FONT_WEIGHT_BOLD = 900;
const FONT_WEIGHT_REGULAR = 400;

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
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_BOLD,
    ...getFluidFontSizeStyles(7),
  },
  'Title 2': {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_BOLD,
    ...getFluidFontSizeStyles(6),
  },
  'Title 3': {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_BOLD,
    ...getFluidFontSizeStyles(5),
  },
  'Title 4': {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_BOLD,
    ...getFluidFontSizeStyles(4),
  },
  'Title 5': {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_BOLD,
    ...getFluidFontSizeStyles(3),
  },
  'Title 6': {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_BOLD,
    ...getFluidFontSizeStyles(2),
  },
  'Body 1': {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_REGULAR,
    ...getFluidFontSizeStyles(1),
  },
  'Body 2': {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_REGULAR,
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
