import * as React from 'react';
import { SVGProps } from 'react';

const SvgPassword = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 7v18m8-13v4m-3.8-1.238L13 16m-2.35 3.238L13 16m2.35 3.238L13 16m3.8-1.238L13 16m12-4v4m-3.8-1.238L25 16m-2.35 3.238L25 16m2.35 3.238L25 16m3.8-1.238L25 16"
    />
  </svg>
);

export default SvgPassword;
