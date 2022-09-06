import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowBendRightUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13 10 6-6 6 6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 28a12 12 0 0 0 12-12V4"
    />
  </svg>
);

export default SvgArrowBendRightUp;
