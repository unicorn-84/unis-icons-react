import * as React from 'react';
import { SVGProps } from 'react';

const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#factory_svg__a)"
    >
      <path d="M10 22h3.5m5 0H22m5 5V17h-6l-8-6v6l-8-6v16m-3 0h28" />
      <path d="M27 17 25.125 3.863A1 1 0 0 0 24.137 3h-2.274a1 1 0 0 0-.988.862L19.187 15.65" />
    </g>
    <defs>
      <clipPath id="factory_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFactory;
