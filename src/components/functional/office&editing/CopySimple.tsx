import * as React from 'react';
import { SVGProps } from 'react';

const SvgCopySimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      stroke="#101828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#copy-simple_svg__a)"
    >
      <path d="M27 23V5H9" />
      <path d="M23 9H5v18h18V9Z" />
    </g>
    <defs>
      <clipPath id="copy-simple_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCopySimple;
