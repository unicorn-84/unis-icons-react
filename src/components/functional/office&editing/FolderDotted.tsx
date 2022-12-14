import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderDotted = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#folder-dotted_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 26H4.925A.925.925 0 0 1 4 25.075V24m16 2h-4m12-7v6.113a.888.888 0 0 1-.887.887H25m-4-16h6a1 1 0 0 1 1 1v3M4 10V7a1 1 0 0 1 1-1h6.588a.987.987 0 0 1 .7.288L16 10H4Zm0 5v4"
      />
    </g>
    <defs>
      <clipPath id="folder-dotted_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFolderDotted;
