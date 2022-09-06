import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaperPlane = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.112 4.563 3.287 25.675A1 1 0 0 0 4.5 27.1l11.15-3.975a.9.9 0 0 1 .675 0l11.15 3.975a1 1 0 0 0 1.212-1.425L16.862 4.563a1 1 0 0 0-1.75 0ZM15.987 23v-8"
    />
  </svg>
);

export default SvgPaperPlane;
