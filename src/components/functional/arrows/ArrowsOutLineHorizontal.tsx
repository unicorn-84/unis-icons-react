import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsOutLineHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 5v22m-4-11H2m4 4-4-4 4-4m14 4h10m-4-4 4 4-4 4"
    />
  </svg>
);

export default SvgArrowsOutLineHorizontal;
