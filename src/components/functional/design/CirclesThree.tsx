import * as React from 'react';
import { SVGProps } from 'react';

const SvgCirclesThree = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 13.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm7.5 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-15 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </svg>
);

export default SvgCirclesThree;
