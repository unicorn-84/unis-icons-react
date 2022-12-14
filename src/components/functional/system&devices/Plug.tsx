import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlug = (props: SVGProps<SVGSVGElement>) => (
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
      d="m26.5 16.5-7.175 7.175a3.987 3.987 0 0 1-5.65 0l-5.35-5.35a3.988 3.988 0 0 1 0-5.65L15.5 5.5M11 21l-7 7M18 8l5-5m6 6-5 5m4 4L14 4"
    />
  </svg>
);

export default SvgPlug;
