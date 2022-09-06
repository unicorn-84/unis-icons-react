import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquaresFour = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 6H6v8h8V6Zm12 0h-8v8h8V6ZM14 18H6v8h8v-8Zm12 0h-8v8h8v-8Z"
    />
  </svg>
);

export default SvgSquaresFour;
