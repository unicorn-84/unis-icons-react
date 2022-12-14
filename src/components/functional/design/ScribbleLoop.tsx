import * as React from 'react';
import { SVGProps } from 'react';

const SvgScribbleLoop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 11.6S7 6 13 6c13 0 12 20 0 20-8 0-8-12 4-12 8 0 13 6 13 6"
    />
  </svg>
);

export default SvgScribbleLoop;
