import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 5 20 22m-1.762-1.937A10.011 10.011 0 0 1 20 26H9a7 7 0 1 1 0-14c.586 0 1.17.071 1.738.213m3.337-4.275a10 10 0 0 1 13.388 14.725"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 16a9.876 9.876 0 0 1 1.387-5.075"
    />
  </svg>
);

export default SvgCloudSlash;
