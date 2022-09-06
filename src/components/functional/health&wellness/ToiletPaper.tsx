import * as React from 'react';
import { SVGProps } from 'react';

const SvgToiletPaper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#toilet-paper_svg__a)">
      <path fill="#101828" d="M8 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 25c2.761 0 5-4.477 5-10S10.761 5 8 5 3 9.477 3 15s2.239 10 5 10Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 15v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V15c0-5.525-2.238-10-5-10H8m5 10h3m4 0h2m4 0h3"
      />
    </g>
    <defs>
      <clipPath id="toilet-paper_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgToiletPaper;
