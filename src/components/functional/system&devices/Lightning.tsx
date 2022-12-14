import * as React from 'react';
import { SVGProps } from 'react';

const SvgLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 30 2-10-8-3L20 2l-2 10 8 3-14 15Z"
    />
  </svg>
);

export default SvgLightning;
