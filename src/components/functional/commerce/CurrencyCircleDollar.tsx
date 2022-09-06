import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyCircleDollar = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-circle-dollar_svg__a)"
    >
      <path d="M16 9v2m0 10v2m0 5c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" />
      <path d="M13 21h4.5a2.5 2.5 0 0 0 0-5h-3a2.5 2.5 0 0 1 0-5H19" />
    </g>
    <defs>
      <clipPath id="currency-circle-dollar_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCurrencyCircleDollar;
