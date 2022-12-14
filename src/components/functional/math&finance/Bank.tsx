import * as React from 'react';
import { SVGProps } from 'react';

const SvgBank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#bank_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12h26L16 4 3 12Zm4 0v10m6-10v10m6-10v10m6-10v10M4 22h24M2 26h28"
      />
    </g>
    <defs>
      <clipPath id="bank_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBank;
