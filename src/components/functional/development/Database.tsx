import * as React from 'react';
import { SVGProps } from 'react';

const SvgDatabase = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 16c6.075 0 11-2.686 11-6s-4.925-6-11-6S5 6.686 5 10s4.925 6 11 6Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10v6c0 3.313 4.925 6 11 6s11-2.688 11-6v-6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 16v6c0 3.313 4.925 6 11 6s11-2.688 11-6v-6"
    />
  </svg>
);

export default SvgDatabase;
