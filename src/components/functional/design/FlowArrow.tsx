import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlowArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.5 25.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM25 5l5 5-5 5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 22h1a6 6 0 0 0 6-6 6 6 0 0 1 6-6h8"
    />
  </svg>
);

export default SvgFlowArrow;
