import * as React from 'react';
import { SVGProps } from 'react';

const SvgAirplaneTilt = (props: SVGProps<SVGSVGElement>) => (
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
      d="m26.188 10.05-4.2 3.95 4 11-3 3-5.976-8.75L13.988 22v3l-3 3-1.775-5.238L3.988 21l3-3h3l3-3-9-6 3-3 11 4 3.962-4.188-.087.063a3.005 3.005 0 0 1 4.25 4.25l.075-.075Z"
    />
  </svg>
);

export default SvgAirplaneTilt;
