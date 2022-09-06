import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bookmark_svg__a)"
    >
      <path d="m24 28-8-5-8 5V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v22Z" />
      <path d="m24 22-8-5-8 5" />
    </g>
    <defs>
      <clipPath id="bookmark_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBookmark;
