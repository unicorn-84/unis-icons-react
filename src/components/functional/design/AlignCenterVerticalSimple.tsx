import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlignCenterVerticalSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 5h-8a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm6 11h-5m-10 0H6"
    />
  </svg>
);

export default SvgAlignCenterVerticalSimple;
