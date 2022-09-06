import * as React from 'react';
import { SVGProps } from 'react';

const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#equalizer_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.5 12h5m-5 4h5m-5 4h5m-5 4h5m4-8h5m-5 4h5m-5 4h5m4-12h5m-5-4h5m-5 8h5m-5 4h5m-5 4h5"
      />
    </g>
    <defs>
      <clipPath id="equalizer_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEqualizer;
