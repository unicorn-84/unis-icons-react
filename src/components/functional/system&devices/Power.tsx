import * as React from 'react';
import { SVGProps } from 'react';

const SvgPower = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 6v9.5m6-8.725a11 11 0 1 1-12 0"
    />
  </svg>
);

export default SvgPower;
