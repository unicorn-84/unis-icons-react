import * as React from 'react';
import { SVGProps } from 'react';

const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      stroke="#101828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#repeat_svg__a)"
    >
      <path d="m25 11 3-3-3-3" />
      <path d="M4 16a8.013 8.013 0 0 1 8-8h16M7 21l-3 3 3 3" />
      <path d="M28 16a8.012 8.012 0 0 1-8 8H4" />
    </g>
    <defs>
      <clipPath id="repeat_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRepeat;
