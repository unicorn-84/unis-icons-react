import * as React from 'react';
import { SVGProps } from 'react';

const SvgWall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 13V7m-6 12v-6m12 6v-6m-6 12v-6M4 13h24M4 19h24m0-12H4v18h24V7Z"
    />
  </svg>
);

export default SvgWall;
