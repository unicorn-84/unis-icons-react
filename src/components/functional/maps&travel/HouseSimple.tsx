import * as React from 'react';
import { SVGProps } from 'react';

const SvgHouseSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="m26.675 13.7-10-9.087a1 1 0 0 0-1.35 0l-10 9.087a1.037 1.037 0 0 0-.325.738V26a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14.437a1.035 1.035 0 0 0-.325-.737v0Z"
    />
  </svg>
);

export default SvgHouseSimple;
