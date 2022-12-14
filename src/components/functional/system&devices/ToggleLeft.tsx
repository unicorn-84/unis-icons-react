import * as React from 'react';
import { SVGProps } from 'react';

const SvgToggleLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 8H10a8 8 0 1 0 0 16h12a8 8 0 1 0 0-16Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);

export default SvgToggleLeft;
