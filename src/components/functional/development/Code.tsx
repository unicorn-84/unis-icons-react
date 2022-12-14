import * as React from 'react';
import { SVGProps } from 'react';

const SvgCode = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 11-6 5 6 5m16-10 6 5-6 5M20 5l-8 22"
    />
  </svg>
);

export default SvgCode;
