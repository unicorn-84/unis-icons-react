import * as React from 'react';
import { SVGProps } from 'react';

const SvgWaves = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#waves_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 9s5-4 11 0 11 0 11 0M5 16s5-4 11 0 11 0 11 0M5 23s5-4 11 0 11 0 11 0"
      />
    </g>
    <defs>
      <clipPath id="waves_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWaves;
