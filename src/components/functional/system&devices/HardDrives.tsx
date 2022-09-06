import * as React from 'react';
import { SVGProps } from 'react';

const SvgHardDrives = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 18H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm0-12H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
    />
    <path
      fill="#101828"
      d="M22.5 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgHardDrives;
