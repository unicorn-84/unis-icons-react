import * as React from 'react';
import { SVGProps } from 'react';

const SvgFirstAidKit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#first-aid-kit_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M27 9H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Zm-6 0V7a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2m5 5.5v7m3.5-3.5h-7"
      />
    </g>
    <defs>
      <clipPath id="first-aid-kit_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFirstAidKit;
