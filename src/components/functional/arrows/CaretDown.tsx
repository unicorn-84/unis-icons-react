import * as React from 'react';
import { SVGProps } from 'react';

const SvgCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#101828"
      d="M15.976 22.8 6.384 11.836C5.252 10.544 6.172 8.52 7.89 8.52h19.184a2 2 0 0 1 1.506 3.319l-9.592 10.96a2 2 0 0 1-3.012 0v.002Z"
    />
  </svg>
);

export default SvgCaretDown;
