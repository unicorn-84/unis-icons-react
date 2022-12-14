import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileJpg = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-jpg_svg__a)"
    >
      <path d="M13 25h2a2 2 0 0 0 0-4h-2v6m-4-6v4a2 2 0 0 1-4 0m18.5-.75H25v1.475A2.687 2.687 0 0 1 22.75 27C21.225 27 20 25.663 20 24s1.225-3 2.75-3c.54-.001 1.064.17 1.5.488M6 16V5a1 1 0 0 1 1-1h12l7 7v5" />
      <path d="M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-jpg_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileJpg;
