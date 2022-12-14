import * as React from 'react';
import { SVGProps } from 'react';

const SvgStorefront = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#storefront_svg__a)"
    >
      <path d="M6 17.45V26a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8.55M6.75 5h18.5a1.012 1.012 0 0 1 .962.725L28 12H4l1.787-6.275A1.012 1.012 0 0 1 6.75 5v0Z" />
      <path d="M12 12v2a4 4 0 1 1-8 0v-2m16 0v2a4 4 0 1 1-8 0v-2m16 0v2a4 4 0 1 1-8 0v-2" />
    </g>
    <defs>
      <clipPath id="storefront_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgStorefront;
