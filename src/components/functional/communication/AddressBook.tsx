import * as React from 'react';
import { SVGProps } from 'react';

const SvgAddressBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 13.5h3m-3-5h3m-3 10h3m-3 5h3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 21a7.5 7.5 0 0 1 12 0"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27 27V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1Z"
    />
  </svg>
);

export default SvgAddressBook;
