import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpinner = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 4v4m8.488-.488-2.825 2.826M28 16h-4m.488 8.488-2.825-2.825M16 28v-4m-8.487.488 2.825-2.825M4 16h4m-.487-8.488 2.825 2.826"
    />
  </svg>
);

export default SvgSpinner;
