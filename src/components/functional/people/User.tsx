import * as React from 'react';
import { SVGProps } from 'react';

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.875 27a14 14 0 0 1 24.25 0"
    />
  </svg>
);

export default SvgUser;
