import * as React from 'react';
import { SVGProps } from 'react';

const SvgFilmScript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#film-script_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M25 4H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
      />
      <path
        fill="#101828"
        d="M10.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
    <defs>
      <clipPath id="film-script_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFilmScript;
