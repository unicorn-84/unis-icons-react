import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsLeftRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 18 4 4-4 4M6 22h20m-16-8-4-4 4-4m16 4H6"
    />
  </svg>
);

export default SvgArrowsLeftRight;
