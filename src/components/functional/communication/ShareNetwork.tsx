import * as React from 'react';
import { SVGProps } from 'react';

const SvgShareNetwork = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm14 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-3.363-1.838-7.275 4.675m0 4.326 7.275 4.674"
    />
  </svg>
);

export default SvgShareNetwork;
