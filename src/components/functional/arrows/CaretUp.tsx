import * as React from 'react';
import { SVGProps } from 'react';

const SvgCaretUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.985 9.202 9.593 10.964c1.131 1.293.212 3.317-1.506 3.317H7.887a2 2 0 0 1-1.506-3.319l9.593-10.96a2 2 0 0 1 3.011 0v-.002Z"
    />
  </svg>
);

export default SvgCaretUp;
