import * as React from 'react';
import { SVGProps } from 'react';

const SvgBluetoothConnected = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 4 8 6-8 6V4Zm0 12 8 6-8 6V16Zm-8-6 8 6m-8 6 8-6"
    />
    <path
      fill="#101828"
      d="M6.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm18 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default SvgBluetoothConnected;
