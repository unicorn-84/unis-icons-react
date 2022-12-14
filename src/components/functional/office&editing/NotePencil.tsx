import * as React from 'react';
import { SVGProps } from 'react';

const SvgNotePencil = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#note-pencil_svg__a)"
    >
      <path d="M16 20h-4v-4L24 4l4 4-12 12Zm5-13 4 4" />
      <path d="M27 15v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h11" />
    </g>
    <defs>
      <clipPath id="note-pencil_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNotePencil;
