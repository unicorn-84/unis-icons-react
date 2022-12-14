import * as React from 'react';
import { SVGProps } from 'react';

const SvgBugDroid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 18.5a10 10 0 0 1-20 0v-5a10 10 0 1 1 20 0v5Zm0-2.5H6"
    />
    <path
      fill="#101828"
      d="M19.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 3.5 2.537 2.362M25 3.5l-2.538 2.362"
    />
  </svg>
);

export default SvgBugDroid;
