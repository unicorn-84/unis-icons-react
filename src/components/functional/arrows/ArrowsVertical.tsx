import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 7 4-4 4 4m-4 22V3m4 22-4 4-4-4"
    />
  </svg>
);

export default SvgArrowsVertical;
