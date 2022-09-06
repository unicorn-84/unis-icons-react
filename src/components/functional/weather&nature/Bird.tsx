import * as React from 'react';
import { SVGProps } from 'react';

const SvgBird = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#bird_svg__a)">
      <path fill="#101828" d="M20.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 17-5 6m16-11v3a12 12 0 0 1-12 12H1l12-15V9.5a6.5 6.5 0 0 1 12.788-1.638L29 10l-3 2Z"
      />
    </g>
    <defs>
      <clipPath id="bird_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBird;
