import * as React from 'react';
import { SVGProps } from 'react';

const SvgFire = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fire_svg__a)"
    >
      <path d="M22.425 18.5A6.526 6.526 0 0 1 17 23.925" />
      <path d="M9 8.175c-1.925 2.9-3.5 6.225-3.5 9.325a10.5 10.5 0 1 0 21 0C26.5 11 22 6 18.35 2.363L14 11.5 9 8.175Z" />
    </g>
    <defs>
      <clipPath id="fire_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFire;
