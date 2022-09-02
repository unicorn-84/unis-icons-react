import * as React from 'react';
import { SVGProps } from 'react';

const SvgLyftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#FF00BF"
      d="M8.001 13.07h4.863v13.044c0 2.07.937 3.3 1.7 3.813-.794.694-3.2 1.306-5.013-.175-1.063-.875-1.55-2.331-1.55-3.687V13.07ZM38.37 23.916V22.54h1.487v-4.8h-1.631a6.414 6.414 0 0 0-6.269-5.044 6.424 6.424 0 0 0-6.419 6.419v11.2c1 .143 2.213-.02 3.232-.875 1.069-.875 1.55-2.325 1.55-3.688v-.419h2.425v-4.8H30.32v-1.456c0-2.162 3.262-2.162 3.262 0v4.819a6.424 6.424 0 0 0 6.419 6.419v-4.782a1.626 1.626 0 0 1-1.631-1.618Zm-18.394-6.188v7.063c0 .962-1.488.962-1.488 0v-7.063h-4.8v8.294c0 1.487.5 3.375 2.813 3.994 2.313.612 3.637-.663 3.637-.663-.13.838-.906 1.456-2.18 1.581-.97.1-2.2-.225-2.813-.487v4.394c1.569.468 3.218.612 4.85.293 2.944-.568 4.8-3.025 4.8-6.3V17.696h-4.819v.031Z"
    />
  </svg>
);

export default SvgLyftIcon;
