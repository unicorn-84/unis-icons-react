import * as React from 'react';
import { SVGProps } from 'react';

const SvgMartini = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#martini_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5h26L16 18 3 5Zm13 13v9m-5 0h10M7 9h18"
      />
    </g>
    <defs>
      <clipPath id="martini_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMartini;
