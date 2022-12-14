import * as React from 'react';
import { SVGProps } from 'react';

const SvgBellSimpleZ = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 28h8M7.025 13a8.987 8.987 0 0 1 9.037-9c4.95.037 8.913 4.15 8.913 9.112V14c0 4.475.937 7.075 1.762 8.5a1 1 0 0 1-.862 1.5H6.125a1 1 0 0 1-.863-1.5c.825-1.425 1.763-4.025 1.763-8.5v-1Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 12h5l-5 6h5"
    />
  </svg>
);

export default SvgBellSimpleZ;
