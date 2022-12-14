import * as React from 'react';
import { SVGProps } from 'react';

const SvgCookie = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#cookie_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M28 15.925a11.952 11.952 0 0 1-3.525 8.563C19.862 29.1 12.312 29.15 7.637 24.6A12 12 0 0 1 16.075 4a1.013 1.013 0 0 1 .975 1.225A4.002 4.002 0 0 0 20.9 10.1a1 1 0 0 1 1 1 4.001 4.001 0 0 0 4.875 3.85 1.013 1.013 0 0 1 1.225.975v0Z"
      />
      <path
        fill="#101828"
        d="M19.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-8-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-1-7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6.5 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
    <defs>
      <clipPath id="cookie_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCookie;
