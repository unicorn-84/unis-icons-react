import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsInSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 7v6h6m1-7-7 7M7 19h6v6m-7 1 7-7"
    />
  </svg>
);

export default SvgArrowsInSimple;
