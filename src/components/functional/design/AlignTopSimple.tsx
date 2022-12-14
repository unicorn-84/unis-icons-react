import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlignTopSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 4h18m-5 4h-8a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z"
    />
  </svg>
);

export default SvgAlignTopSimple;
