import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowLineDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 4v19m-9-9 9 9 9-9M5 27h22"
    />
  </svg>
);

export default SvgArrowLineDown;
