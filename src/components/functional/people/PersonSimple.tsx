import * as React from 'react';
import { SVGProps } from 'react';

const SvgPersonSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.988 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 13v6m-8 9 8-9 8 9M4 16s5-3 12-3 12 3 12 3"
    />
  </svg>
);

export default SvgPersonSimple;
