import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileLock = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-lock_svg__a)"
    >
      <path d="M19 4v7h7" />
      <path d="M21 28h4a1 1 0 0 0 1-1V11l-7-7H7a1 1 0 0 0-1 1v11" />
      <path d="M16 22.5H7V28h9v-5.5Zm-7 0V21a2.5 2.5 0 0 1 5 0v1.5" />
    </g>
    <defs>
      <clipPath id="file-lock_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileLock;
