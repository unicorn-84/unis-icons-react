import * as React from 'react';
import { SVGProps } from 'react';

const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 7C6 7 2 16 2 16s4 9 14 9 14-9 14-9-4-9-14-9Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </svg>
);

export default SvgEye;
