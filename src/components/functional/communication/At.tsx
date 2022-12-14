import * as React from 'react';
import { SVGProps } from 'react';

const SvgAt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.637 26A12 12 0 1 1 28 16c0 2.762-1 5-3.5 5S21 18.762 21 16v-5"
    />
  </svg>
);

export default SvgAt;
