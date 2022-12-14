import * as React from 'react';
import { SVGProps } from 'react';

const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 28h-4m1.375-25.525C13 4.375 5.062 11.975 12 24h8c6.8-12.025-1.025-19.612-3.375-21.525a.975.975 0 0 0-1.25 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.238 13.925-3.925 4.7a.95.95 0 0 0-.2.85l1.537 6.962a1 1 0 0 0 1.6.563L12 24m10.688-10.175 4 4.8a.95.95 0 0 1 .2.85l-1.538 6.962a1 1 0 0 1-1.6.563L20 24"
    />
    <path fill="#101828" d="M16 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default SvgRocket;
