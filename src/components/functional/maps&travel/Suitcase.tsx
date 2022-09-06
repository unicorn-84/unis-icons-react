import * as React from 'react';
import { SVGProps } from 'react';

const SvgSuitcase = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 9H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 27V7a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v20"
    />
  </svg>
);

export default SvgSuitcase;
