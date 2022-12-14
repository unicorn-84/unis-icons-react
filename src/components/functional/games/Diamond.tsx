import * as React from 'react';
import { SVGProps } from 'react';

const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.287 3.21 3.204 15.293a1 1 0 0 0 0 1.414L15.29 28.793a1 1 0 0 0 1.414 0l12.083-12.082a1 1 0 0 0 0-1.415L16.7 3.21a1 1 0 0 0-1.415 0Z"
    />
  </svg>
);

export default SvgDiamond;
