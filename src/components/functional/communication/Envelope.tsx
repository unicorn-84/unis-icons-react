import * as React from 'react';
import { SVGProps } from 'react';

const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 7 16 18 4 7"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7h24v17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Zm9.813 9-9.5 8.712m23.375 0L18.188 16"
    />
  </svg>
);

export default SvgEnvelope;
