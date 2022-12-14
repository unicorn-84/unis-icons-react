import * as React from 'react';
import { SVGProps } from 'react';

const SvgPenNib = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4 28l8.738-8.738"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4 28 17.438-2.9a.987.987 0 0 0 .762-.638L25 17 15 7 7.537 9.8a1.012 1.012 0 0 0-.637.775L4 28Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m25 17 3.288-3.287a.998.998 0 0 0 0-1.425l-8.576-8.575a1 1 0 0 0-1.424 0L15 7"
    />
  </svg>
);

export default SvgPenNib;
