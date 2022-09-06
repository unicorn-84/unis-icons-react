import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileCsv = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-csv_svg__a)"
    >
      <path d="m21.5 21 2.5 6 2.5-6M10 26.313A2.625 2.625 0 0 1 8.25 27c-1.525 0-2.75-1.337-2.75-3s1.225-3 2.75-3a2.62 2.62 0 0 1 1.75.688m4 4.812a3.15 3.15 0 0 0 1.875.625C17 27.125 18 26.75 18 25.5c0-2-4-1.125-4-3 0-1 .75-1.625 1.875-1.625a3.15 3.15 0 0 1 1.875.625M6 16V5a1 1 0 0 1 1-1h12l7 7v5" />
      <path d="M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-csv_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileCsv;
