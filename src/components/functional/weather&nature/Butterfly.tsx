import * as React from 'react';
import { SVGProps } from 'react';

const SvgButterfly = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#butterfly_svg__a)"
    >
      <path d="M16 7v15.5m7.387-3.45c.988.05 3.638-.163 4.613-4.05.975-3.887 1.863-9-2-9s-10 6-10 10C16 12 9.863 6 6 6c-3.862 0-3 5-2 9s3.625 4.1 4.613 4.05" />
      <path d="M11 18.025a4.5 4.5 0 1 0 5 4.475 4.5 4.5 0 1 0 5-4.475" />
    </g>
    <defs>
      <clipPath id="butterfly_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgButterfly;
