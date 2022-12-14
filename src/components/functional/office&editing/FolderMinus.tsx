import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#folder-minus_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M27.113 26H4.925A.925.925 0 0 1 4 25.075V10h23a1 1 0 0 1 1 1v14.113a.888.888 0 0 1-.887.887ZM4 10V7a1 1 0 0 1 1-1h6.588a.987.987 0 0 1 .7.288L16 10m-3 8h6"
      />
    </g>
    <defs>
      <clipPath id="folder-minus_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFolderMinus;
