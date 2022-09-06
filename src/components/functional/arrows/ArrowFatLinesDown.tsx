import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatLinesDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 17 12 12 12-12h-6v-4H10v4H4ZM22 5H10m12 4H10"
    />
  </svg>
);

export default SvgArrowFatLinesDown;
