import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 12-4 4 4 4m18-8 4 4-4 4M3 16h26"
    />
  </svg>
);

export default SvgArrowsHorizontal;
