import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileImage = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-image_svg__a)"
    >
      <path d="m19 28-5.588-8.375a.489.489 0 0 0-.825 0L9.976 23.55a.5.5 0 0 1-.838-.012L7.925 21.65a.512.512 0 0 0-.85 0L3 28h16Zm0-24v7h7" />
      <path d="M24 28h1a1 1 0 0 0 1-1V11l-7-7H7a1 1 0 0 0-1 1v12" />
    </g>
    <defs>
      <clipPath id="file-image_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFileImage;
