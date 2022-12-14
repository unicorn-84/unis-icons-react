import * as React from 'react';
import { SVGProps } from 'react';

const SvgPushPinSimpleSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#push-pin-simple-slash_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.4 5H24m-8 17v8M6 5l20 22M22 5l2.55 14.462M21.45 22H5m2 0L9.35 8.687"
      />
    </g>
    <defs>
      <clipPath id="push-pin-simple-slash_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPushPinSimpleSlash;
