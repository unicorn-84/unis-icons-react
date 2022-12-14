import * as React from 'react';
import { SVGProps } from 'react';

const SvgTarget = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 16 28 4m-3.512 3.512a12.025 12.025 0 1 0 2.337 3.313"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.238 11.762a5.987 5.987 0 1 0 1.75 3.9"
    />
  </svg>
);

export default SvgTarget;
