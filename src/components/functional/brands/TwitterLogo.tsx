import * as React from 'react';
import { SVGProps } from 'react';

const TwitterLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 11c0-2.75 2.313-5.038 5.063-5a5 5 0 0 1 4.524 3H30l-4.038 4.037A15.988 15.988 0 0 1 10 28c-4 0-5-1.5-5-1.5S9 25 11 22c0 0-8-4-6-15 0 0 5 5 11 6v-2Z"
    />
  </svg>
);

export default TwitterLogo;