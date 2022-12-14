import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlaylist = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#playlist_svg__a)"
    >
      <path d="M5 8h22M5 16h15M5 24h9m8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M25 24V14l5 1.5" />
    </g>
    <defs>
      <clipPath id="playlist_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPlaylist;
