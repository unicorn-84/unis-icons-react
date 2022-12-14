import * as React from 'react';
import { SVGProps } from 'react';

const SvgRssSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 6a19.013 19.013 0 0 1 19 19M7 15a10 10 0 0 1 10 10"
    />
    <path fill="#101828" d="M7 26.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default SvgRssSimple;
