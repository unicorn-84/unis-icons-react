import * as React from 'react';
import { SVGProps } from 'react';

const SvgBinoculars = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#binoculars_svg__a)"
    >
      <path d="M13 11.5h6m9.7 7.788L23.238 6.875a3.013 3.013 0 0 0-4.238 0V21m-6 0V6.875a3.013 3.013 0 0 0-4.238 0L3.3 19.288" />
      <path d="M8 26a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm16 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    </g>
    <defs>
      <clipPath id="binoculars_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBinoculars;
