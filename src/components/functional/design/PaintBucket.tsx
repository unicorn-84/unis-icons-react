import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaintBucket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.875 15.438 15.85 27.462a2.013 2.013 0 0 1-2.825 0L2.412 16.85a2.012 2.012 0 0 1 0-2.825L14.438 2l13.437 13.438Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM26 25.5c0-2.5 2.5-5 2.5-5s2.5 2.5 2.5 5a2.5 2.5 0 0 1-5 0v0ZM13.737 12.738l-9-9"
    />
  </svg>
);

export default SvgPaintBucket;
