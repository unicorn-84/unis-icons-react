import * as React from 'react';
import { SVGProps } from 'react';

const SvgFaceMask = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#face-mask_svg__a)"
    >
      <path d="M27 17c0 6.438-9.3 8.65-10.8 8.962a1.072 1.072 0 0 1-.4 0C14.3 25.65 5 23.438 5 17V9.7a.988.988 0 0 1 .663-.937l10-3.638c.218-.075.456-.075.674 0l10 3.638A.987.987 0 0 1 27 9.7V17Zm-16-3h10m-10 4h10" />
      <path d="M26.675 19H28a2.987 2.987 0 0 0 3-3v-3a2.988 2.988 0 0 0-3-3h-1M5.325 19H4a2.986 2.986 0 0 1-3-3v-3a2.987 2.987 0 0 1 3-3h1" />
    </g>
    <defs>
      <clipPath id="face-mask_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFaceMask;
