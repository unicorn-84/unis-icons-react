import * as React from 'react';
import { SVGProps } from 'react';

const SvgKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#kanban_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 7h22v15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3h-8v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Zm7 8H5m7-8v12m8-4h7m-7-8v12"
      />
    </g>
    <defs>
      <clipPath id="kanban_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgKanban;
