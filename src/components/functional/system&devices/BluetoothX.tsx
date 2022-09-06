import * as React from 'react';
import { SVGProps } from 'react';

const SvgBluetoothX = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 16 8 6-8 6V16Zm-8-6 8 6m-8 6 8-6m14-9-6 6m6 0-6-6m-4 6-4 3V4l4 3"
    />
  </svg>
);

export default SvgBluetoothX;
