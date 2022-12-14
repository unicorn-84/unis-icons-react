import * as React from 'react';
import { SVGProps } from 'react';

const SvgTranslate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m29 27-7-14-7 14m2-4h10M11 4v3M3 7h16m-4 0A12 12 0 0 1 3 19"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.688 11A12 12 0 0 0 19 19"
    />
  </svg>
);

export default SvgTranslate;
