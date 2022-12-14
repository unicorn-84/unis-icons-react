import * as React from 'react';
import { SVGProps } from 'react';

const SvgFishSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#fish-simple_svg__a)">
      <path fill="#101828" d="M19.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 23C30.975 29.337 27.975 9.437 27.15 5.625a1.025 1.025 0 0 0-.775-.775C22.562 4.025 2.663 1.025 9 30"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M25.163 19A12 12 0 0 1 13 6.825"
      />
    </g>
    <defs>
      <clipPath id="fish-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFishSimple;
