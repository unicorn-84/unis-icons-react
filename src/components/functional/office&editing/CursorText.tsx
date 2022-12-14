import * as React from 'react';
import { SVGProps } from 'react';

const SvgCursorText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#cursor-text_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 26h-2a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4h2M10 26h2a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4h-2m3 10h6"
      />
    </g>
    <defs>
      <clipPath id="cursor-text_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCursorText;
