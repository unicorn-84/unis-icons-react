import * as React from 'react';
import { SVGProps } from 'react';

const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 27c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 16 4.95-4.95M13 1h6"
    />
  </svg>
);

export default SvgTimer;
