import * as React from 'react';
import { SVGProps } from 'react';

const SvgFilePpt = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-ppt_svg__a)"
    >
      <path d="M6 25h2a2 2 0 1 0 0-4H6v6m8-2h2a2 2 0 0 0 0-4h-2v6m12-6h-4.5m2.25 6v-6M6 16V5a1 1 0 0 1 1-1h12l7 7v5" />
      <path d="M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-ppt_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFilePpt;
