import * as React from 'react';
import { SVGProps } from 'react';

const SvgSignOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.75 10.75 27 16l-5.25 5.25M13 16h14M13 27H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7"
    />
  </svg>
);

export default SvgSignOut;
