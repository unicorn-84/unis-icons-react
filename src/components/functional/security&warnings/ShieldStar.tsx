import * as React from 'react';
import { SVGProps } from 'react';

const SvgShieldStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 14.338V7a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v7.338c0 10.5-8.913 13.975-10.688 14.562a.9.9 0 0 1-.625 0C13.913 28.313 5 24.837 5 14.338ZM16 12v5m-4.75-1.55L16 17m-2.937 4.05L16 17m2.938 4.05L16 17m4.75-1.55L16 17"
    />
  </svg>
);

export default SvgShieldStar;
