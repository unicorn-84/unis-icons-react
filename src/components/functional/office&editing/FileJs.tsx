import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileJs = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-js_svg__a)"
    >
      <path d="M9 21v4a2 2 0 0 1-4 0m17 3h3a1 1 0 0 0 1-1V11l-7-7H7a1 1 0 0 0-1 1v11" />
      <path d="M13 26.5a3.15 3.15 0 0 0 1.875.625C16 27.125 17 26.75 17 25.5c0-2-4-1.125-4-3 0-1 .75-1.625 1.875-1.625a3.15 3.15 0 0 1 1.875.625M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-js_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileJs;
