import * as React from 'react';
import { SVGProps } from 'react';

const Bus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.25 9h21.5m-21.5 6h21.5m0 9H5.25V8a2.987 2.987 0 0 1 3-3h15.5a2.988 2.988 0 0 1 3 3v16Zm0 0v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3m-11.5 0v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3"
    />
    <path
      fill="currentColor"
      d="M10.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default Bus;