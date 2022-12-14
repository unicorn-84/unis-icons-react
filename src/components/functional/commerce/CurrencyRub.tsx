import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyRub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#currency-rub_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 22h11m-7 5V5h7.5a6.5 6.5 0 0 1 0 13H7"
      />
    </g>
    <defs>
      <clipPath id="currency-rub_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCurrencyRub;
