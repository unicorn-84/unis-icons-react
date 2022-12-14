import * as React from 'react';
import { SVGProps } from 'react';

const SvgAnchorSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 16V11m-9 4H4a12 12 0 0 0 24 0h-3"
    />
  </svg>
);

export default SvgAnchorSimple;
