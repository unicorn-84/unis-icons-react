import * as React from 'react';
import { SVGProps } from 'react';

const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shuffle_svg__a)"
    >
      <path d="M4 9h2.888a8 8 0 0 1 6.5 3.35l5.225 7.3a8 8 0 0 0 6.5 3.35H29M26 6l3 3-3 3" />
      <path d="m26 20 3 3-3 3m-7.538-13.437.15-.213a8 8 0 0 1 6.5-3.35H29M4 23h2.888a8 8 0 0 0 6.5-3.35l.15-.212" />
    </g>
    <defs>
      <clipPath id="shuffle_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgShuffle;
