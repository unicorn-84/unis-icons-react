import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpade = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 3s12.5 8 12.5 14.5a6.499 6.499 0 0 1-10.675 4.988L20 29h-8l2.175-6.512A6.5 6.5 0 0 1 3.5 17.5C3.5 11 16 3 16 3Z"
    />
  </svg>
);

export default SvgSpade;
