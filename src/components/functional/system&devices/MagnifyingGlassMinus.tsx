import * as React from 'react';
import { SVGProps } from 'react';

const SvgMagnifyingGlassMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 14.5h8m-4 10.5C20.299 25 25 20.299 25 14.5S20.299 4 14.5 4 4 8.701 4 14.5 8.701 25 14.5 25Zm7.425-3.075L28 28"
    />
  </svg>
);

export default SvgMagnifyingGlassMinus;
