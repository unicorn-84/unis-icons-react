import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowSquareOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 12.5V5h-7.5M18 14l9-9m-4 13v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h8"
    />
  </svg>
);

export default SvgArrowSquareOut;
