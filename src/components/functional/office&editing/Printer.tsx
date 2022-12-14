import * as React from 'react';
import { SVGProps } from 'react';

const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#printer_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 10V5h16v5m0 9H8v8.5h16V19Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 22H3.5V12c0-1.1.975-2 2.162-2h20.675c1.188 0 2.163.9 2.163 2v10H24"
      />
      <path fill="#101828" d="M23.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </g>
    <defs>
      <clipPath id="printer_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPrinter;
