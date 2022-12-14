import * as React from 'react';
import { SVGProps } from 'react';

const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shopping-cart_svg__a)"
    >
      <path d="M23 23H8.725L5.238 3.825A1 1 0 0 0 4.261 3H2m8 25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M7.813 18h15.7a1.988 1.988 0 0 0 1.962-1.637L27 8H6" />
    </g>
    <defs>
      <clipPath id="shopping-cart_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgShoppingCart;
