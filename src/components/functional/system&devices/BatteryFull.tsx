import * as React from 'react';
import { SVGProps } from 'react';

const BatteryFull = (props: SVGProps<SVGSVGElement>) => (
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
      d="M31 12v8m-4 3V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2Zm-9.2-2V11m-4.6 10V11M8.6 21V11m13.8 10V11"
    />
  </svg>
);

export default BatteryFull;