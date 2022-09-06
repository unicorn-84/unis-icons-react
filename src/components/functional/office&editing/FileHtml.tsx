import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileHtml = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-html_svg__a)"
    >
      <path d="M15 22h-4m2 5v-5m-8.5 0v5M8 22v5m-3.5-2.5H8M26.5 22v5h3M18 27v-5l2.5 3.5L23 22v5M6 17V5a1 1 0 0 1 1-1h12l7 7v6" />
      <path d="M19 4v7h7" />
    </g>
    <defs>
      <clipPath id="file-html_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileHtml;
