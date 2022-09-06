import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 27V6m0 15c8-6 14 6 22 0V6c-8 6-14-6-22 0"
    />
  </svg>
);

export default SvgFlag;
