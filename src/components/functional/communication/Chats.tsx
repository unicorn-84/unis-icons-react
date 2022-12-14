import * as React from 'react';
import { SVGProps } from 'react';

const SvgChats = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.95 18 4 22V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8.95Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 18v5a1 1 0 0 0 1 1h12.05L28 28V12a1 1 0 0 0-1-1h-5"
    />
  </svg>
);

export default SvgChats;
