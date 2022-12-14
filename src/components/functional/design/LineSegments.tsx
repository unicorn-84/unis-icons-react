import * as React from 'react';
import { SVGProps } from 'react';

const SvgLineSegments = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 28a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-16.425 4.637-4.15 7.726m11.45-4.488-3.75-3.75m11.45-4.488-4.15 7.726"
    />
  </svg>
);

export default SvgLineSegments;
