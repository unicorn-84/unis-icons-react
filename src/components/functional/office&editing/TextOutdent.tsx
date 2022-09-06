import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextOutdent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#text-outdent_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 16h13M14 8h13M5 24h22M9 7l-5 5 5 5"
      />
    </g>
    <defs>
      <clipPath id="text-outdent_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTextOutdent;
