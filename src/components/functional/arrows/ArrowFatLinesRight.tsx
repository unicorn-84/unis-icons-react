import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatLinesRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 4 12 12-12 12v-6h-4V10h4V4ZM5 22V10m4 12V10"
    />
  </svg>
);

export default SvgArrowFatLinesRight;
