import * as React from 'react';
import { SVGProps } from 'react';

const SvgBathtub = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bathtub_svg__a)"
    >
      <path d="M9 24v3m14-3v3M7 13V6.5a2.5 2.5 0 1 1 5 0M25 12h-8v6h8v-6Z" />
      <path d="M25 13h4a1 1 0 0 1 1 1v4a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-4a1 1 0 0 1 1-1h14" />
    </g>
    <defs>
      <clipPath id="bathtub_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBathtub;
