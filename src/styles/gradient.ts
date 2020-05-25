import { color } from '@/styles';

const GRADIENT = `linear-gradient(${color('salmon')}, ${color('jellybean')})`;
const SOLID_DARK = color('gunmetal');
const SOLID_LIGHT = color('white');
const LIGHT_TEXT = color('seashell');
const DARK_TEXT = color('gunmetal');

interface GradientValues {
  background: string;
  foreground: string;
  text: string;
}

const AvailableGradients = {
  dark: {
    background: GRADIENT,
    foreground: SOLID_DARK,
    text: LIGHT_TEXT,
  },
  display: {
    background: SOLID_DARK,
    foreground: GRADIENT,
    text: LIGHT_TEXT,
  },
  light: {
    background: GRADIENT,
    foreground: SOLID_LIGHT,
    text: DARK_TEXT,
  },
};

export type Gradient = 'dark' | 'display' | 'light';

/**
 * Returns the gradient matching the given name.
 */
export default function gradient(gradientName: Gradient): GradientValues {
  return AvailableGradients[gradientName];
}
