import * as React from 'react';
import { SVGProps } from 'react';

const Alien = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 14c0 6.075-7 15-11 15S5 20.075 5 14a11 11 0 1 1 22 0v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 18.5a4 4 0 0 1-4-4V14a1 1 0 0 1 1-1 4 4 0 0 1 4 4v.5a1 1 0 0 1-1 1v0Zm9-5.5a1 1 0 0 1 1 1v.5a4 4 0 0 1-4 4 1 1 0 0 1-1-1V17a4 4 0 0 1 4-4Zm-8 10h4"
    />
  </svg>
);

export default Alien;
