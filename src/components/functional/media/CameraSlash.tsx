import * as React from 'react';
import { SVGProps } from 'react';

const SvgCameraSlash = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#camera-slash_svg__a)"
    >
      <path d="m4.188 3 23.625 26M11.75 5.375 12 5h8l2 3h4a2 2 0 0 1 2 2v13.25M25.087 26H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2.725" />
      <path d="M19.262 19.6a4.5 4.5 0 1 1-6.037-6.65" />
    </g>
    <defs>
      <clipPath id="camera-slash_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCameraSlash;
