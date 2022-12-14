import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowLineDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 11 8 25m0-12.5V25h12.5M27 5H5"
    />
  </svg>
);

export default SvgArrowLineDownLeft;
