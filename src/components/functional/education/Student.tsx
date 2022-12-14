import * as React from 'react';
import { SVGProps } from 'react';

const SvgStudent = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#student_svg__a)"
    >
      <path d="M4 8v10m2.775 9a11.013 11.013 0 0 1 18.45 0M28 8l-12 4L4 8l12-4 12 4Z" />
      <path d="M21.163 10.275a7 7 0 1 1-10.325 0" />
    </g>
    <defs>
      <clipPath id="student_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgStudent;
