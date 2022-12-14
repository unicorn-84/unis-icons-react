import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlanet = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#planet_svg__a)"
    >
      <path d="M16 27c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11Z" />
      <path d="M23.025 7.537c3.463-.95 6.063-.862 6.838.463 1.375 2.387-3.713 7.912-11.363 12.325C10.85 24.738 3.525 26.388 2.137 24c-.762-1.325.463-3.625 3.013-6.15" />
    </g>
    <defs>
      <clipPath id="planet_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPlanet;
