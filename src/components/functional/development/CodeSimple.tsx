import * as React from 'react';
import { SVGProps } from 'react';

const SvgCodeSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11 8-9 8 9 8M21 8l9 8-9 8"
    />
  </svg>
);

export default SvgCodeSimple;
