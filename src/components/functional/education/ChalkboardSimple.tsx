import * as React from 'react';
import { SVGProps } from 'react';

const SvgChalkboardSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#chalkboard-simple_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 21V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v14M2 25h28m-15 0v-4h8v4"
      />
    </g>
    <defs>
      <clipPath id="chalkboard-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgChalkboardSimple;
