import * as React from 'react';
import { SVGProps } from 'react';

const SvgAnchor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 29V9m0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-5 5h10M5 18a6 6 0 0 0 6 6 5 5 0 0 1 5 5 5 5 0 0 1 5-5 6 6 0 0 0 6-6"
    />
  </svg>
);

export default SvgAnchor;
