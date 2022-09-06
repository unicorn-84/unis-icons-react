import * as React from 'react';
import { SVGProps } from 'react';

const SvgBracketsSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 5H5v22h5M22 5h5v22h-5"
    />
  </svg>
);

export default SvgBracketsSquare;
