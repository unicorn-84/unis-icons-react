import * as React from 'react';
import { SVGProps } from 'react';

const SvgChatCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.675 22.125a11.988 11.988 0 1 1 4.2 4.2v0L5.725 27.5A.988.988 0 0 1 4.5 26.275l1.175-4.15Z"
    />
  </svg>
);

export default SvgChatCircle;
