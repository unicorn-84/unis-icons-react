import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsCounterClockwise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.975 12.463h-6v-6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23.775 8.225a10.988 10.988 0 0 0-15.55 0l-4.25 4.238m18.05 7.075h6v6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.225 23.775a10.988 10.988 0 0 0 15.55 0l4.25-4.237"
    />
  </svg>
);

export default SvgArrowsCounterClockwise;
