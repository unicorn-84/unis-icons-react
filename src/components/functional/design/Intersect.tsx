import * as React from 'react';
import { SVGProps } from 'react';

const SvgIntersect = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 29a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-4.687-16.687 4.374 4.374m-7.374-1.374 4.374 4.374"
    />
  </svg>
);

export default SvgIntersect;
