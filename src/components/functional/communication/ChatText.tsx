import * as React from 'react';
import { SVGProps } from 'react';

const SvgChatText = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.75 25.163-4.112 3.45A1 1 0 0 1 4 27.85V8a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10.212l-.462.163ZM12 14h8m-8 4h8"
    />
  </svg>
);

export default SvgChatText;
