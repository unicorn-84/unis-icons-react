import * as React from 'react';
import { SVGProps } from 'react';

const SvgMegaphoneSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 6.337v17.326a1 1 0 0 0 1.275.962l22-6.413A1 1 0 0 0 28 17.25v-4.5a1 1 0 0 0-.725-.963l-22-6.412A1 1 0 0 0 4 6.337Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 19.462V24a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8.787"
    />
  </svg>
);

export default SvgMegaphoneSimple;
