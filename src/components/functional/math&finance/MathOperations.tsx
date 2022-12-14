import * as React from 'react';
import { SVGProps } from 'react';

const SvgMathOperations = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#math-operations_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 23h8m-4-4v8m4-18H5m22 12.012h-8m8 3.976h-8M26 6l-6 6m6 0-6-6"
      />
    </g>
    <defs>
      <clipPath id="math-operations_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMathOperations;
