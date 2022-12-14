import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandFist = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 13a3 3 0 0 1-6 0V8a3 3 0 0 1 6 0v5Zm0-5a3 3 0 0 1 6 0v3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 22a5 5 0 0 1 5-5h-2a2.986 2.986 0 0 1-3-3v-2a1 1 0 0 1 1-1h8a2.986 2.986 0 0 1 3 3v2a12 12 0 0 1-24 0v-5a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0"
    />
  </svg>
);

export default SvgHandFist;
