import * as React from 'react';
import { SVGProps } from 'react';

const SvgDoor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 28h26M7 28V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v23"
    />
    <path fill="#101828" d="M19.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default SvgDoor;
