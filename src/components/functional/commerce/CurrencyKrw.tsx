import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyKrw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#currency-krw_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3 9 6.5 16L16 9l6.5 16L29 9M2 17h28"
      />
    </g>
    <defs>
      <clipPath id="currency-krw_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCurrencyKrw;
