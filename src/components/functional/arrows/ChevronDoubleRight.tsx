import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDoubleRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 6 10 10L7 26M17 6l10 10-10 10"
    />
  </svg>
);

export default SvgChevronDoubleRight;
