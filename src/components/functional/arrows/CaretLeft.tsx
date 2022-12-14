import * as React from 'react';
import { SVGProps } from 'react';

const SvgCaretLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.682 14.497 10.964-9.592c1.292-1.132 3.316-.212 3.316 1.506v19.184a2 2 0 0 1-3.318 1.506l-10.96-9.592a2 2 0 0 1 0-3.012h-.002Z"
    />
  </svg>
);

export default SvgCaretLeft;
