import * as React from 'react';
import { SVGProps } from 'react';

const SvgSkipForwardCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#skip-forward-circle_svg__a)"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeMiterlimit={10}
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.5 16-6-4v8l6-4Zm1-4v8"
      />
    </g>
    <defs>
      <clipPath id="skip-forward-circle_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSkipForwardCircle;
