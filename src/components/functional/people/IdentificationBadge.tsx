import * as React from 'react';
import { SVGProps } from 'react';

const SvgIdentificationBadge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 24a7.5 7.5 0 0 1 12 0"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26 27V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1ZM12 8h8"
    />
  </svg>
);

export default SvgIdentificationBadge;
