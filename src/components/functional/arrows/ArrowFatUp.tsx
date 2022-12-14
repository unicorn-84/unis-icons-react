import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 15 16 3l12 12h-6v11a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V15H4Z"
    />
  </svg>
);

export default SvgArrowFatUp;
