import * as React from 'react';
import { SVGProps } from 'react';

const SvgBatteryCharging = (props: SVGProps<SVGSVGElement>) => (
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
      d="M31 12v8m-4 3V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.5 21 2-5h-4l2-5"
    />
  </svg>
);

export default SvgBatteryCharging;
