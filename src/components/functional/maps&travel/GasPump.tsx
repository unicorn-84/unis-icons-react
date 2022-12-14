import * as React from 'react';
import { SVGProps } from 'react';

const SvgGasPump = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 27V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v20M4 27h20m-3-13h3a2 2 0 0 1 2 2v5a2 2 0 0 0 4 0V10.825a2.013 2.013 0 0 0-.587-1.412L27 7m-10 7h-6"
    />
  </svg>
);

export default SvgGasPump;
