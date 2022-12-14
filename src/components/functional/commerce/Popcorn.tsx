import * as React from 'react';
import { SVGProps } from 'react';

const SvgPopcorn = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#popcorn_svg__a)"
    >
      <path d="m4.388 11.662 3.425 14.563a1.012 1.012 0 0 0 .974.775h14.425a1.013 1.013 0 0 0 .976-.775l3.425-14.563a1.013 1.013 0 0 0-1.25-1.2L21 12l-4.625-1.85a.975.975 0 0 0-.75 0L11 12l-5.362-1.537a1.013 1.013 0 0 0-1.25 1.2v0ZM11 12l2 15m8-15-2 15" />
      <path d="M27 10.5a4.5 4.5 0 0 0-6.613-3.975 4.488 4.488 0 0 0-8.774 0A4.5 4.5 0 0 0 5 10.5" />
    </g>
    <defs>
      <clipPath id="popcorn_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPopcorn;
