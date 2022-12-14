import * as React from 'react';
import { SVGProps } from 'react';

const SvgTextbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#textbox_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 6v20m4-17h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H18m-4 0H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h11m-7.75 5h3.5M8 14v4.5"
      />
    </g>
    <defs>
      <clipPath id="textbox_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTextbox;
