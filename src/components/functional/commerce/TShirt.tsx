import * as React from 'react';
import { SVGProps } from 'react';

const SvgTShirt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#t-shirt_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M24 15h3.387a.988.988 0 0 0 .888-.55l2.3-4.6a1.012 1.012 0 0 0-.4-1.325L24 5M8 15H4.613a.988.988 0 0 1-.888-.55l-2.3-4.6a1.013 1.013 0 0 1 .4-1.325L8 5m12 0a4 4 0 1 1-8 0H8v21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5h-4Z"
      />
    </g>
    <defs>
      <clipPath id="t-shirt_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTShirt;
