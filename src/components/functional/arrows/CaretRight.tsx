import * as React from 'react';
import { SVGProps } from 'react';

const SvgCaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#101828"
      d="m24.28 17.506-10.964 9.592C12.024 28.23 10 27.31 10 25.592V6.408a2 2 0 0 1 3.318-1.506l10.96 9.592a2 2 0 0 1 0 3.012h.002Z"
    />
  </svg>
);

export default SvgCaretRight;
