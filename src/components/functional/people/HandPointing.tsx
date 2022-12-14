import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandPointing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 14v-1.5a2.5 2.5 0 0 0-5 0v-8a2.5 2.5 0 0 0-5 0v15.163l-2.737-4.75a2.503 2.503 0 0 0-4.338 2.5C8 26 10.475 29 16 29a10.001 10.001 0 0 0 10-10v-5a2.5 2.5 0 0 0-5 0v0Z"
    />
  </svg>
);

export default SvgHandPointing;
