import * as React from 'react';
import { SVGProps } from 'react';

const SvgVoicemail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm18 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM7 22h18"
    />
  </svg>
);

export default SvgVoicemail;
