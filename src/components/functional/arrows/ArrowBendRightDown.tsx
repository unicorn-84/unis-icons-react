import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowBendRightDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13 22 6 6 6-6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 4a12 12 0 0 1 12 12v12"
    />
  </svg>
);

export default SvgArrowBendRightDown;
