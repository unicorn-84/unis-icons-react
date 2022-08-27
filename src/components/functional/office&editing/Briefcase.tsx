import * as React from 'react';
import { SVGProps } from 'react';

const Briefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#briefcase_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M27 9H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Zm-6 0V7a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2" />
      <path d="M28 15.787A23.912 23.912 0 0 1 16 19a23.789 23.789 0 0 1-12-3.213M14.5 15h3" />
    </g>
    <defs>
      <clipPath id="briefcase_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Briefcase;
