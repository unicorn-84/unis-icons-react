import * as React from 'react';
import { SVGProps } from 'react';

const SvgSoccerBall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 10.75-4.988 3.625 1.9 5.875h6.175l1.9-5.875L16 10.75ZM16 8v2.75m4.375-5.925L16 8l-4.375-3.175m-3.238 8.7 2.625.85M6.725 8.388l1.662 5.137-4.375 3.187m7.288 5.763 1.612-2.225m-7.024 2.225H11.3l1.675 5.137m7.725-5.137-1.613-2.225m-.062 7.363 1.675-5.138h5.413m-2.5-8.95-2.625.85m7 2.337-4.375-3.187 1.662-5.137"
    />
  </svg>
);

export default SvgSoccerBall;
