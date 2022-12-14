import * as React from 'react';
import { SVGProps } from 'react';

const SvgGraduationCap = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#graduation-cap_svg__a)"
    >
      <path d="m1 12 15-8 15 8-15 8-15-8Z" />
      <path d="M23.5 30V16L16 12" />
      <path d="M27.5 13.863v6.825a.975.975 0 0 1-.2.587C26.462 22.4 22.913 26.5 16 26.5c-6.912 0-10.463-4.1-11.3-5.225a.975.975 0 0 1-.2-.587v-6.825" />
    </g>
    <defs>
      <clipPath id="graduation-cap_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGraduationCap;
