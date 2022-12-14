import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#play_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m28.512 15.15-17.987-11A1 1 0 0 0 9 5v22a1 1 0 0 0 1.525.85l17.987-11a.987.987 0 0 0 0-1.7v0Z"
      />
    </g>
    <defs>
      <clipPath id="play_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPlay;
