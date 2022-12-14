import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#2E3B4E"
      d="M35.984 6H12.016A6.016 6.016 0 0 0 6 12.016v23.968A6.016 6.016 0 0 0 12.016 42h23.968A6.016 6.016 0 0 0 42 35.984V12.016A6.015 6.015 0 0 0 35.984 6Zm-.529 27.558c0 1.049-.85 1.898-1.898 1.898h-19.11a1.898 1.898 0 0 1-1.899-1.898V14.447c0-1.049.85-1.899 1.899-1.899h19.11c1.048 0 1.898.85 1.898 1.899v19.11Z"
    />
    <path
      fill="#2E3B4E"
      d="M20.18 28.91c-.602 0-1.09-.491-1.09-1.096v-7.628c0-.605.488-1.095 1.09-1.095h7.64c.604 0 1.09.49 1.09 1.095v7.628c0 .605-.486 1.096-1.09 1.096h-7.64Z"
    />
  </svg>
);

export default SvgSquareIcon;
