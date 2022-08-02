import * as React from 'react';
import { SVGProps } from 'react';

const PhoneX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.563 15.6a10.449 10.449 0 0 0 4.874 4.862 1 1 0 0 0 .988-.075L20.55 18.3a.988.988 0 0 1 .95-.088l5.85 2.513a.988.988 0 0 1 .6 1.037A6 6 0 0 1 22 27 17 17 0 0 1 5 10a6 6 0 0 1 5.238-5.95.988.988 0 0 1 1.037.6l2.512 5.862a1 1 0 0 1-.075.938l-2.087 3.175a1 1 0 0 0-.063.975v0ZM20 6l6 6m0-6-6 6"
    />
  </svg>
);

export default PhoneX;