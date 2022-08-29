import * as React from 'react';
import { SVGProps } from 'react';

const FileText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#file-text_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M25 28H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12l7 7v16a1 1 0 0 1-1 1Z" />
      <path d="M19 4v7h7m-14 6h8m-8 4h8" />
    </g>
    <defs>
      <clipPath id="file-text_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FileText;