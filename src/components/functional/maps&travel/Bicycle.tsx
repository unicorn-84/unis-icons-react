import * as React from 'react';
import { SVGProps } from 'react';

const SvgBicycle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 10a2 2 0 0 0-2-2h-5l7 12"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26 25a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM6 25a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM6 8h3.5l7 12"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.262 12h-9.425L6 20"
    />
  </svg>
);

export default SvgBicycle;
