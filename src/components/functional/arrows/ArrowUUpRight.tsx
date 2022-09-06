import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowUUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 17 6-6-6-6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 25H11a7 7 0 0 1-7-7v0a7 7 0 0 1 7-7h17"
    />
  </svg>
);

export default SvgArrowUUpRight;
