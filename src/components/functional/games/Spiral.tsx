import * as React from 'react';
import { SVGProps } from 'react';

const Spiral = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 17a1 1 0 0 1 1 1 2 2 0 0 1-2 2 2.986 2.986 0 0 1-3-3 4 4 0 0 1 4-4 5 5 0 0 1 5 5 6 6 0 0 1-6 6 7 7 0 0 1-7-7 8.013 8.013 0 0 1 8-8 9 9 0 0 1 9 9 10 10 0 0 1-10 10A11 11 0 0 1 5 17 12 12 0 0 1 17 5a13 13 0 0 1 13 13"
    />
  </svg>
);

export default Spiral;
