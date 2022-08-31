import * as React from 'react';
import { SVGProps } from 'react';

const ShoppingBagOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#shopping-bag-open_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M27 6H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM4 10h24" />
      <path d="M21 14a5 5 0 1 1-10 0" />
    </g>
    <defs>
      <clipPath id="shopping-bag-open_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default ShoppingBagOpen;
