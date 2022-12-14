import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileDoc = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-doc_svg__a)"
    >
      <path d="M7.25 27a3 3 0 0 0 0-6H5.5v6h1.75Zm9 0c1.519 0 2.75-1.343 2.75-3s-1.231-3-2.75-3-2.75 1.343-2.75 3 1.231 3 2.75 3Zm10.25-.687a2.625 2.625 0 0 1-1.75.687C23.225 27 22 25.663 22 24s1.225-3 2.75-3a2.62 2.62 0 0 1 1.75.688M6 16V5a1 1 0 0 1 1-1h12l7 7v5" />
      <path d="M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-doc_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileDoc;
