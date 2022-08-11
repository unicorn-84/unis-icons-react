import * as React from 'react';
import { SVGProps } from 'react';

const BracketsRound = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 5S4 8 4 16s5 11 5 11M23 5s5 3 5 11-5 11-5 11"
    />
  </svg>
);

export default BracketsRound;