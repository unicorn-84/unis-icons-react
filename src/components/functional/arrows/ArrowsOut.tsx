import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 6h5v5m-7 2 7-7M11 26H6v-5m7-2-7 7m20-5v5h-5m-2-7 7 7M6 11V6h5m2 7L6 6"
    />
  </svg>
);

export default SvgArrowsOut;
