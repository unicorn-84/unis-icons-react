import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandWaving = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.75 7.675a2.5 2.5 0 0 1 4.325-2.5l3.75 6.487"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.425 11.9-2-3.463a2.5 2.5 0 0 1 4.325-2.5L15 13.3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.25 20.663a4.986 4.986 0 0 1 1.825-6.825l-1.25-2.175a2.503 2.503 0 1 1 4.338-2.5l2.5 4.337a10.002 10.002 0 1 1-17.326 10l-5.25-9.1a2.503 2.503 0 1 1 4.338-2.5l2.75 4.763M10.137 30A13.787 13.787 0 0 1 6 25.5M22 3.875a6.463 6.463 0 0 1 5.625 3.25"
    />
  </svg>
);

export default SvgHandWaving;
