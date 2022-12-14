import * as React from 'react';
import { SVGProps } from 'react';

const SvgLightningSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 5 20 22m-5.525-6.075L12 30l2-10-8-3 5.525-5.925m2.738-2.938L20 2l-2 10 8 3-2.787 2.988"
    />
  </svg>
);

export default SvgLightningSlash;
