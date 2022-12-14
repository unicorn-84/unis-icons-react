import * as React from 'react';
import { SVGProps } from 'react';

const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#picture-in-picture_svg__a)"
    >
      <path d="M27 7H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z" />
      <path d="M17 25v-8a1 1 0 0 1 1-1h10" />
    </g>
    <defs>
      <clipPath id="picture-in-picture_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPictureInPicture;
