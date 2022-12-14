import * as React from 'react';
import { SVGProps } from 'react';

const SvgRug = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rug_svg__a)"
    >
      <path d="M25 6H7v20h18V6ZM7 6V3m6 3V3m12 3V3M7 29v-3m6 3v-3m6-20V3m0 26v-3m6 3v-3" />
      <path d="m16 11-3 5 3 5 3-5-3-5Z" />
    </g>
    <defs>
      <clipPath id="rug_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRug;
