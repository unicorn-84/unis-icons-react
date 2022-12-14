import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 13h-5V8m7-2-7 7M8 19h5v5m-7 2 7-7m6 5v-5h5m2 7-7-7M13 8v5H8M6 6l7 7"
    />
  </svg>
);

export default SvgArrowsIn;
