import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlame = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flame_svg__a)"
    >
      <path d="M26 18C26 9 16 3 16 3S6 9 6 18a10 10 0 0 0 20 0Z" />
      <path d="M11 23a5 5 0 1 0 10 0c0-5-5-8-5-8s-5 3-5 8Z" />
    </g>
    <defs>
      <clipPath id="flame_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFlame;
