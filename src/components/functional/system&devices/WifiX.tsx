import * as React from 'react';
import { SVGProps } from 'react';

const SvgWifiX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.612 20.762a6.337 6.337 0 0 1 8.775 0M28 7l-6 6m6 0-6-6M3.138 12.275A18.2 18.2 0 0 1 16 7c.669 0 1.336.037 2 .113M7.375 16.512A12.225 12.225 0 0 1 16 13c.67-.003 1.34.05 2 .162"
    />
    <path fill="#101828" d="M16 26.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default SvgWifiX;
