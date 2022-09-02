import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlugsConnected = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 22-7 7M29 3l-7 7m-5.618-1.38-7.76 7.76a3 3 0 0 0 0 4.243l2.758 2.758a3 3 0 0 0 4.242 0l7.76-7.761a3 3 0 0 0 0-4.243L20.626 8.62a3 3 0 0 0-4.243 0ZM11.5 11.5l9 9M28 20l-3-1M7 13l-3-1m8-8 1 3m6 18 1 3"
    />
  </svg>
);

export default SvgPlugsConnected;
