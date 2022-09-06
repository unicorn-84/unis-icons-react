import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowLineDownRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 11 14 14m0-12.5V25H11.5M5 5h22"
    />
  </svg>
);

export default SvgArrowLineDownRight;
