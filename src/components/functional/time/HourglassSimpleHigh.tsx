import * as React from 'react';
import { SVGProps } from 'react';

const SvgHourglassSimpleHigh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.413 5h17.174a1 1 0 0 1 .7 1.713L16 16 6.713 6.713A1 1 0 0 1 7.413 5v0Zm0 22h17.174a1 1 0 0 0 .7-1.712L16 16l-9.287 9.288a1 1 0 0 0 .7 1.712ZM9 9h14"
    />
  </svg>
);

export default SvgHourglassSimpleHigh;
