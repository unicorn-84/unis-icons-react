import * as React from 'react';
import { SVGProps } from 'react';

const SvgTray = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tray_svg__a)"
    >
      <path d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
      <path d="M5 20h4.588a.99.99 0 0 1 .7.288l2.425 2.424a.988.988 0 0 0 .7.288h5.174a.987.987 0 0 0 .7-.288l2.425-2.424a.988.988 0 0 1 .7-.288H27" />
    </g>
    <defs>
      <clipPath id="tray_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTray;
