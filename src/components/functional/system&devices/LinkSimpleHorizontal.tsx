import * as React from 'react';
import { SVGProps } from 'react';

const SvgLinkSimpleHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 16h12m-9 6H8a6 6 0 1 1 0-12h5m6 12h5a6 6 0 1 0 0-12h-5"
    />
  </svg>
);

export default SvgLinkSimpleHorizontal;
