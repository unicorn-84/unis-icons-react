import * as React from 'react';
import { SVGProps } from 'react';

const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#coffee_svg__a)"
    >
      <path d="M11 3v4m4-4v4m4-4v4M4 27h22m-15.588 0A11 11 0 0 1 4 17v-6h22v6a11 11 0 0 1-6.413 10" />
      <path d="M26 11a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-.425" />
    </g>
    <defs>
      <clipPath id="coffee_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCoffee;
