import * as React from 'react';
import { SVGProps } from 'react';

const House = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 26v-6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V14.437a1.038 1.038 0 0 1 .325-.737l10-9.087a1 1 0 0 1 1.35 0l10 9.087a1.037 1.037 0 0 1 .325.738V26a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
    />
  </svg>
);

export default House;
