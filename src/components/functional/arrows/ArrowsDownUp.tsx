import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsDownUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14 22-4 4-4-4m4-16v20m8-16 4-4 4 4m-4 16V6"
    />
  </svg>
);

export default SvgArrowsDownUp;
