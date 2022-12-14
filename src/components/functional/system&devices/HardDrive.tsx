import * as React from 'react';
import { SVGProps } from 'react';

const SvgHardDrive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 9H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Z"
    />
    <path fill="#101828" d="M23.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

export default SvgHardDrive;
