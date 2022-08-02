import * as React from 'react';
import { SVGProps } from 'react';

const Polygon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm15 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6-17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-2.9-3.788-5.2-1.425m-5.125 1.225-5.55 4.976m.2 3.787 10.15 7.45M21 23.175l4-11.35"
    />
  </svg>
);

export default Polygon;
