import * as React from 'react';
import { SVGProps } from 'react';

const SvgHand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 15V8.5a2.5 2.5 0 1 1 5 0V19a9.999 9.999 0 0 1-10 10c-5.525 0-8-3-12.075-11.587a2.503 2.503 0 0 1 4.338-2.5L11 19.663V6.5a2.5 2.5 0 1 1 5 0V15"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 8.5v-4a2.5 2.5 0 0 0-5 0v2"
    />
  </svg>
);

export default SvgHand;
