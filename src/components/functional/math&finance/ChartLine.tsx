import * as React from 'react';
import { SVGProps } from 'react';

const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-line_svg__a)"
    >
      <path d="M28 26H4V6" />
      <path d="m28 12-8 7-8-6-8 7" />
    </g>
    <defs>
      <clipPath id="chart-line_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgChartLine;
