import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowLineLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 16H9m9-9-9 9 9 9M5 5v22"
    />
  </svg>
);

export default SvgArrowLineLeft;
