import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleNotch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 5.088a12 12 0 1 1-10 0"
    />
  </svg>
);

export default SvgCircleNotch;
