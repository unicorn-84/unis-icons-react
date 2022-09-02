import * as React from 'react';
import { SVGProps } from 'react';

const SvgCrosshair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 27c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11Zm0-24.5v5M2.5 16h5M16 29.5v-5M29.5 16h-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);

export default SvgCrosshair;
