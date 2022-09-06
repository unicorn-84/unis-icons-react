import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoney = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#money_svg__a)"
    >
      <path d="M29 8H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z" />
      <path d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-12 8 7m-8 9 8-7M10 8l-8 7m8 9-8-7" />
    </g>
    <defs>
      <clipPath id="money_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMoney;
