import * as React from 'react';
import { SVGProps } from 'react';

const SvgStumbleUponIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#EB4823"
      fillRule="evenodd"
      d="M45 24c0 11.598-9.402 21-21 21S3 35.598 3 24 12.402 3 24 3s21 9.402 21 21Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M24 13.5c-3.333 0-6.035 2.727-6.035 6.092v8.656c0 .797-.64 1.443-1.43 1.443-.79 0-1.43-.646-1.43-1.443v-3.847H10.5v4.007c0 3.365 2.702 6.092 6.035 6.092 3.334 0 6.036-2.727 6.036-6.092v-8.816c0-.797.64-1.443 1.429-1.443.79 0 1.43.646 1.43 1.443v1.763l2.132 1.168 2.473-1.168v-1.763c0-3.365-2.702-6.092-6.035-6.092Zm1.43 10.98v3.928c0 3.365 2.701 6.092 6.035 6.092 3.333 0 6.035-2.727 6.035-6.092v-3.847h-4.606v3.847c0 .797-.64 1.443-1.43 1.443a1.436 1.436 0 0 1-1.429-1.443v-3.927l-2.7.882-1.906-.882Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgStumbleUponIcon;
