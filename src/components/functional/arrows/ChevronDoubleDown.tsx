import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDoubleDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 16 16 26 6 16M26 6 16 16 6 6"
    />
  </svg>
);

export default SvgChevronDoubleDown;
