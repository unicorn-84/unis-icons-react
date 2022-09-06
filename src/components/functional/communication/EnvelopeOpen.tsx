import * as React from 'react';
import { SVGProps } from 'react';

const SvgEnvelopeOpen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 12v13a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V12L16 4 4 12Zm9.813 7-9.5 6.712m23.375 0L18.188 19"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m28 12-9.813 7h-4.375L4 12"
    />
  </svg>
);

export default SvgEnvelopeOpen;
