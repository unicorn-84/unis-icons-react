import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowBendDoubleUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 19-6-6 6-6m6 12-6-6 6-6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28 25a12 12 0 0 0-12-12h-6"
    />
  </svg>
);

export default SvgArrowBendDoubleUpLeft;
