import * as React from 'react';
import { SVGProps } from 'react';

const SvgMapPinLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 29h18m-9-12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26 13c0 9-10 16-10 16S6 22 6 13a10 10 0 1 1 20 0v0Z"
    />
  </svg>
);

export default SvgMapPinLine;
