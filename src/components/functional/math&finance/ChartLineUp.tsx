import * as React from 'react';
import { SVGProps } from 'react';

const SvgChartLineUp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chart-line-up_svg__a)"
    >
      <path d="M28 26H4V6" />
      <path d="M26 8 16 18l-4-4-8 8" />
      <path d="M26 13V8h-5" />
    </g>
    <defs>
      <clipPath id="chart-line-up_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgChartLineUp;
