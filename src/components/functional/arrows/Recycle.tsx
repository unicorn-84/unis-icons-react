import * as React from 'react';
import { SVGProps } from 'react';

const SvgRecycle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19 29-3-3 3-3m5.325-13.6-1.1 4.1-4.088-1.1m-9.262 5.2-1.1-4.1-4.1 1.1"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 26h11a2 2 0 0 0 1.725-3l-2.988-5.175M8.775 13.5l-5.5 9.5A2 2 0 0 0 5 26h6m12.225-12.5-5.5-9.5a1.988 1.988 0 0 0-3.45 0l-3 5.175"
    />
  </svg>
);

export default SvgRecycle;
