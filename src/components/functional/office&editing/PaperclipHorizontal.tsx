import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaperclipHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#paperclip-horizontal_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 18h14a2 2 0 0 0 0-4h-18c-2.15 0-3.9 1.787-3.9 4 0 2.212 1.75 4 3.9 4H24a6 6 0 1 0 0-12H10"
      />
    </g>
    <defs>
      <clipPath id="paperclip-horizontal_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPaperclipHorizontal;
