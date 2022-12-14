import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowULeftDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 22-6 6-6-6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25 22V11a7 7 0 0 0-7-7v0a7 7 0 0 0-7 7v17"
    />
  </svg>
);

export default SvgArrowULeftDown;
