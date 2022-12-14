import * as React from 'react';
import { SVGProps } from 'react';

const SvgRss = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 18a7.975 7.975 0 0 1 8 8M6 12a14 14 0 0 1 14 14"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 6a19.888 19.888 0 0 1 14.137 5.863A19.888 19.888 0 0 1 26 26"
    />
    <path fill="#101828" d="M6.5 27a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default SvgRss;
