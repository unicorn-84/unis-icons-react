import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlagCheckered = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 27V6m0 15c8-6 14 6 22 0V6c-8 6-14-6-22 0"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27 13.262c-8 6-14-6-22 0m7.5-8.587v15m7-12.35v15"
    />
  </svg>
);

export default SvgFlagCheckered;
