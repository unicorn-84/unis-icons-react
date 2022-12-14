import * as React from 'react';
import { SVGProps } from 'react';

const SvgWifiLow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.612 20.762a6.337 6.337 0 0 1 8.775 0"
    />
    <path fill="#101828" d="M16 26.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default SvgWifiLow;
