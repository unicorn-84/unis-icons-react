import * as React from 'react';
import { SVGProps } from 'react';

const SvgCoins = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#coins_svg__a)"
    >
      <path d="M12 15c5.523 0 10-2.015 10-4.5S17.523 6 12 6 2 8.015 2 10.5 6.477 15 12 15Z" />
      <path d="M2 10.5v5C2 17.988 6.475 20 12 20s10-2.012 10-4.5v-5M8 14.625v5" />
      <path d="M22 12.088c4.563.425 8 2.237 8 4.412 0 2.488-4.475 4.5-10 4.5-2.45 0-4.7-.4-6.438-1.05" />
      <path d="M10 19.913V21.5c0 2.488 4.475 4.5 10 4.5s10-2.012 10-4.5v-5m-6 4.125v5m-8-11v11" />
    </g>
    <defs>
      <clipPath id="coins_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCoins;
