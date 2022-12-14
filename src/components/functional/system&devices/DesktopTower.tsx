import * as React from 'react';
import { SVGProps } from 'react';

const SvgDesktopTower = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 23H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h10m0 17H8M26 9h-4m4 4h-4m7-8H19a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM11 23v4"
    />
    <path fill="#101828" d="M24 24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default SvgDesktopTower;
