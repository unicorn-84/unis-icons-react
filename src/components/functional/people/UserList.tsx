import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserList = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm9-8h12m-12 6h12m-9 6h9"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.25 24a8 8 0 0 1 15.5 0"
    />
  </svg>
);

export default SvgUserList;
