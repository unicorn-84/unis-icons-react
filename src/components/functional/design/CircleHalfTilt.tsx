import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleHalfTilt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Zm8.487-20.488L7.512 24.487M16 16v12m8-20v16.95M20 12v15.313M12 20v7.313"
    />
  </svg>
);

export default SvgCircleHalfTilt;
