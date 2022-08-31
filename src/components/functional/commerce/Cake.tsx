import * as React from 'react';
import { SVGProps } from 'react';

const Cake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#cake_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 11V8m0 0c5.775-2 0-7 0-7s-6 5 0 7Zm4.25 7.75a4.25 4.25 0 0 1-8.5 0" />
      <path d="M11.75 15.75A4.25 4.25 0 0 1 7.588 20c-2.388.05-4.338-1.95-4.338-4.338V14a2.987 2.987 0 0 1 3-3h19.5a2.986 2.986 0 0 1 3 3v1.662c0 2.388-1.95 4.388-4.337 4.338a4.25 4.25 0 0 1-4.163-4.25" />
      <path d="M27 19.163V26a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6.837" />
    </g>
    <defs>
      <clipPath id="cake_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Cake;
