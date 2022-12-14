import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowArcRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.488 18.512h8v-8"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 23a12 12 0 0 1 20.488-8.488l4 4"
    />
  </svg>
);

export default SvgArrowArcRight;
