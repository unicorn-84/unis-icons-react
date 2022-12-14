import * as React from 'react';
import { SVGProps } from 'react';

const SvgRobot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 7H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.5 18h-9a2.5 2.5 0 0 0 0 5h9a2.5 2.5 0 0 0 0-5Zm-2 0v5m-5-5v5M16 7V2"
    />
    <path
      fill="#101828"
      d="M10.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgRobot;
