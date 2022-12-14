import * as React from 'react';
import { SVGProps } from 'react';

const SvgHeadset = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#headset_svg__a)"
    >
      <path d="M28.188 16h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-7Zm0 0a11.999 11.999 0 0 0-12.1-12A12 12 0 0 0 4 16v7a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4" />
      <path d="M28.188 23v3a4 4 0 0 1-4 4H17" />
    </g>
    <defs>
      <clipPath id="headset_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHeadset;
