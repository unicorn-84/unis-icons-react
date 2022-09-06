import * as React from 'react';
import { SVGProps } from 'react';

const SvgNumberTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#number-two_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.475 7.662A6 6 0 0 1 22 10a5.926 5.926 0 0 1-1.025 3.35v0L10 28h12"
      />
    </g>
    <defs>
      <clipPath id="number-two_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNumberTwo;
