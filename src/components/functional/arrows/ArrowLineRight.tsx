import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowLineRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 16h19m-9-9 9 9-9 9M27 5v22"
    />
  </svg>
);

export default SvgArrowLineRight;
