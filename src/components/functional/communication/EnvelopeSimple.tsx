import * as React from 'react';
import { SVGProps } from 'react';

const SvgEnvelopeSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 7h24v17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28 7 16 18 4 7"
    />
  </svg>
);

export default SvgEnvelopeSimple;
