import * as React from 'react';
import { SVGProps } from 'react';

const SvgScreencast = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#screencast_svg__a)"
    >
      <path d="M4 12V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-9M4 24a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
      <path d="M4 16a10 10 0 0 1 10 10" />
    </g>
    <defs>
      <clipPath id="screencast_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgScreencast;
