import * as React from 'react';
import { SVGProps } from 'react';

const ShieldChevron = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 14.338V7a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v7.338c0 10.5-8.913 13.975-10.688 14.562a.9.9 0 0 1-.625 0C13.913 28.313 5 24.837 5 14.338Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25.3 21.512 16 15l-9.3 6.512"
    />
  </svg>
);

export default ShieldChevron;