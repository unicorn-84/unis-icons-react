import * as React from 'react';
import { SVGProps } from 'react';

const SvgPath = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 28a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 7h12a4 4 0 1 1 0 8H9a5 5 0 0 0 0 10h13"
    />
  </svg>
);

export default SvgPath;
