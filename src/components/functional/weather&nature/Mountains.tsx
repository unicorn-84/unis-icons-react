import * as React from 'react';
import { SVGProps } from 'react';

const SvgMountains = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mountains_svg__a)"
    >
      <path d="M20.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1 25l9.137-15.537a1.012 1.012 0 0 1 1.726 0L21 25H1Zm5.3-9h9.4" />
      <path d="m18.012 19.925 4.125-6.975a1.012 1.012 0 0 1 1.726 0L31 25H21" />
    </g>
    <defs>
      <clipPath id="mountains_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMountains;
