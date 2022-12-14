import * as React from 'react';
import { SVGProps } from 'react';

const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#table_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7h24v17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Zm0 6h24M4 19h24m-17-6v12"
      />
    </g>
    <defs>
      <clipPath id="table_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTable;
