import * as React from 'react';
import { SVGProps } from 'react';

const SvgFootball = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23.075 23.075c-5.2 5.188-12.4 4.775-15.875 4.188A3 3 0 0 1 4.737 24.8c-.587-3.475-1-10.675 4.188-15.875 5.188-5.2 12.4-4.775 15.875-4.188A3 3 0 0 1 27.262 7.2c.588 3.475 1 10.675-4.187 15.875ZM20 12l-8 8m3.588-7.238 3.65 3.65m-6.476-.824 3.65 3.65m2.113-14.713 8.95 8.95m-22.95 5.05 8.95 8.95"
    />
  </svg>
);

export default SvgFootball;
