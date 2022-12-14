import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileDotted = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-dotted_svg__a)"
    >
      <path d="M9 28H7a1 1 0 0 1-1-1v-4m9-19h4l7 7v6M6 8V5a1 1 0 0 1 1-1h3" />
      <path d="M19 4v7h7m0 11v5a1 1 0 0 1-1 1h-1M6 13v5m8 10h5" />
    </g>
    <defs>
      <clipPath id="file-dotted_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileDotted;
