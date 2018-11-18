import { injectGlobal } from 'react-emotion';
import { normalize } from 'polished';

import { color, typography } from '@/styles';

export default function globalStyles() {
  // Normalize.css
  injectGlobal`
    ${normalize()};
  `;

  // Styles: Border Box
  injectGlobal`
    * {
      -webkit-font-smoothing: subpixel-antialiased;
      box-sizing: border-box;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
  `;

  // Body Styles
  injectGlobal`
    html,
    body,
    #___gatsby {
      ${typography('Body 1')};

      background: ${color('gunmetal')};
      height: 100%;
    }
  `;
}
