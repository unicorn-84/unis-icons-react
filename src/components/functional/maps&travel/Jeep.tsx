import * as React from 'react';
import { SVGProps } from 'react';

const SvgJeep = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.5 22v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4m-13 0v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4M2 12h28m-12 4v6m-4-6v6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27.5 22h-23V12l.875-6.138A1 1 0 0 1 6.362 5h19.275a1 1 0 0 1 .988.862L27.5 12v10Z"
    />
    <path
      fill="#101828"
      d="M9 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm14 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgJeep;
