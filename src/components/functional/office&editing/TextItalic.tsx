import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#text-italic_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19 7-6 18m-5 0h10M14 7h10"
      />
    </g>
    <defs>
      <clipPath id="text-italic_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTextItalic;
