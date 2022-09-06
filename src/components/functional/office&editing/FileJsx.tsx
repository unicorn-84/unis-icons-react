import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileJsx = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-jsx_svg__a)"
    >
      <path d="m20.5 21 4.5 6m0-6-4.5 6M9 21v4a2 2 0 0 1-4 0m8 1.5a3.15 3.15 0 0 0 1.875.625C16 27.125 17 26.75 17 25.5c0-2-4-1.125-4-3 0-1 .75-1.625 1.875-1.625a3.15 3.15 0 0 1 1.875.625M6 16V5a1 1 0 0 1 1-1h12l7 7v5" />
      <path d="M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-jsx_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileJsx;
