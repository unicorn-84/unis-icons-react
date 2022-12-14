import * as React from 'react';
import { SVGProps } from 'react';

const SvgFrameCorners = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#frame-corners_svg__a)"
    >
      <path d="M20 10h4v4m-12 8H8v-4" />
      <path d="M27 6H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z" />
    </g>
    <defs>
      <clipPath id="frame-corners_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFrameCorners;
