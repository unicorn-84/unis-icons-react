import * as React from 'react';
import { SVGProps } from 'react';

const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#camera_svg__a)"
    >
      <path d="M26 26H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4l2-3h8l2 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z" />
      <path d="M16 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
    </g>
    <defs>
      <clipPath id="camera_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCamera;
