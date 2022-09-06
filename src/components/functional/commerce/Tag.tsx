import * as React from 'react';
import { SVGProps } from 'react';

const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#tag_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.338 3.238 5.25 5.25 3.238 15.338a1 1 0 0 0 .275.9l13.05 13.05a.989.989 0 0 0 1.412 0l11.313-11.313a.989.989 0 0 0 0-1.413l-13.05-13.05a1 1 0 0 0-.9-.274v0Z"
      />
      <path fill="#101828" d="M10.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </g>
    <defs>
      <clipPath id="tag_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTag;
