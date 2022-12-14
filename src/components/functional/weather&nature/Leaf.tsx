import * as React from 'react';
import { SVGProps } from 'react';

const SvgLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#leaf_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12 5 27m3-3C2 14 10 4 27 5c1 17-9 25-19 19Z"
      />
    </g>
    <defs>
      <clipPath id="leaf_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLeaf;
