import * as React from 'react';
import { SVGProps } from 'react';

const SvgCellSignalNone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 5.412V26a1 1 0 0 1-1 1H3.412a1 1 0 0 1-.7-1.713L23.287 4.712a1 1 0 0 1 1.713.7Z"
    />
  </svg>
);

export default SvgCellSignalNone;
