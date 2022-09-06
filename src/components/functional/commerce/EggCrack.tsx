import * as React from 'react';
import { SVGProps } from 'react';

const SvgEggCrack = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#egg-crack_svg__a)"
    >
      <path d="M26 19a10 10 0 0 1-20 0c0-8 6-16 10-16s10 8 10 16Z" />
      <path d="m18.925 18.75.9-4.637-3.6-1.4 5.362-5.975" />
    </g>
    <defs>
      <clipPath id="egg-crack_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEggCrack;
