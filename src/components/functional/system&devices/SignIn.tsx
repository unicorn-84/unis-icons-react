import * as React from 'react';
import { SVGProps } from 'react';

const SvgSignIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.75 21.25 17 16l-5.25-5.25M3 16h14m0-11h7a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-7"
    />
  </svg>
);

export default SvgSignIn;
