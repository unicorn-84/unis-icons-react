import * as React from 'react';
import { SVGProps } from 'react';

const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path fill="#101828" d="M16 24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 18v-1a3.5 3.5 0 1 0-3.5-3.5"
    />
  </svg>
);

export default SvgQuestion;
