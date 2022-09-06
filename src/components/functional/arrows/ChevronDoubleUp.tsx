import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDoubleUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 26 10-10 10 10M6 16 16 6l10 10"
    />
  </svg>
);

export default SvgChevronDoubleUp;
