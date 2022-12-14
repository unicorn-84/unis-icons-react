import * as React from 'react';
import { SVGProps } from 'react';

const SvgChatsCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.262 17.587a9.013 9.013 0 1 1 3.15 3.15l-3.112.888a.75.75 0 0 1-.925-.925l.887-3.113Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.512 21.988a8.988 8.988 0 0 0 13.075 4.75v0l3.113.887a.75.75 0 0 0 .925-.925l-.888-3.113a8.987 8.987 0 0 0-7.25-13.575"
    />
  </svg>
);

export default SvgChatsCircle;
