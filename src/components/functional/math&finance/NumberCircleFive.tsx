import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberCircleFive = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      clipPath="url(#number-circle-five_svg__a)"
    >
      <path
        strokeMiterlimit={10}
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 10.5h-5.025L13 16.525a3.5 3.5 0 1 1 0 4.95"
      />
    </g>
    <defs>
      <clipPath id="number-circle-five_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberCircleFive;
