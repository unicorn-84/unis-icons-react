import * as React from 'react';
import { SVGProps } from 'react';

const SvgBroadcast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6.363 2.363A8.952 8.952 0 0 1 7.712 19.5a8.95 8.95 0 0 1 0-7 8.95 8.95 0 0 1 1.925-2.863m12.726 0a8.948 8.948 0 0 1 1.925 2.863 8.948 8.948 0 0 1 0 7 8.95 8.95 0 0 1-1.925 2.863M6.1 25.9a14.113 14.113 0 0 1-3-4.45 14.05 14.05 0 0 1 0-10.9 14.112 14.112 0 0 1 3-4.45m19.8 0a14.112 14.112 0 0 1 3 4.45 14.05 14.05 0 0 1 0 10.9 14.113 14.113 0 0 1-3 4.45"
    />
  </svg>
);

export default SvgBroadcast;
