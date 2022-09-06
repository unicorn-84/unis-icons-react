import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 17 12 12 12-12h-6V6a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v11H4Z"
    />
  </svg>
);

export default SvgArrowFatDown;
