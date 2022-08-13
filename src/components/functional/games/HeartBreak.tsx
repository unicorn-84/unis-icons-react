import * as React from 'react';
import { SVGProps } from 'react';

const HeartBreak = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.787 8.525A6.5 6.5 0 0 0 3.5 11.5C3.5 20 16 27 16 27s12.5-7 12.5-15.5a6.5 6.5 0 0 0-11.1-4.6l-4 4 4 4-2 2"
    />
  </svg>
);

export default HeartBreak;
