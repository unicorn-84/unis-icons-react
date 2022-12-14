import * as React from 'react';
import { SVGProps } from 'react';

const SvgTailwindCssIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="url(#tailwind-css-icon_svg__a)"
      d="M24 12c-5.333 0-8.667 2.667-10 8 2-2.667 4.333-3.667 7-3 1.521.38 2.609 1.484 3.813 2.706C26.773 21.696 29.043 24 34 24c5.333 0 8.667-2.667 10-8-2 2.667-4.333 3.667-7 3-1.522-.38-2.609-1.484-3.813-2.706C31.227 14.304 28.957 12 24 12ZM14 24c-5.333 0-8.667 2.667-10 8 2-2.667 4.333-3.667 7-3 1.521.38 2.609 1.484 3.813 2.706C16.773 33.696 19.043 36 24 36c5.333 0 8.667-2.667 10-8-2 2.667-4.333 3.667-7 3-1.521-.38-2.609-1.484-3.813-2.706C21.227 26.304 18.957 24 14 24Z"
    />
    <defs>
      <linearGradient
        id="tailwind-css-icon_svg__a"
        x1={2.889}
        x2={37.435}
        y1={19.68}
        y2={39.599}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2298BD" />
        <stop offset={1} stopColor="#0ED7B5" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgTailwindCssIcon;
