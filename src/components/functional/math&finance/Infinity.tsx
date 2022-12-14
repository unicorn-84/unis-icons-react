import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfinity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#infinity_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13.325 19.012-1.087 1.226a5.987 5.987 0 1 1 0-8.476l7.524 8.476a5.987 5.987 0 1 0 0-8.476l-1.087 1.226"
      />
    </g>
    <defs>
      <clipPath id="infinity_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgInfinity;
