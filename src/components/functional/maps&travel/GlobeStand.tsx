import * as React from 'react';
import { SVGProps } from 'react';

const SvgGlobeStand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25.188 21.188A12.993 12.993 0 1 1 6.813 2.813M12 29h8m-4-4v4"
    />
  </svg>
);

export default SvgGlobeStand;
