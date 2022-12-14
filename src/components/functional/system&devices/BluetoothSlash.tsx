import * as React from 'react';
import { SVGProps } from 'react';

const SvgBluetoothSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 22 8-6M6 5l20 22M15 8.95V4l8 6-4.188 3.137m3.263 9.551L15 28V16l3.15 2.363"
    />
  </svg>
);

export default SvgBluetoothSlash;
