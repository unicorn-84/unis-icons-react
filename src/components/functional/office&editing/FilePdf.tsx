import * as React from 'react';
import { SVGProps } from 'react';

const SvgFilePdf = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-pdf_svg__a)"
    >
      <path d="M6 16V5a1 1 0 0 1 1-1h12l7 7v5" />
      <path d="M19 4v7h7M6 25h2a2 2 0 1 0 0-4H6v6m21-6h-3.5v6m3-2.5h-3M16 27a3 3 0 0 0 0-6h-1.75v6H16Z" />
    </g>
    <defs>
      <clipPath id="file-pdf_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFilePdf;
