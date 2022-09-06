import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowBendUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 19 6-6-6-6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 25a12 12 0 0 1 12-12h12"
    />
  </svg>
);

export default SvgArrowBendUpRight;
