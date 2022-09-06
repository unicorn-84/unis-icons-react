import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrain = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 16h21m-21-7h21M12 26l-3 4m11-4 3 4m.5-26h-15a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3ZM16 9v7"
    />
    <path
      fill="#101828"
      d="M10.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgTrain;
