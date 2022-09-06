import * as React from 'react';
import { SVGProps } from 'react';

const SvgPianoKeys = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#piano-keys_svg__a)"
    >
      <path d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM11.5 27v-9m9 9v-9" />
      <path d="M23 5v13h-5V5m-4 0v13H9V5" />
    </g>
    <defs>
      <clipPath id="piano-keys_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPianoKeys;
