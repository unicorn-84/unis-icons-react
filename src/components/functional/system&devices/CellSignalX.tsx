import * as React from 'react';
import { SVGProps } from 'react';

const SvgCellSignalX = (props: SVGProps<SVGSVGElement>) => (
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
      d="m28 13-6 6m6 0-6-6m3 8.662V26a1 1 0 0 1-1 1H3.412a1 1 0 0 1-.7-1.713L23.287 4.712a1 1 0 0 1 1.713.7v4.925"
    />
  </svg>
);

export default SvgCellSignalX;
