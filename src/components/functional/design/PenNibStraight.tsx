import * as React from 'react';
import { SVGProps } from 'react';

const SvgPenNibStraight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 19v12m0-12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM9 9V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 9-3.425 6.925a1.025 1.025 0 0 0 .088 1.037L16 31l10.338-14.038a1.025 1.025 0 0 0 .087-1.037L23 9H9Z"
    />
  </svg>
);

export default SvgPenNibStraight;
