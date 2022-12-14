import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextHTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#text-h-two_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 7v15m13-7.5H5M18 7v15m6.238-7.162A3 3 0 0 1 30 16a2.95 2.95 0 0 1-.512 1.675L24 25h6"
      />
    </g>
    <defs>
      <clipPath id="text-h-two_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTextHTwo;
