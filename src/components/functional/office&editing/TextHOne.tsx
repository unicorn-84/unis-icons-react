import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextHOne = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#text-h-one_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 7v15m13-7.5H5M18 7v15m6.5-6.5 3-2V25"
      />
    </g>
    <defs>
      <clipPath id="text-h-one_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTextHOne;
