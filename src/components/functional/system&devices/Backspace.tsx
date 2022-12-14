import * as React from 'react';
import { SVGProps } from 'react';

const SvgBackspace = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.713 25.512 2 16l5.713-9.512A.987.987 0 0 1 8.563 6H27a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8.562a.988.988 0 0 1-.85-.488v0ZM20 13l-6 6m6 0-6-6"
    />
  </svg>
);

export default SvgBackspace;
