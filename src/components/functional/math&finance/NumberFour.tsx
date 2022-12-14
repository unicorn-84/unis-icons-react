import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberFour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#number-four_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15.5 3-6 17h12m0-8v16"
      />
    </g>
    <defs>
      <clipPath id="number-four_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberFour;
