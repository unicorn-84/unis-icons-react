import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderLock = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#folder-lock_svg__a)"
    >
      <path d="M4 10V7a1 1 0 0 1 1-1h6.588a.987.987 0 0 1 .7.288L16 10m12 10.5h-9V26h9v-5.5Z" />
      <path d="M14.075 26h-9.15A.925.925 0 0 1 4 25.075V10h23a1 1 0 0 1 1 1v2" />
      <path d="M21 20.5V19a2.5 2.5 0 0 1 5 0v1.5" />
    </g>
    <defs>
      <clipPath id="folder-lock_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFolderLock;
