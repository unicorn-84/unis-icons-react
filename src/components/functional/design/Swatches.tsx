import * as React from 'react';
import { SVGProps } from 'react';

const SvgSwatches = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.587 21.625 7.612 4.487a.988.988 0 0 1 1.15-.812l6.9 1.212a1.013 1.013 0 0 1 .813 1.163l-3.038 17.237A4.513 4.513 0 0 1 8.3 26.95c-2.488-.4-4.15-2.838-3.713-5.325Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14.788 15.6 9.112-3.313a1 1 0 0 1 1.288.6l2.4 6.575a1 1 0 0 1-.6 1.276l-16.45 5.987"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27.5 20.313V26a1 1 0 0 1-1 1H9"
    />
    <path fill="#101828" d="M9 24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default SvgSwatches;
