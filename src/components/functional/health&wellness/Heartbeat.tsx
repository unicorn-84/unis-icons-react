import * as React from 'react';
import { SVGProps } from 'react';

const SvgHeartbeat = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heartbeat_svg__a)"
    >
      <path d="M4 16h5l2-3 4 6 2-3h3" />
      <path d="M3.513 12c-.013-.162-.013-.338-.013-.5A6.5 6.5 0 0 1 16 9v0a6.5 6.5 0 0 1 12.5 2.5C28.5 20 16 27 16 27s-4.988-2.8-8.662-7" />
    </g>
    <defs>
      <clipPath id="heartbeat_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHeartbeat;
