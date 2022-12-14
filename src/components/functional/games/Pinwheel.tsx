import * as React from 'react';
import { SVGProps } from 'react';

const SvgPinwheel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.838 3.387a6.5 6.5 0 0 1 4.45 12.213l-4.45-12.213ZM3.387 18.163a6.5 6.5 0 0 1 12.213-4.45l-12.213 4.45Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.163 26.613a6.5 6.5 0 0 1-4.45-12.213l4.45 12.213Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.613 11.838a6.5 6.5 0 0 1-12.213 4.45l12.213-4.45Zm-6.05 8.725L28 28"
    />
  </svg>
);

export default SvgPinwheel;
