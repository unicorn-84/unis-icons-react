import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextStrikethrough = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#text-strikethrough_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 16h22M9.537 12a3.162 3.162 0 0 1-.15-1c0-2.762 2.75-5 6.613-5 2.975 0 5.288 1.325 6.188 3.188M9 21c0 2.762 3.137 5 7 5s7-2.238 7-5c0-2.975-2.7-4.125-5.7-5"
      />
    </g>
    <defs>
      <clipPath id="text-strikethrough_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTextStrikethrough;
