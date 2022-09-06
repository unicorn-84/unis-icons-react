import * as React from 'react';
import { SVGProps } from 'react';

const SvgChecks = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.5 10.5-11 11L2 16m28-5.5-11 11-2.925-2.925"
    />
  </svg>
);

export default SvgChecks;
