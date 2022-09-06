import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsInLineVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 16H5M16 2v10m4-4-4 4-4-4m4 22V20m-4 4 4-4 4 4"
    />
  </svg>
);

export default SvgArrowsInLineVertical;
