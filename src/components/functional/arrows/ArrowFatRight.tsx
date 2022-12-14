import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 4 12 12-12 12v-6H6a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h11V4Z"
    />
  </svg>
);

export default SvgArrowFatRight;
