import * as React from 'react';
import { SVGProps } from 'react';

const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25.5 19H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h20.5l4.5 5-4.5 5ZM16 4v5m0 10v9"
    />
  </svg>
);

export default SvgSignpost;
