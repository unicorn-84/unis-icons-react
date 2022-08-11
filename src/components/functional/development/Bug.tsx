import * as React from 'react';
import { SVGProps } from 'react';

const Bug = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 16v12m14.5-12h-29M26 18a10 10 0 0 1-20 0v-4a10 10 0 1 1 20 0v4Zm2.988 5.5L25.4 21.425M28.988 8.5 25.4 10.575M3.013 8.5 6.6 10.575M3.013 23.5 6.6 21.425"
    />
  </svg>
);

export default Bug;
