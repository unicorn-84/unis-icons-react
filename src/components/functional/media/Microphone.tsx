import * as React from 'react';
import { SVGProps } from 'react';

const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#microphone_svg__a)"
    >
      <path d="M21 8a5 5 0 0 0-10 0v8a5 5 0 0 0 10 0V8Zm-5 17v4" />
      <path d="M24.95 17a9.012 9.012 0 0 1-17.9 0" />
    </g>
    <defs>
      <clipPath id="microphone_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMicrophone;
