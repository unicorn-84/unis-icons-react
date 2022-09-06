import * as React from 'react';
import { SVGProps } from 'react';

const SvgVibrate = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 25V7a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Zm4-14v10m4-8v6M6 11v10m-4-8v6"
    />
  </svg>
);

export default SvgVibrate;
