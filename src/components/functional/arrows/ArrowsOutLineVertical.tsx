import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsOutLineVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 16H5m11-4V2m-4 4 4-4 4 4m-4 14v10m4-4-4 4-4-4"
    />
  </svg>
);

export default SvgArrowsOutLineVertical;
