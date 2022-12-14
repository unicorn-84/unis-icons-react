import * as React from 'react';
import { SVGProps } from 'react';

const SvgDrop = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#drop_svg__a)"
    >
      <path d="M26 18C26 9 16 2 16 2S6 9 6 18a10 10 0 0 0 20 0Z" />
      <path d="M17.012 23.9a5.987 5.987 0 0 0 4.9-4.887" />
    </g>
    <defs>
      <clipPath id="drop_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDrop;
