import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpeakerSimpleX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#speaker-simple-x_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 21H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h6l9-7v24l-9-7Zm20-8-6 6m6 0-6-6"
      />
    </g>
    <defs>
      <clipPath id="speaker-simple-x_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSpeakerSimpleX;
