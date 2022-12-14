import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#101828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 5h20a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
    />
  </svg>
);

export default SvgSquareFilled;
